# AdMob Rewarded Video

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows AdMob ads as full-screen video where users receive in-app rewards for viewing the ads.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when an ad was closed.

[[Event('AdMob Rewarded Video', 'Ad Closed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('AdMob Rewarded Video', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Left Application

Called when an ad leaves the application (e.g., to go to the browser).

[[Event('AdMob Rewarded Video', 'Ad Left Application')]]

### Ad Loaded

Called when an ad request was loaded.

[[Event('AdMob Rewarded Video', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('AdMob Rewarded Video', 'Ad Opened')]]

### Ad Video Completed

Called when an video ad was completed.

[[Event('AdMob Rewarded Video', 'Ad Video Completed')]]

### Ad Video Started

Called when an video ad started to show content.

[[Event('AdMob Rewarded Video', 'Ad Video Started')]]

### On Consent Changed

Event triggered when the consent was changed.

[[Event('AdMob Rewarded Video', 'On Consent Changed', 'personalized')]]

| Params | []() |
|--------|------|
|personalized|<span class="chip chip-boolean">Boolean</span>|


### Rewarded

User watched video and should be rewarded.

[[Event('AdMob Rewarded Video', 'Rewarded', 'type', 'amount')]]

| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|
|amount|<span class="chip chip-number">Number</span>|


## Methods

### Load Ad

Load a new AdMob Rewarded Video ad.

[[Method('AdMob Rewarded Video', 'Load Ad', False)]]

### Revoke Consent

Deletes the user's consent. Useful if you want to test the consent dialog in development.

[[Method('AdMob Rewarded Video', 'Revoke Consent', False)]]

### Show Ad

It will show the Video

[[Method('AdMob Rewarded Video', 'Show Ad', False)]]

## Properties

### Ad Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This property must be set to true to receive ads.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Enabled')]]

### Ad Unit Id

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/5224354917</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Consent Development Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Development Mode')]]

### Consent Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The message for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Message')]]

### Consent Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Data Protection</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Title')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

If you want to test the component, that this property to true. After it you will receive test ads.

### Personalized Result

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current personalized consent. If true user has consent to personalized ads.

[[PropertyBlockGetter('AdMob Rewarded Video', 'Personalized Result')]]