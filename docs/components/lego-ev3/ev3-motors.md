# EV3 Motors

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® EV3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors._

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