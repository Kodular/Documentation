# Magnetic Field Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

Non-visible component that measures the ambient geomagnetic field for all three physical axes (x, y, z) in Tesla https://en.wikipedia.org/wiki/Tesla\_(unit).

## Events

### Magnetic Changed

Indicates that the magnetic sensor data has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Magnetic%20Changed%22,%20%22param%22:%20%5B%22x%20Strength%22,%20%22y%20Strength%22,%20%22z%20Strength%22,%20%22absolute%20Strength%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x Strength|<span class="chip chip-number">Number</span>|
|y Strength|<span class="chip chip-number">Number</span>|
|z Strength|<span class="chip chip-number">Number</span>|
|absolute Strength|<span class="chip chip-number">Number</span>|

## Properties

### Absolute Strength

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Absolute%20Strength%22,%20%22getter%22:%20true%7D"></div>

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Maximum Range

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Maximum%20Range%22,%20%22getter%22:%20true%7D"></div>

### X Strength

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22X%20Strength%22,%20%22getter%22:%20true%7D"></div>

### Y Strength

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Y%20Strength%22,%20%22getter%22:%20true%7D"></div>

### Z Strength

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Magnetic%20Field%20Sensor%22,%20%22name%22:%20%22Z%20Strength%22,%20%22getter%22:%20true%7D"></div>
