
---

# Setting Up and Testing Mobile Development Environment

## Objective

Mobile development demands more computational resources compared to web development. To ensure a smooth development experience, this project uses the **Expo Framework for React Native**, which simplifies mobile app development and testing.

The goal of this task is to set up the development environment and configure **Expo Go** on a physical device for testing React Native applications.

---

## Prerequisites

Before proceeding, ensure you already have the following installed and configured:

* [Node.js LTS](https://nodejs.org/)
* [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
* A compatible operating system: **macOS, Linux, or Windows**
* A physical mobile device (**Android** or **iOS**)

---

## Why Expo Go?

Unlike web development, mobile development often requires emulators to test apps. However, keeping up with the ever-evolving mobile ecosystem (e.g., iPhone 7 → iPhone 16 Pro Max, and the vast range of Android devices) can be costly in terms of hardware and performance requirements.

**Expo Go** provides a streamlined solution:

* Run and test React Native applications directly on your physical device.
* Avoid complex emulator setups.
* Seamlessly support both **iOS** and **Android** platforms.

---

## Steps to Install Expo Go

1. Visit the official Expo Go homepage: [https://expo.dev/go](https://expo.dev/go)
2. Select the latest **SDK version**.
3. Install Expo Go on your device:

   * **Android**: Install via the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   * **iOS**: Install via the [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)
4. Open the **Expo Go** app on your device.
5. Sign up for a new account or log in with an existing one.

---

## Setup Documentation

### Process Overview

* Installed Node.js LTS and confirmed version using:

  ```bash
  node -v
  ```
* Installed VS Code as the primary IDE.
* Downloaded and installed **Expo Go** on a physical device.
* Created an Expo account and logged in successfully.

### Common Challenges

* Slow installation due to network issues.
* Device compatibility problems with older Android/iOS versions.
* Login/verification delays during Expo account setup.

### Current Status

✅ Environment set up and ready for React Native development.

---

## Next Steps

* Create and run a sample React Native project using **Expo CLI**.
* Test the app directly on the Expo Go client.
* Document any troubleshooting steps for future reference.
