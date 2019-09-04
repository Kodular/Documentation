# WiFi

## Overview

The **WiFi** component can be used to manage the WiFi settings as well as to retrieve information about device's WiFi.

## Methods

### BSSID
![](/assets/images/components/connectivity/wifi/m_bssid.png)

\[ Getter only \]  
`Type: Text`

Returns the basic service set identifier (BSSID) of the current access point.

### Disable
![](/assets/images/components/connectivity/wifi/m_disable.png)

\[ None \]  

Disable the Wi-Fi

### Enable
![](/assets/images/components/connectivity/wifi/m_enable.png)

\[ None \]

Enable the Wi-Fi

### Is 5GHz Supported
![](/assets/images/components/connectivity/wifi/m_is-5ghz-supported.png)

\[ Getter only \]  
`Type: Boolean`

Return whether this adapter supports 5GHz band.

* `True` - 5GHz band is supported by the adapter.
* `False` - 5GHz band is not supported by the adapter.

### Is Enabled
![](/assets/images/components/connectivity/wifi/m_is-enabled.png)

\[ Getter only \]  
`Type: Boolean`

Return whether Wi-Fi is enabled or disabled.

* `True` - WiFi is enabled.
* `False` - WiFi is disabled.

### Is WiFi Direct Supported
![](/assets/images/components/connectivity/wifi/m_is-wifi-direct-supported.png)

\[ Getter only \]  
`Type: Boolean`

Return whether this adapter supports Wi-Fi Direct.

* `True` - WiFi Direct is supported by the adapter.
* `False` - WiFi Direct is not supported by the adapter.

### Link Speed
![](/assets/images/components/connectivity/wifi/m_link-speed.png)

\[ Getter only \]  
`Type: Number`

Returns the current link speed in Mbps.

### Local IP
![](/assets/images/components/connectivity/wifi/m_local-ip.png)

\[ Getter only \]  
`Type: Numeric`

Return the current local IP.

### Mac Address
![](/assets/images/components/connectivity/wifi/m_mac-address.png)

\[ Getter only \]  
`Type: Text`

Returns the current WLAN mac address.

### SSID
![](/assets/images/components/connectivity/wifi/m_ssid.png)

\[ Getter only \]  
`Type: Text`

Returns the service set identifier (SSID) of the current 802.11 network.

### Signal Strength
![](/assets/images/components/connectivity/wifi/m_signal-strength.png)

\[ Getter only \]  
`Type: Number`

Returns the received signal strength indicator of the current 802.11 network, in dBm.

### Toggle
![](/assets/images/components/connectivity/wifi/m_toggle.png)

\[ None \]

Toggles the WiFi.

- If WiFi is on, it will be set to off
- If WiFi is off, it will be set to on
