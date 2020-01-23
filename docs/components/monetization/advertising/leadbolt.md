# LeadBolt

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)


## Events

### Ad Loaded

Event triggered when ads are loaded

[[Event('LeadBolt', 'Ad Loaded', 'location')]]

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|


### Ad Clicked

Event triggered when ads are clicked

[[Event('LeadBolt', 'Ad Clicked', 'location')]]

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|


### Ad Closed

Event triggered when ads are closed

[[Event('LeadBolt', 'Ad Closed', 'location', 'reward')]]

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|
|reward|<span class="chip chip-boolean">Boolean</span>|


### Ad Failed To Load

Event triggered when ads are failed to load

[[Event('LeadBolt', 'Ad Failed To Load', 'location', 'error', 'isCache')]]

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|
|error|<span class="chip chip-text">Text</span>|
|is Cache|<span class="chip chip-boolean">Boolean</span>|


### Ad Shown

Event triggered when ads are shown

[[Event('LeadBolt', 'Ad Shown', 'location')]]

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|


## Methods

### Is Network Ad Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Use this block after loading an ad to check whether it's ready to show.

[[Method('LeadBolt', 'Is Network Ad Ready', True)]]

### Is Rewarded Ad Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Use this block after loading an ad to check whether it's ready to show.

[[Method('LeadBolt', 'Is Rewarded Ad Ready', True)]]

### Load Network Ad

Use this block to load a Network ad.

[[Method('LeadBolt', 'Load Network Ad', False)]]

### Load Rewarded Ad

Use this block to load a Rewarded Video ad.

[[Method('LeadBolt', 'Load Rewarded Ad', False)]]

### Show Network Ad

Use this block after LoadNetworkAd to show the loaded ad.

[[Method('LeadBolt', 'Show Network Ad', False)]]

### Show Rewarded Ad

Use this block after LoadRewardedAd to show the loaded ad.

[[Method('LeadBolt', 'Show Rewarded Ad', False)]]

## Properties

### API Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('LeadBolt', 'API Key')]]

### Interstitial Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('LeadBolt', 'Interstitial Commission')]]

### Rewarded Video Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('LeadBolt', 'Rewarded Video Commission')]]