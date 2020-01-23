# Light Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that gets the current illuminance level around the device in units of lux.

## Events

### Light Changed

[[Event('Light Sensor', 'Light Changed', 'illuminance')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |illuminance|`number`|


Event that fires when the illuminance is changed

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Light Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether Sensor should be Enabled

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Light Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Sensor is Available

### Illuminance

:eyes: Read-Only property
[[PropertyBlockGetter('Light Sensor', 'Illuminance')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the illuminance in lux. To return values the sensor must be enabled