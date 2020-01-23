# Battery Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that queries and monitors the device''s battery and its charging status.

## Methods

### Get Battery Info

_Block preview not available_

{>>Returns `list`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |key|`text`|


Returns a list showing battery info for the specified key. Key can be: HEALTH, LEVEL, PLUGGED, PRESENT, STATUS, CHARGE_STATUS, TECHNOLOGY, TEMPERATURE, VOLTAGE. If key is empty, then all battery info is returned.

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Battery Utilities', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Starts or stops monitoring battery data. StartMonitoring only when you need to get information.

### Show Battery Health

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Show Battery Health')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns battery health. It can be: COLD, DEAD, GOOD, OVERHEAT, OVER_VOLTAGE, UNKNOWN

### Battery Level

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Level')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns battery percentage level

### Battery Plugged

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Plugged')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Indicating whether the device is plugged in to a power source. Can be USB, AC or UNKNOWN

### Battery Present

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Present')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicating whether a battery is present

### Battery Temperature

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Temperature')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Indicating battery temperature in Centigrade

### Battery Voltage

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Voltage')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Indicating battery voltage in Volts