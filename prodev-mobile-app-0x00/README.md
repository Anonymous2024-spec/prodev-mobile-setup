# Setting Up and Testing Your Mobile Development Environment

## Objective

Mobile development demands more computational resources compared to web development. To ensure a smooth development experience, this project uses the **Expo Framework for React Native**, which simplifies mobile app development and testing.

The goal of this task is to set up the development environment and configure **Expo Go** on a physical device for testing React Native applications.

---

## Prerequisites

- [Node.js LTS](https://nodejs.org/)
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- A compatible operating system: **macOS, Linux, or Windows**
- A physical mobile device (**Android** or **iOS**)

---

## Why Expo Go?

Emulators can be resource-intensive and expensive to maintain across devices. **Expo Go** allows developers to:

- Run React Native apps directly on their physical devices.
- Avoid complex emulator setup.
- Test on both **iOS** and **Android** seamlessly.

---

## Steps to Install Expo Go

1. Visit [https://expo.dev/go](https://expo.dev/go)
2. Select the latest SDK version.
3. Install on your device:

   - **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS**: [Apple App Store](https://apps.apple.com/app/expo-go/id982107779)

4. Open the app and log in or create a new account.

---

## Resetting the Project

This project provides a script to **reset the project structure** while keeping a backup of existing files.

### Command

```bash
npm run reset-project
```

### What Happens After Running It

When the command is executed, you are prompted:

> Do you want to move existing files to /app-example instead of deleting them? (Y/n)

If you choose **Y**, the script:

- Creates a new `/app-example` directory.
- Moves your existing project folders into `/app-example`:

  - `/app` → `/app-example/app`
  - `/components` → `/app-example/components`
  - `/hooks` → `/app-example/hooks`
  - `/constants` → `/app-example/constants`
  - `/scripts` → `/app-example/scripts`

- Generates a **fresh project structure**:

  - New `/app` directory.
  - New entry file: `app/index.tsx`.
  - New layout file: `app/_layout.tsx`.

✅ Final Output:

```
📁 /app-example directory created.
➡️ /app moved to /app-example/app.
➡️ /components moved to /app-example/components.
➡️ /hooks moved to /app-example/hooks.
➡️ /constants moved to /app-example/constants.
➡️ /scripts moved to /app-example/scripts.

📁 New /app directory created.
📄 app/index.tsx created.
📄 app/_layout.tsx created.

✅ Project reset complete. Next steps:
1. Run `npx expo start` to start a development server.
2. Edit app/index.tsx to edit the main screen.
3. Delete the /app-example directory when you're done referencing it.
```

---

## Next Steps After Reset

1. Run the development server:

   ```bash
   npx expo start
   ```

2. Open `app/index.tsx` and start customizing your main screen.
3. Once you no longer need the old code, delete the `/app-example` backup folder.
