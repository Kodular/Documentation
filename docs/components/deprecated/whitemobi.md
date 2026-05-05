# WhiteMobi

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

The WhiteMobi component allows you to show WhiteMobi offerwalls in your app. Get an API key at http\://whitemobi.com/

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Offer Completed

Event triggered when an offer has been completed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22WhiteMobi%22,%20%22name%22:%20%22Offer%20Completed%22,%20%22param%22:%20%5B%22amount%22%5D%7D"></div>

| Params | []() |
|--------|------|
|amount|<span class="chip chip-number">Number</span>|

## Methods

### Show Offer Wall

Show WhiteMobi offerwall

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22WhiteMobi%22,%20%22name%22:%20%22Show%20Offer%20Wall%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Application Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Return the application key.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22WhiteMobi%22,%20%22name%22:%20%22Application%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22WhiteMobi%22,%20%22name%22:%20%22Application%20Key%22,%20%22getter%22:%20false%7D"></div>
