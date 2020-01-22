# WiFi

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that manages the WiFi settings of the device._

## Methods

### BSSID

[[Method('WiFi', 'BSSID', true)]]

{>>Returns `text`<<}

_Return the basic service set identifier (BSSID) of the current access point_

### Disable

[[Method('WiFi', 'Disable', false)]]

_Disable the Wi-Fi_

### Enable

[[Method('WiFi', 'Enable', false)]]

_Enable the Wi-Fi_

### Is5GHzSupported

[[Method('WiFi', 'Is5GHzSupported', true)]]

{>>Returns `boolean`<<}

_Return whether this adapter supports 5 GHz band_

### IsEnabled

[[Method('WiFi', 'IsEnabled', true)]]

{>>Returns `boolean`<<}

_Return whether Wi-Fi is enabled or disabled_

### IsWiFiDirectSupported

[[Method('WiFi', 'IsWiFiDirectSupported', true)]]

{>>Returns `boolean`<<}

_Return whether this adapter supports Wi-Fi Direct_

### LinkSpeed

[[Method('WiFi', 'LinkSpeed', true)]]

{>>Returns `number`<<}

_Returns the current link speed in Mbps_

### LocalIP

[[Method('WiFi', 'LocalIP', true)]]

{>>Returns `text`<<}

_Return the current Local IP_

### MacAddress

[[Method('WiFi', 'MacAddress', true)]]

{>>Returns `text`<<}

_Returns the wlan mac address._

### SSID

[[Method('WiFi', 'SSID', true)]]

{>>Returns `text`<<}

_Returns the service set identifier (SSID) of the current 802.11 network_

### SignalStrength

[[Method('WiFi', 'SignalStrength', true)]]

{>>Returns `number`<<}

_Returns the received signal strength indicator of the current 802.11 network, in dBm_

### Toggle

[[Method('WiFi', 'Toggle', false)]]

_Toggle the Wi-Fi_