# Camera

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to take a picture using the device's camera. After the picture is taken, the name of the file on the phone containing the picture is available as an argument to the AfterPicture event. The file name can be used, for example, to set the Picture property of an Image component.

## Events

### After Picture

[[Event('Camera', 'After Picture', 'image')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |image|`text`|


Returns the taken picture.

## Methods

### HasFlash

[[Method('Camera', 'HasFlash', true)]]

{>>Returns `boolean`<<}

Returns true if your device has a flash.

### TakePicture

[[Method('Camera', 'TakePicture', false)]]

Take a picture with the camera of your device.

### ToggleLight

[[Method('Camera', 'ToggleLight', false)]]

Toggle the flash of your device to on or off.

## Properties

### Use Front

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Camera', 'Use Front')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Specifies whether the front-facing camera should be used (when available). If the device does not have a front-facing camera, this option will be ignored and the camera will open normally.