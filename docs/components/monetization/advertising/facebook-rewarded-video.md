# Facebook Rewarded Video

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows Facebook ads as full-screen video where users receive in-app rewards for viewing the ads.

## Events

### Ad Closed

[[Event('Facebook Rewarded Video', 'Ad Closed')]]

Called when the user is about to return to the application after clicking on an ad.

### Ad Failed To Load

[[Event('Facebook Rewarded Video', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Loaded

[[Event('Facebook Rewarded Video', 'Ad Loaded')]]

Called when an ad is received.

### Ad Opened

[[Event('Facebook Rewarded Video', 'Ad Opened')]]

Called when an ad was opened.

### Ad Video Completed

[[Event('Facebook Rewarded Video', 'Ad Video Completed')]]

Called when an video ad was completed.

### Ad Video Started

[[Event('Facebook Rewarded Video', 'Ad Video Started')]]

Called when an video ad started to show content.

### Error

[[Event('Facebook Rewarded Video', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Called when an ad request failed. message will display the reason for why the ad failed.

## Methods

### Load Ad

[[Method('Facebook Rewarded Video', 'Load Ad', False)]]

Loads a new ad.

### Show Ad

[[Method('Facebook Rewarded Video', 'Show Ad', False)]]

Shows an ad to the user.

## Properties

### Rewarded Video Commission

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>unity</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the ad network used to take the commission.

[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Rewarded Video Commission')]]

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Facebook Rewarded Video', 'Placement ID')]]