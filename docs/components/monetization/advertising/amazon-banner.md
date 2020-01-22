# Amazon Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_AdAmazon component allows you to monetize your app. You must have a valid publisher id that can be obtained from https://developer.amazon.com. If your publisher id is invalid, the AdAmazon banner will not display on the emulator or the device._

## Events

### Ad Dismissed

[[Event('Amazon Banner', 'Ad Dismissed')]]

_Event to detect that a ad was dismissed._

### Ad Expanded

[[Event('Amazon Banner', 'Ad Expanded')]]

_Event to detect that a ad was expanded._

### Ad Failed To Load

[[Event('Amazon Banner', 'Ad Failed To Load', 'errCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`text`|
    |error Message|`text`|


_Event to detect that the try to load a ad was not successful._

### Ad Loaded

[[Event('Amazon Banner', 'Ad Loaded')]]

_Event to detect that a ad was loaded._

## Properties

### Publisher ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Publisher ID')]]

| Type | Default |
|:----:|:-------:|
|text|AmazonPublisherId|

_Sets the Amazon Ad Publisher Id and refreshes the ad._

### Refresh Ad

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Refresh Ad')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Refreshes the ad._

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Turns the debugging on / off based on enabled parameter._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Amazon Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._