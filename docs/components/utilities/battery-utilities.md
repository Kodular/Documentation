# Battery Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that queries and monitors the device''s battery and its charging status._

## Methods

### GetBatteryInfo

[[Method('Battery Utilities', 'GetBatteryInfo', true, 'key')]]

{>>Returns `list`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |key|`text`|


_Returns a list showing battery info for the specified key. Key can be: HEALTH, LEVEL, PLUGGED, PRESENT, STATUS, CHARGE_STATUS, TECHNOLOGY, TEMPERATURE, VOLTAGE. If key is empty, then all battery info is returned._

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Battery Utilities', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Starts or stops monitoring battery data. StartMonitoring only when you need to get information._

### Show Battery Health

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Show Battery Health')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns battery health. It can be: COLD, DEAD, GOOD, OVERHEAT, OVER_VOLTAGE, UNKNOWN_

### Battery Level

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Level')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns battery percentage level_

### Battery Plugged

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Plugged')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Indicating whether the device is plugged in to a power source. Can be USB, AC or UNKNOWN_

### Battery Present

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Present')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Indicating whether a battery is present_

### Battery Temperature

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Temperature')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Indicating battery temperature in Centigrade_

### Battery Voltage

:eyes: Read-Only property
[[PropertyBlockGetter('Battery Utilities', 'Battery Voltage')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Indicating battery voltage in Volts_