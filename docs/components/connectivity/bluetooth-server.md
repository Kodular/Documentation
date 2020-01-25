# Bluetooth Server

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that acts as a bluetooth server.

??? example "Permissions"
    * [android.permission.BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)
    * [android.permission.BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

## Events

### BluetoothError

The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22BluetoothError%22,%20%22param%22:%20%5B%22function%20Name%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|function Name|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Connection Accepted

Indicates that a bluetooth connection has been accepted.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Connection%20Accepted%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Accept Connection

Accept an incoming connection with the Serial Port Profile (SPP).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Accept%20Connection%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22service%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|service Name|<span class="chip chip-text">Text</span>|

### Accept Connection With UUID

Accept an incoming connection with a specific UUID.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Accept%20Connection%20With%20UUID%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22service%20Name%22,%20%22uuid%22%5D%7D"></div>

| Params | []() |
|--------|------|
|service Name|<span class="chip chip-text">Text</span>|
|uuid|<span class="chip chip-text">Text</span>|

### Bytes Available To Receive

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns an estimate of the number of bytes that can be received without blocking

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Bytes%20Available%20To%20Receive%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Disconnect

Disconnect from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Disconnect%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Signed 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive a signed 1-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Signed%201%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Signed 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive a signed 2-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Signed%202%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Signed 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive a signed 4-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Signed%204%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Signed Bytes

<span class="chip chip-list">Returns: <i>List</i></span>

Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Signed%20Bytes%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|

### Receive Text

<span class="chip chip-text">Returns: <i>Text</i></span>

Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Text%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|

### Receive Unsigned 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive an unsigned 1-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Unsigned%201%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Unsigned 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive a unsigned 2-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Unsigned%202%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Unsigned 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span>

Receive a unsigned 4-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Unsigned%204%20Byte%20Number%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Receive Unsigned Bytes

<span class="chip chip-list">Returns: <i>List</i></span>

Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Receive%20Unsigned%20Bytes%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|

### Send 1 Byte Number

Send a 1-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Send%201%20Byte%20Number%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|

### Send 2 Byte Number

Send a 2-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Send%202%20Byte%20Number%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|

### Send 4 Byte Number

Send a 4-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Send%204%20Byte%20Number%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22number%22%5D%7D"></div>

| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|

### Send Bytes

Send a list of byte values to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Send%20Bytes%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22list%22%5D%7D"></div>

| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|

### Send Text

Send text to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Send%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|

### Stop Accepting

Stop accepting an incoming connection.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Stop%20Accepting%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Whether Bluetooth is available on the device

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Character Encoding

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>UTF-8</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the character encoding to use when sending and receiving text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Character%20Encoding%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Character%20Encoding%22,%20%22getter%22:%20false%7D"></div>

### Delimiter Byte

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the delimiter byte to use when passing a negative number for thenumberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, orReceiveUnsignedBytes.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Delimiter%20Byte%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Delimiter%20Byte%22,%20%22getter%22:%20false%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Whether Bluetooth is enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>

### High Byte First

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true if numbers are sent and received with the most significantbyte first.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22High%20Byte%20First%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22High%20Byte%20First%22,%20%22getter%22:%20false%7D"></div>

### Is Accepting

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if this BluetoothServer component is accepting anincoming connection.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Is%20Accepting%22,%20%22getter%22:%20true%7D"></div>

### Is Connected

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns true if a connection to a Bluetooth device has been made.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Is%20Connected%22,%20%22getter%22:%20true%7D"></div>

### Secure

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Secure%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Server%22,%20%22name%22:%20%22Secure%22,%20%22getter%22:%20false%7D"></div>
