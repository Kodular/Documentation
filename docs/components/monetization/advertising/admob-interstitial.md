# AdMob Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-visible component<<}

## Overview

An interstitial ad is a full-page ad. AdMobInterstitial component allows you to monetize your app. You must have a valid AdMob account and AdUnitId that can be obtained from http://www.google.com/AdMob . If your id is invalid, the AdMobInterstitial will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. 

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22params%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Failed To Show

Called when an an attempt was made to display the ad, but the ad was not ready to display.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Failed%20To%20Show%22,%20%22params%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Ad Left Application

Called when an ad leaves the application (e.g., to go to the browser).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Left%20Application%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Loaded

Called when an ad request was loaded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Opened

Called when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22params%22:%20%5B%5D%7D"></div>


### On Consent Changed

Event triggered when the consent was changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22On%20Consent%20Changed%22,%20%22params%22:%20%5B%22personalized%22%5D%7D"></div>

| Params | []() |
|--------|------|
|personalized|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Load Ad

Load a new AdMob Interstitial ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Revoke Consent

Deletes the user's consent. Useful if you want to test the consent dialog in development.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Revoke%20Consent%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Show Interstitial Ad

It will show the Interstitial Ad

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Show%20Interstitial%20Ad%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Ad Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

This property must be set to true to receive ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Ad%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Ad Unit ID

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/1033173712</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Interstitial Commission

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>unity</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Sets the ad network used to take the commission.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Interstitial%20Commission%22,%20%22getter%22:%20false%7D"></div>


### Consent Development Mode

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Development%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Development%20Mode%22,%20%22getter%22:%20false%7D"></div>


### Consent Message

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The message for the consent dialog.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Message%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Message%22,%20%22getter%22:%20false%7D"></div>


### Consent Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Data Protection</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The title for the consent dialog.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Consent%20Title%22,%20%22getter%22:%20false%7D"></div>


### Target Age

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Leave 0 for targeting ALL ages

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Target%20Age%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Target%20Age%22,%20%22getter%22:%20false%7D"></div>


### Target For Children

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Indicate whether you want Google to treat your content as child-directed when you make an ad request. Info here: https://developers.google.com/mobile-ads-sdk/docs/admob/android/targeting#child-directed_setting

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Target%20For%20Children%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Target%20For%20Children%22,%20%22getter%22:%20false%7D"></div>


### Target Gender

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>ALL</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Target%20Gender%22,%20%22getter%22:%20false%7D"></div>


### Test Mode

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

If you want to test the component then that this property to true. Then you will receive test ads.


### Personalized Result

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the current personalized consent. If true user has consent to personalized ads.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22AdMob%20Interstitial%22,%20%22name%22:%20%22Personalized%20Result%22,%20%22getter%22:%20true%7D"></div>
