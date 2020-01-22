# NXT Direct Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands._

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Direct Commands', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

## Methods

### DeleteFile



[[Method('NXT Direct Commands', 'DeleteFile', false, 'fileName')]]

**Parameters**

| Name | Type |
|------|------|
|file Name|`text`|


Delete a file on the robot.

### DownloadFile



[[Method('NXT Direct Commands', 'DownloadFile', false, 'source destination')]]

**Parameters**

| Name | Type |
|------|------|
|source|`text`|
|destination|`text`|


Download a file to the robot.

### GetBatteryLevel



[[Method('NXT Direct Commands', 'GetBatteryLevel', true)]]

{>>Returns `number`<<}


Get the battery level for the robot. Returns the voltage in millivolts.

### GetBrickName



[[Method('NXT Direct Commands', 'GetBrickName', true)]]

{>>Returns `text`<<}


Get the brick name of the robot.

### GetCurrentProgramName



[[Method('NXT Direct Commands', 'GetCurrentProgramName', true)]]

{>>Returns `text`<<}


Get the name of currently running program on the robot.

### GetFirmwareVersion



[[Method('NXT Direct Commands', 'GetFirmwareVersion', true)]]

{>>Returns `list`<<}


Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

### GetInputValues



[[Method('NXT Direct Commands', 'GetInputValues', true, 'sensorPortLetter')]]

{>>Returns `list`<<}


**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|


Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### GetOutputState



[[Method('NXT Direct Commands', 'GetOutputState', true, 'motorPortLetter')]]

{>>Returns `list`<<}


**Parameters**

| Name | Type |
|------|------|
|motor Port Letter|`text`|


Reads the output state of a motor on the robot.

### KeepAlive



[[Method('NXT Direct Commands', 'KeepAlive', true)]]

{>>Returns `number`<<}


Keep Alive. Returns the current sleep time limit in milliseconds.

### ListFiles



[[Method('NXT Direct Commands', 'ListFiles', true, 'wildcard')]]

{>>Returns `list`<<}


**Parameters**

| Name | Type |
|------|------|
|wildcard|`text`|


Returns a list containing the names of matching files found on the robot.

### LsGetStatus



[[Method('NXT Direct Commands', 'LsGetStatus', true, 'sensorPortLetter')]]

{>>Returns `number`<<}


**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|


Returns the count of available bytes to read.

### LsRead



[[Method('NXT Direct Commands', 'LsRead', true, 'sensorPortLetter')]]

{>>Returns `list`<<}


**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|


Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### LsWrite



[[Method('NXT Direct Commands', 'LsWrite', false, 'sensorPortLetter list rxDataLength')]]

**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|
|list|`list`|
|rx Data Length|`number`|


Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### MessageRead



[[Method('NXT Direct Commands', 'MessageRead', true, 'mailbox')]]

{>>Returns `text`<<}


**Parameters**

| Name | Type |
|------|------|
|mailbox|`number`|


Read a message from a mailbox (1-10) on the robot.

### MessageWrite



[[Method('NXT Direct Commands', 'MessageWrite', false, 'mailbox message')]]

**Parameters**

| Name | Type |
|------|------|
|mailbox|`number`|
|message|`text`|


Write a message to a mailbox (1-10) on the robot.

### PlaySoundFile



[[Method('NXT Direct Commands', 'PlaySoundFile', false, 'fileName')]]

**Parameters**

| Name | Type |
|------|------|
|file Name|`text`|


Play a sound file on the robot.

### PlayTone



[[Method('NXT Direct Commands', 'PlayTone', false, 'frequencyHz durationMs')]]

**Parameters**

| Name | Type |
|------|------|
|frequency Hz|`number`|
|duration Ms|`number`|


Make the robot play a tone.

### ResetInputScaledValue



[[Method('NXT Direct Commands', 'ResetInputScaledValue', false, 'sensorPortLetter')]]

**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|


Reset the scaled value of an input sensor on the robot.

### ResetMotorPosition



[[Method('NXT Direct Commands', 'ResetMotorPosition', false, 'motorPortLetter relative')]]

**Parameters**

| Name | Type |
|------|------|
|motor Port Letter|`text`|
|relative|`boolean`|


Reset motor position.

### SetBrickName



[[Method('NXT Direct Commands', 'SetBrickName', false, 'name')]]

**Parameters**

| Name | Type |
|------|------|
|name|`text`|


Set the brick name of the robot.

### SetInputMode



[[Method('NXT Direct Commands', 'SetInputMode', false, 'sensorPortLetter sensorType sensorMode')]]

**Parameters**

| Name | Type |
|------|------|
|sensor Port Letter|`text`|
|sensor Type|`number`|
|sensor Mode|`number`|


Configure an input sensor on the robot.

### SetOutputState



[[Method('NXT Direct Commands', 'SetOutputState', false, 'motorPortLetter power mode regulationMode turnRatio runState tachoLimit')]]

**Parameters**

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



[[Method('NXT Direct Commands', 'StartProgram', false, 'programName')]]

**Parameters**

| Name | Type |
|------|------|
|program Name|`text`|


Start execution of a previously downloaded program on the robot.

### StopProgram



[[Method('NXT Direct Commands', 'StopProgram', false)]]

Stop execution of the currently running program on the robot.

### StopSoundPlayback



[[Method('NXT Direct Commands', 'StopSoundPlayback', false)]]

Stop sound playback.