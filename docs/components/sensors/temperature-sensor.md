# Temperature Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component that measures the temperature of the air in the room in degrees Celsius. This sensor implementation varies across devices.</p>_

## Properties

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Temperature Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether Sensor should be Enabled

### Available



:eyes: Read-Only property
[[PropertyBlockGetter('Temperature Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Sensor is Available

### Temperature



:eyes: Read-Only property
[[PropertyBlockGetter('Temperature Sensor', 'Temperature')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the temperature in degrees celsius. To return values the sensor must be enabled