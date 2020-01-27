# Barcode Scanner

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that reads barcodes from the device''s camera.

??? example "Permissions"
    * [android.permission.CAMERA](https://developer.android.com/reference/android/Manifest.permission.html#CAMERA)

## Events

### After Scan

Indicates that the scanner has read a (text) result and provides the result

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Barcode%20Scanner%22,%20%22name%22:%20%22After%20Scan%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|

## Methods

### Do Scan

Begins a barcode scan, using the camera. When the scan is complete, the AfterScan event will be raised.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Barcode%20Scanner%22,%20%22name%22:%20%22Do%20Scan%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Result

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Text result of the previous scan.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Barcode%20Scanner%22,%20%22name%22:%20%22Result%22,%20%22getter%22:%20true%7D"></div>

### Use External Scanner

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true App Inventor will look for and use an external scanning program such as "Bar Code Scanner."

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Barcode%20Scanner%22,%20%22name%22:%20%22Use%20External%20Scanner%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Barcode%20Scanner%22,%20%22name%22:%20%22Use%20External%20Scanner%22,%20%22getter%22:%20false%7D"></div>
