# Bluetooth Admin

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth admin.

## Events

### After Pairing

Event triggers when Pairing has finished.

[[Event('Bluetooth Admin', 'After Pairing', 'address')]]

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### After Scanning

Event triggers when Scanning has finished.

[[Event('Bluetooth Admin', 'After Scanning', 'pairedDevices', 'newDevices')]]

| Params | []() |
|--------|------|
|paired Devices|<span class="chip chip-any">Any</span>|
|new Devices|<span class="chip chip-any">Any</span>|


### After Unpairing

Event triggers when Unpairing has finished.

[[Event('Bluetooth Admin', 'After Unpairing', 'address')]]

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### Error Occurred

Event triggers when an error occurred.

[[Event('Bluetooth Admin', 'Error Occurred', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### State Changed

Event triggers when the bluetooth state changed.

[[Event('Bluetooth Admin', 'State Changed', 'state')]]

| Params | []() |
|--------|------|
|state|<span class="chip chip-text">Text</span>|


## Methods

### Disable

Disable Bluetooth

[[Method('Bluetooth Admin', 'Disable', False)]]

### Enable

Enable Bluetooth

[[Method('Bluetooth Admin', 'Enable', False)]]

### Has Bluetooth

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns if the device has Bluetooth

[[Method('Bluetooth Admin', 'Has Bluetooth', True)]]

### Mac Address

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the Bluetooth MacAddress.

[[Method('Bluetooth Admin', 'Mac Address', True)]]

### Pair

Pair Bluetooth device.

[[Method('Bluetooth Admin', 'Pair', False, 'address')]]

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### Scan

Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected.

[[Method('Bluetooth Admin', 'Scan', False)]]

### Scan Mode

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the scan mode of the Bluetooth Adapter

[[Method('Bluetooth Admin', 'Scan Mode', True)]]

### State

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the state of the Bluetooth Adapter.

[[Method('Bluetooth Admin', 'State', True)]]

### Toggle

Toggle Bluetooth

[[Method('Bluetooth Admin', 'Toggle', False)]]

### Unpairing

Unpair Bluetooth device.

[[Method('Bluetooth Admin', 'Unpairing', False, 'address')]]

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### Validate Mac Address

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the MacAddress is valid.

[[Method('Bluetooth Admin', 'Validate Mac Address', True, 'macAddress')]]

| Params | []() |
|--------|------|
|mac Address|<span class="chip chip-text">Text</span>|


### Validate User Mac Address

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the User MacAddress is valid.

[[Method('Bluetooth Admin', 'Validate User Mac Address', True)]]

## Properties

### Use Codes

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Use codes instead of strings in returns for ScanMode and State.

[[PropertyBlockGetterAndSetter('Bluetooth Admin', 'Use Codes')]]