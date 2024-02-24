export interface cameraOptions {
    cameraType: 'back' | 'front';
    flashMode: "auto" | "off" | "on" | undefined;
    optureSound: boolean;
    fps: number;
    hdr: boolean;
    quality: number;
}
