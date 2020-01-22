# Bluetooth Client

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that acts as a bluetooth client._

## Events

### BluetoothError

[[Event('Bluetooth Client', 'BluetoothError', 'functionName message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |function Name|`text`|
    |message|`text`|


_The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead._

## Methods

### BytesAvailableToReceive

[[Method('Bluetooth Client', 'BytesAvailableToReceive', true)]]

{>>Returns `number`<<}

_Returns an estimate of the number of bytes that can be received without blocking_

### Connect

[[Method('Bluetooth Client', 'Connect', true, 'address')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Connect to the Bluetooth device with the specified address and the Serial Port Profile (SPP). Returns true if the connection was successful._

### ConnectWithUUID

[[Method('Bluetooth Client', 'ConnectWithUUID', true, 'address uuid')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|
    |uuid|`text`|


_Connect to the Bluetooth device with the specified address and UUID. Returns true if the connection was successful._

### Disconnect

[[Method('Bluetooth Client', 'Disconnect', false)]]

_Disconnect from the connected Bluetooth device._

### IsDevicePaired

[[Method('Bluetooth Client', 'IsDevicePaired', true, 'address')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address|`text`|


_Checks whether the Bluetooth device with the specified address is paired._

### ReceiveSigned1ByteNumber

[[Method('Bluetooth Client', 'ReceiveSigned1ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 1-byte number from the connected Bluetooth device._

### ReceiveSigned2ByteNumber

[[Method('Bluetooth Client', 'ReceiveSigned2ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 2-byte number from the connected Bluetooth device._

### ReceiveSigned4ByteNumber

[[Method('Bluetooth Client', 'ReceiveSigned4ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a signed 4-byte number from the connected Bluetooth device._

### ReceiveSignedBytes

[[Method('Bluetooth Client', 'ReceiveSignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### ReceiveText

[[Method('Bluetooth Client', 'ReceiveText', true, 'numberOfBytes')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### ReceiveUnsigned1ByteNumber

[[Method('Bluetooth Client', 'ReceiveUnsigned1ByteNumber', true)]]

{>>Returns `number`<<}

_Receive an unsigned 1-byte number from the connected Bluetooth device._

### ReceiveUnsigned2ByteNumber

[[Method('Bluetooth Client', 'ReceiveUnsigned2ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a unsigned 2-byte number from the connected Bluetooth device._

### ReceiveUnsigned4ByteNumber

[[Method('Bluetooth Client', 'ReceiveUnsigned4ByteNumber', true)]]

{>>Returns `number`<<}

_Receive a unsigned 4-byte number from the connected Bluetooth device._

### ReceiveUnsignedBytes

[[Method('Bluetooth Client', 'ReceiveUnsignedBytes', true, 'numberOfBytes')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


_Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received._

### RemoveNameFromAddress

[[Method('Bluetooth Client', 'RemoveNameFromAddress', true, 'addressAndName')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |address And Name|`text`|


_Remove the Name from a Bluetooth Address and Name String._

### Send1ByteNumber

[[Method('Bluetooth Client', 'Send1ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 1-byte number to the connected Bluetooth device._

### Send2ByteNumber

[[Method('Bluetooth Client', 'Send2ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 2-byte number to the connected Bluetooth device._

### Send4ByteNumber

[[Method('Bluetooth Client', 'Send4ByteNumber', false, 'number')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |number|`text`|


_Send a 4-byte number to the connected Bluetooth device._

### SendBytes

[[Method('Bluetooth Client', 'SendBytes', false, 'list')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |list|`list`|


_Send a list of byte values to the connected Bluetooth device._

### SendText

[[Method('Bluetooth Client', 'SendText', false, 'text')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|


_Send text to the connected Bluetooth device._

## Properties

### Character Encoding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Character Encoding')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

_Sets the character encoding to use when sending and receiving text._

### Delimiter Byte

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Delimiter Byte')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Sets the delimiter byte to use when passing a negative number for the
 numberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, or
 ReceiveUnsignedBytes._

### High Byte First

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'High Byte First')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns true if numbers are sent and received with the most significant
 byte first._

### Secure

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored._

### Addresses And Names

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Addresses And Names')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_The addresses and names of paired Bluetooth devices_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Bluetooth is available on the device_

### Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Whether Bluetooth is enabled_

### Is Connected

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Is Connected')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns true if a connection to a Bluetooth device has been made._