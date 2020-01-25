# NXT Drive

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

## Methods

### Move Backward

Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Move%20Backward%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22,%20%22distance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|

### Move Backward Indefinitely

Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Move%20Backward%20Indefinitely%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|

### Move Forward

Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Move%20Forward%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22,%20%22distance%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|

### Move Forward Indefinitely

Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Move%20Forward%20Indefinitely%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|

### Stop

Stop the drive motors of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Turn Clockwise Indefinitely

Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Turn%20Clockwise%20Indefinitely%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|

### Turn Counter Clockwise Indefinitely

Turn the robot counterclockwise indefinitely, with the specified percentage of maximum power, by powering the right drive motor forward and the left drive motor backward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Turn%20Counter%20Clockwise%20Indefinitely%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22power%22%5D%7D"></div>

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|

## Properties

### Bluetooth Client

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The BluetoothClient component that should be used for communication.

### Drive Motors

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>CB</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The motor ports that are used for driving: the left wheel's motor port followed by the right wheel's motor port.

### Stop Before Disconnect

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether to stop the drive motors before disconnecting.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Stop%20Before%20Disconnect%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Drive%22,%20%22name%22:%20%22Stop%20Before%20Disconnect%22,%20%22getter%22:%20false%7D"></div>

### Wheel Diameter

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>4.32</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The diameter of the wheels used for driving.
