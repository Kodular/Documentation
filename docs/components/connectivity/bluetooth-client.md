# Bluetooth Client

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|6|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth client.

## Events

### BluetoothError

[[Event('Bluetooth Client', 'BluetoothError', 'functionName', 'message')]]

| Params | []() |
|--------|------|
|function Name|Text|
|message|Text|


The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

## Methods

### Bytes Available To Receive

[[Method('Bluetooth Client', 'Bytes Available To Receive', True)]]

{>>Returns `number`<<}

Returns an estimate of the number of bytes that can be received without blocking

### Connect

[[Method('Bluetooth Client', 'Connect', True, 'address')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|address|Text|


Connect to the Bluetooth device with the specified address and the Serial Port Profile (SPP). Returns true if the connection was successful.

### Connect With UUID

[[Method('Bluetooth Client', 'Connect With UUID', True, 'address', 'uuid')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|address|Text|
|uuid|Text|


Connect to the Bluetooth device with the specified address and UUID. Returns true if the connection was successful.

### Disconnect

[[Method('Bluetooth Client', 'Disconnect', False)]]

Disconnect from the connected Bluetooth device.

### Is Device Paired

[[Method('Bluetooth Client', 'Is Device Paired', True, 'address')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|address|Text|


Checks whether the Bluetooth device with the specified address is paired.

### Receive Signed 1 Byte Number

[[Method('Bluetooth Client', 'Receive Signed 1 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 1-byte number from the connected Bluetooth device.

### Receive Signed 2 Byte Number

[[Method('Bluetooth Client', 'Receive Signed 2 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 2-byte number from the connected Bluetooth device.

### Receive Signed 4 Byte Number

[[Method('Bluetooth Client', 'Receive Signed 4 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 4-byte number from the connected Bluetooth device.

### Receive Signed Bytes

[[Method('Bluetooth Client', 'Receive Signed Bytes', True, 'numberOfBytes')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Text

[[Method('Bluetooth Client', 'Receive Text', True, 'numberOfBytes')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Unsigned 1 Byte Number

[[Method('Bluetooth Client', 'Receive Unsigned 1 Byte Number', True)]]

{>>Returns `number`<<}

Receive an unsigned 1-byte number from the connected Bluetooth device.

### Receive Unsigned 2 Byte Number

[[Method('Bluetooth Client', 'Receive Unsigned 2 Byte Number', True)]]

{>>Returns `number`<<}

Receive a unsigned 2-byte number from the connected Bluetooth device.

### Receive Unsigned 4 Byte Number

[[Method('Bluetooth Client', 'Receive Unsigned 4 Byte Number', True)]]

{>>Returns `number`<<}

Receive a unsigned 4-byte number from the connected Bluetooth device.

### Receive Unsigned Bytes

[[Method('Bluetooth Client', 'Receive Unsigned Bytes', True, 'numberOfBytes')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Remove Name From Address

[[Method('Bluetooth Client', 'Remove Name From Address', True, 'addressAndName')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|address And Name|Text|


Remove the Name from a Bluetooth Address and Name String.

### Send 1 Byte Number

[[Method('Bluetooth Client', 'Send 1 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 1-byte number to the connected Bluetooth device.

### Send 2 Byte Number

[[Method('Bluetooth Client', 'Send 2 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 2-byte number to the connected Bluetooth device.

### Send 4 Byte Number

[[Method('Bluetooth Client', 'Send 4 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 4-byte number to the connected Bluetooth device.

### Send Bytes

[[Method('Bluetooth Client', 'Send Bytes', False, 'list')]]

| Params | []() |
|--------|------|
|list|List|


Send a list of byte values to the connected Bluetooth device.

### Send Text

[[Method('Bluetooth Client', 'Send Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|Text|


Send text to the connected Bluetooth device.

## Properties

### Character Encoding

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the character encoding to use when sending and receiving text.

[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Character Encoding')]]

### Delimiter Byte

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the delimiter byte to use when passing a negative number for thenumberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, orReceiveUnsignedBytes.

[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Delimiter Byte')]]

### High Byte First

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if numbers are sent and received with the most significantbyte first.

[[PropertyBlockGetterAndSetter('Bluetooth Client', 'High Byte First')]]

### Secure

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Secure')]]

### Addresses And Names

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The addresses and names of paired Bluetooth devices

[[PropertyBlockGetter('Bluetooth Client', 'Addresses And Names')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Bluetooth is available on the device

[[PropertyBlockGetter('Bluetooth Client', 'Available')]]

### Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Bluetooth is enabled

[[PropertyBlockGetter('Bluetooth Client', 'Enabled')]]

### Is Connected

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if a connection to a Bluetooth device has been made.

[[PropertyBlockGetter('Bluetooth Client', 'Is Connected')]]