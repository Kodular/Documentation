# Light Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that gets the current illuminance level around the device in units of lux.

## Events

### Light Changed

Event that fires when the illuminance is changed

[[Event('Light Sensor', 'Light Changed', 'illuminance')]]

| Params | []() |
|--------|------|
|illuminance|<span class="chip chip-number">Number</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether Sensor should be Enabled

[[PropertyBlockGetterAndSetter('Light Sensor', 'Enabled')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Sensor is Available

[[PropertyBlockGetter('Light Sensor', 'Available')]]

### Illuminance

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the illuminance in lux. To return values the sensor must be enabled

[[PropertyBlockGetter('Light Sensor', 'Illuminance')]]