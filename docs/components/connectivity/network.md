# Network

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that retrieves the internet connection status of the device._

## Methods

### is Connected



[[Method('Network', 'is Connected', true)]]

{>>Returns `boolean`<<}


Returns "True" if the device is connected to a network, "False" otherwise.

### IsFastConnection



[[Method('Network', 'IsFastConnection', true)]]

{>>Returns `boolean`<<}


Returns true if using a fast connection

### IsMobileConnection



[[Method('Network', 'IsMobileConnection', true)]]

{>>Returns `boolean`<<}


Returns true if connection is through Mobile

### IsRoaming



[[Method('Network', 'IsRoaming', true)]]

{>>Returns `boolean`<<}


Returns true if using roaming

### IsWiFiConnection



[[Method('Network', 'IsWiFiConnection', true)]]

{>>Returns `boolean`<<}


Returns true if connection is through WiFi

### Type

:warning: ==**Deprecated**==

[[Method('Network', 'Type', true)]]

{>>Returns `text`<<}


Returns the type of network the device is connected to. e.g. "wifi" or "mobile". This block is deprecated, use the "IsWiFiConnection" and "IsMobileConnection" blocks instead