# Light Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that gets the current illuminance level around the device in units of lux._

## Events

### Light Changed

[[Event('Light Sensor', 'Light Changed', 'illuminance')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |illuminance|`number`|


_Event that fires when the illuminance is changed_

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Light Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether Sensor should be Enabled_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Light Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Sensor is Available_

### Illuminance

:eyes: Read-Only property
[[PropertyBlockGetter('Light Sensor', 'Illuminance')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the illuminance in lux. To return values the sensor must be enabled_