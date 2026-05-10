# Chameleon Ad

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Deprecated**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

!!! danger "Deprecated component"
    This component is deprecated. Projects that still contain it will fail to build until it is removed. You can still load existing projects in the Designer and live-test them with the Companion while you migrate, but APK and AAB builds are blocked. Look for an up-to-date replacement in the active component palette.

## Overview

A non-visible component to show interstitial ads form the Chameleon Ads Network.

## Events

### Ad Closed

Event triggered when ads are closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Ad Failed To Load

Event triggered when ads failed to load. Here is the list with all possible error codes (int) and error messages (string): '1' = The before loaded ad was not finished. It is not allowed to load a new one. The first must be in finished loading process. '2' = Ad failed to load. No internet connection available. '3' = Please enter a valid chameleon 'App ID'. '4' = Please enter a valid chameleon 'User ID'. '5' = UNKNOWN_WEB_VIEW_ERROR. '6' = There was an error validating the SSL Certificate.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22error%20Message%22,%20%22error%20Code%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|
|error Code|<span class="chip chip-number">Number</span>|

### Ad Failed To Show

Event triggered when ads failed to show. Here is the list with all possible error codes (int) and error messages (string): '1' = UNKNOWN_ERROR_ON_SHOW_AD. '2' = The ad must first be loaded. After loading finished the ad can be shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Ad%20Failed%20To%20Show%22,%20%22param%22:%20%5B%22error%20Message%22,%20%22error%20Code%22%5D%7D"></div>

| Param | Type |
|--------|------|
|error Message|<span class="chip chip-text">Text</span>|
|error Code|<span class="chip chip-number">Number</span>|

### Ad Loaded

Event triggered when ads are loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Load Ad

Load a new interstitial chameleon ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Ad

Show a chameleon interstitial ad after it was loaded.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Show%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Input here your own Chameleon Ad 'App ID' (request one at my.kodular.io).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22App%20ID%22,%20%22getter%22:%20false%7D"></div>

### Test Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set to true, the device will receive test ads. This option must be set before you load a new ad.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22Test%20Mode%22,%20%22getter%22:%20false%7D"></div>

### User ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Input here your own Chameleon Ad 'User ID' (get yours at my.kodular.io).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Chameleon%20Ad%22,%20%22name%22:%20%22User%20ID%22,%20%22getter%22:%20false%7D"></div>
