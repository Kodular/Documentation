# StartApp Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows StartApp ads as static banners._

## Events

### Ad Clicked

[[Event('StartApp Banner', 'Ad Clicked')]]

_Indicates that the user has clicked on the banner ad._

### Ad Failed To Load

[[Event('StartApp Banner', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### On Failed To Receive Ad

[[Event('StartApp Banner', 'On Failed To Receive Ad', 'errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Message|`text`|


_Called when an ad request failed to load._

### On Receive Ad

[[Event('StartApp Banner', 'On Receive Ad')]]

_Called when an ad request succeeds._

## Methods

### Load Ad

[[Method('StartApp Banner', 'Load Ad', false)]]

_Load a new StartApp Banner ad._

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

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('StartApp Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._