# StartApp Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that shows StartApp ads as static banners.

## Events

### Ad Clicked

[[Event('StartApp Banner', 'Ad Clicked')]]

Indicates that the user has clicked on the banner ad.

### Ad Failed To Load

[[Event('StartApp Banner', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### On Failed To Receive Ad

[[Event('StartApp Banner', 'On Failed To Receive Ad', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


Called when an ad request failed to load.

### On Receive Ad

[[Event('StartApp Banner', 'On Receive Ad')]]

Called when an ad request succeeds.

## Methods

### Load Ad

[[Method('StartApp Banner', 'Load Ad', false)]]

Load a new StartApp Banner ad.

## Properties

### App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'App ID')]]

| Type |
|:----:|
|text|

_No description available_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.