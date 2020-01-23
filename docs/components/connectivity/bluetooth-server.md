# Bluetooth Server

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|5|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth server.

## Events

### BluetoothError

The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

[[Event('Bluetooth Server', 'BluetoothError', 'functionName', 'message')]]

| Params | []() |
|--------|------|
|function Name|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Connection Accepted

Indicates that a bluetooth connection has been accepted.

[[Event('Bluetooth Server', 'Connection Accepted')]]

## Methods

### Accept Connection

Accept an incoming connection with the Serial Port Profile (SPP).

[[Method('Bluetooth Server', 'Accept Connection', False, 'serviceName')]]

| Params | []() |
|--------|------|
|service Name|<span class="chip chip-text">Text</span>|


### Accept Connection With UUID

Accept an incoming connection with a specific UUID.

[[Method('Bluetooth Server', 'Accept Connection With UUID', False, 'serviceName', 'uuid')]]

| Params | []() |
|--------|------|
|service Name|<span class="chip chip-text">Text</span>|
|uuid|<span class="chip chip-text">Text</span>|


### Bytes Available To Receive

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns an estimate of the number of bytes that can be received without blocking

[[Method('Bluetooth Server', 'Bytes Available To Receive', True)]]

### Disconnect

Disconnect from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Disconnect', False)]]

### Receive Signed 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 1-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Signed 1 Byte Number', True)]]

### Receive Signed 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 2-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Signed 2 Byte Number', True)]]

### Receive Signed 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 4-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Signed 4 Byte Number', True)]]

### Receive Signed Bytes

<span class="chip chip-list">Returns: <i>List</i></span> 

Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

[[Method('Bluetooth Server', 'Receive Signed Bytes', True, 'numberOfBytes')]]

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Receive Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

[[Method('Bluetooth Server', 'Receive Text', True, 'numberOfBytes')]]

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Receive Unsigned 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive an unsigned 1-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Unsigned 1 Byte Number', True)]]

### Receive Unsigned 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a unsigned 2-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Unsigned 2 Byte Number', True)]]

### Receive Unsigned 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a unsigned 4-byte number from the connected Bluetooth device.

[[Method('Bluetooth Server', 'Receive Unsigned 4 Byte Number', True)]]

### Receive Unsigned Bytes

<span class="chip chip-list">Returns: <i>List</i></span> 

Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

[[Method('Bluetooth Server', 'Receive Unsigned Bytes', True, 'numberOfBytes')]]

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Send 1 Byte Number

Send a 1-byte number to the connected Bluetooth device.

[[Method('Bluetooth Server', 'Send 1 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send 2 Byte Number

Send a 2-byte number to the connected Bluetooth device.

[[Method('Bluetooth Server', 'Send 2 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send 4 Byte Number

Send a 4-byte number to the connected Bluetooth device.

[[Method('Bluetooth Server', 'Send 4 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send Bytes

Send a list of byte values to the connected Bluetooth device.

[[Method('Bluetooth Server', 'Send Bytes', False, 'list')]]

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|


### Send Text

Send text to the connected Bluetooth device.

[[Method('Bluetooth Server', 'Send Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


### Stop Accepting

Stop accepting an incoming connection.

[[Method('Bluetooth Server', 'Stop Accepting', False)]]

## Properties

### Character Encoding

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the character encoding to use when sending and receiving text.

[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Character Encoding')]]

### Delimiter Byte

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the delimiter byte to use when passing a negative number for thenumberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, orReceiveUnsignedBytes.

[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Delimiter Byte')]]

### High Byte First

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true if numbers are sent and received with the most significantbyte first.

[[PropertyBlockGetterAndSetter('Bluetooth Server', 'High Byte First')]]

### Secure

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Secure')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Bluetooth is available on the device

[[PropertyBlockGetter('Bluetooth Server', 'Available')]]

### Enabled

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Whether Bluetooth is enabled

[[PropertyBlockGetter('Bluetooth Server', 'Enabled')]]

### Is Accepting

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if this BluetoothServer component is accepting anincoming connection.

[[PropertyBlockGetter('Bluetooth Server', 'Is Accepting')]]

### Is Connected

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns true if a connection to a Bluetooth device has been made.

[[PropertyBlockGetter('Bluetooth Server', 'Is Connected')]]