# Camera

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-visible component<<}

## Overview

A component to take a picture using the device's camera. After the picture is taken, the name of the file on the phone containing the picture is available as an argument to the AfterPicture event. The file name can be used, for example, to set the Picture property of an Image component.

??? example "Permissions"
    * [android.permission.FLASHLIGHT](https://developer.android.com/reference/android/Manifest.permission.html#FLASHLIGHT)
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#CAMERA)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### After Picture

Returns the taken picture.

[[Event('Camera', 'After Picture', 'image')]]

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|


## Methods

### Has Flash

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if your device has a flash.

[[Method('Camera', 'Has Flash', True)]]

### Take Picture

Take a picture with the camera of your device.

[[Method('Camera', 'Take Picture', False)]]

### Toggle Light

Toggle the flash of your device to on or off.

[[Method('Camera', 'Toggle Light', False)]]

## Properties

### Use Front

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies whether the front-facing camera should be used (when available). If the device does not have a front-facing camera, this option will be ignored and the camera will open normally.

[[PropertyBlockGetterAndSetter('Camera', 'Use Front')]]