# NXT Direct Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

## Methods

### Delete File

[[Method('NXT Direct Commands', 'Delete File', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|Text|


Delete a file on the robot.

### Download File

[[Method('NXT Direct Commands', 'Download File', False, 'source', 'destination')]]

| Params | []() |
|--------|------|
|source|Text|
|destination|Text|


Download a file to the robot.

### Get Battery Level

[[Method('NXT Direct Commands', 'Get Battery Level', True)]]

{>>Returns `number`<<}

Get the battery level for the robot. Returns the voltage in millivolts.

### Get Brick Name

[[Method('NXT Direct Commands', 'Get Brick Name', True)]]

{>>Returns `text`<<}

Get the brick name of the robot.

### Get Current Program Name

[[Method('NXT Direct Commands', 'Get Current Program Name', True)]]

{>>Returns `text`<<}

Get the name of currently running program on the robot.

### Get Firmware Version

[[Method('NXT Direct Commands', 'Get Firmware Version', True)]]

{>>Returns `list`<<}

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

### Get Input Values

[[Method('NXT Direct Commands', 'Get Input Values', True, 'sensorPortLetter')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|sensor Port Letter|Text|


Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Get Output State

[[Method('NXT Direct Commands', 'Get Output State', True, 'motorPortLetter')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|motor Port Letter|Text|


Reads the output state of a motor on the robot.

### Keep Alive

[[Method('NXT Direct Commands', 'Keep Alive', True)]]

{>>Returns `number`<<}

Keep Alive. Returns the current sleep time limit in milliseconds.

### List Files

[[Method('NXT Direct Commands', 'List Files', True, 'wildcard')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|wildcard|Text|


Returns a list containing the names of matching files found on the robot.

### Ls Get Status

[[Method('NXT Direct Commands', 'Ls Get Status', True, 'sensorPortLetter')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|sensor Port Letter|Text|


Returns the count of available bytes to read.

### Ls Read

[[Method('NXT Direct Commands', 'Ls Read', True, 'sensorPortLetter')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|sensor Port Letter|Text|


Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Ls Write

[[Method('NXT Direct Commands', 'Ls Write', False, 'sensorPortLetter', 'list', 'rxDataLength')]]

| Params | []() |
|--------|------|
|sensor Port Letter|Text|
|list|List|
|rx Data Length|Number|


Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

### Message Read

[[Method('NXT Direct Commands', 'Message Read', True, 'mailbox')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|mailbox|Number|


Read a message from a mailbox (1-10) on the robot.

### Message Write

[[Method('NXT Direct Commands', 'Message Write', False, 'mailbox', 'message')]]

| Params | []() |
|--------|------|
|mailbox|Number|
|message|Text|


Write a message to a mailbox (1-10) on the robot.

### Play Sound File

[[Method('NXT Direct Commands', 'Play Sound File', False, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|Text|


Play a sound file on the robot.

### Play Tone

[[Method('NXT Direct Commands', 'Play Tone', False, 'frequencyHz', 'durationMs')]]

| Params | []() |
|--------|------|
|frequency Hz|Number|
|duration Ms|Number|


Make the robot play a tone.

### Reset Input Scaled Value

[[Method('NXT Direct Commands', 'Reset Input Scaled Value', False, 'sensorPortLetter')]]

| Params | []() |
|--------|------|
|sensor Port Letter|Text|


Reset the scaled value of an input sensor on the robot.

### Reset Motor Position

[[Method('NXT Direct Commands', 'Reset Motor Position', False, 'motorPortLetter', 'relative')]]

| Params | []() |
|--------|------|
|motor Port Letter|Text|
|relative|Boolean|


Reset motor position.

### Set Brick Name

[[Method('NXT Direct Commands', 'Set Brick Name', False, 'name')]]

| Params | []() |
|--------|------|
|name|Text|


Set the brick name of the robot.

### Set Input Mode

[[Method('NXT Direct Commands', 'Set Input Mode', False, 'sensorPortLetter', 'sensorType', 'sensorMode')]]

| Params | []() |
|--------|------|
|sensor Port Letter|Text|
|sensor Type|Number|
|sensor Mode|Number|


Configure an input sensor on the robot.

### Set Output State

[[Method('NXT Direct Commands', 'Set Output State', False, 'motorPortLetter', 'power', 'mode', 'regulationMode', 'turnRatio', 'runState', 'tachoLimit')]]

| Params | []() |
|--------|------|
|motor Port Letter|Text|
|power|Number|
|mode|Number|
|regulation Mode|Number|
|turn Ratio|Number|
|run State|Number|
|tacho Limit|Number|


Sets the output state of a motor on the robot.

### Start Program

[[Method('NXT Direct Commands', 'Start Program', False, 'programName')]]

| Params | []() |
|--------|------|
|program Name|Text|


Start execution of a previously downloaded program on the robot.

### Stop Program

[[Method('NXT Direct Commands', 'Stop Program', False)]]

Stop execution of the currently running program on the robot.

### Stop Sound Playback

[[Method('NXT Direct Commands', 'Stop Sound Playback', False)]]

Stop sound playback.

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('NXT Direct Commands', 'Bluetooth Client')]]