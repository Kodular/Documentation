# Arduino

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|1|API 19, Android 4.4 - 4.4.4 KitKat|

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

### Baud Rate

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |baud Rate|`number`|


Default baud rate is 9600 bps

### Close

_Block preview not available_

{>>Returns `boolean`<<}

Closes Arduino Connection

### Initialize

_Block preview not available_

Initializes Arduino Connection

### Is Opened

_Block preview not available_

{>>Returns `boolean`<<}

Returns true when the Arduino connection is open

### Open

_Block preview not available_

{>>Returns `boolean`<<}

Opens Arduino Connection

### Read

_Block preview not available_

Read from Serial

### Write

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |data|`text`|


Write Data to Serial