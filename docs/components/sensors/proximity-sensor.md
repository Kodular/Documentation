# Proximity Sensor

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

Non-visible component that can measures the proximity of an object in cm relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a persons ear; i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state.

## Events

### Proximity Changed

Triggered when distance (in cm) of the object to the device changes.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Proximity%20Changed%22,%20%22param%22:%20%5B%22distance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|distance|<span class="chip chip-number">Number</span>|

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Reports whether or not the device has a proximity sensor

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Distance

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the distance from the object to the device

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Distance%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true, the sensor will generate events. Otherwise, no eventsare generated .

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Keep Running When On Pause

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns value of keepRunningWhenOnPause

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Keep%20Running%20When%20On%20Pause%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Keep%20Running%20When%20On%20Pause%22,%20%22getter%22:%20false%7D"></div>

### Maximum Range

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Reports the Maximum Range of the device's ProximitySensor

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Proximity%20Sensor%22,%20%22name%22:%20%22Maximum%20Range%22,%20%22getter%22:%20true%7D"></div>
