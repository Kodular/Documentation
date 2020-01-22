# EV3 Motors

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors._

## Events

### Tacho Count Changed

[[Event('EV3 Motors', 'Tacho Count Changed', 'tachoCount')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tacho Count|`number`|


Called when the tacho count has changed.

## Methods

### GetTachoCount

[[Method('EV3 Motors', 'GetTachoCount', true)]]

{>>Returns `number`<<}

Get the current tacho count.

### ResetTachoCount

[[Method('EV3 Motors', 'ResetTachoCount', false)]]

Set the current tacho count to zero.

### RotateInDistance

[[Method('EV3 Motors', 'RotateInDistance', false, 'power distance useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |use Brake|`boolean`|


Rotate the motors in a distance.

### RotateInDuration

[[Method('EV3 Motors', 'RotateInDuration', false, 'power milliseconds useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |use Brake|`boolean`|


Rotate the motors in a period of time.

### RotateInTachoCounts

[[Method('EV3 Motors', 'RotateInTachoCounts', false, 'power tachoCounts useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |use Brake|`boolean`|


Rotate the motors in a number of tacho counts.

### RotateIndefinitely

[[Method('EV3 Motors', 'RotateIndefinitely', false, 'power')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|


Start to rotate the motors.

### RotateSyncInDistance

[[Method('EV3 Motors', 'RotateSyncInDistance', false, 'power distance turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed for a distance in cm.

### RotateSyncInDuration

[[Method('EV3 Motors', 'RotateSyncInDuration', false, 'power milliseconds turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed in a period of time.

### RotateSyncInTachoCounts

[[Method('EV3 Motors', 'RotateSyncInTachoCounts', false, 'power tachoCounts turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed in a number of tacho counts.

### RotateSyncIndefinitely

[[Method('EV3 Motors', 'RotateSyncIndefinitely', false, 'power turnRatio')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |turn Ratio|`number`|


Start to rotate the motors at the same speed.

### Stop

[[Method('EV3 Motors', 'Stop', false, 'useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |use Brake|`boolean`|


Stop the motors of the robot.

### ToggleDirection

[[Method('EV3 Motors', 'ToggleDirection', false)]]

Toggle the direction of motors.

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Enable Speed Regulation

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Enable Speed Regulation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether to keep motor rotation at constant speed.

### Motor Ports

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Motor Ports')]]

| Type | Default |
|:----:|:-------:|
|text|ABC|

The motor ports that the motors are connected to. The ports are specified by a sequence of port letters.

### Reverse Direction

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Reverse Direction')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set whether the direction of motors is reversed or not.

### Stop Before Disconnect

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Stop Before Disconnect')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to stop the motor before disconnecting.

### Tacho Count Changed Event Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Tacho Count Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the TachoCountChanged event should fire when the angle is changed.

### Wheel Diameter

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Wheel Diameter')]]

| Type | Default |
|:----:|:-------:|
|number|4.32|

Specifies the diameter of the wheels attached on motors.