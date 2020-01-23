# Hygrometer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A sensor component that can measure the relative ambient air humidity. Most Android devices do not have this sensor.

## Events

### Humidity Changed

[[Event('Hygrometer', 'Humidity Changed', 'humidity')]]

| Params | []() |
|--------|------|
|humidity|Number|


Called when a change is detected in the ambient air humidity (expressed as a percentage).

## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled, then device will listen for changes.

[[PropertyBlockGetterAndSetter('Hygrometer', 'Enabled')]]

### Refresh Time

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The requested minimum time in milliseconds between changes in air pressure being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices.

[[PropertyBlockGetterAndSetter('Hygrometer', 'Refresh Time')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Specifies whether or not the device has an ambient air pressure sensor.

[[PropertyBlockGetter('Hygrometer', 'Available')]]

### Humidity

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The relative ambient humidity as a percentage, if the sensor is available and enabled.

[[PropertyBlockGetter('Hygrometer', 'Humidity')]]