# Facebook Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error|`text`|


Event triggered when ads failed to load

## Methods

### Load Ad

_Block preview not available_

Load Ad

## Properties

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Placement ID')]]

| Type |
|:----:|
|text|

Set Placement ID

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.