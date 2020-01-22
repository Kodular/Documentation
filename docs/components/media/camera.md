# Camera

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component to take a picture using the device's camera. After the picture is taken, the name of the file on the phone containing the picture is available as an argument to the AfterPicture event. The file name can be used, for example, to set the Picture property of an Image component._

## Events

### After Picture

[[Event('Camera', 'After Picture', 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Returns the taken picture._

## Methods

### HasFlash

[[Method('Camera', 'HasFlash', true)]]

{>>Returns `boolean`<<}

_Returns true if your device has a flash._

### TakePicture

[[Method('Camera', 'TakePicture', false)]]

_Take a picture with the camera of your device._

### ToggleLight

[[Method('Camera', 'ToggleLight', false)]]

_Toggle the flash of your device to on or off._

## Properties

### Use Front

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Camera', 'Use Front')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Specifies whether the front-facing camera should be used (when available). If the device does not have a front-facing camera, this option will be ignored and the camera will open normally._