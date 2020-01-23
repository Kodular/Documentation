# Bluetooth Client

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth client.

## Events

### BluetoothError

[[Event('Bluetooth Client', 'BluetoothError', 'functionName', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |function Name|`text`|
    |message|`text`|


The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

## Methods

### BytesAvailableToReceive

_Block preview not available_

{>>Returns `number`<<}

Returns an estimate of the number of bytes that can be received without blocking

### Connect

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Connect to the Bluetooth device with the specified address and the Serial Port Profile (SPP). Returns true if the connection was successful.

### ConnectWithUUID

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|
    |uuid|`text`|


Connect to the Bluetooth device with the specified address and UUID. Returns true if the connection was successful.

### Disconnect

_Block preview not available_

Disconnect from the connected Bluetooth device.

### IsDevicePaired

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address|`text`|


Checks whether the Bluetooth device with the specified address is paired.

### ReceiveSigned1ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 1-byte number from the connected Bluetooth device.

### ReceiveSigned2ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 2-byte number from the connected Bluetooth device.

### ReceiveSigned4ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 4-byte number from the connected Bluetooth device.

### ReceiveSignedBytes

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### ReceiveText

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### ReceiveUnsigned1ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive an unsigned 1-byte number from the connected Bluetooth device.

### ReceiveUnsigned2ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive a unsigned 2-byte number from the connected Bluetooth device.

### ReceiveUnsigned4ByteNumber

_Block preview not available_

{>>Returns `number`<<}

Receive a unsigned 4-byte number from the connected Bluetooth device.

### ReceiveUnsignedBytes

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### RemoveNameFromAddress

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |address And Name|`text`|


Remove the Name from a Bluetooth Address and Name String.

### Send1ByteNumber

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 1-byte number to the connected Bluetooth device.

### Send2ByteNumber

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 2-byte number to the connected Bluetooth device.

### Send4ByteNumber

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 4-byte number to the connected Bluetooth device.

### SendBytes

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |list|`list`|


Send a list of byte values to the connected Bluetooth device.

### SendText

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Send text to the connected Bluetooth device.

## Properties

### Character Encoding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Character Encoding')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

Sets the character encoding to use when sending and receiving text.

### Delimiter Byte

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Delimiter Byte')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets the delimiter byte to use when passing a negative number for the   numberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, or   ReceiveUnsignedBytes.

### High Byte First

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'High Byte First')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if numbers are sent and received with the most significant   byte first.

### Secure

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Client', 'Secure')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

### Addresses And Names

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Addresses And Names')]]

| Type | Default |
|:----:|:-------:|
|list|None|

The addresses and names of paired Bluetooth devices

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Bluetooth is available on the device

### Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Whether Bluetooth is enabled

### Is Connected

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Client', 'Is Connected')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a connection to a Bluetooth device has been made.