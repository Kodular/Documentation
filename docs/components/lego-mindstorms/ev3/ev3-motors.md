# EV3 Motors

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > EV3**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors.

## Events

### Tacho Count Changed

Called when the tacho count has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Tacho%20Count%20Changed%22,%20%22params%22:%20%5B%22tacho%20Count%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tacho Count|<span class="chip chip-number">Number</span>|


## Methods

### Get Tacho Count

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the current tacho count.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Get%20Tacho%20Count%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Reset Tacho Count

Set the current tacho count to zero.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Reset%20Tacho%20Count%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Rotate In Distance

Rotate the motors in a distance.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20In%20Distance%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22distance%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate In Duration

Rotate the motors in a period of time.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20In%20Duration%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22milliseconds%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|milliseconds|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate In Tacho Counts

Rotate the motors in a number of tacho counts.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20In%20Tacho%20Counts%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22tacho%20Counts%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|tacho Counts|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Indefinitely

Start to rotate the motors.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20Indefinitely%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


### Rotate Sync In Distance

Rotate the motors at the same speed for a distance in cm.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20Sync%20In%20Distance%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22distance%22,%20%22turn%20Ratio%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync In Duration

Rotate the motors at the same speed in a period of time.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20Sync%20In%20Duration%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22milliseconds%22,%20%22turn%20Ratio%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|milliseconds|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync In Tacho Counts

Rotate the motors at the same speed in a number of tacho counts.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20Sync%20In%20Tacho%20Counts%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22tacho%20Counts%22,%20%22turn%20Ratio%22,%20%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|tacho Counts|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Rotate Sync Indefinitely

Start to rotate the motors at the same speed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Rotate%20Sync%20Indefinitely%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22power%22,%20%22turn%20Ratio%22%5D%7D"></div>


| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|


### Stop

Stop the motors of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22use%20Brake%22%5D%7D"></div>


| Params | []() |
|--------|------|
|use Brake|<span class="chip chip-boolean">Boolean</span>|


### Toggle Direction

Toggle the direction of motors.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Toggle%20Direction%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The BluetoothClient component that should be used for communication.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20false%7D"></div>


### Enable Speed Regulation

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies whether to keep motor rotation at constant speed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Enable%20Speed%20Regulation%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Enable%20Speed%20Regulation%22,%20%22getter%22:%20false%7D"></div>


### Motor Ports

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>ABC</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The motor ports that the motors are connected to. The ports are specified by a sequence of port letters.


### Reverse Direction

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set whether the direction of motors is reversed or not.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Reverse%20Direction%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Reverse%20Direction%22,%20%22getter%22:%20false%7D"></div>


### Stop Before Disconnect

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether to stop the motor before disconnecting.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Stop%20Before%20Disconnect%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Stop%20Before%20Disconnect%22,%20%22getter%22:%20false%7D"></div>


### Tacho Count Changed Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the TachoCountChanged event should fire when the angle is changed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Tacho%20Count%20Changed%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Motors%22,%20%22name%22:%20%22Tacho%20Count%20Changed%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Wheel Diameter

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>4.32</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Specifies the diameter of the wheels attached on motors.
