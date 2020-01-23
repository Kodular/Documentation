# Magnetic Field Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that measures the ambient geomagnetic field for all three physical axes (x, y, z) in Tesla https://en.wikipedia.org/wiki/Tesla\_(unit). 

## Events

### Magnetic Changed

[[Event('Magnetic Field Sensor', 'Magnetic Changed', 'xStrength', 'yStrength', 'zStrength', 'absoluteStrength')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x Strength|`number`|
    |y Strength|`number`|
    |z Strength|`number`|
    |absolute Strength|`number`|


Indicates that the magnetic sensor data has changed.

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Magnetic Field Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Absolute Strength

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'Absolute Strength')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_No description available_

### Maximum Range

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'Maximum Range')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### X Strength

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'X Strength')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Y Strength

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'Y Strength')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Z Strength

:eyes: Read-Only property
[[PropertyBlockGetter('Magnetic Field Sensor', 'Z Strength')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_