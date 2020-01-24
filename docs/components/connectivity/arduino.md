# Arduino

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that connects the device via the USB Serial to Arduino hardware.

## Events

### After Read

Triggered after Read function

[[Event('Arduino', 'After Read', 'success', 'data')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|data|<span class="chip chip-text">Text</span>|


## Methods

### Baud Rate

Default baud rate is 9600 bps

[[Method('Arduino', 'Baud Rate', False, 'baudRate')]]

| Params | []() |
|--------|------|
|baud Rate|<span class="chip chip-number">Number</span>|


### Close

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Closes Arduino Connection

[[Method('Arduino', 'Close', True)]]

### Initialize

Initializes Arduino Connection

[[Method('Arduino', 'Initialize', False)]]

### Is Opened

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true when the Arduino connection is open

[[Method('Arduino', 'Is Opened', True)]]

### Open

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Opens Arduino Connection

[[Method('Arduino', 'Open', True)]]

### Read

Read from Serial

[[Method('Arduino', 'Read', False)]]

### Write

Write Data to Serial

[[Method('Arduino', 'Write', False, 'writeDataArduino')]]

| Params | []() |
|--------|------|
|data|<span class="chip chip-text">Text</span>|
