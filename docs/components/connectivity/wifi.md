# WiFi

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that manages the WiFi settings of the device.

??? example "Permissions"
    * [android.permission.CHANGE_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#CHANGE_WIFI_STATE)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_WIFI_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_WIFI_STATE)

## Methods

### BSSID

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the basic service set identifier (BSSID) of the current access point

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22BSSID%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Disable

Disable the Wi-Fi

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Disable%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Enable

Enable the Wi-Fi

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Enable%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Is 5GHz Supported

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether this adapter supports 5 GHz band

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Is%205GHz%20Supported%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Is Enabled

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether Wi-Fi is enabled or disabled

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Is%20Enabled%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Is WiFi Direct Supported

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Return whether this adapter supports Wi-Fi Direct

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Is%20WiFi%20Direct%20Supported%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Link Speed

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the current link speed in Mbps

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Link%20Speed%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Local IP

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the current Local IP

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Local%20IP%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Mac Address

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the wlan mac address.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Mac%20Address%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### SSID

<span class="chip chip-text">Returns: <i>Text</i></span> 

Returns the service set identifier (SSID) of the current 802.11 network

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22SSID%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Signal Strength

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the received signal strength indicator of the current 802.11 network, in dBm

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Signal%20Strength%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Toggle

Toggle the Wi-Fi

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WiFi%22,%20%22name%22:%20%22Toggle%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>
