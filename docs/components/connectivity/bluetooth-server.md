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

### Accept Connection

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |service Name|`text`|


Accept an incoming connection with the Serial Port Profile (SPP).

### Accept Connection With UUID

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |service Name|`text`|
    |uuid|`text`|


Accept an incoming connection with a specific UUID.

### Bytes Available To Receive

_Block preview not available_

{>>Returns `number`<<}

Returns an estimate of the number of bytes that can be received without blocking

### Disconnect

_Block preview not available_

Disconnect from the connected Bluetooth device.

### Receive Signed 1 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 1-byte number from the connected Bluetooth device.

### Receive Signed 2 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 2-byte number from the connected Bluetooth device.

### Receive Signed 4 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive a signed 4-byte number from the connected Bluetooth device.

### Receive Signed Bytes

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Text

_Block preview not available_

{>>Returns `text`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Receive Unsigned 1 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive an unsigned 1-byte number from the connected Bluetooth device.

### Receive Unsigned 2 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive a unsigned 2-byte number from the connected Bluetooth device.

### Receive Unsigned 4 Byte Number

_Block preview not available_

{>>Returns `number`<<}

Receive a unsigned 4-byte number from the connected Bluetooth device.

### Receive Unsigned Bytes

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number Of Bytes|`number`|


Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

### Send 1 Byte Number

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 1-byte number to the connected Bluetooth device.

### Send 2 Byte Number

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 2-byte number to the connected Bluetooth device.

### Send 4 Byte Number

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |number|`text`|


Send a 4-byte number to the connected Bluetooth device.

### Send Bytes

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |list|`list`|


Send a list of byte values to the connected Bluetooth device.

### Send Text

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |text|`text`|


Send text to the connected Bluetooth device.

### Stop Accepting

_Block preview not available_

Stop accepting an incoming connection.

## Properties

### Character Encoding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Character Encoding')]]

| Type | Default |
|:----:|:-------:|
|text|UTF-8|

Sets the character encoding to use when sending and receiving text.

### Delimiter Byte

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'Delimiter Byte')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets the delimiter byte to use when passing a negative number for thenumberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, orReceiveUnsignedBytes.

### High Byte First

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bluetooth Server', 'High Byte First')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Returns true if numbers are sent and received with the most significantbyte first.

### Secure

<small>Available as ^^Common^^ Property</small>

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

Returns true if this BluetoothServer component is accepting anincoming connection.

### Is Connected

:eyes: Read-Only property
[[PropertyBlockGetter('Bluetooth Server', 'Is Connected')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns true if a connection to a Bluetooth device has been made.