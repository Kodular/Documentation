# Gravity Sensor

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that measures the force of gravity that is applied to a device on all three physical axes.  
Note\: All readings are in SI units.

## Events

### Gravity Changed

Indicates that the gravity sensor data has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Gravity%20Changed%22,%20%22param%22:%20%5B%22x%20Accel%22,%20%22y%20Accel%22,%20%22z%20Accel%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x Accel|<span class="chip chip-number">Number</span>|
|y Accel|<span class="chip chip-number">Number</span>|
|z Accel|<span class="chip chip-number">Number</span>|

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Property for Available

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Property for Enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Maximum Range

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Property for MaximumRange

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Maximum%20Range%22,%20%22getter%22:%20true%7D"></div>

### X Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Property for XAccel

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22X%20Accel%22,%20%22getter%22:%20true%7D"></div>

### Y Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Property for YAccel

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Y%20Accel%22,%20%22getter%22:%20true%7D"></div>

### Z Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Property for ZAccel

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gravity%20Sensor%22,%20%22name%22:%20%22Z%20Accel%22,%20%22getter%22:%20true%7D"></div>
