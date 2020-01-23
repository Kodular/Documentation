# NXT Drive

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

## Methods

### Move Backward

[[Method('NXT Drive', 'Move Backward', False, 'power', 'distance')]]

| Params | []() |
|--------|------|
|power|Number|
|distance|Number|


Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

### Move Backward Indefinitely

[[Method('NXT Drive', 'Move Backward Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|Number|


Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

### Move Forward

[[Method('NXT Drive', 'Move Forward', False, 'power', 'distance')]]

| Params | []() |
|--------|------|
|power|Number|
|distance|Number|


Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

### Move Forward Indefinitely

[[Method('NXT Drive', 'Move Forward Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|Number|


Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

### Stop

[[Method('NXT Drive', 'Stop', False)]]

Stop the drive motors of the robot.

### Turn Clockwise Indefinitely

[[Method('NXT Drive', 'Turn Clockwise Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|Number|


Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

### Turn Counter Clockwise Indefinitely

[[Method('NXT Drive', 'Turn Counter Clockwise Indefinitely', False, 'power')]]

| Params | []() |
|--------|------|
|power|Number|


Turn the robot counterclockwise indefinitely, with the specified percentage of maximum power, by powering the right drive motor forward and the left drive motor backward.

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('NXT Drive', 'Bluetooth Client')]]

### Drive Motors

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>CB</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The motor ports that are used for driving: the left wheel's motor port followed by the right wheel's motor port.

[[PropertyBlockGetterAndSetter('NXT Drive', 'Drive Motors')]]

### Stop Before Disconnect

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to stop the drive motors before disconnecting.

[[PropertyBlockGetterAndSetter('NXT Drive', 'Stop Before Disconnect')]]

### Wheel Diameter

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>4.32</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The diameter of the wheels used for driving.

[[PropertyBlockGetterAndSetter('NXT Drive', 'Wheel Diameter')]]