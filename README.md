# React Native Development Setup Guide

## System Requirements

- **CPU**: Intel Core i5 or higher
- **RAM**: 8 GB or more
- **OS**: Windows 10 or higher

## Installation Instructions

### 1. Install Node.js
Download and install Node.js from the [official website](https://nodejs.org/). Ensure that you install the LTS version.

### 2. Install React Native CLI
Open your command prompt and run the following command:
```
npm install -g react-native-cli
```
### 3. Install Android Studio
Download and install Android Studio from the [official website](https://developer.android.com/studio). Follow the setup instructions and ensure you install the following components:
- Android SDK
- Android SDK Platform
- Android Virtual Device

### 4. Set Up the Android Environment
Set up your environment variables:
1. Open `Control Panel` > `System and Security` > `System` > `Advanced system settings` > `Environment Variables`.
2. Under `System variables`, click `New` and add `ANDROID_HOME` with the path to your Android SDK (e.g., `C:\\Users\\YourName\\AppData\\Local\\Android\\Sdk`).
3. Edit the `Path` variable and add the following paths:
    - `C:\\Users\\YourName\\AppData\\Local\\Android\\Sdk\\platform-tools`
    - `C:\\Users\\YourName\\AppData\\Local\\Android\\Sdk\\tools`

## Configuration Steps

### 1. Configure the React Native CLI
Run the following command to configure the React Native CLI:
```
react-native doctor
```

Follow the instructions provided to complete the setup.

## Project Creation

### 1. Create a New Project
Run the following command to create a new React Native project:

```
npx react-native init MyNewProject
```
Navigate into your project directory:

```
cd MyNewProject
```


## Running the Project

### 1. Start the Metro Bundler
Run the following command to start the Metro Bundler:
```
npx react-native start
```

### 2. Run the Project on an Android Device Simulator
In a new command prompt window, run:
```
npx react-native run-android
```

## Troubleshooting

### Common Issues and Solutions

- **Metro Bundler not starting**: Ensure you are in the project directory and run `npx react-native start` again.
- **Android build failed**: Check that your environment variables are set correctly and that all necessary Android components are installed.
- **Debugging**: Use the Chrome Developer Tools for debugging JavaScript code. Press `Ctrl + M` in the emulator and select `Debug JS Remotely`.

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)
- [React Native Express](http://www.reactnativeexpress.com/)
"""
