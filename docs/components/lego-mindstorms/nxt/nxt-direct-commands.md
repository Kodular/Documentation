# NXT Direct Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

## Methods

### DeleteFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Delete a file on the robot.

### DownloadFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |source|`text`|
    |destination|`text`|


Download a file to the robot.

### GetBatteryLevel

_Block preview not available_

{>>Returns `number`<<}

Get the battery level for the robot. Returns the voltage in millivolts.

### GetBrickName

_Block preview not available_

{>>Returns `text`<<}

Get the brick name of the robot.

### GetCurrentProgramName

_Block preview not available_

{>>Returns `text`<<}

Get the name of currently running program on the robot.

### GetFirmwareVersion

_Block preview not available_

{>>Returns `list`<<}

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

### GetInputValues

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### GetOutputState

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|


Reads the output state of a motor on the robot.

### KeepAlive

_Block preview not available_

{>>Returns `number`<<}

Keep Alive. Returns the current sleep time limit in milliseconds.

### ListFiles

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |wildcard|`text`|


Returns a list containing the names of matching files found on the robot.

### LsGetStatus

_Block preview not available_

{>>Returns `number`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Returns the count of available bytes to read.

### LsRead

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### LsWrite

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |list|`list`|
    |rx Data Length|`number`|


Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### MessageRead

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mailbox|`number`|


Read a message from a mailbox (1-10) on the robot.

### MessageWrite

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mailbox|`number`|
    |message|`text`|


Write a message to a mailbox (1-10) on the robot.

### PlaySoundFile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |file Name|`text`|


Play a sound file on the robot.

### PlayTone

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |frequency Hz|`number`|
    |duration Ms|`number`|


Make the robot play a tone.

### ResetInputScaledValue

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


Reset the scaled value of an input sensor on the robot.

### ResetMotorPosition

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|
    |relative|`boolean`|


Reset motor position.

### SetBrickName

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |name|`text`|


Set the brick name of the robot.

### SetInputMode

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |sensor Type|`number`|
    |sensor Mode|`number`|


Configure an input sensor on the robot.

### SetOutputState

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

### StartProgram

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |program Name|`text`|


Start execution of a previously downloaded program on the robot.

### StopProgram

_Block preview not available_

Stop execution of the currently running program on the robot.

### StopSoundPlayback

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