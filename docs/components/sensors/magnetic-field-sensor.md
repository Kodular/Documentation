# Magnetic Field Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that measures the ambient geomagnetic field for all three physical axes (x, y, z) in Tesla https://en.wikipedia.org/wiki/Tesla\_(unit). 

## Events

### Magnetic Changed

Indicates that the magnetic sensor data has changed.

[[Event('Magnetic Field Sensor', 'Magnetic Changed', 'xStrength', 'yStrength', 'zStrength', 'absoluteStrength')]]

| Params | []() |
|--------|------|
|x Strength|<span class="chip chip-number">Number</span>|
|y Strength|<span class="chip chip-number">Number</span>|
|z Strength|<span class="chip chip-number">Number</span>|
|absolute Strength|<span class="chip chip-number">Number</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Magnetic Field Sensor', 'Enabled')]]

### Absolute Strength

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'Absolute Strength')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'Available')]]

### Maximum Range

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'Maximum Range')]]

### X Strength

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'X Strength')]]

### Y Strength

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'Y Strength')]]

### Z Strength

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetter('Magnetic Field Sensor', 'Z Strength')]]