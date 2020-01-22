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


_Called when the tacho count has changed._

## Methods

### GetTachoCount

[[Method('EV3 Motors', 'GetTachoCount', true)]]

{>>Returns `number`<<}

_Get the current tacho count._

### ResetTachoCount

[[Method('EV3 Motors', 'ResetTachoCount', false)]]

_Set the current tacho count to zero._

### RotateInDistance

[[Method('EV3 Motors', 'RotateInDistance', false, 'power distance useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |use Brake|`boolean`|


_Rotate the motors in a distance._

### RotateInDuration

[[Method('EV3 Motors', 'RotateInDuration', false, 'power milliseconds useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |use Brake|`boolean`|


_Rotate the motors in a period of time._

### RotateInTachoCounts

[[Method('EV3 Motors', 'RotateInTachoCounts', false, 'power tachoCounts useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |use Brake|`boolean`|


_Rotate the motors in a number of tacho counts._

### RotateIndefinitely

[[Method('EV3 Motors', 'RotateIndefinitely', false, 'power')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|


_Start to rotate the motors._

### RotateSyncInDistance

[[Method('EV3 Motors', 'RotateSyncInDistance', false, 'power distance turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


_Rotate the motors at the same speed for a distance in cm._

### RotateSyncInDuration

[[Method('EV3 Motors', 'RotateSyncInDuration', false, 'power milliseconds turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


_Rotate the motors at the same speed in a period of time._

### RotateSyncInTachoCounts

[[Method('EV3 Motors', 'RotateSyncInTachoCounts', false, 'power tachoCounts turnRatio useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


_Rotate the motors at the same speed in a number of tacho counts._

### RotateSyncIndefinitely

[[Method('EV3 Motors', 'RotateSyncIndefinitely', false, 'power turnRatio')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |power|`number`|
    |turn Ratio|`number`|


_Start to rotate the motors at the same speed._

### Stop

[[Method('EV3 Motors', 'Stop', false, 'useBrake')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |use Brake|`boolean`|


_Stop the motors of the robot._

### ToggleDirection

[[Method('EV3 Motors', 'ToggleDirection', false)]]

_Toggle the direction of motors._

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Enable Speed Regulation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Enable Speed Regulation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether to keep motor rotation at constant speed._

### Motor Ports

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Motor Ports')]]

| Type | Default |
|:----:|:-------:|
|text|ABC|

_The motor ports that the motors are connected to. The ports are specified by a sequence of port letters._

### Reverse Direction

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Reverse Direction')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set whether the direction of motors is reversed or not._

### Stop Before Disconnect

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Stop Before Disconnect')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to stop the motor before disconnecting._

### Tacho Count Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Tacho Count Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the TachoCountChanged event should fire when the angle is changed._

### Wheel Diameter

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Wheel Diameter')]]

| Type | Default |
|:----:|:-------:|
|number|4.32|

_Specifies the diameter of the wheels attached on motors._