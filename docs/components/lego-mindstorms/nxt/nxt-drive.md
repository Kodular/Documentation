# NXT Drive

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > NXT|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

## Methods

### Move Backward

Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

[[Method('NXT Drive', 'Move Backward', False, 'power', 'distance')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|


### Move Backward Indefinitely

Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

[[Method('NXT Drive', 'Move Backward Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


### Move Forward

Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

[[Method('NXT Drive', 'Move Forward', False, 'power', 'distance')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|
|distance|<span class="chip chip-number">Number</span>|


### Move Forward Indefinitely

Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

[[Method('NXT Drive', 'Move Forward Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


### Stop

Stop the drive motors of the robot.

[[Method('NXT Drive', 'Stop', False)]]

### Turn Clockwise Indefinitely

Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

[[Method('NXT Drive', 'Turn Clockwise Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


### Turn Counter Clockwise Indefinitely

Turn the robot counterclockwise indefinitely, with the specified percentage of maximum power, by powering the right drive motor forward and the left drive motor backward.

[[Method('NXT Drive', 'Turn Counter Clockwise Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|<span class="chip chip-number">Number</span>|


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The BluetoothClient component that should be used for communication.

### Drive Motors

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>CB</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The motor ports that are used for driving: the left wheel's motor port followed by the right wheel's motor port.

### Stop Before Disconnect

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to stop the drive motors before disconnecting.

[[PropertyBlockGetterAndSetter('NXT Drive', 'Stop Before Disconnect')]]

### Wheel Diameter

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>4.32</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The diameter of the wheels used for driving.