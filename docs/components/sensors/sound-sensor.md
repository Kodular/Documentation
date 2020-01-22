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


_Triggered when the sound level has changed_

## Properties

### Listen

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Sensor', 'Listen')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Starts or Stops listening to sound changes_

### Max Sound Level

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sound Sensor', 'Max Sound Level')]]

| Type | Default |
|:----:|:-------:|
|number|100|

_Returns the max sound level._

### Amplitude

:eyes: Read-Only property
[[PropertyBlockGetter('Sound Sensor', 'Amplitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the real sound amplitude which can be between 0 to 32768._

### Sound Level

:eyes: Read-Only property
[[PropertyBlockGetter('Sound Sensor', 'Sound Level')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the sound level._