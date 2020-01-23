# WiFi

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that manages the WiFi settings of the device.

## Methods

### BSSID

[[Method('WiFi', 'BSSID', True)]]

{>>Returns `text`<<}

Return the basic service set identifier (BSSID) of the current access point

### Disable

[[Method('WiFi', 'Disable', False)]]

Disable the Wi-Fi

### Enable

[[Method('WiFi', 'Enable', False)]]

Enable the Wi-Fi

### Is 5GHz Supported

[[Method('WiFi', 'Is 5GHz Supported', True)]]

{>>Returns `boolean`<<}

Return whether this adapter supports 5 GHz band

### Is Enabled

[[Method('WiFi', 'Is Enabled', True)]]

{>>Returns `boolean`<<}

Return whether Wi-Fi is enabled or disabled

### Is WiFi Direct Supported

[[Method('WiFi', 'Is WiFi Direct Supported', True)]]

{>>Returns `boolean`<<}

Return whether this adapter supports Wi-Fi Direct

### Link Speed

[[Method('WiFi', 'Link Speed', True)]]

{>>Returns `number`<<}

Returns the current link speed in Mbps

### Local IP

[[Method('WiFi', 'Local IP', True)]]

{>>Returns `text`<<}

Return the current Local IP

### Mac Address

[[Method('WiFi', 'Mac Address', True)]]

{>>Returns `text`<<}

Returns the wlan mac address.

### SSID

[[Method('WiFi', 'SSID', True)]]

{>>Returns `text`<<}

Returns the service set identifier (SSID) of the current 802.11 network

### Signal Strength

[[Method('WiFi', 'Signal Strength', True)]]

{>>Returns `number`<<}

Returns the received signal strength indicator of the current 802.11 network, in dBm

### Toggle

[[Method('WiFi', 'Toggle', False)]]

Toggle the Wi-Fi