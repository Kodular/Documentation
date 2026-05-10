# NXT Direct Commands

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

## Methods

### Delete File

Delete a file on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Delete%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%20Name%22%5D%7D"></div>

| Param | Type |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|

### Download File

Download a file to the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Download%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22source%22,%20%22destination%22%5D%7D"></div>

| Param | Type |
|--------|------|
|source|<span class="chip chip-text">Text</span>|
|destination|<span class="chip chip-text">Text</span>|

### Get Battery Level

<span class="chip chip-number">Returns: <i>Number</i></span>

Get the battery level for the robot. Returns the voltage in millivolts.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Battery%20Level%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Brick Name

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the brick name of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Brick%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Current Program Name

<span class="chip chip-text">Returns: <i>Text</i></span>

Get the name of currently running program on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Current%20Program%20Name%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Firmware Version

<span class="chip chip-list">Returns: <i>List</i></span>

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Firmware%20Version%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Input Values

<span class="chip chip-list">Returns: <i>List</i></span>

Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Input%20Values%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

### Get Output State

<span class="chip chip-list">Returns: <i>List</i></span>

Reads the output state of a motor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Get%20Output%20State%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22motor%20Port%20Letter%22%5D%7D"></div>

| Param | Type |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtMotorPort</span>|

| motor Port Letter Option | Value |
|--------|------|
|PortA|A|
|PortB|B|
|PortC|C|

### Keep Alive

<span class="chip chip-number">Returns: <i>Number</i></span>

Keep Alive. Returns the current sleep time limit in milliseconds.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Keep%20Alive%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### List Files

<span class="chip chip-list">Returns: <i>List</i></span>

Returns a list containing the names of matching files found on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22List%20Files%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22wildcard%22%5D%7D"></div>

| Param | Type |
|--------|------|
|wildcard|<span class="chip chip-text">Text</span>|

### Ls Get Status

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the count of available bytes to read.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Get%20Status%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

### Ls Read

<span class="chip chip-list">Returns: <i>List</i></span>

Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Read%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

### Ls Write

Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Ls%20Write%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22,%20%22list%22,%20%22rx%20Data%20Length%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|
|list|<span class="chip chip-list">List</span>|
|rx Data Length|<span class="chip chip-number">Number</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

### Message Read

<span class="chip chip-text">Returns: <i>Text</i></span>

Read a message from a mailbox (1-10) on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Message%20Read%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22mailbox%22%5D%7D"></div>

| Param | Type |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtMailbox</span>|

| mailbox Option | Value |
|--------|------|
|Box1|1|
|Box2|2|
|Box3|3|
|Box4|4|
|Box5|5|
|Box6|6|
|Box7|7|
|Box8|8|
|Box9|9|
|Box10|10|

### Message Write

Write a message to a mailbox (1-10) on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Message%20Write%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22mailbox%22,%20%22message%22%5D%7D"></div>

| Param | Type |
|--------|------|
|mailbox|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtMailbox</span>|
|message|<span class="chip chip-text">Text</span>|

| mailbox Option | Value |
|--------|------|
|Box1|1|
|Box2|2|
|Box3|3|
|Box4|4|
|Box5|5|
|Box6|6|
|Box7|7|
|Box8|8|
|Box9|9|
|Box10|10|

### Play Sound File

Play a sound file on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Play%20Sound%20File%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22file%20Name%22%5D%7D"></div>

| Param | Type |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|

### Play Tone

Make the robot play a tone.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Play%20Tone%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22frequency%20Hz%22,%20%22duration%20Ms%22%5D%7D"></div>

| Param | Type |
|--------|------|
|frequency Hz|<span class="chip chip-number">Number</span>|
|duration Ms|<span class="chip chip-number">Number</span>|

### Reset Input Scaled Value

Reset the scaled value of an input sensor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Reset%20Input%20Scaled%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

### Reset Motor Position

Reset motor position.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Reset%20Motor%20Position%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22motor%20Port%20Letter%22,%20%22relative%22%5D%7D"></div>

| Param | Type |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtMotorPort</span>|
|relative|<span class="chip chip-boolean">Boolean</span>|

| motor Port Letter Option | Value |
|--------|------|
|PortA|A|
|PortB|B|
|PortC|C|

### Set Brick Name

Set the brick name of the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Brick%20Name%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22name%22%5D%7D"></div>

| Param | Type |
|--------|------|
|name|<span class="chip chip-text">Text</span>|

### Set Input Mode

Configure an input sensor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Input%20Mode%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22sensor%20Port%20Letter%22,%20%22sensor%20Type%22,%20%22sensor%20Mode%22%5D%7D"></div>

| Param | Type |
|--------|------|
|sensor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtSensorPort</span>|
|sensor Type|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtSensorType</span>|
|sensor Mode|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtSensorMode</span>|

| sensor Port Letter Option | Value |
|--------|------|
|Port1|1|
|Port2|2|
|Port3|3|
|Port4|4|

| sensor Type Option | Value |
|--------|------|
|NoSensor|0|
|Touch|1|
|LightOn|5|
|LightOff|6|
|SoundDB|7|
|SoundDBA|8|
|ColorFull|13|
|ColorRed|14|
|ColorGreen|15|
|ColorBlue|16|
|ColorNone|17|
|Digital12C|10|
|Digital12C9V|11|
|RcxTemperature|2|
|RcxLight|3|
|RcxAngle|4|

| sensor Mode Option | Value |
|--------|------|
|Raw|0|
|Boolean|32|
|TransitionCount|96|
|PeriodCount|96|
|Percentage|128|
|RcxCelsius|160|
|RcxFahrenheit|192|
|RcxAngleSteps|224|

### Set Output State

Sets the output state of a motor on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Set%20Output%20State%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22motor%20Port%20Letter%22,%20%22power%22,%20%22mode%22,%20%22regulation%20Mode%22,%20%22turn%20Ratio%22,%20%22run%20State%22,%20%22tacho%20Limit%22%5D%7D"></div>

| Param | Type |
|--------|------|
|motor Port Letter|<span class="chip chip-text">Text</span><br><span class="chip chip-enum">NxtMotorPort</span>|
|power|<span class="chip chip-number">Number</span>|
|mode|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtMotorMode</span>|
|regulation Mode|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtRegulationMode</span>|
|turn Ratio|<span class="chip chip-number">Number</span>|
|run State|<span class="chip chip-number">Number</span><br><span class="chip chip-enum">NxtRunState</span>|
|tacho Limit|<span class="chip chip-number">Number</span>|

| motor Port Letter Option | Value |
|--------|------|
|PortA|A|
|PortB|B|
|PortC|C|

| mode Option | Value |
|--------|------|
|On|1|
|Brake|2|
|Regulated|4|
|Coast|0|

| regulation Mode Option | Value |
|--------|------|
|Disabled|0|
|Speed|1|
|Synchronization|2|

| run State Option | Value |
|--------|------|
|Disabled|0|
|Running|32|
|RampUp|16|
|RampDown|64|

### Start Program

Start execution of a previously downloaded program on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Start%20Program%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22program%20Name%22%5D%7D"></div>

| Param | Type |
|--------|------|
|program Name|<span class="chip chip-text">Text</span>|

### Stop Program

Stop execution of the currently running program on the robot.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Stop%20Program%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Sound Playback

Stop sound playback.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Direct%20Commands%22,%20%22name%22:%20%22Stop%20Sound%20Playback%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Bluetooth Client

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The BluetoothClient component that should be used for communication.
