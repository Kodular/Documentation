# AdMob Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|3|

## Overview

A visible component that shows AdMob ads as static banners.

??? example "Permissions"
    * [android.permission.ACCESS_FINE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_FINE_LOCATION)
    * [android.permission.ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_COARSE_LOCATION)
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)


## Events

### Ad Closed

Called when an ad was closed.

[[Event('AdMob Banner', 'Ad Closed')]]

### Ad Failed To Load

Called when an ad request failed to load. The message will display the error code and error message.

[[Event('AdMob Banner', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


### Ad Loaded

Called when an ad request was loaded.

[[Event('AdMob Banner', 'Ad Loaded')]]

### Ad Opened

Called when an ad was opened.

[[Event('AdMob Banner', 'Ad Opened')]]

### On Consent Changed

Event triggered when the consent was changed.

[[Event('AdMob Banner', 'On Consent Changed', 'personalized')]]

| Params | []() |
|--------|------|
|personalized|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Load Ad

Load a new AdMob Banner ad.

[[Method('AdMob Banner', 'Load Ad', False)]]

### Revoke Consent

Deletes the user's consent. Useful if you want to test the consent dialog in development.

[[Method('AdMob Banner', 'Revoke Consent', False)]]

## Properties

### Ad Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This property must be set to true to receive ads.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Enabled')]]

### Ad Unit Id

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/6300978111</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set Ad Unit ID

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Unit Id')]]

### Consent Development Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Development Mode')]]

### Consent Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The message for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Message')]]

### Consent Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Data Protection</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Title')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component then that this property to true. Then you will receive test ads.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Test Mode')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Column')]]

### Personalized Result

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current personalized consent. If true user has consent to personalized ads.

[[PropertyBlockGetter('AdMob Banner', 'Personalized Result')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('AdMob Banner', 'Row')]]