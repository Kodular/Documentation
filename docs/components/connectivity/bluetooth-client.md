# Bluetooth Client

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that acts as a bluetooth client.

??? example "Permissions"
    * [android.permission.BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)
    * [android.permission.BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


## Events

### BluetoothError

The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22BluetoothError%22,%20%22params%22:%20%5B%22function%20Name%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|function Name|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


## Methods

### Bytes Available To Receive

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns an estimate of the number of bytes that can be received without blocking

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Bytes%20Available%20To%20Receive%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Connect

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Connect to the Bluetooth device with the specified address and the Serial Port Profile (SPP). Returns true if the connection was successful.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Connect%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22address%22%5D%7D"></div>


| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### Connect With UUID

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Connect to the Bluetooth device with the specified address and UUID. Returns true if the connection was successful.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Connect%20With%20UUID%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22address%22,%20%22uuid%22%5D%7D"></div>


| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|
|uuid|<span class="chip chip-text">Text</span>|


### Disconnect

Disconnect from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Disconnect%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Is Device Paired

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Checks whether the Bluetooth device with the specified address is paired.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Is%20Device%20Paired%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22address%22%5D%7D"></div>


| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|


### Receive Signed 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 1-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Signed%201%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Signed 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 2-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Signed%202%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Signed 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a signed 4-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Signed%204%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Signed Bytes

<span class="chip chip-list">Returns: <i>List</i></span> 

Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Signed%20Bytes%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Receive Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Text%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Receive Unsigned 1 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive an unsigned 1-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Unsigned%201%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Unsigned 2 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a unsigned 2-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Unsigned%202%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Unsigned 4 Byte Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Receive a unsigned 4-byte number from the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Unsigned%204%20Byte%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Receive Unsigned Bytes

<span class="chip chip-list">Returns: <i>List</i></span> 

Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Receive%20Unsigned%20Bytes%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22number%20Of%20Bytes%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number Of Bytes|<span class="chip chip-number">Number</span>|


### Remove Name From Address

<span class="chip chip-text">Returns: <i>Text</i></span> 

Remove the Name from a Bluetooth Address and Name String.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Remove%20Name%20From%20Address%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22address%20And%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|address And Name|<span class="chip chip-text">Text</span>|


### Send 1 Byte Number

Send a 1-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Send%201%20Byte%20Number%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22number%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send 2 Byte Number

Send a 2-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Send%202%20Byte%20Number%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22number%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send 4 Byte Number

Send a 4-byte number to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Send%204%20Byte%20Number%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22number%22%5D%7D"></div>


| Params | []() |
|--------|------|
|number|<span class="chip chip-text">Text</span>|


### Send Bytes

Send a list of byte values to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Send%20Bytes%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22list%22%5D%7D"></div>


| Params | []() |
|--------|------|
|list|<span class="chip chip-list">List</span>|


### Send Text

Send text to the connected Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Send%20Text%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22text%22%5D%7D"></div>


| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|


## Properties

### Character Encoding

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>UTF-8</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the character encoding to use when sending and receiving text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Character%20Encoding%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Character%20Encoding%22,%20%22getter%22:%20false%7D"></div>


### Delimiter Byte

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the delimiter byte to use when passing a negative number for thenumberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, orReceiveUnsignedBytes.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Delimiter%20Byte%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Delimiter%20Byte%22,%20%22getter%22:%20false%7D"></div>


### High Byte First

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if numbers are sent and received with the most significantbyte first.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22High%20Byte%20First%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22High%20Byte%20First%22,%20%22getter%22:%20false%7D"></div>


### Secure

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Secure%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Secure%22,%20%22getter%22:%20false%7D"></div>


### Addresses And Names

<span class="chip chip-list">List</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The addresses and names of paired Bluetooth devices

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Addresses%20And%20Names%22,%20%22getter%22:%20true%7D"></div>


### Available

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether Bluetooth is available on the device

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>


### Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether Bluetooth is enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>


### Is Connected

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true if a connection to a Bluetooth device has been made.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Client%22,%20%22name%22:%20%22Is%20Connected%22,%20%22getter%22:%20true%7D"></div>
