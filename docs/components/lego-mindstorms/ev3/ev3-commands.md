# EV3 Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a low-level interface to a LEGO MINDSTORMS EV3 robot, with functions to send system or direct commands to EV3 robots._

## Methods

### GetBatteryCurrent

[[Method('EV3 Commands', 'GetBatteryCurrent', true)]]

{>>Returns `number`<<}

Get the battery current.

### GetBatteryVoltage

[[Method('EV3 Commands', 'GetBatteryVoltage', true)]]

{>>Returns `number`<<}

Get the battery voltage.

### GetFirmwareBuild

[[Method('EV3 Commands', 'GetFirmwareBuild', true)]]

{>>Returns `text`<<}

Get the firmware build on EV3.

### GetFirmwareVersion

[[Method('EV3 Commands', 'GetFirmwareVersion', true)]]

{>>Returns `text`<<}

Get the firmware version on EV3.

### GetHardwareVersion

[[Method('EV3 Commands', 'GetHardwareVersion', true)]]

{>>Returns `text`<<}

Get the hardware version of EV3.

### GetOSBuild

[[Method('EV3 Commands', 'GetOSBuild', true)]]

{>>Returns `text`<<}

Get the OS build on EV3.

### GetOSVersion

[[Method('EV3 Commands', 'GetOSVersion', true)]]

{>>Returns `text`<<}

Get the OS version on EV3.

### KeepAlive

[[Method('EV3 Commands', 'KeepAlive', false, 'minutes')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |minutes|`number`|


Keep the EV3 brick from shutdown for a period of time.

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Commands', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.