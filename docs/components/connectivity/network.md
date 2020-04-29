# Network

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A non-visible component that retrieves the internet connection status of the device.

??? example "Permissions"
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

## Events

### On Connect

Called when the device connects to a network.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22On%20Connect%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Disconnect

Called when the device disconnects from a network.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22On%20Disconnect%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Is Connected

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns "True" if the device is connected to a network, "False" otherwise.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Is%20Connected%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Fast Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if using a fast connection

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Is%20Fast%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Mobile Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if connection is through Mobile

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Is%20Mobile%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Roaming

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if using roaming

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Is%20Roaming%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Wifi Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if connection is through WiFi

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Is%20Wifi%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Type

:warning: ==**Deprecated**==

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the type of network the device is connected to. e.g. "wifi" or "mobile". This block is deprecated, use the "IsWiFiConnection" and "IsMobileConnection" blocks instead

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Network%22,%20%22name%22:%20%22Type%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>
