# Unity Ads Interstitial

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows Unity ads as full-screen advertisements._

## Properties

### Game ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Game ID')]]

| Type |
|:----:|
|text|

_No description available_

### Placement ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Placement ID')]]

| Type |
|:----:|
|text|

_No description available_

### Test Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to test the component then that this property to true. Then you will receive test ads.

## Methods

### IsReady



[[Method('Unity Ads Interstitial', 'IsReady', true)]]

{>>Returns `boolean`<<}


Returns true if the ad is finished loading and can now be shown.

### ShowAd



[[Method('Unity Ads Interstitial', 'ShowAd', false)]]

Shows an ad to the user.