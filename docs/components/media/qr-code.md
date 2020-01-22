# QR Code

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that generates a QR code from text._

## Events

### Got Response

[[Event('QR Code', 'Got Response', 'success url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|
    |url|`text`|


You will find here the success state and image url.

## Methods

### GenerateQrCode

[[Method('QR Code', 'GenerateQrCode', false)]]

Create a QR Code and the result is a link to it. Example: Set the resolution(in pixel) to 200(height and width has the same value) and text to: Hello world!. Result: QR code resolution is 200x200, text = Hello world! Your text input is encoded in the link automatically.

## Properties

### Background Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Set the background color of the qr code result.

### Charset

<small>Available as Advanced Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Charset')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

Set the charset of the input text.

### Format

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Format')]]

| Type | Default |
|:----:|:-------:|
|text|png|

It's possible to create the QR code picture using different file formats, available are PNG, GIF, JPEG and the vector graphic formats SVG and EPS.

### Front Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Front Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

Set the color of the qr code result.

### Margin

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Margin')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Thickness of a margin in pixels. The margin will always have the same color as the background.

### Size

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|200|

Set the size/resolution of the qr code.

### Text

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Text')]]

| Type | Default |
|:----:|:-------:|
|text|Default|

This is the text that is converted as qr code.