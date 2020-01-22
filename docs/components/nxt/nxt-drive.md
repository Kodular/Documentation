# NXT Drive

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot._

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Drive Motors

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Drive Motors')]]

| Type | Default |
|:----:|:-------:|
|text|CB|

The motor ports that are used for driving: the left wheel's motor port followed by the right wheel's motor port.

### Stop Before Disconnect

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Stop Before Disconnect')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to stop the drive motors before disconnecting.

### Wheel Diameter

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Drive', 'Wheel Diameter')]]

| Type | Default |
|:----:|:-------:|
|number|4.32|

The diameter of the wheels used for driving.