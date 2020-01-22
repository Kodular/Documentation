# Temperature Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component that measures the temperature of the air in the room in degrees Celsius. This sensor implementation varies across devices.</p>_

## Events

### Temperature Changed

[[Event('Temperature Sensor', 'Temperature Changed', 'temperature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |temperature|`number`|


_Event that fires when the temperature is changed_

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Temperature Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether Sensor should be Enabled_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Temperature Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Sensor is Available_

### Temperature

:eyes: Read-Only property
[[PropertyBlockGetter('Temperature Sensor', 'Temperature')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the temperature in degrees celsius. To return values the sensor must be enabled_