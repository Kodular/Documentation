# Gravity Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that measures the force of gravity that is applied to a device on all three physical axes.<br>Note\: All readings are in SI units._

## Events

### Gravity Changed

[[Event('Gravity Sensor', 'Gravity Changed', 'xAccel yAccel zAccel')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x Accel|`number`|
    |y Accel|`number`|
    |z Accel|`number`|


_Indicates that the gravity sensor data has changed._

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gravity Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Gravity Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_No description available_

### Maximum Range

:eyes: Read-Only property
[[PropertyBlockGetter('Gravity Sensor', 'Maximum Range')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### X Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Gravity Sensor', 'X Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Y Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Gravity Sensor', 'Y Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Z Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Gravity Sensor', 'Z Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_