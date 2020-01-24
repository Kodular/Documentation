# NXT Direct Commands

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Methods

### Delete File

Delete a file on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Delete%20File%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22file%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Download File

Download a file to the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Download%20File%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22source%22,%20%22destination%22%5D%7D"></div>


| Params | []() |
|--------|------|
|source|<span class="chip chip-text">Text</span>|
|destination|<span class="chip chip-text">Text</span>|


### Get Battery Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the battery level for the robot. Returns the voltage in millivolts.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Battery%20Level%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Brick Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the brick name of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Brick%20Name%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Current Program Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the name of currently running program on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Current%20Program%20Name%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Firmware Version

<span class="chip chip-list">Returns: <i>List</i></span> 

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Firmware%20Version%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Input Values

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Input%20Values%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Get Output State

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads the output state of a motor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Output%20State%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22motor%20Port%20Letter%22%5D%7D"></div>


| Params | []() |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span>|


### Keep Alive

<span class="chip chip-number">Returns: <i>Number</i></span> 

Keep Alive. Returns the current sleep time limit in milliseconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Keep%20Alive%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### List Files

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns a list containing the names of matching files found on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22List%20Files%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22wildcard%22%5D%7D"></div>


| Params | []() |
|--------|------|
|wildcard|<span class="chip chip-text">Text</span>|


### Ls Get Status

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the count of available bytes to read.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Get%20Status%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Ls Read

<span class="chip chip-list">Returns: <i>List</i></span> 

Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Read%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Ls Write

Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Write%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22,%20%22list%22,%20%22rx%20Data%20Length%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|
|list|<span class="chip chip-list">List</span>|
|rx Data Length|<span class="chip chip-number">Number</span>|


### Message Read

<span class="chip chip-text">Returns: <i>Text</i></span> 

Read a message from a mailbox (1-10) on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Message%20Read%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22mailbox%22%5D%7D"></div>


| Params | []() |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span>|


### Message Write

Write a message to a mailbox (1-10) on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Message%20Write%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22mailbox%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span>|
|message|<span class="chip chip-text">Text</span>|


### Play Sound File

Play a sound file on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Play%20Sound%20File%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22file%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Play Tone

Make the robot play a tone.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Play%20Tone%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22frequency%20Hz%22,%20%22duration%20Ms%22%5D%7D"></div>


| Params | []() |
|--------|------|
|frequency Hz|<span class="chip chip-number">Number</span>|
|duration Ms|<span class="chip chip-number">Number</span>|


### Reset Input Scaled Value

Reset the scaled value of an input sensor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Reset%20Input%20Scaled%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|


### Reset Motor Position

Reset motor position.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Reset%20Motor%20Position%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22motor%20Port%20Letter%22,%20%22relative%22%5D%7D"></div>


| Params | []() |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span>|
|relative|<span class="chip chip-boolean">Boolean</span>|


### Set Brick Name

Set the brick name of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Brick%20Name%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|


### Set Input Mode

Configure an input sensor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Input%20Mode%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22sensor%20Port%20Letter%22,%20%22sensor%20Type%22,%20%22sensor%20Mode%22%5D%7D"></div>


| Params | []() |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span>|
|sensor Type|<span class="chip chip-number">Number</span>|
|sensor Mode|<span class="chip chip-number">Number</span>|


### Set Output State

Sets the output state of a motor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Output%20State%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22motor%20Port%20Letter%22,%20%22power%22,%20%22mode%22,%20%22regulation%20Mode%22,%20%22turn%20Ratio%22,%20%22run%20State%22,%20%22tacho%20Limit%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Start%20Program%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22program%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|program Name|<span class="chip chip-text">Text</span>|


### Stop Program

Stop execution of the currently running program on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Stop%20Program%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Stop Sound Playback

Stop sound playback.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Stop%20Sound%20Playback%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The BluetoothClient component that should be used for communication.
