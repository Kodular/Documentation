# Bluetooth Admin

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that acts as a bluetooth admin._

## Properties

### Use Codes

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Admin', 'Use Codes')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Use codes instead of strings in returns for ScanMode and State.

## Methods

### Disable



[[Method('Bluetooth Admin', 'Disable', false)]]

Disable Bluetooth

### Enable



[[Method('Bluetooth Admin', 'Enable', false)]]

Enable Bluetooth

### HasBluetooth



[[Method('Bluetooth Admin', 'HasBluetooth', true)]]

{>>Returns `boolean`<<}


Returns if the device has Bluetooth

### MacAddress



[[Method('Bluetooth Admin', 'MacAddress', true)]]

{>>Returns `text`<<}


Returns the Bluetooth MacAddress.

### Pair



[[Method('Bluetooth Admin', 'Pair', false, 'address')]]

**Parameters**

| Name | Type |
|------|------|
|address|`text`|


Pair Bluetooth device.

### Scan



[[Method('Bluetooth Admin', 'Scan', false)]]

Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected.

### ScanMode



[[Method('Bluetooth Admin', 'ScanMode', true)]]

{>>Returns `text`<<}


Returns the scan mode of the Bluetooth Adapter

### State



[[Method('Bluetooth Admin', 'State', true)]]

{>>Returns `text`<<}


Returns the state of the Bluetooth Adapter.

### Toggle



[[Method('Bluetooth Admin', 'Toggle', false)]]

Toggle Bluetooth

### Unpair



[[Method('Bluetooth Admin', 'Unpair', false, 'address')]]

**Parameters**

| Name | Type |
|------|------|
|address|`text`|


Unpair Bluetooth device.

### ValidateMacAddress



[[Method('Bluetooth Admin', 'ValidateMacAddress', true, 'macAddress')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|mac Address|`text`|


Returns true if the MacAddress is valid.

### ValidateUserMacAddress



[[Method('Bluetooth Admin', 'ValidateUserMacAddress', true)]]

{>>Returns `boolean`<<}


Returns true if the User MacAddress is valid.