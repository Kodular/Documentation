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


Return the basic service set identifier (BSSID) of the current access point

### Disable



[[Method('WiFi', 'Disable', false)]]

Disable the Wi-Fi

### Enable



[[Method('WiFi', 'Enable', false)]]

Enable the Wi-Fi

### Is5GHzSupported



[[Method('WiFi', 'Is5GHzSupported', true)]]

{>>Returns `boolean`<<}


Return whether this adapter supports 5 GHz band

### IsEnabled



[[Method('WiFi', 'IsEnabled', true)]]

{>>Returns `boolean`<<}


Return whether Wi-Fi is enabled or disabled

### IsWiFiDirectSupported



[[Method('WiFi', 'IsWiFiDirectSupported', true)]]

{>>Returns `boolean`<<}


Return whether this adapter supports Wi-Fi Direct

### LinkSpeed



[[Method('WiFi', 'LinkSpeed', true)]]

{>>Returns `number`<<}


Returns the current link speed in Mbps

### LocalIP



[[Method('WiFi', 'LocalIP', true)]]

{>>Returns `text`<<}


Return the current Local IP

### MacAddress



[[Method('WiFi', 'MacAddress', true)]]

{>>Returns `text`<<}


Returns the wlan mac address.

### SSID



[[Method('WiFi', 'SSID', true)]]

{>>Returns `text`<<}


Returns the service set identifier (SSID) of the current 802.11 network

### SignalStrength



[[Method('WiFi', 'SignalStrength', true)]]

{>>Returns `number`<<}


Returns the received signal strength indicator of the current 802.11 network, in dBm

### Toggle



[[Method('WiFi', 'Toggle', false)]]

Toggle the Wi-Fi