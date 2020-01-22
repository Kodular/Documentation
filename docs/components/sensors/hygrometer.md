# Hygrometer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A sensor component that can measure the relative ambient air humidity. Most Android devices do not have this sensor._

## Properties

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Hygrometer', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If enabled, then device will listen for changes.

### Refresh Time

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Hygrometer', 'Refresh Time')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

The requested minimum time in milliseconds between changes in air pressure being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices.

### Available



:eyes: Read-Only property
[[PropertyBlockGetter('Hygrometer', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Specifies whether or not the device has an ambient air pressure sensor.

### Humidity



:eyes: Read-Only property
[[PropertyBlockGetter('Hygrometer', 'Humidity')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The relative ambient humidity as a percentage, if the sensor is available and enabled.