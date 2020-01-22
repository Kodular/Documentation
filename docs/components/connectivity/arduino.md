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


_Triggered after Read function_

## Methods

### BaudRate

[[Method('Arduino', 'BaudRate', false, 'baudRate')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |baud Rate|`number`|


_Default baud rate is 9600 bps_

### CloseArduino

[[Method('Arduino', 'CloseArduino', true)]]

{>>Returns `boolean`<<}

_Closes Arduino Connection_

### InitializeArduino

[[Method('Arduino', 'InitializeArduino', false)]]

_Initializes Arduino Connection_

### IsOpenedArduino

[[Method('Arduino', 'IsOpenedArduino', true)]]

{>>Returns `boolean`<<}

_Returns true when the Arduino connection is open_

### OpenArduino

[[Method('Arduino', 'OpenArduino', true)]]

{>>Returns `boolean`<<}

_Opens Arduino Connection_

### ReadArduino

[[Method('Arduino', 'ReadArduino', false)]]

_Read from Serial_

### WriteArduino

[[Method('Arduino', 'WriteArduino', false, 'writeDataArduino')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |data|`text`|


_Write Data to Serial_