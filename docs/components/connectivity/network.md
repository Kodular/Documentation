# Network

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that retrieves the internet connection status of the device.

??? example "Permissions"
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)


## Events

### On Connect

Called when the device connects to a network.

[[Event('Network', 'On Connect')]]

### On Disconnect

Called when the device disconnects from a network.

[[Event('Network', 'On Disconnect')]]

## Methods

### Is Connected

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns "True" if the device is connected to a network, "False" otherwise.

[[Method('Network', 'Is Connected', True)]]

### Is Fast Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if using a fast connection

[[Method('Network', 'Is Fast Connection', True)]]

### Is Mobile Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if connection is through Mobile

[[Method('Network', 'Is Mobile Connection', True)]]

### Is Roaming

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if using roaming

[[Method('Network', 'Is Roaming', True)]]

### Is Wifi Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if connection is through WiFi

[[Method('Network', 'Is Wifi Connection', True)]]

### Type

:warning: ==**Deprecated**==

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the type of network the device is connected to. e.g. "wifi" or "mobile". This block is deprecated, use the "IsWiFiConnection" and "IsMobileConnection" blocks instead

[[Method('Network', 'Type', True)]]