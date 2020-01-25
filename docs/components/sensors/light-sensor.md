# Light Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that gets the current illuminance level around the device in units of lux.

## Events

### Light Changed

Event that fires when the illuminance is changed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Light%20Sensor%22,%20%22name%22:%20%22Light%20Changed%22,%20%22param%22:%20%5B%22illuminance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|illuminance|<span class="chip chip-number">Number</span>|

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Whether Sensor is Available

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Light%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether Sensor should be Enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Light%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Light%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Illuminance

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the illuminance in lux. To return values the sensor must be enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Light%20Sensor%22,%20%22name%22:%20%22Illuminance%22,%20%22getter%22:%20true%7D"></div>
