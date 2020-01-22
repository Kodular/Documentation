# Pedometer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A Component that acts like a Pedometer. It senses motion via the Accerleromter and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well. 

## Events

### Calibration Failed

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Calibration Failed')]]

deprecated

### GPS Available

:warning: ==**Deprecated**==

[[Event('Pedometer', 'GPS Available')]]

deprecated

### GPS Lost

:warning: ==**Deprecated**==

[[Event('Pedometer', 'GPS Lost')]]

deprecated

### Simple Step

[[Event('Pedometer', 'Simple Step', 'simpleSteps distance')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |simple Steps|`number`|
    |distance|`number`|


This event is run when a raw step is detected

### Started Moving

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Started Moving')]]

deprecated

### Stopped Moving

:warning: ==**Deprecated**==

[[Event('Pedometer', 'Stopped Moving')]]

deprecated

### Walk Step

[[Event('Pedometer', 'Walk Step', 'walkSteps distance')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |walk Steps|`number`|
    |distance|`number`|


This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

## Methods

### Pause

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Pause', false)]]

Pause counting of steps and distance.

### Reset

[[Method('Pedometer', 'Reset', false)]]

Resets the step counter, distance measure and time running.

### Resume

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Resume', false)]]

Resumes counting, synonym of Start.

### Save

[[Method('Pedometer', 'Save', false)]]

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

### Start

[[Method('Pedometer', 'Start', false)]]

Start counting steps

### Stop

[[Method('Pedometer', 'Stop', false)]]

Stop counting steps

## Properties

### Stop Detection Timeout

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Stop Detection Timeout')]]

| Type | Default |
|:----:|:-------:|
|number|2000|

The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state

### Stride Length

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Stride Length')]]

| Type | Default |
|:----:|:-------:|
|number|0.73|

Set the average stride length in meters.

### Calibrate Stride Length

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pedometer', 'Calibrate Stride Length')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

deprecated

### Distance

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Distance')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The approximate distance traveled in meters.

### Elapsed Time

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Elapsed Time')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Time elapsed in milliseconds since the pedometer was started.

### Moving

:warning: ==**Deprecated**==

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Moving')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

deprecated

### Simple Steps

:eyes: Read-Only property
[[PropertyBlockGetter('Pedometer', 'Simple Steps')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The number of simple steps taken since the pedometer has started.

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

the number of walk steps taken since the pedometer has started.