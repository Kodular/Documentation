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


_You will find here the success state and image url._

## Methods

### GenerateQrCode

[[Method('QR Code', 'GenerateQrCode', false)]]

_Create a QR Code and the result is a link to it. Example: Set the resolution(in pixel) to 200(height and width has the same value) and text to: Hello world!. Result: QR code resolution is 200x200, text = Hello world! Your text input is encoded in the link automatically._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Set the background color of the qr code result._

### Charset

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Charset')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

_Set the charset of the input text._

### Format

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Format')]]

| Type | Default |
|:----:|:-------:|
|text|png|

_It's possible to create the QR code picture using different file formats, available are PNG, GIF, JPEG and the vector graphic formats SVG and EPS._

### Front Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Front Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_Set the color of the qr code result._

### Margin

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Margin')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Thickness of a margin in pixels. The margin will always have the same color as the background._

### Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|200|

_Set the size/resolution of the qr code._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('QR Code', 'Text')]]

| Type | Default |
|:----:|:-------:|
|text|Default|

_This is the text that is converted as qr code._