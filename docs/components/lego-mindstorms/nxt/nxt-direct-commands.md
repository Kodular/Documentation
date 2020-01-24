# NXT Direct Commands

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Methods

### Delete File

Delete a file on the robot.

[[Method('NXT Direct Commands', 'Delete File', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Download File

Download a file to the robot.

[[Method('NXT Direct Commands', 'Download File', False, 'source', 'destination')]]

| Params | []() |
|--------|------|
|source|<span class="chip chip-text">Text</span>|
|destination|<span class="chip chip-text">Text</span>|


### Get Battery Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the battery level for the robot. Returns the voltage in millivolts.

[[Method('NXT Direct Commands', 'Get Battery Level', True)]]

### Get Brick Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the brick name of the robot.

[[Method('NXT Direct Commands', 'Get Brick Name', True)]]

### Get Current Program Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the name of currently running program on the robot.

[[Method('NXT Direct Commands', 'Get Current Program Name', True)]]

### Get Firmware Version

<span class="chip chip-list">Returns: <i>List</i></span> 

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

[[Method('NXT Direct Commands', 'Get Firmware Version', True)]]

### Get Input Values

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

[[Method('NXT Direct Commands', 'Get Input Values', True, 'sensorPortLetter')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Get Output State

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads the output state of a motor on the robot.

[[Method('NXT Direct Commands', 'Get Output State', True, 'motorPortLetter')]]

| Params | []() |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span>|


### Keep Alive

<span class="chip chip-number">Returns: <i>Number</i></span> 

Keep Alive. Returns the current sleep time limit in milliseconds.

[[Method('NXT Direct Commands', 'Keep Alive', True)]]

### List Files

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns a list containing the names of matching files found on the robot.

[[Method('NXT Direct Commands', 'List Files', True, 'wildcard')]]

| Params | []() |
|--------|------|
|wildcard|<span class="chip chip-text">Text</span>|


### Ls Get Status

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the count of available bytes to read.

[[Method('NXT Direct Commands', 'Ls Get Status', True, 'sensorPortLetter')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Ls Read

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

[[Method('NXT Direct Commands', 'Ls Read', True, 'sensorPortLetter')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Ls Write

Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

[[Method('NXT Direct Commands', 'Ls Write', False, 'sensorPortLetter', 'list', 'rxDataLength')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|
|list|<span class="chip chip-list">List</span>|
|rx Data Length|<span class="chip chip-number">Number</span>|


### Message Read

<span class="chip chip-text">Returns: <i>Text</i></span> 

Read a message from a mailbox (1-10) on the robot.

[[Method('NXT Direct Commands', 'Message Read', True, 'mailbox')]]

| Params | []() |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span>|


### Message Write

Write a message to a mailbox (1-10) on the robot.

[[Method('NXT Direct Commands', 'Message Write', False, 'mailbox', 'message')]]

| Params | []() |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|


### Play Sound File

Play a sound file on the robot.

[[Method('NXT Direct Commands', 'Play Sound File', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Play Tone

Make the robot play a tone.

[[Method('NXT Direct Commands', 'Play Tone', False, 'frequencyHz', 'durationMs')]]

| Params | []() |
|--------|------|
|frequency Hz|<span class="chip chip-number">Number</span>|
|duration Ms|<span class="chip chip-number">Number</span>|


### Reset Input Scaled Value

Reset the scaled value of an input sensor on the robot.

[[Method('NXT Direct Commands', 'Reset Input Scaled Value', False, 'sensorPortLetter')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Reset Motor Position

Reset motor position.

[[Method('NXT Direct Commands', 'Reset Motor Position', False, 'motorPortLetter', 'relative')]]

| Params | []() |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span>|
|relative|<span class="chip chip-boolean">Boolean</span>|


### Set Brick Name

Set the brick name of the robot.

[[Method('NXT Direct Commands', 'Set Brick Name', False, 'name')]]

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|


### Set Input Mode

Configure an input sensor on the robot.

[[Method('NXT Direct Commands', 'Set Input Mode', False, 'sensorPortLetter', 'sensorType', 'sensorMode')]]

| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|
|sensor Type|<span class="chip chip-number">Number</span>|
|sensor Mode|<span class="chip chip-number">Number</span>|


### Set Output State

Sets the output state of a motor on the robot.

[[Method('NXT Direct Commands', 'Set Output State', False, 'motorPortLetter', 'power', 'mode', 'regulationMode', 'turnRatio', 'runState', 'tachoLimit')]]

| Params | []() |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span>|
|power|<span class="chip chip-number">Number</span>|
|mode|<span class="chip chip-number">Number</span>|
|regulation Mode|<span class="chip chip-number">Number</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|run State|<span class="chip chip-number">Number</span>|
|tacho Limit|<span class="chip chip-number">Number</span>|


### Start Program

Start execution of a previously downloaded program on the robot.

[[Method('NXT Direct Commands', 'Start Program', False, 'programName')]]

| Params | []() |
|--------|------|
|program Name|<span class="chip chip-text">Text</span>|


### Stop Program

Stop execution of the currently running program on the robot.

[[Method('NXT Direct Commands', 'Stop Program', False)]]

### Stop Sound Playback

Stop sound playback.

[[Method('NXT Direct Commands', 'Stop Sound Playback', False)]]

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The BluetoothClient component that should be used for communication.