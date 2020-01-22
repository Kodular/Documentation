# Amazon Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_AdAmazon component allows you to monetize your app. You must have a valid publisher id that can be obtained from https://developer.amazon.com. If your publisher id is invalid, the AdAmazon banner will not display on the emulator or the device._

## Properties

### Publisher ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Publisher ID')]]

| Type | Default |
|:----:|:-------:|
|text|AmazonPublisherId|

Sets the Amazon Ad Publisher Id and refreshes the ad.

### Refresh Ad

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Refresh Ad')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Refreshes the ad.

### Test Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Turns the debugging on / off based on enabled parameter.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.