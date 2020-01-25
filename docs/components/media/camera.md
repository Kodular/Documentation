# Camera

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22After%20Picture%22,%20%22param%22:%20%5B%22image%22%5D%7D"></div>

| Params | []() |
|--------|------|
|image|<span class="chip chip-text">Text</span>|

## Methods

### Has Flash

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if your device has a flash.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22Has%20Flash%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Take Picture

Take a picture with the camera of your device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22Take%20Picture%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Toggle Light

Toggle the flash of your device to on or off.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22Toggle%20Light%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Use Front

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies whether the front-facing camera should be used (when available). If the device does not have a front-facing camera, this option will be ignored and the camera will open normally.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22Use%20Front%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Camera%22,%20%22name%22:%20%22Use%20Front%22,%20%22getter%22:%20false%7D"></div>
