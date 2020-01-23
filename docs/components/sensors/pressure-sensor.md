# Pressure Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that measures the ambient air pressure in units of hPa or mbar.

## Events

### Pressure Changed

[[Event('Pressure Sensor', 'Pressure Changed', 'pressure', 'altitude')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |pressure|`number`|
    |altitude|`number`|


Event is invoked when pressure is changed.

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pressure Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_No description available_

### Keep Running When On Pause

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Pressure Sensor', 'Keep Running When On Pause')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Altitude

:eyes: Read-Only property
[[PropertyBlockGetter('Pressure Sensor', 'Altitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Pressure Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_No description available_

### Maximum Range

:eyes: Read-Only property
[[PropertyBlockGetter('Pressure Sensor', 'Maximum Range')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_

### Pressure

:eyes: Read-Only property
[[PropertyBlockGetter('Pressure Sensor', 'Pressure')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_No description available_