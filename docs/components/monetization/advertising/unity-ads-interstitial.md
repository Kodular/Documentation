# Unity Ads Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows Unity ads as full-screen advertisements._

## Events

### Ad Closed

[[Event('Unity Ads Interstitial', 'Ad Closed', 'placementId wasSkipped wasCompleted')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |placement Id|`text`|
    |was Skipped|`boolean`|
    |was Completed|`boolean`|


_Called when an ad was closed._

### Ad Opened

[[Event('Unity Ads Interstitial', 'Ad Opened', 'placementId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |placement Id|`text`|


_Called when an ad was opened._

### Ad Started

[[Event('Unity Ads Interstitial', 'Ad Started', 'placementId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |placement Id|`text`|


_Called when an ad was started._

### Error

[[Event('Unity Ads Interstitial', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Called when an ad request failed. The message will display the reason for why the ad failed._

## Methods

### IsReady

[[Method('Unity Ads Interstitial', 'IsReady', true)]]

{>>Returns `boolean`<<}

_Returns true if the ad is finished loading and can now be shown._

### ShowAd

[[Method('Unity Ads Interstitial', 'ShowAd', false)]]

_Shows an ad to the user._

## Properties

### Game ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Game ID')]]

| Type |
|:----:|
|text|

_No description available_

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to test the component then that this property to true. Then you will receive test ads._