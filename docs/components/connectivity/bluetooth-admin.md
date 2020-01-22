# Bluetooth Admin

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that acts as a bluetooth admin._

## Events

### After Pairing

[[Event('Bluetooth Admin', 'After Pairing', 'address')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Event triggers when Pairing has finished._

### After Scanning

[[Event('Bluetooth Admin', 'After Scanning', 'pairedDevices newDevices')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |paired Devices|`any`|
    |new Devices|`any`|


_Event triggers when Scanning has finished._

### After Unpairing

[[Event('Bluetooth Admin', 'After Unpairing', 'address')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Event triggers when Unpairing has finished._

### Error Occurred

[[Event('Bluetooth Admin', 'Error Occurred', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Event triggers when an error occurred._

### State Changed

[[Event('Bluetooth Admin', 'State Changed', 'state')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |state|`text`|


_Event triggers when the bluetooth state changed._

## Methods

### Disable

[[Method('Bluetooth Admin', 'Disable', false)]]

_Disable Bluetooth_

### Enable

[[Method('Bluetooth Admin', 'Enable', false)]]

_Enable Bluetooth_

### HasBluetooth

[[Method('Bluetooth Admin', 'HasBluetooth', true)]]

{>>Returns `boolean`<<}

_Returns if the device has Bluetooth_

### MacAddress

[[Method('Bluetooth Admin', 'MacAddress', true)]]

{>>Returns `text`<<}

_Returns the Bluetooth MacAddress._

### Pair

[[Method('Bluetooth Admin', 'Pair', false, 'address')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Pair Bluetooth device._

### Scan

[[Method('Bluetooth Admin', 'Scan', false)]]

_Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected._

### ScanMode

[[Method('Bluetooth Admin', 'ScanMode', true)]]

{>>Returns `text`<<}

_Returns the scan mode of the Bluetooth Adapter_

### State

[[Method('Bluetooth Admin', 'State', true)]]

{>>Returns `text`<<}

_Returns the state of the Bluetooth Adapter._

### Toggle

[[Method('Bluetooth Admin', 'Toggle', false)]]

_Toggle Bluetooth_

### Unpair

[[Method('Bluetooth Admin', 'Unpair', false, 'address')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Unpair Bluetooth device._

### ValidateMacAddress

[[Method('Bluetooth Admin', 'ValidateMacAddress', true, 'macAddress')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |mac Address|`text`|


_Returns true if the MacAddress is valid._

### ValidateUserMacAddress

[[Method('Bluetooth Admin', 'ValidateUserMacAddress', true)]]

{>>Returns `boolean`<<}

_Returns true if the User MacAddress is valid._

## Properties

### Use Codes

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Admin', 'Use Codes')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Use codes instead of strings in returns for ScanMode and State._