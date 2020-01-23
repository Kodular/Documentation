# Barcode Scanner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that reads barcodes from the device''s camera.

??? example "Permissions"
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.CAMERA)


## Events

### After Scan

Indicates that the scanner has read a (text) result and provides the result

[[Event('Barcode Scanner', 'After Scan', 'result')]]

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|


## Methods

### Do Scan

Begins a barcode scan, using the camera. When the scan is complete, the AfterScan event will be raised.

[[Method('Barcode Scanner', 'Do Scan', False)]]

## Properties

### Use External Scanner

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true App Inventor will look for and use an external scanning program such as "Bar Code Scanner."

[[PropertyBlockGetterAndSetter('Barcode Scanner', 'Use External Scanner')]]

### Result

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Text result of the previous scan.

[[PropertyBlockGetter('Barcode Scanner', 'Result')]]