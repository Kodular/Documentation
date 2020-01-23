# AdMob Rewarded Video

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows AdMob ads as full-screen video where users receive in-app rewards for viewing the ads.

## Events

### Ad Closed

[[Event('AdMob Rewarded Video', 'Ad Closed')]]

Called when an ad was closed.

### Ad Failed To Load

[[Event('AdMob Rewarded Video', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Left Application

[[Event('AdMob Rewarded Video', 'Ad Left Application')]]

Called when an ad leaves the application (e.g., to go to the browser).

### Ad Loaded

[[Event('AdMob Rewarded Video', 'Ad Loaded')]]

Called when an ad request was loaded.

### Ad Opened

[[Event('AdMob Rewarded Video', 'Ad Opened')]]

Called when an ad was opened.

### Ad Video Completed

[[Event('AdMob Rewarded Video', 'Ad Video Completed')]]

Called when an video ad was completed.

### Ad Video Started

[[Event('AdMob Rewarded Video', 'Ad Video Started')]]

Called when an video ad started to show content.

### On Consent Changed

[[Event('AdMob Rewarded Video', 'On Consent Changed', 'personalized')]]

| Params | []() |
|--------|------|
|personalized|Boolean|


Event triggered when the consent was changed.

### Rewarded

[[Event('AdMob Rewarded Video', 'Rewarded', 'type', 'amount')]]

| Params | []() |
|--------|------|
|type|Text|
|amount|Number|


User watched video and should be rewarded.

## Methods

### Load Ad

[[Method('AdMob Rewarded Video', 'Load Ad', False)]]

Load a new AdMob Rewarded Video ad.

### Revoke Consent

[[Method('AdMob Rewarded Video', 'Revoke Consent', False)]]

Deletes the user's consent. Useful if you want to test the consent dialog in development.

### Show Ad

[[Method('AdMob Rewarded Video', 'Show Ad', False)]]

It will show the Video

## Properties

### Ad Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

This property must be set to true to receive ads.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Enabled')]]

### Ad Unit Id

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>ca-app-pub-3940256099942544/5224354917</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Ad Unit Id')]]

### Consent Development Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development. If this setting is enabled ALL taken consents will not be saved.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Development Mode')]]

### Consent Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Can we continue to use your data to tailor ads for you?</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The message for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Message')]]

### Consent Title

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Data Protection</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The title for the consent dialog.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Consent Title')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If you want to test the component, that this property to true. After it you will receive test ads.

[[PropertyBlockGetterAndSetter('AdMob Rewarded Video', 'Test Mode')]]

### Personalized Result

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the current personalized consent. If true user has consent to personalized ads.

[[PropertyBlockGetter('AdMob Rewarded Video', 'Personalized Result')]]