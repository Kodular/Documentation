# NXT Direct Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands._

## Methods

### DeleteFile

[[Method('NXT Direct Commands', 'DeleteFile', false, 'fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Delete a file on the robot._

### DownloadFile

[[Method('NXT Direct Commands', 'DownloadFile', false, 'source destination')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |source|`text`|
    |destination|`text`|


_Download a file to the robot._

### GetBatteryLevel

[[Method('NXT Direct Commands', 'GetBatteryLevel', true)]]

{>>Returns `number`<<}

_Get the battery level for the robot. Returns the voltage in millivolts._

### GetBrickName

[[Method('NXT Direct Commands', 'GetBrickName', true)]]

{>>Returns `text`<<}

_Get the brick name of the robot._

### GetCurrentProgramName

[[Method('NXT Direct Commands', 'GetCurrentProgramName', true)]]

{>>Returns `text`<<}

_Get the name of currently running program on the robot._

### GetFirmwareVersion

[[Method('NXT Direct Commands', 'GetFirmwareVersion', true)]]

{>>Returns `list`<<}

_Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number._

### GetInputValues

[[Method('NXT Direct Commands', 'GetInputValues', true, 'sensorPortLetter')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


_Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode._

### GetOutputState

[[Method('NXT Direct Commands', 'GetOutputState', true, 'motorPortLetter')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|


_Reads the output state of a motor on the robot._

### KeepAlive

[[Method('NXT Direct Commands', 'KeepAlive', true)]]

{>>Returns `number`<<}

_Keep Alive. Returns the current sleep time limit in milliseconds._

### ListFiles

[[Method('NXT Direct Commands', 'ListFiles', true, 'wildcard')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |wildcard|`text`|


_Returns a list containing the names of matching files found on the robot._

### LsGetStatus

[[Method('NXT Direct Commands', 'LsGetStatus', true, 'sensorPortLetter')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


_Returns the count of available bytes to read._

### LsRead

[[Method('NXT Direct Commands', 'LsRead', true, 'sensorPortLetter')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


_Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode._

### LsWrite

[[Method('NXT Direct Commands', 'LsWrite', false, 'sensorPortLetter list rxDataLength')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |list|`list`|
    |rx Data Length|`number`|


_Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode._

### MessageRead

[[Method('NXT Direct Commands', 'MessageRead', true, 'mailbox')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |mailbox|`number`|


_Read a message from a mailbox (1-10) on the robot._

### MessageWrite

[[Method('NXT Direct Commands', 'MessageWrite', false, 'mailbox message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |mailbox|`number`|
    |message|`text`|


_Write a message to a mailbox (1-10) on the robot._

### PlaySoundFile

[[Method('NXT Direct Commands', 'PlaySoundFile', false, 'fileName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Play a sound file on the robot._

### PlayTone

[[Method('NXT Direct Commands', 'PlayTone', false, 'frequencyHz durationMs')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |frequency Hz|`number`|
    |duration Ms|`number`|


_Make the robot play a tone._

### ResetInputScaledValue

[[Method('NXT Direct Commands', 'ResetInputScaledValue', false, 'sensorPortLetter')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|


_Reset the scaled value of an input sensor on the robot._

### ResetMotorPosition

[[Method('NXT Direct Commands', 'ResetMotorPosition', false, 'motorPortLetter relative')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |motor Port Letter|`text`|
    |relative|`boolean`|


_Reset motor position._

### SetBrickName

[[Method('NXT Direct Commands', 'SetBrickName', false, 'name')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |name|`text`|


_Set the brick name of the robot._

### SetInputMode

[[Method('NXT Direct Commands', 'SetInputMode', false, 'sensorPortLetter sensorType sensorMode')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Port Letter|`text`|
    |sensor Type|`number`|
    |sensor Mode|`number`|


_Configure an input sensor on the robot._

### SetOutputState

[[Method('NXT Direct Commands', 'SetOutputState', false, 'motorPortLetter power mode regulationMode turnRatio runState tachoLimit')]]

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


_Sets the output state of a motor on the robot._

### StartProgram

[[Method('NXT Direct Commands', 'StartProgram', false, 'programName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |program Name|`text`|


_Start execution of a previously downloaded program on the robot._

### StopProgram

[[Method('NXT Direct Commands', 'StopProgram', false)]]

_Stop execution of the currently running program on the robot._

### StopSoundPlayback

[[Method('NXT Direct Commands', 'StopSoundPlayback', false)]]

_Stop sound playback._

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Direct Commands', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._