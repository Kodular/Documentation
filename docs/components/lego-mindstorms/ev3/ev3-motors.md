# EV3 Motors

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors.

## Events

### Tacho Count Changed

[[Event('EV3 Motors', 'Tacho Count Changed', 'tachoCount')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |tacho Count|`number`|


Called when the tacho count has changed.

## Methods

### Get Tacho Count

_Block preview not available_

{>>Returns `number`<<}

Get the current tacho count.

### Reset Tacho Count

_Block preview not available_

Set the current tacho count to zero.

### Rotate In Distance

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |use Brake|`boolean`|


Rotate the motors in a distance.

### Rotate In Duration

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |use Brake|`boolean`|


Rotate the motors in a period of time.

### Rotate In Tacho Counts

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |use Brake|`boolean`|


Rotate the motors in a number of tacho counts.

### Rotate Indefinitely

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|


Start to rotate the motors.

### Rotate Sync In Distance

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |distance|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed for a distance in cm.

### Rotate Sync In Duration

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |milliseconds|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed in a period of time.

### Rotate Sync In Tacho Counts

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |tacho Counts|`number`|
    |turn Ratio|`number`|
    |use Brake|`boolean`|


Rotate the motors at the same speed in a number of tacho counts.

### Rotate Sync Indefinitely

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |power|`number`|
    |turn Ratio|`number`|


Start to rotate the motors at the same speed.

### Stop

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |use Brake|`boolean`|


Stop the motors of the robot.

### Toggle Direction

_Block preview not available_

Toggle the direction of motors.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Enable Speed Regulation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Enable Speed Regulation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether to keep motor rotation at constant speed.

### Motor Ports

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Motor Ports')]]

| Type | Default |
|:----:|:-------:|
|text|ABC|

The motor ports that the motors are connected to. The ports are specified by a sequence of port letters.

### Reverse Direction

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Reverse Direction')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Set whether the direction of motors is reversed or not.

### Stop Before Disconnect

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Stop Before Disconnect')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to stop the motor before disconnecting.

### Tacho Count Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Tacho Count Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the TachoCountChanged event should fire when the angle is changed.

### Wheel Diameter

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Motors', 'Wheel Diameter')]]

| Type | Default |
|:----:|:-------:|
|number|4.32|

Specifies the diameter of the wheels attached on motors.