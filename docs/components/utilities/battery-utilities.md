# Battery Utilities

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that queries and monitors the device''s battery and its charging status.

## Methods

### Get Battery Info

<span class="chip chip-list">Returns: <i>List</i></span>

Returns a list showing battery info for the specified key. Key can be: HEALTH, LEVEL, PLUGGED, PRESENT, STATUS, CHARGE_STATUS, TECHNOLOGY, TEMPERATURE, VOLTAGE. If key is empty, then all battery info is returned.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Get%20Battery%20Info%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|

## Properties

### Battery Level

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns battery percentage level

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Battery%20Level%22,%20%22getter%22:%20true%7D"></div>

### Battery Plugged

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicating whether the device is plugged in to a power source. Can be USB, AC or UNKNOWN

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Battery%20Plugged%22,%20%22getter%22:%20true%7D"></div>

### Battery Present

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicating whether a battery is present

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Battery%20Present%22,%20%22getter%22:%20true%7D"></div>

### Battery Temperature

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicating battery temperature in Centigrade

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Battery%20Temperature%22,%20%22getter%22:%20true%7D"></div>

### Battery Voltage

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicating battery voltage in Volts

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Battery%20Voltage%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Starts or stops monitoring battery data. StartMonitoring only when you need to get information.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Show Battery Health

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns battery health. It can be: COLD, DEAD, GOOD, OVERHEAT, OVER_VOLTAGE, UNKNOWN

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Battery%20Utilities%22,%20%22name%22:%20%22Show%20Battery%20Health%22,%20%22getter%22:%20true%7D"></div>
