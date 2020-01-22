# Arduino

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that connects the device via the USB Serial to Arduino hardware._

## Events

### After Read

[[Event('Arduino', 'After Read', 'success data')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|
    |data|`text`|


Triggered after Read function

## Methods

### BaudRate

[[Method('Arduino', 'BaudRate', false, 'baudRate')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |baud Rate|`number`|


Default baud rate is 9600 bps

### CloseArduino

[[Method('Arduino', 'CloseArduino', true)]]

{>>Returns `boolean`<<}

Closes Arduino Connection

### InitializeArduino

[[Method('Arduino', 'InitializeArduino', false)]]

Initializes Arduino Connection

### IsOpenedArduino

[[Method('Arduino', 'IsOpenedArduino', true)]]

{>>Returns `boolean`<<}

Returns true when the Arduino connection is open

### OpenArduino

[[Method('Arduino', 'OpenArduino', true)]]

{>>Returns `boolean`<<}

Opens Arduino Connection

### ReadArduino

[[Method('Arduino', 'ReadArduino', false)]]

Read from Serial

### WriteArduino

[[Method('Arduino', 'WriteArduino', false, 'writeDataArduino')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |data|`text`|


Write Data to Serial