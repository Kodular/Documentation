# Bluetooth Admin

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth admin.

## Events

### After Pairing

[[Event('Bluetooth Admin', 'After Pairing', 'address')]]

| Params | []() |
|--------|------|
|address|Text|


Event triggers when Pairing has finished.

### After Scanning

[[Event('Bluetooth Admin', 'After Scanning', 'pairedDevices', 'newDevices')]]

| Params | []() |
|--------|------|
|paired Devices|Any|
|new Devices|Any|


Event triggers when Scanning has finished.

### After Unpairing

[[Event('Bluetooth Admin', 'After Unpairing', 'address')]]

| Params | []() |
|--------|------|
|address|Text|


Event triggers when Unpairing has finished.

### Error Occurred

[[Event('Bluetooth Admin', 'Error Occurred', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Event triggers when an error occurred.

### State Changed

[[Event('Bluetooth Admin', 'State Changed', 'state')]]

| Params | []() |
|--------|------|
|state|Text|


Event triggers when the bluetooth state changed.

## Methods

### Disable

[[Method('Bluetooth Admin', 'Disable', False)]]

Disable Bluetooth

### Enable

[[Method('Bluetooth Admin', 'Enable', False)]]

Enable Bluetooth

### Has Bluetooth

[[Method('Bluetooth Admin', 'Has Bluetooth', True)]]

{>>Returns `boolean`<<}

Returns if the device has Bluetooth

### Mac Address

[[Method('Bluetooth Admin', 'Mac Address', True)]]

{>>Returns `text`<<}

Returns the Bluetooth MacAddress.

### Pair

[[Method('Bluetooth Admin', 'Pair', False, 'address')]]

| Params | []() |
|--------|------|
|address|Text|


Pair Bluetooth device.

### Scan

[[Method('Bluetooth Admin', 'Scan', False)]]

Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected.

### Scan Mode

[[Method('Bluetooth Admin', 'Scan Mode', True)]]

{>>Returns `text`<<}

Returns the scan mode of the Bluetooth Adapter

### State

[[Method('Bluetooth Admin', 'State', True)]]

{>>Returns `text`<<}

Returns the state of the Bluetooth Adapter.

### Toggle

[[Method('Bluetooth Admin', 'Toggle', False)]]

Toggle Bluetooth

### Unpairing

[[Method('Bluetooth Admin', 'Unpairing', False, 'address')]]

| Params | []() |
|--------|------|
|address|Text|


Unpair Bluetooth device.

### Validate Mac Address

[[Method('Bluetooth Admin', 'Validate Mac Address', True, 'macAddress')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|mac Address|Text|


Returns true if the MacAddress is valid.

### Validate User Mac Address

[[Method('Bluetooth Admin', 'Validate User Mac Address', True)]]

{>>Returns `boolean`<<}

Returns true if the User MacAddress is valid.

## Properties

### Use Codes

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Use codes instead of strings in returns for ScanMode and State.

[[PropertyBlockGetterAndSetter('Bluetooth Admin', 'Use Codes')]]