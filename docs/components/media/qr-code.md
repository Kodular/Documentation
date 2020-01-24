# QR Code

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that generates a QR code from text.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Got Response

You will find here the success state and image url.

[[Event('QR Code', 'Got Response', 'success', 'url')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|url|<span class="chip chip-text">Text</span>|


## Methods

### Generate Qr Code

Create a QR Code and the result is a link to it. Example: Set the resolution(in pixel) to 200(height and width has the same value) and text to: Hello world!. Result: QR code resolution is 200x200, text = Hello world! Your text input is encoded in the link automatically.

[[Method('QR Code', 'Generate Qr Code', False)]]

## Properties

### Background Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color of the qr code result.

[[PropertyBlockGetterAndSetter('QR Code', 'Background Color')]]

### Charset

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set the charset of the input text.

[[PropertyBlockGetterAndSetter('QR Code', 'Charset')]]

### Format

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>png</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

It's possible to create the QR code picture using different file formats, available are PNG, GIF, JPEG and the vector graphic formats SVG and EPS.

[[PropertyBlockGetterAndSetter('QR Code', 'Format')]]

### Front Color

<span class="chip chip-color">Color</span> <span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the color of the qr code result.

[[PropertyBlockGetterAndSetter('QR Code', 'Front Color')]]

### Margin

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Thickness of a margin in pixels. The margin will always have the same color as the background.

[[PropertyBlockGetterAndSetter('QR Code', 'Margin')]]

### Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>200</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the size/resolution of the qr code.

[[PropertyBlockGetterAndSetter('QR Code', 'Size')]]

### Text

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Default</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This is the text that is converted as qr code.

[[PropertyBlockGetterAndSetter('QR Code', 'Text')]]