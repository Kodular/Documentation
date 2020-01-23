# Proximity Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that can measures the proximity of an object in cm relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a persons ear; i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state.

## Events

### Proximity Changed

[[Event('Proximity Sensor', 'Proximity Changed', 'distance')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |distance|`number`|


Triggered when distance (in cm) of the object to the device changes.

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Proximity Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If true, the sensor will generate events.  Otherwise, no events
 are generated .

### Keep Running When On Pause

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Proximity Sensor', 'Keep Running When On Pause')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns value of keepRunningWhenOnPause

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Proximity Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Reports whether or not the device has a proximity sensor

### Distance

:eyes: Read-Only property
[[PropertyBlockGetter('Proximity Sensor', 'Distance')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the distance from the object to the device

### Maximum Range

:eyes: Read-Only property
[[PropertyBlockGetter('Proximity Sensor', 'Maximum Range')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Reports the Maximum Range of the device's ProximitySensor