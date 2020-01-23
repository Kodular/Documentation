# Facebook Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19, Android 4.4 - 4.4.4 KitKat|

## Overview

A non-visible component that shows Facebook ads as static banners.

## Events

### Ad Clicked

[[Event('Facebook Banner', 'Ad Clicked')]]

Event triggered when ads are clicked

### Ad Closed

[[Event('Facebook Banner', 'Ad Closed')]]

Event triggered when ads are closed

### Ad Loaded

[[Event('Facebook Banner', 'Ad Loaded')]]

Event triggered when ads are loaded

### Error

[[Event('Facebook Banner', 'Error', 'error')]]

| Params | []() |
|--------|------|
|error|Text|


Event triggered when ads failed to load

## Methods

### Load Ad

[[Method('Facebook Banner', 'Load Ad', False)]]

Load Ad

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

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Facebook Banner', 'Column')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Facebook Banner', 'Row')]]