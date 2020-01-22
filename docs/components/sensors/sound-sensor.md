# Sound Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Physical world component that can detect such data as: sound amplitude (measurement of the degree of change [positive or negative] )._

## Events

### Sound Changed

[[Event('Sound Sensor', 'Sound Changed', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`number`|


Triggered when the sound level has changed

## Properties

### Listen

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Sensor', 'Listen')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Starts or Stops listening to sound changes

### Max Sound Level

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Sensor', 'Max Sound Level')]]

| Type | Default |
|:----:|:-------:|
|number|100|

Returns the max sound level.

### Amplitude



:eyes: Read-Only property
[[PropertyBlockGetter('Sound Sensor', 'Amplitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the real sound amplitude which can be between 0 to 32768.

### Sound Level



:eyes: Read-Only property
[[PropertyBlockGetter('Sound Sensor', 'Sound Level')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the sound level.