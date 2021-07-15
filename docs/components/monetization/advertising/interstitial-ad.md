# Interstitial Ad

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that shows interstitial ads from multiple ad networks.  
Note\: This component is currently available on an invite-only basis. Click <a href\="https\://my.kodular.io/payments">here</a> for more information on how to request an invite.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

!!! info "Commission"
    **Type:** Progressive Rate

    _This rate increments when serving ads from an outdated Kodular Version. The more weeks that have passed since its
    deprecation, the higher the commission rate._

    |   Live   | +3w | +4w | +12w | +26w | +52w |
    |:--------:|:---:|:---:|:----:|:----:|:----:|
    |   19%    | 22% | 24% | 29%  | 44%  | 59%  |

## Events

### Failed To Load

Event raised when an ad could not be loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Interstitial%20Ad%22,%20%22name%22:%20%22Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Failed To Show

Event raised when an ad could not be displayd to the user.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Interstitial%20Ad%22,%20%22name%22:%20%22Failed%20To%20Show%22,%20%22param%22:%20%5B%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|

### Loaded

Event raised when an ad was loaded successfully.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Interstitial%20Ad%22,%20%22name%22:%20%22Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load

Loads an interstitial ad and prepares it for showing to the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Interstitial%20Ad%22,%20%22name%22:%20%22Load%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show

Displays a previously loaded interstitial ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Interstitial%20Ad%22,%20%22name%22:%20%22Show%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>
