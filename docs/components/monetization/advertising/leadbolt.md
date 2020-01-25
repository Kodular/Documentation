# LeadBolt

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that shows LeadBolt ads as rewarded videos and network advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Ad Clicked

Event triggered when ads are clicked

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22param%22:%20%5B%22location%22%5D%7D"></div>

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|

### Ad Closed

Event triggered when ads are closed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%22location%22,%20%22reward%22%5D%7D"></div>

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|
|reward|<span class="chip chip-boolean">Boolean</span>|

### Ad Failed To Load

Event triggered when ads are failed to load

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Ad%20Failed%20To%20Load%22,%20%22param%22:%20%5B%22location%22,%20%22error%22,%20%22is%20Cache%22%5D%7D"></div>

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|
|error|<span class="chip chip-text">Text</span>|
|is Cache|<span class="chip chip-boolean">Boolean</span>|

### Ad Loaded

Event triggered when ads are loaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22param%22:%20%5B%22location%22%5D%7D"></div>

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|

### Ad Shown

Event triggered when ads are shown

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Ad%20Shown%22,%20%22param%22:%20%5B%22location%22%5D%7D"></div>

| Params | []() |
|--------|------|
|location|<span class="chip chip-text">Text</span>|

## Methods

### Is Network Ad Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Use this block after loading an ad to check whether it's ready to show.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Is%20Network%20Ad%20Ready%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Is Rewarded Ad Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Use this block after loading an ad to check whether it's ready to show.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Is%20Rewarded%20Ad%20Ready%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Load Network Ad

Use this block to load a Network ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Load%20Network%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Load Rewarded Ad

Use this block to load a Rewarded Video ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Load%20Rewarded%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Network Ad

Use this block after LoadNetworkAd to show the loaded ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Show%20Network%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Rewarded Ad

Use this block after LoadRewardedAd to show the loaded ad.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Show%20Rewarded%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### API Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

### Interstitial Commission

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the ad network used to take the commission.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Interstitial%20Commission%22,%20%22getter%22:%20false%7D"></div>

### Rewarded Video Commission

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the ad network used to take the commission.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22LeadBolt%22,%20%22name%22:%20%22Rewarded%20Video%20Commission%22,%20%22getter%22:%20false%7D"></div>
