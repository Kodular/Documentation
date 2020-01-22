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

_Called when an ad was closed._

### Ad Failed To Load

[[Event('AppLovin Interstitial', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Loaded

[[Event('AppLovin Interstitial', 'Ad Loaded')]]

_Called when an ad is received._

### Ad Opened

[[Event('AppLovin Interstitial', 'Ad Opened')]]

_Called when an ad was opened._

### Ad Started

[[Event('AppLovin Interstitial', 'Ad Started')]]

_Called when an ad was started._

### Error

[[Event('AppLovin Interstitial', 'Error', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed. The message will display the reason for why the ad failed._

## Methods

### IsEuropeanUser

[[Method('AppLovin Interstitial', 'IsEuropeanUser', true)]]

{>>Returns `boolean`<<}

_Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads._

### Load Ad

[[Method('AppLovin Interstitial', 'Load Ad', false)]]

_Loads a new ad._

### ShowAd

[[Method('AppLovin Interstitial', 'ShowAd', false)]]

_Shows an ad to the user._

## Properties

### SDK Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'SDK Key')]]

| Type |
|:----:|
|text|

_No description available_

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to test the component then that this property to true. Then you will receive test ads._

### User Consent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AppLovin Interstitial', 'User Consent')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users._