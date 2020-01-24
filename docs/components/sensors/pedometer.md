# Pedometer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-Visible component<<}

## Overview

A Component that acts like a Pedometer. It senses motion via the Accerleromter and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well.

## Events

### Calibration Failed

:warning: ==**Deprecated**==

deprecated

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Calibration%20Failed%22,%20%22param%22:%20%5B%5D%7D"></div>

### GPS Available

:warning: ==**Deprecated**==

deprecated

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22GPS%20Available%22,%20%22param%22:%20%5B%5D%7D"></div>

### GPS Lost

:warning: ==**Deprecated**==

deprecated

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22GPS%20Lost%22,%20%22param%22:%20%5B%5D%7D"></div>

### Simple Step

This event is run when a raw step is detected

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Simple%20Step%22,%20%22param%22:%20%5B%22simple%20Steps%22,%20%22distance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|simple Steps|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|

### Started Moving

:warning: ==**Deprecated**==

deprecated

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Started%20Moving%22,%20%22param%22:%20%5B%5D%7D"></div>

### Stopped Moving

:warning: ==**Deprecated**==

deprecated

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stopped%20Moving%22,%20%22param%22:%20%5B%5D%7D"></div>

### Walk Step

This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Walk%20Step%22,%20%22param%22:%20%5B%22walk%20Steps%22,%20%22distance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|walk Steps|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|

## Methods

### Pause

:warning: ==**Deprecated**==

Pause counting of steps and distance.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Pause%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Reset

Resets the step counter, distance measure and time running.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Reset%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Resume

:warning: ==**Deprecated**==

Resumes counting, synonym of Start.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Resume%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Save

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Save%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Start

Start counting steps

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Start%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Stop counting steps

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Stop Detection Timeout

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>2000</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stop%20Detection%20Timeout%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stop%20Detection%20Timeout%22,%20%22getter%22:%20false%7D"></div>

### Stride Length

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0.73</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the average stride length in meters.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stride%20Length%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Stride%20Length%22,%20%22getter%22:%20false%7D"></div>

### Calibrate Stride Length

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

deprecated

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Calibrate%20Stride%20Length%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Calibrate%20Stride%20Length%22,%20%22getter%22:%20false%7D"></div>

### Distance

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The approximate distance traveled in meters.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Distance%22,%20%22getter%22:%20true%7D"></div>

### Elapsed Time

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Time elapsed in milliseconds since the pedometer was started.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Elapsed%20Time%22,%20%22getter%22:%20true%7D"></div>

### Moving

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

deprecated

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Moving%22,%20%22getter%22:%20true%7D"></div>

### Simple Steps

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The number of simple steps taken since the pedometer has started.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Simple%20Steps%22,%20%22getter%22:%20true%7D"></div>

### Use GPS

:warning: ==**Deprecated**==

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Use%20GPS%22,%20%22getter%22:%20false%7D"></div>

### Walk Steps

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

the number of walk steps taken since the pedometer has started.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Pedometer%22,%20%22name%22:%20%22Walk%20Steps%22,%20%22getter%22:%20true%7D"></div>
