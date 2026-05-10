# QR Code

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that generates a QR code from text.

## Events

### Got Response

Triggered after GenerateQrCode finishes. On success, url is a local file:// URI pointing to the generated image. On failure, url contains the error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Got%20Response%22,%20%22param%22:%20%5B%22success%22,%20%22url%22%5D%7D"></div>

| Param | Type |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|url|<span class="chip chip-text">Text</span>|

## Methods

### Generate Qr Code

Generates a QR code locally on the device using the current Text, Size, Charset, FrontColor, BackgroundColor, Margin and Format properties. The result is delivered through the GotResponse event as a local file:// URI to the rendered image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Generate%20Qr%20Code%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the background color of the qr code result.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Charset

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the charset of the input text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Charset%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Charset%22,%20%22getter%22:%20false%7D"></div>

### Format

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-enum">QrCodeFormat</span> <span class="chip chip-text">Default: <i>png</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Output image format used when generating the QR code image. Supported values are PNG (default), JPEG and WebP.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Format%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Format%22,%20%22getter%22:%20false%7D"></div>

| Option | Value |
|--------|------|
|Png|png|
|Jpeg|jpeg|
|Webp|webp|

### Front Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the color of the qr code result.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Front%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Front%20Color%22,%20%22getter%22:%20false%7D"></div>

### Margin

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Thickness of a margin in modules around the QR code. The margin will always have the same color as the background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Margin%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Margin%22,%20%22getter%22:%20false%7D"></div>

### Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>200</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the size/resolution of the qr code.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Default</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

This is the text that is converted as qr code.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>
