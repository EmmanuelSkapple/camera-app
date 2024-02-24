import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevice,
  useCameraFormat,
  CameraCaptureError
} from "react-native-vision-camera";
import { mainColors } from "../../utils/colors";
import HeaderScreen from "../components/atoms/headerScreen";
import ButtonCamera from "../components/atoms/buttonCamera";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routers/routeMain";
import CameraControls from "../components/molecules/cameraControls";
import { cameraOptions } from "../../types/cameraTypes";
import OptionsFooterCamera from "../components/molecules/optionsFooterCamera";
import ModalPreview from "../components/molecules/modalPreview";
import AnimationCamera from "../components/atoms/animationCamera";
import { saveNewPhoto } from "../services/api";
import ButtonGallery from "../components/atoms/buttonGallery";
import * as ImagePicker from "expo-image-picker";

type CameracreenProps = NativeStackNavigationProp<RootStackParamList, "Camera">;

const CameraScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState("");
  const [isVideo, setIsVideo] = useState(false);
  const [recording, setRecording] = useState(false);
  const [initAnimation, setInitAnimation] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [options, setOptions] = useState<cameraOptions>({
    cameraType: "back",
    flashMode: "off",
    hdr: false,
    fps: 60,
    optureSound: true,
    quality: 720
  });
  const [hasPermission, setHasPermission] =
    useState<CameraPermissionStatus>("not-determined");
  const cameraRef = useRef<Camera>(null);

  const device = useCameraDevice(`${options.cameraType}`);

  const getVideoHeight = (quality: number) => {
    switch (quality) {
      case 720:
        return 1280;
      case 1080:
        return 1920;
      default:
        return 1280;
    }
  };

  const format = useCameraFormat(device, [
    { videoAspectRatio: 16 / 9 },
    {
      videoResolution: {
        width: options.quality,
        height: getVideoHeight(options.quality)
      }
    },
    { fps: options.fps }
  ]);

  const navigation = useNavigation<CameracreenProps>();

  const getPhoto = async () => {
    try {
      if (cameraRef.current != null) {
        const file = await cameraRef.current.takePhoto({
          flash: options.flashMode,
          enableShutterSound: options.optureSound
        });
        setUrl(`file://${file.path}`);
      }
      setModalVisible(true);
      setInitAnimation(false);
      setIsVideo(false);
    } catch (e) {
      if (e instanceof CameraCaptureError) {
        switch (e.code) {
          case "capture/file-io-error":
            console.error("Failed to write photo to disk!");
            break;
          default:
            console.error(e);
            break;
        }
      }
    }
  };

  const getVideo = async () => {
    try {
      if (cameraRef.current != null) {
        setRecording(true);
        cameraRef.current.startRecording({
          onRecordingFinished: (video: any) => {
            console.log("Video taken", video);
            setModalVisible(true);
            setIsVideo(true);
            setUrl(`file://${video.path}`);
            setRecording(false);
            setSeconds(0);
          },
          onRecordingError: (error: any) => {
            console.error(error);
            setRecording(false);
            setSeconds(0);
          }
        });
      }
    } catch (e) {
      if (e instanceof CameraCaptureError) {
        switch (e.code) {
          case "capture/file-io-error":
            console.error("Failed to write video to disk!");
            break;
          default:
            console.error(e);
            break;
        }
      }
    }
  };

  useEffect(() => {
    let intervalo = null as any;
    if (recording) {
      intervalo = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!recording && seconds !== 0) {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [recording, seconds]);

  const stopRecording = async () => {
    if (cameraRef.current != null) {
      cameraRef.current.stopRecording();
      setRecording(false);
    }
  };

  const setPreviewAnimation = () => {
    setInitAnimation(true);
    getPhoto();
  };

  const openImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1
    });
    if (!result.canceled) {
      setUrl(result.assets[0].uri);
      setModalVisible(true);
    }
  };

  const saveImage = () => {
    saveNewPhoto(url);
    setModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
      setHasPermission(permission);
    })();
  }, []);

  if (hasPermission !== "granted") {
    return <Text>No access to camera</Text>;
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={mainColors.primary} />
        <Text>Searching camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderScreen backAction={() => navigation.goBack()} />
      <View style={styles.cameraContainer}>
        {initAnimation && <AnimationCamera />}
        <CameraControls setOptions={setOptions} options={options} />
        <View style={styles.footer}>
          <OptionsFooterCamera setOptions={setOptions} options={options} />
          <ButtonGallery onPress={() => openImagePicker()} />
          <ButtonCamera
            onPress={() =>
              recording ? stopRecording() : setPreviewAnimation()
            }
            onLongPress={() => getVideo()}
            animated={false}
            iconName={recording ? "square" : "circle"}
            iconColor={recording ? mainColors.primary : mainColors.secondary}
            iconSize={recording ? 30 : 50}
          />
        </View>
      </View>
      <ModalPreview
        saveImage={saveImage}
        url={url}
        isVideo={isVideo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        format={format}
        photo={true}
        video={true}
        audio={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    backgroundColor: mainColors.background
  },
  cameraContainer: {
    position: "relative",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 20,
    zIndex: 1
  }
});

export default CameraScreen;
