# Arduino

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|1|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that connects the device via the USB Serial to Arduino hardware.

## Events

### After Read

[[Event('Arduino', 'After Read', 'success', 'data')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|
    |data|`text`|


Triggered after Read function

## Methods

### BaudRate

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |baud Rate|`number`|


Default baud rate is 9600 bps

### CloseArduino

_Block preview not available_

{>>Returns `boolean`<<}

Closes Arduino Connection

### InitializeArduino

_Block preview not available_

Initializes Arduino Connection

### IsOpenedArduino

_Block preview not available_

{>>Returns `boolean`<<}

Returns true when the Arduino connection is open

### OpenArduino

_Block preview not available_

{>>Returns `boolean`<<}

Opens Arduino Connection

### ReadArduino

_Block preview not available_

Read from Serial

### WriteArduino

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |data|`text`|


Write Data to Serial