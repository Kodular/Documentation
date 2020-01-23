# NXT Drive

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

## Methods

### MoveBackward

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|


Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

### MoveBackwardIndefinitely

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

### MoveForward

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|


Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

### MoveForwardIndefinitely

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

### Stop

_Block preview not available_

Stop the drive motors of the robot.

### TurnClockwiseIndefinitely

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

### TurnCounterClockwiseIndefinitely

_Block preview not available_

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