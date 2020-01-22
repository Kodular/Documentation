# Facebook Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A non-visible component that shows Facebook ads as static banners._

## Events

### Ad Clicked

[[Event('Facebook Banner', 'Ad Clicked')]]

_Event triggered when ads are clicked_

### Ad Closed

[[Event('Facebook Banner', 'Ad Closed')]]

_Event triggered when ads are closed_

### Ad Loaded

[[Event('Facebook Banner', 'Ad Loaded')]]

_Event triggered when ads are loaded_

### Error

[[Event('Facebook Banner', 'Error', 'error')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error|`text`|


_Event triggered when ads failed to load_

## Methods

### Load Ad

[[Method('Facebook Banner', 'Load Ad', false)]]

_Load Ad_

## Properties

### Placement ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Placement ID')]]

| Type |
|:----:|
|text|

_Set Placement ID_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Facebook Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._