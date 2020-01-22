# Pedometer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A Component that acts like a Pedometer. It senses motion via the Accerleromter and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well. _

## Events

### Calibration Failed

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Calibration Failed')]]

_deprecated_

### GPS Available

:warning: ==**Deprecated**==

[[Event('Pedometer', 'GPS Available')]]

_deprecated_

### GPS Lost

:warning: ==**Deprecated**==

[[Event('Pedometer', 'GPS Lost')]]

_deprecated_

### Simple Step

[[Event('Pedometer', 'Simple Step', 'simpleSteps distance')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |simple Steps|`number`|
    |distance|`number`|


_This event is run when a raw step is detected_

### Started Moving

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Started Moving')]]

_deprecated_

### Stopped Moving

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Stopped Moving')]]

_deprecated_

### Walk Step

[[Event('Pedometer', 'Walk Step', 'walkSteps distance')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |walk Steps|`number`|
    |distance|`number`|


_This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion._

## Methods

### Pause

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Pause', false)]]

_Pause counting of steps and distance._

### Reset

[[Method('Pedometer', 'Reset', false)]]

_Resets the step counter, distance measure and time running._

### Resume

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Resume', false)]]

_Resumes counting, synonym of Start._

### Save

[[Method('Pedometer', 'Save', false)]]

_Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state._

### Start

[[Method('Pedometer', 'Start', false)]]

_Start counting steps_

### Stop

[[Method('Pedometer', 'Stop', false)]]

_Stop counting steps_

## Properties

### Stop Detection Timeout

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Stop Detection Timeout')]]

| Type | Default |
|:----:|:-------:|
|number|2000|

_The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state_

### Stride Length

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Stride Length')]]

| Type | Default |
|:----:|:-------:|
|number|0.73|

_Set the average stride length in meters._

### Calibrate Stride Length

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Calibrate Stride Length')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_deprecated_

### Distance

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Distance')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The approximate distance traveled in meters._

### Elapsed Time

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Elapsed Time')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Time elapsed in milliseconds since the pedometer was started._

### Moving

:warning: ==**Deprecated**==

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Moving')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_deprecated_

### Simple Steps

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Simple Steps')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The number of simple steps taken since the pedometer has started._

### Use GPS

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Use GPS')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_No description available_

### Walk Steps

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Walk Steps')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_the number of walk steps taken since the pedometer has started._