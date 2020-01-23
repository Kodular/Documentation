# Temperature Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that measures the temperature of the air in the room in degrees Celsius. This sensor implementation varies across devices.

## Events

### Temperature Changed

Event that fires when the temperature is changed

[[Event('Temperature Sensor', 'Temperature Changed', 'temperature')]]

| Params | []() |
|--------|------|
|temperature|<span class="chip chip-number">Number</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether Sensor should be Enabled

[[PropertyBlockGetterAndSetter('Temperature Sensor', 'Enabled')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Sensor is Available

[[PropertyBlockGetter('Temperature Sensor', 'Available')]]

### Temperature

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the temperature in degrees celsius. To return values the sensor must be enabled

[[PropertyBlockGetter('Temperature Sensor', 'Temperature')]]