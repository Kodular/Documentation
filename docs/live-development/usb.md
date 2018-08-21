# Via USB

## Installing Makeroid Starter

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

1. Download the files from [https://github.com/Makeroid/Starter/releases/latest](https://github.com/Makeroid/Starter/releases/latest)

2. Save the folder to anywhere. You can also add it to Desktop as shortcut. 

{% hint style="warning" %}
The path should not contain spaces.
{% endhint %}

3. Run this command on the same directory where the Makeroid

```
pip install -r requirements.txt
```

## Run Makeroid Starter

To run Makeroid Starter, select your OS from the tabs and follow the directions.

{% tabs %}
{% tab title="Windows" %}
You can just double click on the file to open the starter.
{% endtab %}

{% tab title="Linux" %}

{% endtab %}

{% tab title="MacOS" %}

{% endtab %}
{% endtabs %}

## Connect to Companion

**Step 1:** From the App Bar, choose "Test".

![](/assets/live-development/usb-1.png)

**Step 2:** Click on "USB" and wait a few seconds.

![](/assets/live-development/usb-2.png)

**Step 3:** You've successfully linked your Android Phone to the Makeroid Builder.  

!!! tip
    If you are having connection problems, check the [Makeroid Starter Checker](https://starter.makeroid.io).

> Remember that this connecting process is not a one time process and you need to do this every time you close Makeroid Builder or the Makeroid Companion.