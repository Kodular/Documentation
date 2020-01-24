# Firebase Remote Config

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that gets data from the Remote Config service powered by Firebase.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)
    * [android.permission.WAKE_LOCK](https://developer.android.com/reference/android/Manifest.permission.html#WAKE_LOCK)
    * [com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE)
    * [com.google.android.c2dm.permission.RECEIVE](https://developer.android.com/reference/android/Manifest.permission.html#com.google.android.c2dm.permission.RECEIVE)


## Events

### Fetch Failed

Triggers when the fetch failed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Fetch%20Failed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Fetch Success

Triggers when the fetch was successful

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Fetch%20Success%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Fetch

Fetches parameter values for your app

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Fetch%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Boolean

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Gets a boolean value corresponding to the specified key

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Get%20Boolean%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22key%22%5D%7D"></div>


| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Number

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets a number value corresponding to the specified key

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Get%20Number%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22key%22%5D%7D"></div>


| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


### Get Text

<span class="chip chip-text">Returns: <i>Text</i></span> 

Gets a text value corresponding to the specified key

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Get%20Text%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22key%22%5D%7D"></div>


| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


## Properties

### Cache Expiration

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>43200</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Time how long the data keeps on the device in ms

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Cache%20Expiration%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Remote%20Config%22,%20%22name%22:%20%22Cache%20Expiration%22,%20%22getter%22:%20false%7D"></div>
