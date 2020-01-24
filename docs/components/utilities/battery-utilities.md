# Battery Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that queries and monitors the device''s battery and its charging status.

## Methods

### Get Battery Info

<span class="chip chip-list">Returns: <i>List</i></span> 

Returns a list showing battery info for the specified key. Key can be: HEALTH, LEVEL, PLUGGED, PRESENT, STATUS, CHARGE_STATUS, TECHNOLOGY, TEMPERATURE, VOLTAGE. If key is empty, then all battery info is returned.

[[Method('Battery Utilities', 'Get Battery Info', True, 'key')]]

| Params | []() |
|--------|------|
|key|<span class="chip chip-text">Text</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Starts or stops monitoring battery data. StartMonitoring only when you need to get information.

[[PropertyBlockGetterAndSetter('Battery Utilities', 'Enabled')]]

### Show Battery Health

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns battery health. It can be: COLD, DEAD, GOOD, OVERHEAT, OVER_VOLTAGE, UNKNOWN

[[PropertyBlockGetter('Battery Utilities', 'Show Battery Health')]]

### Battery Level

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns battery percentage level

[[PropertyBlockGetter('Battery Utilities', 'Battery Level')]]

### Battery Plugged

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicating whether the device is plugged in to a power source. Can be USB, AC or UNKNOWN

[[PropertyBlockGetter('Battery Utilities', 'Battery Plugged')]]

### Battery Present

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicating whether a battery is present

[[PropertyBlockGetter('Battery Utilities', 'Battery Present')]]

### Battery Temperature

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicating battery temperature in Centigrade

[[PropertyBlockGetter('Battery Utilities', 'Battery Temperature')]]

### Battery Voltage

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicating battery voltage in Volts

[[PropertyBlockGetter('Battery Utilities', 'Battery Voltage')]]