# Via USB

## Running Kodular Starter on your PC

1. Download the latest executable file for [Kodular Starter](https://github.com/Kodular/Starter/releases/latest) based on your OS
    - Windows - `Kodular.Starter_3.0.0_x64-setup.exe` or `Kodular.Starter_3.0.0_x64_en-US.msi`
    - macOS - `Kodular.Starter_3.0.0_aarch64.dmg` or `Kodular.Starter_aarch64.app.tar.gz`
    - Linux - `Kodular.Starter_3.0.0_amd64.deb` or `Kodular.Starter-3.0.0-1.x86_64.rpm` or `Kodular.Starter_3.0.0_amd64.AppImage`
2. To run, follow the instructions based on your OS
    - Windows - Install the Kodular Starter application. You may have to press "Run anyway" if Windows SmartScreen window appear. This shows up whenever you download an unsigned application from the internet. This only shows up at once when running the installer.
    - macOS - After you install Kodular Starter, when you run Kodular Starter, you may see a message telling that the app is damaged. In this case, you should run the command below, after which Kodular Starter will run normally.
    ```sh
    $ sudo xattr -cr /Applications/Kodular\ Starter.app
    ```

3. Keep Kodular Starter running while you are using the Companion via USB. You will need to enable USB or wireless debugging from the Developer options in your phone settings.

## Connect to Companion

**Step 1:** From the App Bar, choose "Test".

![](/assets/images/other/live-development/usb-1.png)

**Step 2:** Click on "USB" and wait a few seconds.

![](/assets/images/other/live-development/usb-2.png)

**Step 3:** You've successfully linked your Android Phone to the Kodular Creator.  

!!! tip
    If you are having connection problems, check the [Kodular Starter Checker](https://starter.kodular.io).

> Remember that this connecting process is not a one time process and you need to do this every time you close Kodular Creator or the Kodular Companion.
