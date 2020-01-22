# Barcode Scanner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads barcodes from the device''s camera.

## Events

### After Scan

[[Event('Barcode Scanner', 'After Scan', 'result')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |result|`text`|


Indicates that the scanner has read a (text) result and provides the result

## Methods

### DoScan

[[Method('Barcode Scanner', 'DoScan', false)]]

Begins a barcode scan, using the camera. When the scan is complete, the AfterScan event will be raised.

## Properties

### Use External Scanner

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Barcode Scanner', 'Use External Scanner')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true App Inventor will look for and use an external scanning program such as "Bar Code Scanner."

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Barcode Scanner', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Text result of the previous scan.