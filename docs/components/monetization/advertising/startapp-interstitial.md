# StartApp Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows StartApp ads as full-screen advertisements._

## Events

### Ad Clicked

[[Event('StartApp Interstitial', 'Ad Clicked')]]

_Indicates that the user has clicked on the interstial ad_

### Ad Displayed

[[Event('StartApp Interstitial', 'Ad Displayed')]]

_Indicates that an Ad is shown to the user._

### Ad Failed To Load

[[Event('StartApp Interstitial', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Failed To Show

[[Event('StartApp Interstitial', 'Ad Failed To Show', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Called when an an attempt was made to display the ad, but the ad was not ready to display._

### Ad Hidden

[[Event('StartApp Interstitial', 'Ad Hidden')]]

_Indicates that an Ad which was shown to the user is now hidden._

### On Failed To Receive Ad

[[Event('StartApp Interstitial', 'On Failed To Receive Ad', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Called when an ad request failed to load._

### On Receive Ad

[[Event('StartApp Interstitial', 'On Receive Ad')]]

_Called when an ad request failed to load. The message will display the error code and error message._

## Methods

### Load Ad

[[Method('StartApp Interstitial', 'Load Ad', false)]]

_Load a new StartApp Interstitial ad._

### ShowInterstitialAd

[[Method('StartApp Interstitial', 'ShowInterstitialAd', false)]]

_It will show the Interstitial Ad_

## Properties

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Interstitial', 'App ID')]]

| Type |
|:----:|
|text|

_No description available_