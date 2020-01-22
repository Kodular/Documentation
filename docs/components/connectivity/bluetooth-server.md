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


_The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead._

### Connection Accepted

[[Event('Bluetooth Server', 'Connection Accepted')]]

_Indicates that a bluetooth connection has been accepted._

## Methods

### AcceptConnection

[[Method('Bluetooth Server', 'AcceptConnection', false, 'serviceName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |service Name|`text`|


_Accept an incoming connection with the Serial Port Profile (SPP)._

### AcceptConnectionWithUUID

[[Method('Bluetooth Server', 'AcceptConnectionWithUUID', false, 'serviceName uuid')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |service Name|`text`|
    |uuid|`text`|


_Accept an incoming connection with a specific UUID._

### BytesAvailableToReceive

[[Method('Bluetooth Server', 'BytesAvailableToReceive', true)]]

{>>Returns `number`<<}

_Returns an estimate of the number of bytes that can be received without blocking_

### Disconnect

[[Method('Bluetooth Server', 'Disconnect', false)]]

_Disconnect from the connected Bluetooth device._

### ReceiveSigned1ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned1ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 1-byte number from the connected Bluetooth device._

### ReceiveSigned2ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned2ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 2-byte number from the connected Bluetooth device._

### ReceiveSigned4ByteNumber

[[Method('Bluetooth Server', 'ReceiveSigned4ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 4-byte number from the connected Bluetooth device._

### ReceiveSignedBytes

[[Method('Bluetooth Server', 'ReceiveSignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### ReceiveText

[[Method('Bluetooth Server', 'ReceiveText', true, 'numberOfBytes')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### ReceiveUnsigned1ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned1ByteNumber', true)]]

{>>Returns `number`<<}

_Receive an unsigned 1-byte number from the connected Bluetooth device._

### ReceiveUnsigned2ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned2ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a unsigned 2-byte number from the connected Bluetooth device._

### ReceiveUnsigned4ByteNumber

[[Method('Bluetooth Server', 'ReceiveUnsigned4ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a unsigned 4-byte number from the connected Bluetooth device._

### ReceiveUnsignedBytes

[[Method('Bluetooth Server', 'ReceiveUnsignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### Send1ByteNumber

[[Method('Bluetooth Server', 'Send1ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 1-byte number to the connected Bluetooth device._

### Send2ByteNumber

[[Method('Bluetooth Server', 'Send2ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 2-byte number to the connected Bluetooth device._

### Send4ByteNumber

[[Method('Bluetooth Server', 'Send4ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 4-byte number to the connected Bluetooth device._

### SendBytes

[[Method('Bluetooth Server', 'SendBytes', false, 'list')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |list|`list`|


_Send a list of byte values to the connected Bluetooth device._

### SendText

[[Method('Bluetooth Server', 'SendText', false, 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Send text to the connected Bluetooth device._

### StopAccepting

[[Method('Bluetooth Server', 'StopAccepting', false)]]

_Stop accepting an incoming connection._

## Properties

### Character Encoding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Character Encoding')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

_Sets the character encoding to use when sending and receiving text._

### Delimiter Byte

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Delimiter Byte')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Sets the delimiter byte to use when passing a negative number for the
 numberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, or
 ReceiveUnsignedBytes._

### High Byte First

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'High Byte First')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if numbers are sent and received with the most significant
 byte first._

### Secure

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored._

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Bluetooth is available on the device_

### Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Bluetooth is enabled_

### Is Accepting

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Is Accepting')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if this BluetoothServer component is accepting an
 incoming connection._

### Is Connected

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Is Connected')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if a connection to a Bluetooth device has been made._