# Facebook Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Monetization > Advertising**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that shows Facebook ads as static banners.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### Ad Clicked

Event triggered when ads are clicked

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Ad%20Clicked%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Closed

Event triggered when ads are closed

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Ad%20Closed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Ad Loaded

Event triggered when ads are loaded

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Ad%20Loaded%22,%20%22params%22:%20%5B%5D%7D"></div>


### Error

Event triggered when ads failed to load

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Error%22,%20%22params%22:%20%5B%22error%22%5D%7D"></div>


| Params | []() |
|--------|------|
|error|<span class="chip chip-text">Text</span>|


## Methods

### Load Ad

Load Ad

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Load%20Ad%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Placement ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set Placement ID

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Placement%20ID%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Placement%20ID%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Facebook%20Banner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.