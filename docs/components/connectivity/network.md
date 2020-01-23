# Network

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that retrieves the internet connection status of the device.

## Events

### On Connect

[[Event('Network', 'On Connect')]]

Called when the device connects to a network.

### On Disconnect

[[Event('Network', 'On Disconnect')]]

Called when the device disconnects from a network.

## Methods

### Is Connected

_Block preview not available_

{>>Returns `boolean`<<}

Returns "True" if the device is connected to a network, "False" otherwise.

### Is Fast Connection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if using a fast connection

### Is Mobile Connection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if connection is through Mobile

### Is Roaming

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if using roaming

### Is Wifi Connection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if connection is through WiFi

### Type

:warning: ==**Deprecated**==

_Block preview not available_

{>>Returns `text`<<}

Returns the type of network the device is connected to. e.g. "wifi" or "mobile". This block is deprecated, use the "IsWiFiConnection" and "IsMobileConnection" blocks instead