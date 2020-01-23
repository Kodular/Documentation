# EV3 Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS EV3 robot, with functions to send system or direct commands to EV3 robots.

## Methods

### GetBatteryCurrent

_Block preview not available_

{>>Returns `number`<<}

Get the battery current.

### GetBatteryVoltage

_Block preview not available_

{>>Returns `number`<<}

Get the battery voltage.

### GetFirmwareBuild

_Block preview not available_

{>>Returns `text`<<}

Get the firmware build on EV3.

### GetFirmwareVersion

_Block preview not available_

{>>Returns `text`<<}

Get the firmware version on EV3.

### GetHardwareVersion

_Block preview not available_

{>>Returns `text`<<}

Get the hardware version of EV3.

### GetOSBuild

_Block preview not available_

{>>Returns `text`<<}

Get the OS build on EV3.

### GetOSVersion

_Block preview not available_

{>>Returns `text`<<}

Get the OS version on EV3.

### KeepAlive

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |minutes|`number`|


Keep the EV3 brick from shutdown for a period of time.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Commands', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.