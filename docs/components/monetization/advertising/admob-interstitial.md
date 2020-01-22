# AdMob Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_An interstitial ad is a full-page ad. AdMobInterstitial component allows you to monetize your app. You must have a valid AdMob account and AdUnitId that can be obtained from http://www.google.com/AdMob . If your id is invalid, the AdMobInterstitial will not display on the emulator or the device. Warning: Make sure you're in test mode during development to avoid being disabled for clicking your own ads. _

## Events

### Ad Closed

[[Event('AdMob Interstitial', 'Ad Closed')]]

_Called when an ad was closed._

### Ad Failed To Load

[[Event('AdMob Interstitial', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Failed To Show

[[Event('AdMob Interstitial', 'Ad Failed To Show', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Called when an an attempt was made to display the ad, but the ad was not ready to display._

### Ad Left Application

[[Event('AdMob Interstitial', 'Ad Left Application')]]

_Called when an ad leaves the application (e.g., to go to the browser)._

### Ad Loaded

[[Event('AdMob Interstitial', 'Ad Loaded')]]

_Called when an ad request was loaded._

### Ad Opened

[[Event('AdMob Interstitial', 'Ad Opened')]]

_Called when an ad was opened._

### On Consent Changed

[[Event('AdMob Interstitial', 'On Consent Changed', 'personalized')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |personalized|`boolean`|


_Event triggered when the consent was changed._

## Methods

### Load Ad

[[Method('AdMob Interstitial', 'Load Ad', false)]]

_Load a new AdMob Interstitial ad._

### RevokeConsent

[[Method('AdMob Interstitial', 'RevokeConsent', false)]]

_Deletes the user's consent. Useful if you want to test the consent dialog in development._

### ShowInterstitialAd

[[Method('AdMob Interstitial', 'ShowInterstitialAd', false)]]

_It will show the Interstitial Ad_

## Properties

### Ad Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Ad Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_This property must be set to true to receive ads._

### Ad Unit ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Ad Unit ID')]]

| Type | Default |
|:----:|:-------:|
|text|ca-app-pub-3940256099942544/1033173712|

_No description available_

### Interstitial Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

_Sets the ad network used to take the commission._

### Consent Development Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Development Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development.  If this setting is enabled ALL taken consents will not be saved._

### Consent Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Message')]]

| Type | Default |
|:----:|:-------:|
|text|Can we continue to use your data to tailor ads for you?|

_The message for the consent dialog._

### Consent Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Consent Title')]]

| Type | Default |
|:----:|:-------:|
|text|Data Protection|

_The title for the consent dialog._

### Target Age

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target Age')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Leave 0 for targeting ALL ages_

### Target For Children

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target For Children')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Indicate whether you want Google to treat your content as child-directed when you make an ad request. Info here: https://developers.google.com/mobile-ads-sdk/docs/admob/android/targeting#child-directed_setting_

### Target Gender

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Target Gender')]]

| Type | Default |
|:----:|:-------:|
|text|ALL|

_No description available_

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Interstitial', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to test the component then that this property to true. Then you will receive test ads._

### Personalized Result

:eyes: Read-Only property
[[PropertyBlockGetter('AdMob Interstitial', 'Personalized Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns the current personalized consent. If true user has consent to personalized ads._