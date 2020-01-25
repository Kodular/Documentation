# QR Code

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that generates a QR code from text.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Got Response

You will find here the success state and image url.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Got%20Response%22,%20%22param%22:%20%5B%22success%22,%20%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|url|<span class="chip chip-text">Text</span>|

## Methods

### Generate Qr Code

Create a QR Code and the result is a link to it. Example: Set the resolution(in pixel) to 200(height and width has the same value) and text to: Hello world!. Result: QR code resolution is 200x200, text = Hello world! Your text input is encoded in the link automatically.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Generate%20Qr%20Code%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the background color of the qr code result.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Charset

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the charset of the input text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Charset%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Charset%22,%20%22getter%22:%20false%7D"></div>

### Format

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>png</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

It's possible to create the QR code picture using different file formats, available are PNG, GIF, JPEG and the vector graphic formats SVG and EPS.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Format%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Format%22,%20%22getter%22:%20false%7D"></div>

### Front Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the color of the qr code result.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Front%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Front%20Color%22,%20%22getter%22:%20false%7D"></div>

### Margin

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Thickness of a margin in pixels. The margin will always have the same color as the background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Margin%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Margin%22,%20%22getter%22:%20false%7D"></div>

### Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>200</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the size/resolution of the qr code.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Size%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Default</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

This is the text that is converted as qr code.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22QR%20Code%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>
