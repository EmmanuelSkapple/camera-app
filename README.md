
# Camera Gallery App

Esta es una aplicación desarrollada en React Native con Expo, diseñada para demostrar el uso de la cámara y el almacenamiento de imágenes. Implementa `react-native-vision-camera` y utiliza AsyncStorage para guardar imágenes. La app incluye funcionalidades como captura de imágenes, visualización de galería y compartición de imágenes, aprovechando las APIs de `expo-av` y `expo-sharing`.

## Inicio Rápido

Este proyecto está construido con React Native y Expo. Para ejecutar la aplicación, sigue estos pasos:

### Requisitos Previos

- Node.js
- npm o Yarn
- Expo CLI
- Android Studio o Xcode (para simulación)

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/EmmanuelSkapple/camera-app.git
```
2. Instala las dependencias:
```bash
npm install
```
o
```bash
yarn install
```
3. Ejecuta el comando de preconstrucción de Expo para configurar `react-native-vision-camera`:
```bash
expo prebuild
```
4. Inicia la aplicación en un dispositivo o emulador:
```bash
npx expo run:android
```
o
```bash
npx expo run:ios
```

## Funcionalidades de la Aplicación

### Galería de Imágenes
Visualiza las imágenes capturadas y guardadas en AsyncStorage.

### Cámara
Utiliza la cámara para capturar nuevas imágenes. Implementa `react-native-vision-camera` para una experiencia de cámara avanzada.

## Controles Dentro de la Cámara

La aplicación permite configurar varios ajustes de la cámara para personalizar la experiencia de captura:

- **Calidad de Imagen:** Puedes elegir entre 720p o 1080p para las fotos y videos capturados.
- **FPS (Cuadros por Segundo):** Opciones disponibles son 30fps o 60fps, permitiendo capturas más suaves a mayor FPS.
- **Cámara:** Selección entre la cámara trasera o frontal, según la necesidad del usuario.
- **Flash:** Puede ser activado (on) o desactivado (off), ideal para condiciones de baja luz.
- **HDR (High Dynamic Range):** Actívalo (true) para mejorar la calidad de las fotos capturadas en condiciones de contraste alto o desactívalo (false).
- **Sonido del Obturador:** Puede habilitarse (true) para simular el sonido de una cámara real al tomar una foto, o deshabilitarse (false) para capturas silenciosas.
- **Abrir Galería del Celular:** Permite acceder rápidamente a la galería de imágenes del dispositivo para seleccionar fotos existentes.
- **Grabar con LongPress / Tomar Fotos con OnPress:** Personaliza la interacción con el botón de captura para iniciar la grabación de video con una pulsación larga o tomar fotos con un toque corto.

Estos controles están diseñados para ofrecer una experiencia de captura flexible y adaptada a las preferencias de cada usuario.


### Compartir
Permite compartir las imágenes capturadas utilizando `expo-sharing`.

## Próximos Pasos

- Guardar las imágenes en una base de datos externa para persistencia a largo plazo.
- Conectar con una API para añadir funcionalidades adicionales, como reconocimiento de imagen.
- Implementar herramientas de edición de imágenes para permitir a los usuarios modificar sus capturas antes de guardarlas o compartirlas.

## Contribuyendo

Los Pull Requests son bienvenidos. Para cambios mayores, por favor abre un issue primero para discutir qué te gustaría cambiar.

Asegúrate de actualizar las pruebas según corresponda.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
