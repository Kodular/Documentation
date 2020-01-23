# StartApp Banner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|API 19, Android 4.4 - 4.4.4 KitKat|1|

## Overview

A visible component that shows StartApp ads as static banners.

## Events

### Ad Clicked

[[Event('StartApp Banner', 'Ad Clicked')]]

Indicates that the user has clicked on the banner ad.

### Ad Failed To Load

[[Event('StartApp Banner', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|


Called when an ad request failed to load. The message will display the error code and error message.

### On Failed To Receive Ad

[[Event('StartApp Banner', 'On Failed To Receive Ad', 'errorMessage')]]

| Params | []() |
|--------|------|
|error Message|Text|


Called when an ad request failed to load.

### On Receive Ad

[[Event('StartApp Banner', 'On Receive Ad')]]

Called when an ad request succeeds.

## Methods

### Load Ad

[[Method('StartApp Banner', 'Load Ad', False)]]

Load a new StartApp Banner ad.

## Properties

### App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('StartApp Banner', 'App ID')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('StartApp Banner', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('StartApp Banner', 'Column')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('StartApp Banner', 'Row')]]