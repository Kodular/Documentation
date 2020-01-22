# AppLovin Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component to show ads from AppLovin._

## Events

### Ad Closed

[[Event('AppLovin Interstitial', 'Ad Closed')]]

Called when an ad was closed.

### Ad Failed To Load

[[Event('AppLovin Interstitial', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Loaded

[[Event('AppLovin Interstitial', 'Ad Loaded')]]

Called when an ad is received.

### Ad Opened

[[Event('AppLovin Interstitial', 'Ad Opened')]]

Called when an ad was opened.

### Ad Started

[[Event('AppLovin Interstitial', 'Ad Started')]]

Called when an ad was started.

### Error

[[Event('AppLovin Interstitial', 'Error', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed. The message will display the reason for why the ad failed.

## Methods

### IsEuropeanUser

[[Method('AppLovin Interstitial', 'IsEuropeanUser', true)]]

{>>Returns `boolean`<<}

Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads.

### Load Ad

[[Method('AppLovin Interstitial', 'Load Ad', false)]]

Loads a new ad.

### ShowAd

[[Method('AppLovin Interstitial', 'ShowAd', false)]]

Shows an ad to the user.

## Properties

### SDK Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'SDK Key')]]

| Type |
|:----:|
|text|

_No description available_

### Test Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to test the component then that this property to true. Then you will receive test ads.

### User Consent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'User Consent')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users.