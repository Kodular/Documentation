# Facebook Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|1|

## Overview

A non-visible component that shows Facebook ads as static banners.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.ACCESS_NETWORK_STATE)


## Events

### Ad Clicked

Event triggered when ads are clicked

[[Event('Facebook Banner', 'Ad Clicked')]]

### Ad Closed

Event triggered when ads are closed

[[Event('Facebook Banner', 'Ad Closed')]]

### Ad Loaded

Event triggered when ads are loaded

[[Event('Facebook Banner', 'Ad Loaded')]]

### Error

Event triggered when ads failed to load

[[Event('Facebook Banner', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Load Ad

Load Ad

[[Method('Facebook Banner', 'Load Ad', False)]]

## Properties

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set Placement ID

[[PropertyBlockGetterAndSetter('Facebook Banner', 'Placement ID')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Facebook Banner', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.