# LeadBolt

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements._

## Properties

### API Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'API Key')]]

| Type |
|:----:|
|text|

_No description available_

### Interstitial Commission

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'Interstitial Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

### Rewarded Video Commission

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('LeadBolt', 'Rewarded Video Commission')]]

| Type | Default |
|:----:|:-------:|
|text|unity|

Sets the ad network used to take the commission.

## Methods

### IsNetworkAdReady



[[Method('LeadBolt', 'IsNetworkAdReady', true)]]

{>>Returns `boolean`<<}


Use this block after loading an ad to check whether it's ready to show.

### IsRewardedAdReady



[[Method('LeadBolt', 'IsRewardedAdReady', true)]]

{>>Returns `boolean`<<}


Use this block after loading an ad to check whether it's ready to show.

### LoadNetworkAd



[[Method('LeadBolt', 'LoadNetworkAd', false)]]

Use this block to load a Network ad.

### LoadRewardedAd



[[Method('LeadBolt', 'LoadRewardedAd', false)]]

Use this block to load a Rewarded Video ad.

### ShowNetworkAd



[[Method('LeadBolt', 'ShowNetworkAd', false)]]

Use this block after LoadNetworkAd to show the loaded ad.

### ShowRewardedAd



[[Method('LeadBolt', 'ShowRewardedAd', false)]]

Use this block after LoadRewardedAd to show the loaded ad.