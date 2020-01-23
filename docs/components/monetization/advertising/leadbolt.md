# LeadBolt

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements.

## Events

### Ad Loaded

[[Event('LeadBolt', 'Ad Loaded', 'location')]]

| Params | []() |
|--------|------|
|location|Text|


Event triggered when ads are loaded

### Ad Clicked

[[Event('LeadBolt', 'Ad Clicked', 'location')]]

| Params | []() |
|--------|------|
|location|Text|


Event triggered when ads are clicked

### Ad Closed

[[Event('LeadBolt', 'Ad Closed', 'location', 'reward')]]

| Params | []() |
|--------|------|
|location|Text|
|reward|Boolean|


Event triggered when ads are closed

### Ad Failed To Load

[[Event('LeadBolt', 'Ad Failed To Load', 'location', 'error', 'isCache')]]

| Params | []() |
|--------|------|
|location|Text|
|error|Text|
|is Cache|Boolean|


Event triggered when ads are failed to load

### Ad Shown

[[Event('LeadBolt', 'Ad Shown', 'location')]]

| Params | []() |
|--------|------|
|location|Text|


Event triggered when ads are shown

## Methods

### Is Network Ad Ready

[[Method('LeadBolt', 'Is Network Ad Ready', True)]]

{>>Returns `boolean`<<}

Use this block after loading an ad to check whether it's ready to show.

### Is Rewarded Ad Ready

[[Method('LeadBolt', 'Is Rewarded Ad Ready', True)]]

{>>Returns `boolean`<<}

Use this block after loading an ad to check whether it's ready to show.

### Load Network Ad

[[Method('LeadBolt', 'Load Network Ad', False)]]

Use this block to load a Network ad.

### Load Rewarded Ad

[[Method('LeadBolt', 'Load Rewarded Ad', False)]]

Use this block to load a Rewarded Video ad.

### Show Network Ad

[[Method('LeadBolt', 'Show Network Ad', False)]]

Use this block after LoadNetworkAd to show the loaded ad.

### Show Rewarded Ad

[[Method('LeadBolt', 'Show Rewarded Ad', False)]]

Use this block after LoadRewardedAd to show the loaded ad.

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