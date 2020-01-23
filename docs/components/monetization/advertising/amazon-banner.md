# Amazon Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

AdAmazon component allows you to monetize your app. You must have a valid publisher id that can be obtained from https://developer.amazon.com. If your publisher id is invalid, the AdAmazon banner will not display on the emulator or the device.

## Events

### Ad Dismissed

[[Event('Amazon Banner', 'Ad Dismissed')]]

Event to detect that a ad was dismissed.

### Ad Expanded

[[Event('Amazon Banner', 'Ad Expanded')]]

Event to detect that a ad was expanded.

### Ad Failed To Load

[[Event('Amazon Banner', 'Ad Failed To Load', 'errCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Text|
|error Message|Text|


Event to detect that the try to load a ad was not successful.

### Ad Loaded

[[Event('Amazon Banner', 'Ad Loaded')]]

Event to detect that a ad was loaded.

## Properties

### Publisher ID

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>AmazonPublisherId</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the Amazon Ad Publisher Id and refreshes the ad.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Publisher ID')]]

### Refresh Ad

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Refreshes the ad.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Refresh Ad')]]

### Test Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Turns the debugging on / off based on enabled parameter.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Test Mode')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Column')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Amazon Banner', 'Row')]]