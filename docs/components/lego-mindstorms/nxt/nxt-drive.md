# NXT Drive

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

## Methods

### MoveBackward

[[Method('NXT Drive', 'MoveBackward', false, 'power distance')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|


Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

### MoveBackwardIndefinitely

[[Method('NXT Drive', 'MoveBackwardIndefinitely', false, 'power')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

### MoveForward

[[Method('NXT Drive', 'MoveForward', false, 'power distance')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|


Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

### MoveForwardIndefinitely

[[Method('NXT Drive', 'MoveForwardIndefinitely', false, 'power')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

### Stop

[[Method('NXT Drive', 'Stop', false)]]

Stop the drive motors of the robot.

### TurnClockwiseIndefinitely

[[Method('NXT Drive', 'TurnClockwiseIndefinitely', false, 'power')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

### TurnCounterClockwiseIndefinitely

[[Method('NXT Drive', 'TurnCounterClockwiseIndefinitely', false, 'power')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Turn the robot counterclockwise indefinitely, with the specified percentage of maximum power, by powering the right drive motor forward and the left drive motor backward.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Drive Motors

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Drive Motors')]]

| Type | Default |
|:----:|:-------:|
|text|CB|

The motor ports that are used for driving: the left wheel's motor port followed by the right wheel's motor port.

### Stop Before Disconnect

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Stop Before Disconnect')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to stop the drive motors before disconnecting.

### Wheel Diameter

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Wheel Diameter')]]

| Type | Default |
|:----:|:-------:|
|number|4.32|

The diameter of the wheels used for driving.