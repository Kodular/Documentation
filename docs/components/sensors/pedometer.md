# Pedometer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A Component that acts like a Pedometer. It senses motion via the Accerleromter and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well. 

## Events

### Calibration Failed

:warning: ==**Deprecated**==

deprecated

[[Event('Pedometer', 'Calibration Failed')]]

### GPS Available

:warning: ==**Deprecated**==

deprecated

[[Event('Pedometer', 'GPS Available')]]

### GPS Lost

:warning: ==**Deprecated**==

deprecated

[[Event('Pedometer', 'GPS Lost')]]

### Simple Step

This event is run when a raw step is detected

[[Event('Pedometer', 'Simple Step', 'simpleSteps', 'distance')]]

| Params | []() |
|--------|------|
|simple Steps|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|


### Started Moving

:warning: ==**Deprecated**==

deprecated

[[Event('Pedometer', 'Started Moving')]]

### Stopped Moving

:warning: ==**Deprecated**==

deprecated

[[Event('Pedometer', 'Stopped Moving')]]

### Walk Step

This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

[[Event('Pedometer', 'Walk Step', 'walkSteps', 'distance')]]

| Params | []() |
|--------|------|
|walk Steps|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|


## Methods

### Pause

:warning: ==**Deprecated**==

Pause counting of steps and distance.

[[Method('Pedometer', 'Pause', False)]]

### Reset

Resets the step counter, distance measure and time running.

[[Method('Pedometer', 'Reset', False)]]

### Resume

:warning: ==**Deprecated**==

Resumes counting, synonym of Start.

[[Method('Pedometer', 'Resume', False)]]

### Save

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

[[Method('Pedometer', 'Save', False)]]

### Start

Start counting steps

[[Method('Pedometer', 'Start', False)]]

### Stop

Stop counting steps

[[Method('Pedometer', 'Stop', False)]]

## Properties

### Stop Detection Timeout

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state

[[PropertyBlockGetterAndSetter('Pedometer', 'Stop Detection Timeout')]]

### Stride Length

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.73</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the average stride length in meters.

[[PropertyBlockGetterAndSetter('Pedometer', 'Stride Length')]]

### Calibrate Stride Length

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

deprecated

[[PropertyBlockGetterAndSetter('Pedometer', 'Calibrate Stride Length')]]

### Distance

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The approximate distance traveled in meters.

[[PropertyBlockGetter('Pedometer', 'Distance')]]

### Elapsed Time

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Time elapsed in milliseconds since the pedometer was started.

[[PropertyBlockGetter('Pedometer', 'Elapsed Time')]]

### Moving

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

deprecated

[[PropertyBlockGetter('Pedometer', 'Moving')]]

### Simple Steps

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The number of simple steps taken since the pedometer has started.

[[PropertyBlockGetter('Pedometer', 'Simple Steps')]]

### Use GPS

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Pedometer', 'Use GPS')]]

### Walk Steps

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

the number of walk steps taken since the pedometer has started.

[[PropertyBlockGetter('Pedometer', 'Walk Steps')]]