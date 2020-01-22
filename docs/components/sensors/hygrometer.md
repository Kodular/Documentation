# Hygrometer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A sensor component that can measure the relative ambient air humidity. Most Android devices do not have this sensor._

## Events

### Humidity Changed

[[Event('Hygrometer', 'Humidity Changed', 'humidity')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |humidity|`number`|


_Called when a change is detected in the ambient air humidity (expressed as a percentage)._

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Hygrometer', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If enabled, then device will listen for changes._

### Refresh Time

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Hygrometer', 'Refresh Time')]]

| Type | Default |
|:----:|:-------:|
|number|1000|

_The requested minimum time in milliseconds between changes in air pressure being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices._

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Hygrometer', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Specifies whether or not the device has an ambient air pressure sensor._

### Humidity

:eyes: Read-Only property
[[PropertyBlockGetter('Hygrometer', 'Humidity')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The relative ambient humidity as a percentage, if the sensor is available and enabled._