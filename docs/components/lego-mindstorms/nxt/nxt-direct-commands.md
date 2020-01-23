# NXT Direct Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

## Methods

### Delete File

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Delete a file on the robot.

### Download File

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |source|`text`|
    |destination|`text`|


Download a file to the robot.

### Get Battery Level

_Block preview not available_

{>>Returns `number`<<}

Get the battery level for the robot. Returns the voltage in millivolts.

### Get Brick Name

_Block preview not available_

{>>Returns `text`<<}

Get the brick name of the robot.

### Get Current Program Name

_Block preview not available_

{>>Returns `text`<<}

Get the name of currently running program on the robot.

### Get Firmware Version

_Block preview not available_

{>>Returns `list`<<}

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

### Get Input Values

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Get Output State

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|


Reads the output state of a motor on the robot.

### Keep Alive

_Block preview not available_

{>>Returns `number`<<}

Keep Alive. Returns the current sleep time limit in milliseconds.

### List Files

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |wildcard|`text`|


Returns a list containing the names of matching files found on the robot.

### Ls Get Status

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Returns the count of available bytes to read.

### Ls Read

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Ls Write

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |list|`list`|
    |rx Data Length|`number`|


Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Message Read

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mailbox|`number`|


Read a message from a mailbox (1-10) on the robot.

### Message Write

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mailbox|`number`|
    |message|`text`|


Write a message to a mailbox (1-10) on the robot.

### Play Sound File

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Play a sound file on the robot.

### Play Tone

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |frequency Hz|`number`|
    |duration Ms|`number`|


Make the robot play a tone.

### Reset Input Scaled Value

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reset the scaled value of an input sensor on the robot.

### Reset Motor Position

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|
    |relative|`boolean`|


Reset motor position.

### Set Brick Name

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |name|`text`|


Set the brick name of the robot.

### Set Input Mode

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |sensor Type|`number`|
    |sensor Mode|`number`|


Configure an input sensor on the robot.

### Set Output State

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|
    |power|`number`|
    |mode|`number`|
    |regulation Mode|`number`|
    |turn Ratio|`number`|
    |run State|`number`|
    |tacho Limit|`number`|


Sets the output state of a motor on the robot.

### Start Program

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |program Name|`text`|


Start execution of a previously downloaded program on the robot.

### Stop Program

_Block preview not available_

Stop execution of the currently running program on the robot.

### Stop Sound Playback

_Block preview not available_

Stop sound playback.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Direct Commands', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.