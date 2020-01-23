# Bluetooth Server

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|5|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth server.

## Events

### BluetoothError

[[Event('Bluetooth Server', 'BluetoothError', 'functionName', 'message')]]

| Params | []() |
|--------|------|
|function Name|Text|
|message|Text|


The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

### Connection Accepted

[[Event('Bluetooth Server', 'Connection Accepted')]]

Indicates that a bluetooth connection has been accepted.

## Methods

### Accept Connection

[[Method('Bluetooth Server', 'Accept Connection', False, 'serviceName')]]

| Params | []() |
|--------|------|
|service Name|Text|


Accept an incoming connection with the Serial Port Profile (SPP).

### Accept Connection With UUID

[[Method('Bluetooth Server', 'Accept Connection With UUID', False, 'serviceName', 'uuid')]]

| Params | []() |
|--------|------|
|service Name|Text|
|uuid|Text|


Accept an incoming connection with a specific UUID.

### Bytes Available To Receive

[[Method('Bluetooth Server', 'Bytes Available To Receive', True)]]

{>>Returns `number`<<}

Returns an estimate of the number of bytes that can be received without blocking

### Disconnect

[[Method('Bluetooth Server', 'Disconnect', False)]]

Disconnect from the connected Bluetooth device.

### Receive Signed 1 Byte Number

[[Method('Bluetooth Server', 'Receive Signed 1 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 1-byte number from the connected Bluetooth device.

### Receive Signed 2 Byte Number

[[Method('Bluetooth Server', 'Receive Signed 2 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 2-byte number from the connected Bluetooth device.

### Receive Signed 4 Byte Number

[[Method('Bluetooth Server', 'Receive Signed 4 Byte Number', True)]]

{>>Returns `number`<<}

Receive a signed 4-byte number from the connected Bluetooth device.

### Receive Signed Bytes

[[Method('Bluetooth Server', 'Receive Signed Bytes', True, 'numberOfBytes')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Text

[[Method('Bluetooth Server', 'Receive Text', True, 'numberOfBytes')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Unsigned 1 Byte Number

[[Method('Bluetooth Server', 'Receive Unsigned 1 Byte Number', True)]]

{>>Returns `number`<<}

Receive an unsigned 1-byte number from the connected Bluetooth device.

### Receive Unsigned 2 Byte Number

[[Method('Bluetooth Server', 'Receive Unsigned 2 Byte Number', True)]]

{>>Returns `number`<<}

Receive a unsigned 2-byte number from the connected Bluetooth device.

### Receive Unsigned 4 Byte Number

[[Method('Bluetooth Server', 'Receive Unsigned 4 Byte Number', True)]]

{>>Returns `number`<<}

Receive a unsigned 4-byte number from the connected Bluetooth device.

### Receive Unsigned Bytes

[[Method('Bluetooth Server', 'Receive Unsigned Bytes', True, 'numberOfBytes')]]

{>>Returns `list`<<}

| Params | []() |
|--------|------|
|number Of Bytes|Number|


Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Send 1 Byte Number

[[Method('Bluetooth Server', 'Send 1 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 1-byte number to the connected Bluetooth device.

### Send 2 Byte Number

[[Method('Bluetooth Server', 'Send 2 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 2-byte number to the connected Bluetooth device.

### Send 4 Byte Number

[[Method('Bluetooth Server', 'Send 4 Byte Number', False, 'number')]]

| Params | []() |
|--------|------|
|number|Text|


Send a 4-byte number to the connected Bluetooth device.

### Send Bytes

[[Method('Bluetooth Server', 'Send Bytes', False, 'list')]]

| Params | []() |
|--------|------|
|list|List|


Send a list of byte values to the connected Bluetooth device.

### Send Text

[[Method('Bluetooth Server', 'Send Text', False, 'text')]]

| Params | []() |
|--------|------|
|text|Text|


Send text to the connected Bluetooth device.

### Stop Accepting

[[Method('Bluetooth Server', 'Stop Accepting', False)]]

Stop accepting an incoming connection.

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