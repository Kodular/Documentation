# NetworkManager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Deprecated|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

This component can be used to provide information about network

## Methods

### GetConnectionType

_Block preview not available_

{>>Returns `text`<<}

describe the type of the network, for example WIFI or MOBILE

### is Connected

_Block preview not available_

{>>Returns `boolean`<<}

Indicates whether network connectivity exists and it is possible to establish connections and pass data.

### IsFastConnection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if using a fast connection

### IsMobileConnection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if connection is through Mobile

### IsRoaming

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if using using roaming

### IsWiFiConnection

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if connection is through WiFi

## Properties

### Is GPS Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Is GPS Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Checks to see if device is GPS enabled and if so, checks to see if GPS is started or not

### Is GPS Enabled Device

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Is GPS Enabled Device')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Checks to see if device is GPS enabled

### Start GPS Options

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Start GPS Options')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Starts up the GPS configuration activity, giving user option to turn turn on the GPS