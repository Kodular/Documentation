# Bluetooth Admin

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that acts as a bluetooth admin.

??? example "Permissions"
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)
    * [android.permission.BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)

## Events

### After Pairing

Event triggers when Pairing has finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22After%20Pairing%22,%20%22param%22:%20%5B%22address%22%5D%7D"></div>

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|

### After Scanning

Event triggers when Scanning has finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22After%20Scanning%22,%20%22param%22:%20%5B%22paired%20Devices%22,%20%22new%20Devices%22%5D%7D"></div>

| Params | []() |
|--------|------|
|paired Devices|<span class="chip chip-any">Any</span>|
|new Devices|<span class="chip chip-any">Any</span>|

### After Unpairing

Event triggers when Unpairing has finished.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22After%20Unpairing%22,%20%22param%22:%20%5B%22address%22%5D%7D"></div>

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|

### Error Occurred

Event triggers when an error occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Error%20Occurred%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### State Changed

Event triggers when the bluetooth state changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22State%20Changed%22,%20%22param%22:%20%5B%22state%22%5D%7D"></div>

| Params | []() |
|--------|------|
|state|<span class="chip chip-text">Text</span>|

## Methods

### Disable

Disable Bluetooth

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Disable%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Enable

Enable Bluetooth

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Enable%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Has Bluetooth

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns if the device has Bluetooth

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Has%20Bluetooth%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Mac Address

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the Bluetooth MacAddress.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Mac%20Address%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Pair

Pair Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Pair%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22address%22%5D%7D"></div>

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|

### Scan

Scan Bluetooth devices. Caution: Performing device discovery is a heavy procedure for the Bluetooth adapter and will consume a lot of its resources. If you already hold a connection with a device, then performing discovery can significantly reduce the bandwidth available for the connection, so you should not perform discovery while connected.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Scan%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Scan Mode

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the scan mode of the Bluetooth Adapter

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Scan%20Mode%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### State

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the state of the Bluetooth Adapter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22State%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Toggle

Toggle Bluetooth

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Toggle%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Unpairing

Unpair Bluetooth device.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Unpairing%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22address%22%5D%7D"></div>

| Params | []() |
|--------|------|
|address|<span class="chip chip-text">Text</span>|

### Validate Mac Address

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the MacAddress is valid.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Validate%20Mac%20Address%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22mac%20Address%22%5D%7D"></div>

| Params | []() |
|--------|------|
|mac Address|<span class="chip chip-text">Text</span>|

### Validate User Mac Address

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the User MacAddress is valid.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Validate%20User%20Mac%20Address%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Use Codes

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Use codes instead of strings in returns for ScanMode and State.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Use%20Codes%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Bluetooth%20Admin%22,%20%22name%22:%20%22Use%20Codes%22,%20%22getter%22:%20false%7D"></div>
