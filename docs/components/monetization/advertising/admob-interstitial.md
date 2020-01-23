# AdMob Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

An interstitial ad is a full-page ad. AdMobInterstitial component allows you to monetize your app. You must have a valid AdMob account and AdUnitId that can be obtained from http://www.google.com/AdMob . If your id is invalid, the AdMobInterstitial will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. 

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when an ad was closed.

[[Event('AdMob Interstitial', 'Ad Closed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('AdMob Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Failed To Show

Called when an an attempt was made to display the ad, but the ad was not ready to display.

[[Event('AdMob Interstitial', 'Ad Failed To Show', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Ad Left Application

Called when an ad leaves the application (e.g., to go to the browser).

[[Event('AdMob Interstitial', 'Ad Left Application')]]

### Ad Loaded

Called when an ad request was loaded.

[[Event('AdMob Interstitial', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('AdMob Interstitial', 'Ad Opened')]]

### On Consent Changed

Event triggered when the consent was changed.

[[Event('AdMob Interstitial', 'On Consent Changed', 'personalized')]]

| Params | []() |
|--------|------|
|personalized|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Load Ad

Load a new AdMob Interstitial ad.

[[Method('AdMob Interstitial', 'Load Ad', False)]]

### Revoke Consent

Deletes the user's consent. Useful if you want to test the consent dialog in development.

[[Method('AdMob Interstitial', 'Revoke Consent', False)]]

### Show Interstitial Ad

It will show the Interstitial Ad

[[Method('AdMob Interstitial', 'Show Interstitial Ad', False)]]

## Properties

### Ad Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This property must be set to true to receive ads.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Ad Enabled')]]

### Ad Unit ID

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/1033173712</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Ad Unit ID')]]

### Interstitial Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Interstitial Commission')]]

### Consent Development Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Development Mode')]]

### Consent Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The message for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Message')]]

### Consent Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Data Protection</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Title')]]

### Target Age

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Leave 0 for targeting ALL ages

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target Age')]]

### Target For Children

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Indicate whether you want Google to treat your content as child-directed when you make an ad request. Info here: https://developers.google.com/mobile-ads-sdk/docs/admob/android/targeting#child-directed_setting

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target For Children')]]

### Target Gender

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ALL</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target Gender')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component then that this property to true. Then you will receive test ads.

[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Test Mode')]]

### Personalized Result

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current personalized consent. If true user has consent to personalized ads.

[[PropertyBlockGetter('AdMob Interstitial', 'Personalized Result')]]