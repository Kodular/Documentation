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

| Params | []() |
|--------|------|
|success|Boolean|
|data|Text|


Triggered after Read function

## Methods

### Baud Rate

[[Method('Arduino', 'Baud Rate', False, 'baudRate')]]

| Params | []() |
|--------|------|
|baud Rate|Number|


Default baud rate is 9600 bps

### Close

[[Method('Arduino', 'Close', True)]]

{>>Returns `boolean`<<}

Closes Arduino Connection

### Initialize

[[Method('Arduino', 'Initialize', False)]]

Initializes Arduino Connection

### Is Opened

[[Method('Arduino', 'Is Opened', True)]]

{>>Returns `boolean`<<}

Returns true when the Arduino connection is open

### Open

[[Method('Arduino', 'Open', True)]]

{>>Returns `boolean`<<}

Opens Arduino Connection

### Read

[[Method('Arduino', 'Read', False)]]

Read from Serial

### Write

[[Method('Arduino', 'Write', False, 'writeDataArduino')]]

| Params | []() |
|--------|------|
|data|Text|


Write Data to Serial