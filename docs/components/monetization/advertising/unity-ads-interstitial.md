# Unity Ads Interstitial

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that shows Unity ads as full-screen advertisements.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### Ad Closed

Called when an ad was closed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22param%22:%20%5B%22placement%20Id%22,%20%22was%20Skipped%22,%20%22was%20Completed%22%5D%7D"></div>

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|
|was Skipped|<span class="chip chip-boolean">Boolean</span>|
|was Completed|<span class="chip chip-boolean">Boolean</span>|

### Ad Opened

Called when an ad was opened.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Ad%20Opened%22,%20%22param%22:%20%5B%22placement%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|

### Ad Started

Called when an ad was started.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Ad%20Started%22,%20%22param%22:%20%5B%22placement%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|placement Id|<span class="chip chip-text">Text</span>|

### Error

Called when an ad request failed. The message will display the reason for why the ad failed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Error%22,%20%22param%22:%20%5B%22error%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|

## Methods

### Is Ready

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the ad is finished loading and can now be shown.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Is%20Ready%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Show Ad

Shows an ad to the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Unity%20Ads%20Interstitial%22,%20%22name%22:%20%22Show%20Ad%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Game ID

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

### Placement ID

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

### Test Mode

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>False</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

If you want to test the component then that this property to true. Then you will receive test ads.
