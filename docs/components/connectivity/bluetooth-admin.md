# Bluetooth Admin

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth admin.

## Events

### After Pairing

[[Event('Bluetooth Admin', 'After Pairing', 'address')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Event triggers when Pairing has finished.

### After Scanning

[[Event('Bluetooth Admin', 'After Scanning', 'pairedDevices', 'newDevices')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |paired Devices|`any`|
    |new Devices|`any`|


Event triggers when Scanning has finished.

### After Unpairing

[[Event('Bluetooth Admin', 'After Unpairing', 'address')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Event triggers when Unpairing has finished.

### Error Occurred

[[Event('Bluetooth Admin', 'Error Occurred', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


Event triggers when an error occurred.

### State Changed

[[Event('Bluetooth Admin', 'State Changed', 'state')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |state|`text`|


Event triggers when the bluetooth state changed.

## Methods

### Disable

_Block preview not available_

Disable Bluetooth

### Enable

_Block preview not available_

Enable Bluetooth

### HasBluetooth

_Block preview not available_

{>>Returns `boolean`<<}

Returns if the device has Bluetooth

### MacAddress

_Block preview not available_

{>>Returns `text`<<}

Returns the Bluetooth MacAddress.

### Pair

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Pair Bluetooth device.

### Scan

_Block preview not available_

Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected.

### ScanMode

_Block preview not available_

{>>Returns `text`<<}

Returns the scan mode of the Bluetooth Adapter

### State

_Block preview not available_

{>>Returns `text`<<}

Returns the state of the Bluetooth Adapter.

### Toggle

_Block preview not available_

Toggle Bluetooth

### Unpair

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Unpair Bluetooth device.

### ValidateMacAddress

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mac Address|`text`|


Returns true if the MacAddress is valid.

### ValidateUserMacAddress

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the User MacAddress is valid.

## Properties

### Use Codes

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Admin', 'Use Codes')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Use codes instead of strings in returns for ScanMode and State.