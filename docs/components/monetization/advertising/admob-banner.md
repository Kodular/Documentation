# AdMob Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that shows AdMob ads as static banners.

## Events

### Ad Closed

[[Event('AdMob Banner', 'Ad Closed')]]

Called when an ad was closed.

### Ad Failed To Load

[[Event('AdMob Banner', 'Ad Failed To Load', 'errorCode', 'errorMessage')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


Called when an ad request failed to load. The message will display the error code and error message.

### Ad Loaded

[[Event('AdMob Banner', 'Ad Loaded')]]

Called when an ad request was loaded.

### Ad Opened

[[Event('AdMob Banner', 'Ad Opened')]]

Called when an ad was opened.

### On Consent Changed

[[Event('AdMob Banner', 'On Consent Changed', 'personalized')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |personalized|`boolean`|


Event triggered when the consent was changed.

## Methods

### Load Ad

_Block preview not available_

Load a new AdMob Banner ad.

### RevokeConsent

_Block preview not available_

Deletes the user's consent. Useful if you want to test the consent dialog in development.

## Properties

### Ad Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

This property must be set to true to receive ads.

### Ad Unit Id

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Unit Id')]]

| Type | Default |
|:----:|:-------:|
|text|ca-app-pub-3940256099942544/6300978111|

Set Ad Unit ID

### Consent Development Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Development Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development.  If this setting is enabled ALL taken consents will not be saved.

### Consent Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Message')]]

| Type | Default |
|:----:|:-------:|
|text|Can we continue to use your data to tailor ads for you?|

The message for the consent dialog.

### Consent Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Title')]]

| Type | Default |
|:----:|:-------:|
|text|Data Protection|

The title for the consent dialog.

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If you want to test the component then that this property to true. Then you will receive test ads.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Personalized Result

:eyes: Read-Only property
[[PropertyBlockGetter('AdMob Banner', 'Personalized Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Returns the current personalized consent. If true user has consent to personalized ads.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.