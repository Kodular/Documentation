# AdMob Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

An interstitial ad is a full-page ad. AdMobInterstitial component allows you to monetize your app. You must have a valid AdMob account and AdUnitId that can be obtained from http://www.google.com/AdMob . If your id is invalid, the AdMobInterstitial will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. 

## Events

### Ad Closed

[[Event('AdMob Interstitial', 'Ad Closed')]]

Called when an ad was closed.

### Ad Failed To Load

[[Event('AdMob Interstitial', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Failed To Show

[[Event('AdMob Interstitial', 'Ad Failed To Show', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Called when an an attempt was made to display the ad, but the ad was not ready to display.

### Ad Left Application

[[Event('AdMob Interstitial', 'Ad Left Application')]]

Called when an ad leaves the application (e.g., to go to the browser).

### Ad Loaded

[[Event('AdMob Interstitial', 'Ad Loaded')]]

Called when an ad request was loaded.

### Ad Opened

[[Event('AdMob Interstitial', 'Ad Opened')]]

Called when an ad was opened.

### On Consent Changed

[[Event('AdMob Interstitial', 'On Consent Changed', 'personalized')]]

| Params | []() |
|--------|------|
|personalized|Boolean|


Event triggered when the consent was changed.

## Methods

### Load Ad

[[Method('AdMob Interstitial', 'Load Ad', False)]]

Load a new AdMob Interstitial ad.

### Revoke Consent

[[Method('AdMob Interstitial', 'Revoke Consent', False)]]

Deletes the user's consent. Useful if you want to test the consent dialog in development.

### Show Interstitial Ad

[[Method('AdMob Interstitial', 'Show Interstitial Ad', False)]]

It will show the Interstitial Ad

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