# LeadBolt

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements.

## Events

### Ad Loaded

[[Event('LeadBolt', 'Ad Loaded', 'location')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location|`text`|


Event triggered when ads are loaded

### Ad Clicked

[[Event('LeadBolt', 'Ad Clicked', 'location')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location|`text`|


Event triggered when ads are clicked

### Ad Closed

[[Event('LeadBolt', 'Ad Closed', 'location', 'reward')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location|`text`|
    |reward|`boolean`|


Event triggered when ads are closed

### Ad Failed To Load

[[Event('LeadBolt', 'Ad Failed To Load', 'location', 'error', 'isCache')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location|`text`|
    |error|`text`|
    |is Cache|`boolean`|


Event triggered when ads are failed to load

### Ad Shown

[[Event('LeadBolt', 'Ad Shown', 'location')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |location|`text`|


Event triggered when ads are shown

## Methods

### IsNetworkAdReady

_Block preview not available_

{>>Returns `boolean`<<}

Use this block after loading an ad to check whether it's ready to show.

### IsRewardedAdReady

_Block preview not available_

{>>Returns `boolean`<<}

Use this block after loading an ad to check whether it's ready to show.

### LoadNetworkAd

_Block preview not available_

Use this block to load a Network ad.

### LoadRewardedAd

_Block preview not available_

Use this block to load a Rewarded Video ad.

### ShowNetworkAd

_Block preview not available_

Use this block after LoadNetworkAd to show the loaded ad.

### ShowRewardedAd

_Block preview not available_

Use this block after LoadRewardedAd to show the loaded ad.

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

Sets the ad network used to take the commission.

### Rewarded Video Commission

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'Rewarded Video Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.