# Unity Ads Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Unity ads as full-screen advertisements.

## Events

### Ad Closed

[[Event('Unity Ads Interstitial', 'Ad Closed', 'placementId', 'wasSkipped', 'wasCompleted')]]

| Params | []() |
|--------|------|
|placement Id|Text|
|was Skipped|Boolean|
|was Completed|Boolean|


Called when an ad was closed.

### Ad Opened

[[Event('Unity Ads Interstitial', 'Ad Opened', 'placementId')]]

| Params | []() |
|--------|------|
|placement Id|Text|


Called when an ad was opened.

### Ad Started

[[Event('Unity Ads Interstitial', 'Ad Started', 'placementId')]]

| Params | []() |
|--------|------|
|placement Id|Text|


Called when an ad was started.

### Error

[[Event('Unity Ads Interstitial', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Called when an ad request failed. The message will display the reason for why the ad failed.

## Methods

### Is Ready

[[Method('Unity Ads Interstitial', 'Is Ready', True)]]

{>>Returns `boolean`<<}

Returns true if the ad is finished loading and can now be shown.

### Show Ad

[[Method('Unity Ads Interstitial', 'Show Ad', False)]]

Shows an ad to the user.

## Properties

### Game ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Game ID')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Placement ID')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component then that this property to true. Then you will receive test ads.

[[PropertyBlockGetterAndSetter('Unity Ads Interstitial', 'Test Mode')]]