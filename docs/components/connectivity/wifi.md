# WiFi

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Connectivity|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that manages the WiFi settings of the device.

## Methods

### BSSID

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the basic service set identifier (BSSID) of the current access point

[[Method('WiFi', 'BSSID', True)]]

### Disable

Disable the Wi-Fi

[[Method('WiFi', 'Disable', False)]]

### Enable

Enable the Wi-Fi

[[Method('WiFi', 'Enable', False)]]

### Is 5GHz Supported

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether this adapter supports 5 GHz band

[[Method('WiFi', 'Is 5GHz Supported', True)]]

### Is Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether Wi-Fi is enabled or disabled

[[Method('WiFi', 'Is Enabled', True)]]

### Is WiFi Direct Supported

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether this adapter supports Wi-Fi Direct

[[Method('WiFi', 'Is WiFi Direct Supported', True)]]

### Link Speed

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the current link speed in Mbps

[[Method('WiFi', 'Link Speed', True)]]

### Local IP

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the current Local IP

[[Method('WiFi', 'Local IP', True)]]

### Mac Address

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the wlan mac address.

[[Method('WiFi', 'Mac Address', True)]]

### SSID

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the service set identifier (SSID) of the current 802.11 network

[[Method('WiFi', 'SSID', True)]]

### Signal Strength

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the received signal strength indicator of the current 802.11 network, in dBm

[[Method('WiFi', 'Signal Strength', True)]]

### Toggle

Toggle the Wi-Fi

[[Method('WiFi', 'Toggle', False)]]