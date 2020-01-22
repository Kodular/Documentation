# LeadBolt

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements._

## Events

### Ad Loaded

[[Event('LeadBolt', 'Ad Loaded', 'location')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |location|`text`|


_Event triggered when ads are loaded_

### Ad Clicked

[[Event('LeadBolt', 'Ad Clicked', 'location')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |location|`text`|


_Event triggered when ads are clicked_

### Ad Closed

[[Event('LeadBolt', 'Ad Closed', 'location reward')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |location|`text`|
    |reward|`boolean`|


_Event triggered when ads are closed_

### Ad Failed To Load

[[Event('LeadBolt', 'Ad Failed To Load', 'location error isCache')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |location|`text`|
    |error|`text`|
    |is Cache|`boolean`|


_Event triggered when ads are failed to load_

### Ad Shown

[[Event('LeadBolt', 'Ad Shown', 'location')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |location|`text`|


_Event triggered when ads are shown_

## Methods

### IsNetworkAdReady

[[Method('LeadBolt', 'IsNetworkAdReady', true)]]

{>>Returns `boolean`<<}

_Use this block after loading an ad to check whether it's ready to show._

### IsRewardedAdReady

[[Method('LeadBolt', 'IsRewardedAdReady', true)]]

{>>Returns `boolean`<<}

_Use this block after loading an ad to check whether it's ready to show._

### LoadNetworkAd

[[Method('LeadBolt', 'LoadNetworkAd', false)]]

_Use this block to load a Network ad._

### LoadRewardedAd

[[Method('LeadBolt', 'LoadRewardedAd', false)]]

_Use this block to load a Rewarded Video ad._

### ShowNetworkAd

[[Method('LeadBolt', 'ShowNetworkAd', false)]]

_Use this block after LoadNetworkAd to show the loaded ad._

### ShowRewardedAd

[[Method('LeadBolt', 'ShowRewardedAd', false)]]

_Use this block after LoadRewardedAd to show the loaded ad._

## Properties

### API Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'API Key')]]

| Type |
|:----:|
|text|

_No description available_

### Interstitial Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

_Sets the ad network used to take the commission._

### Rewarded Video Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'Rewarded Video Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

_Sets the ad network used to take the commission._