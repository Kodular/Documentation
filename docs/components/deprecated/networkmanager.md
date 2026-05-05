# NetworkManager

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">2</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

This component can be used to provide information about network

??? example "Permissions"
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Methods

### Get Connection Type

<span class="chip chip-text">Returns: <i>Text</i></span>

describe the type of the network, for example WIFI or MOBILE

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Get%20Connection%20Type%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Connected

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Indicates whether network connectivity exists and it is possible to establish connections and pass data.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20Connected%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Fast Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if using a fast connection

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20Fast%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Mobile Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if connection is through Mobile

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20Mobile%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Roaming

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if using using roaming

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20Roaming%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Wifi Connection

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if connection is through WiFi

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20Wifi%20Connection%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Is GPS Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Checks to see if device is GPS enabled and if so, checks to see if GPS is started or not

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20GPS%20Enabled%22,%20%22getter%22:%20true%7D"></div>

### Is GPS Enabled Device

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Checks to see if device is GPS enabled

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Is%20GPS%20Enabled%20Device%22,%20%22getter%22:%20true%7D"></div>

### Start GPS Options

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Starts up the GPS configuration activity, giving user option to turn turn on the GPS

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NetworkManager%22,%20%22name%22:%20%22Start%20GPS%20Options%22,%20%22getter%22:%20true%7D"></div>
