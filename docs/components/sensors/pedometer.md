# Pedometer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|3|

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

[[Event('Pedometer', 'Simple Step', 'simpleSteps', 'distance')]]

| Params | []() |
|--------|------|
|simple Steps|Number|
|distance|Number|


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

[[Event('Pedometer', 'Walk Step', 'walkSteps', 'distance')]]

| Params | []() |
|--------|------|
|walk Steps|Number|
|distance|Number|


This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

## Methods

### Pause

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Pause', False)]]

Pause counting of steps and distance.

### Reset

[[Method('Pedometer', 'Reset', False)]]

Resets the step counter, distance measure and time running.

### Resume

:warning: ==**Deprecated**==

[[Method('Pedometer', 'Resume', False)]]

Resumes counting, synonym of Start.

### Save

[[Method('Pedometer', 'Save', False)]]

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

### Start

[[Method('Pedometer', 'Start', False)]]

Start counting steps

### Stop

[[Method('Pedometer', 'Stop', False)]]

Stop counting steps

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