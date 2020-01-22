# NetworkManager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Deprecated|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_This component can be used to provide information about network_

## Methods

### GetConnectionType

[[Method('NetworkManager', 'GetConnectionType', true)]]

{>>Returns `text`<<}

_describe the type of the network, for example WIFI or MOBILE_

### is Connected

[[Method('NetworkManager', 'is Connected', true)]]

{>>Returns `boolean`<<}

_Indicates whether network connectivity exists and it is possible to establish connections and pass data._

### IsFastConnection

[[Method('NetworkManager', 'IsFastConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if using a fast connection_

### IsMobileConnection

[[Method('NetworkManager', 'IsMobileConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if connection is through Mobile_

### IsRoaming

[[Method('NetworkManager', 'IsRoaming', true)]]

{>>Returns `boolean`<<}

_Returns true if using using roaming_

### IsWiFiConnection

[[Method('NetworkManager', 'IsWiFiConnection', true)]]

{>>Returns `boolean`<<}

_Returns true if connection is through WiFi_

## Properties

### Is GPS Enabled

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Is GPS Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Checks to see if device is GPS enabled and if so, checks to see if GPS is started or not_

### Is GPS Enabled Device

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Is GPS Enabled Device')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Checks to see if device is GPS enabled_

### Start GPS Options

:eyes: Read-Only property
[[PropertyBlockGetter('NetworkManager', 'Start GPS Options')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Starts up the GPS configuration activity, giving user option to turn turn on the GPS_