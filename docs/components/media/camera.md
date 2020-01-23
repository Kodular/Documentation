# Camera

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Media|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

A component to take a picture using the device's camera. After the picture is taken, the name of the file on the phone containing the picture is available as an argument to the AfterPicture event. The file name can be used, for example, to set the Picture property of an Image component.

## Events

### After Picture

[[Event('Camera', 'After Picture', 'image')]]

| Params | []() |
|--------|------|
|image|Text|


Returns the taken picture.

## Methods

### Has Flash

[[Method('Camera', 'Has Flash', True)]]

{>>Returns `boolean`<<}

Returns true if your device has a flash.

### Take Picture

[[Method('Camera', 'Take Picture', False)]]

Take a picture with the camera of your device.

### Toggle Light

[[Method('Camera', 'Toggle Light', False)]]

Toggle the flash of your device to on or off.

## Properties

### Use Front

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies whether the front-facing camera should be used (when available). If the device does not have a front-facing camera, this option will be ignored and the camera will open normally.

[[PropertyBlockGetterAndSetter('Camera', 'Use Front')]]