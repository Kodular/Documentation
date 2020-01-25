# Hygrometer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A sensor component that can measure the relative ambient air humidity. Most Android devices do not have this sensor.

## Events

### Humidity Changed

Called when a change is detected in the ambient air humidity (expressed as a percentage).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Humidity%20Changed%22,%20%22param%22:%20%5B%22humidity%22%5D%7D"></div>

| Params | []() |
|--------|------|
|humidity|<span class="chip chip-number">Number</span>|

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies whether or not the device has an ambient air pressure sensor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If enabled, then device will listen for changes.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Humidity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The relative ambient humidity as a percentage, if the sensor is available and enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Humidity%22,%20%22getter%22:%20true%7D"></div>

### Refresh Time

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1000</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The requested minimum time in milliseconds between changes in air pressure being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Refresh%20Time%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Hygrometer%22,%20%22name%22:%20%22Refresh%20Time%22,%20%22getter%22:%20false%7D"></div>
