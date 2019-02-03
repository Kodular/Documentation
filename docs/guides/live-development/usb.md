# Via USB

## Installing Kodular Starter

### Install ADB

Follow this tutorial to install ADB files on your OS: [https://www.xda-developers.com/install-adb-windows-macos-linux/](https://www.xda-developers.com/install-adb-windows-macos-linux/)

#### Check Installation

```
$ adb version
Android Debug Bridge version 1.0.39
Revision 3db08f2c6889-android
Installed as C:\WINDOWS\adb.exe
```

### Install Python

Download and install latest version of Python 3 from here: [https://www.python.org/downloads/](https://www.python.org/downloads/)

#### Check Installation

```
$ python -V
Python 3.6.4
```

```
$ pip -V
pip 10.0.1 from c:\python3\lib\site-packages\pip (python 3.6)
```

### Download Script File

1. Download the files from [https://github.com/Kodular/Starter/releases/latest](https://github.com/Kodular/Starter/releases/latest)

2. Save the folder to anywhere. You can also add it to Desktop as shortcut. 

!!! warning
    The path should not contain spaces.

3. Run this command on the same directory where the Kodular Starter is

```
pip install -r requirements.txt
```

## Run Kodular Starter

To run Kodular Starter, execute the following command in the same folder as Kodular Starter:

```
python KodularStarter.py
```

## Connect to Companion

**Step 1:** From the App Bar, choose "Test".

![](/assets/images/other/live-development/usb-1.png)

**Step 2:** Click on "USB" and wait a few seconds.

![](/assets/images/other/live-development/usb-2.png)

**Step 3:** You've successfully linked your Android Phone to the Kodular Creator.  

!!! tip
    If you are having connection problems, check the [Kodular Starter Checker](https://starter.kodular.io).

> Remember that this connecting process is not a one time process and you need to do this every time you close Kodular Creator or the Kodular Companion.