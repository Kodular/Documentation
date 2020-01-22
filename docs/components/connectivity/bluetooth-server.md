# Bluetooth Server

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|5|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that acts as a bluetooth server._

## Events

### BluetoothError

[[Event('Bluetooth Server', 'BluetoothError', 'functionName message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |function Name|`text`|
    |message|`text`|


The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

### Connection Accepted

[[Event('Bluetooth Server', 'Connection Accepted')]]

Indicates that a bluetooth connection has been accepted.

## Methods

### AcceptConnection

[[Method('Bluetooth Server', 'AcceptConnection', false, 'serviceName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |service Name|`text`|


Accept an incoming connection with the Serial Port Profile (SPP).

### AcceptConnectionWithUUID

[[Method('Bluetooth Server', 'AcceptConnectionWithUUID', false, 'serviceName uuid')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |service Name|`text`|
    |uuid|`text`|


Accept an incoming connection with a specific UUID.

### BytesAvailableToReceive

[[Method('Bluetooth Server', 'BytesAvailableToReceive', true)]]

{>>Returns `number`<<}

Returns an estimate of the number of bytes that can be received without blocking

### Disconnect

[[Method('Bluetooth Server', 'Disconnect', false)]]

Disconnect from the connected Bluetooth device.

### ReceiveSigned1ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned1ByteNumber', true)]]

{>>Returns `number`<<}

Receive a signed 1-byte number from the connected Bluetooth device.

### ReceiveSigned2ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned2ByteNumber', true)]]

{>>Returns `number`<<}

Receive a signed 2-byte number from the connected Bluetooth device.

### ReceiveSigned4ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned4ByteNumber', true)]]

{>>Returns `number`<<}

Receive a signed 4-byte number from the connected Bluetooth device.

### ReceiveSignedBytes

[[Method('Bluetooth Server', 'ReceiveSignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### ReceiveText

[[Method('Bluetooth Server', 'ReceiveText', true, 'numberOfBytes')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### ReceiveUnsigned1ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned1ByteNumber', true)]]

{>>Returns `number`<<}

Receive an unsigned 1-byte number from the connected Bluetooth device.

### ReceiveUnsigned2ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned2ByteNumber', true)]]

{>>Returns `number`<<}

Receive a unsigned 2-byte number from the connected Bluetooth device.

### ReceiveUnsigned4ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned4ByteNumber', true)]]

{>>Returns `number`<<}

Receive a unsigned 4-byte number from the connected Bluetooth device.

### ReceiveUnsignedBytes

[[Method('Bluetooth Server', 'ReceiveUnsignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Send1ByteNumber

[[Method('Bluetooth Server', 'Send1ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


Send a 1-byte number to the connected Bluetooth device.

### Send2ByteNumber

[[Method('Bluetooth Server', 'Send2ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


Send a 2-byte number to the connected Bluetooth device.

### Send4ByteNumber

[[Method('Bluetooth Server', 'Send4ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


Send a 4-byte number to the connected Bluetooth device.

### SendBytes

[[Method('Bluetooth Server', 'SendBytes', false, 'list')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |list|`list`|


Send a list of byte values to the connected Bluetooth device.

### SendText

[[Method('Bluetooth Server', 'SendText', false, 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


Send text to the connected Bluetooth device.

### StopAccepting

[[Method('Bluetooth Server', 'StopAccepting', false)]]

Stop accepting an incoming connection.

## Properties

### Character Encoding

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Character Encoding')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

Sets the character encoding to use when sending and receiving text.

### Delimiter Byte

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Delimiter Byte')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets the delimiter byte to use when passing a negative number for the
 numberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, or
 ReceiveUnsignedBytes.

### High Byte First

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'High Byte First')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if numbers are sent and received with the most significant
 byte first.

### Secure

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

### Available



:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Bluetooth is available on the device

### Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Bluetooth is enabled

### Is Accepting



:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Is Accepting')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if this BluetoothServer component is accepting an
 incoming connection.

### Is Connected



:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Is Connected')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a connection to a Bluetooth device has been made.