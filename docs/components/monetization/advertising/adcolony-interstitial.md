# AdColony Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows AdColony ads as full-screen advertisements._

## Events

### Ad Expiring

[[Event('AdColony Interstitial', 'Ad Expiring')]]

_Called when the ad is expiring. You should load a new ad._

### Ad Failed To Load

[[Event('AdColony Interstitial', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Loaded

[[Event('AdColony Interstitial', 'Ad Loaded')]]

_Called when an ad is received._

### Ad Opened

[[Event('AdColony Interstitial', 'Ad Opened')]]

_Called when an ad was opened._

### Error

[[Event('AdColony Interstitial', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Called when an ad request failed. The message will display the reason for why the ad failed._

## Methods

### IsEuropeanUser

[[Method('AdColony Interstitial', 'IsEuropeanUser', true)]]

{>>Returns `boolean`<<}

_Returns true if the current app user is located in europe. If true you must ask the user as example in a dialog if he give his consent for personalized ads._

### Load Ad

[[Method('AdColony Interstitial', 'Load Ad', false)]]

_Loads a new ad._

### ShowAd

[[Method('AdColony Interstitial', 'ShowAd', false)]]

_Shows an ad to the user._

## Properties

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'App ID')]]

| Type |
|:----:|
|text|

_No description available_

### Zone ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'Zone ID')]]

| Type |
|:----:|
|text|

_No description available_

### User Consent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdColony Interstitial', 'User Consent')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_If set to true the user allowed the ad network to show personalized ads. You only need to request the consent from european users._