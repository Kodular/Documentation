# Device Utilities


## Overview

The **Device Utilities** component can be used to fetch information about the device the app is currently running in.


## Properties

### Android Version
![](/assets/images/components/utilities/device-tools/p_android-version.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The Android Version of the device, in the format `x`.`y`.`z`. (For example, the Version of Android Oreo is 8.1.0)


### API Version
![](/assets/images/components/utilities/device-tools/p_api-version.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The Android API Version of the device. The API Version is an integer value that uniquely identifies the framework API revision offered by a version of the Android platform.
The Android platform provides a framework API that applications can use to interact with the underlying Android system.

!!! info
    More information about Android Versions and API Versions can be found in the [Android Source API List](https://source.android.com/setup/start/build-numbers).


### Board
![](/assets/images/components/utilities/device-tools/p_board.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The device board represents the physical layer of plastic on the device (i.e. the industrial design of the device).
For example, North American devices probably include QWERTY keyboards, whereas devices sold in France probably include AZERTY keyboards. 
This layer also represents the bare schematics of a product. These include the peripherals on the board and their configuration. The names used are merely codes for different board/device configurations. `goldfish`, `sardine`, and `trout` are a few examples.



### Bootloader Version
![](/assets/images/components/utilities/device-tools/p_bootloader-version.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The Version of the device's Bootloader.

!!! info
    The Bootloader is the code that runs on a device before the operating system starts up. 
    This low-level code contains the instructions that tell a device how to start up and find the system kernel. 
    The bootloader usually lives on the system board in non-volatile memory and is often specific to the device.
    

### Brand
![](/assets/images/components/utilities/device-tools/p_brand.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The brand name of the device's OEM (Original Equipment Manufacturer).
    

### Build Number
![](/assets/images/components/utilities/device-tools/p_build-number.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The build number of the Android Version of the device. Build numbers are alphanumeric strings that can uniquely identify each release of Android. `PQ3B.190705.003` and `FRF85B` are some examples of Android build numbers.

!!! info
    More information about build numbers can be found in the [Android Source Build Numbers List](https://source.android.com/setup/start/build-numbers#source-code-tags-and-builds).
    

### Country Code
![](/assets/images/components/utilities/device-tools/p_country-code.png)

\[ Getter only | Blocks only \]  
`Type: Text`

An ISO 3166 alpha-2 country code or UN M.49 numeric-3 area code representing the country/area the device is currently in. `US` (United States), `FR` (France), and `029` (Caribbean) are a few examples.

!!! info
    A list of all country codes can be found [here](https://countrycode.org/).
    

### Device Id
![](/assets/images/components/utilities/device-tools/p_device-id.png)

\[ Getter only | Blocks only \]  
`Type: Text`

An alphanumeric string that can uniquely identify an Android device.

!!! info
    When a device has multiple users (available on certain devices running Android 4.2 or higher), each user appears as a completely separate device, so the **Device Id** value is unique to each user.
    
!!! caution
    The Companion emulates the **Device Id** property and generates a value which may or may not be the true **Device Id** of the device. Only generated APKs are guaranteed to return the true **Device Id** of the device.
    
!!! caution
    Certain OEMs are known to have botched the **Device Id** implementation. For example, all Motorola Droid2 devices return the same **Device Id**. Use caution before relying on this property to uniquely identify users and/or devices.
    

### Device Name
![](/assets/images/components/utilities/device-tools/p_device-name.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The name of the device as set by the OEM (Original Equipment Manufacturer). This is an internal name used by OEMs to identify devices. `cedric`, `sailfish`, and `condor` are valid device names.
    

### Fingerprint
![](/assets/images/components/utilities/device-tools/p_fingerprint.png)

\[ Getter only | Blocks only \]  
`Type: Text`

A unique alphanumeric string that identifies the build version of Android that is currently running on the device.
    

### Hardware
![](/assets/images/components/utilities/device-tools/p_hardware.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The name of the hardware manufacturer of the device. `qcom` (Qualcomm) and `amd` (AMD) are some examples of valid hardware manufacturers.
    

### ID
![](/assets/images/components/utilities/device-tools/p_id.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The ID of the device.
    

### Language Code
![](/assets/images/components/utilities/device-tools/p_language-code.png)

\[ Getter only | Blocks only \]  
`Type: Text`

A two/three letter code that represents the language the device is currently using. `en` (English), `ja` (Japanese), and `kok` (Konkani)
are examples of valid language codes.

!!! info
    A full list of valid language codes can be found [here](https://www.loc.gov/standards/iso639-2/php/code_list.php)
    

### Manufacturer
![](/assets/images/components/utilities/device-tools/p_manufacturer.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The name of the Original Equipment Manufacturer. Can be the same as the [Brand](#brand) name.
    

### Model Name
![](/assets/images/components/utilities/device-tools/p_model-name.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The name of the device's model that is visible to the user and is present in the device's branding. `Google Pixel 3XL` and `Samsung Galaxy S10` are valid examples of model names.
    

### Product
![](/assets/images/components/utilities/device-tools/p_product.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The name of the device's product. This is usually the [Device Name](#device-name) followed by vendor specific details like `_amzin` or `_verizon`.
    

### Radio Version
![](/assets/images/components/utilities/device-tools/p_radio-version.png)

\[ Getter only | Blocks only \]  
`Type: Text`

The Version of the device's radio firmware. This property can be `null` if there is no radio firmware or, in some devices, if the radio is not currently ON.
    

### Show Success Toast
![](/assets/images/components/utilities/device-tools/d_show-success-toast.png) ![](/assets/images/components/utilities/device-tools/p_show-success-toast.png)

\[ Getter + Setter \]  
`Type: Boolean`

Determines if a toast message is to be shown when an action is performed.

* `True` - A toast message is shown to the user.
* `False` - No message is shown to the user.
    

### Tags
![](/assets/images/components/utilities/device-tools/p_tags.png)

\[  Getter only | Blocks only \]  
`Type: Text`

A comma separated list of tags that describe the current Android build.
    

### Type
![](/assets/images/components/utilities/device-tools/p_type.png)

\[  Getter only | Blocks only \]  
`Type: Text`

The type of the Android build. `user` if it is a release version to be used by the user, `eng` if a development version.

## Methods

### Has Dangerous Apk Installed
![](/assets/images/components/utilities/device-tools/m_has-dangerous-apk-installed.png)

\[ None \]

Returns true if applications like Lucky Patcher or Xposed are installed in the device.


### Copy
![](/assets/images/components/utilities/device-tools/m_copy.png)

\[ Text `text`, Boolean `success Toast Message` \]

Copies text to the device's clipboard.

Params                 |  []()       
---------------------- | ------- 
`text`                 | **Text:**  The text to be copied.
`success Toast Message`| **Boolean:**  `True` if a toast is to be shown to the user once text is copied, `False` otherwise.


### Get IMEI
![](/assets/images/components/utilities/device-tools/m_get-imei.png)

\[ None \]

Fetches the IMEI of the device.

!!! info "IMEI (International Mobile Equipment Identity)"
    The IMEI is a unique number to identify GSM, WCDMA, and iDEN mobile phones, as well as some satellite phones. 
    It is only used for identifying the device and has no permanent or semi-permanent relation to the subscriber/service provide.
    More information about IMEI can be found [here](https://www.imei.info/faq-what-is-IMEI/)


### Get Serial
![](/assets/images/components/utilities/device-tools/m_get-serial.png)

\[ None \]

Fetches the hardware serial number of the device. The Serial is an alphanumeric, case-insensitive string that can identify the hardware used in the device.


### Parse
![](/assets/images/components/utilities/device-tools/m_parse.png)

\[ Text `text`, Text `start`, Text `end`, Text `if Text Not Found` \]

Returns text that is parsed between two strings. For example, if text = `abcdef`, start = `ab`, and end = `e`, the resulting string will
be `cd`.

Params             |  []()       
------------------ | ------- 
`text`             | **Text:**  The text to be parsed.
`start`            | **Text:**  The text to start parsing from.
`end`              | **Text:**  The text where the parsing ends.
`if Text Not Found`| **Text:**  The text that is returned if either `start` or `end` is not found in `text`.


### Paste
![](/assets/images/components/utilities/device-tools/m_paste.png)

\[ Boolean `success Toast Message` \]

Pastes the text in the clipboard into the currently focused component (usually a Text Box).

Params                 |  []()       
---------------------- | ------- 
`success Toast Message`| **Boolean:**  `True` if a toast is to be shown to the user once text is pasted, `False` otherwise.


### Is Adb Debugging Enabled
![](/assets/images/components/utilities/device-tools/m_is-adb-debugging-enabled.png)

\[ None \]

Returns `True` if the app is being debugged using the Android Debug Bridge, `False` otherwise.


### Is Emulator
![](/assets/images/components/utilities/device-tools/m_is-emulator.png)

\[ None \]

Returns `True` if the app is currently running on an emulator, `False` otherwise.


### Is Installed From Play Store
![](/assets/images/components/utilities/device-tools/m_is-installed-from-play-store.png)

\[ None \]

Returns `True` if the app was installed from the Google Play Store, `False` if it was installed from other stores or using an APK.


## Events

### Got IMEI
![](/assets/images/components/utilities/device-tools/e_got-imei.png)

\[ Text `imei` \] 

Triggers when the IMEI of the device has been fetched after a call to [Get IMEI](#get-imei) was made.

Params             |  []()       
------------------ | ------- 
`imei`             | **Text:**  The IMEI of the device


### Got Serial
![](/assets/images/components/utilities/device-tools/e_got-serial.png)

\[ Text `serial` \] 

Triggers when the serial of the device has been fetched after a call to [Get Serial](#get-serial) was made.

Params             |  []()       
------------------ | ------- 
`serial`           | **Text:**  The hardware serial of the device
