# Network

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that retrieves the internet connection status of the device._

## Events

### On Connect

[[Event('Network', 'On Connect')]]

_Called when the device connects to a network._

### On Disconnect

[[Event('Network', 'On Disconnect')]]

_Called when the device disconnects from a network._

## Methods

### is Connected

[[Method('Network', 'is Connected', true)]]

{>>Returns `boolean`<<}

_Returns "True" if the device is connected to a network, "False" otherwise._

### IsFastConnection

[[Method('Network', 'IsFastConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if using a fast connection_

### IsMobileConnection

[[Method('Network', 'IsMobileConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if connection is through Mobile_

### IsRoaming

[[Method('Network', 'IsRoaming', true)]]

{>>Returns `boolean`<<}

_Returns true if using roaming_

### IsWiFiConnection

[[Method('Network', 'IsWiFiConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if connection is through WiFi_

### Type

:warning: ==**Deprecated**==

[[Method('Network', 'Type', true)]]

{>>Returns `text`<<}

_Returns the type of network the device is connected to. e.g. "wifi" or "mobile". This block is deprecated, use the "IsWiFiConnection" and "IsMobileConnection" blocks instead_