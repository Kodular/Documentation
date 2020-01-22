# AdMob Banner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Monetization > Advertising|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows AdMob ads as static banners._

## Events

### Ad Closed

[[Event('AdMob Banner', 'Ad Closed')]]

_Called when an ad was closed._

### Ad Failed To Load

[[Event('AdMob Banner', 'Ad Failed To Load', 'errorCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |error Code|`number`|
    |error Message|`text`|


_Called when an ad request failed to load. The message will display the error code and error message._

### Ad Loaded

[[Event('AdMob Banner', 'Ad Loaded')]]

_Called when an ad request was loaded._

### Ad Opened

[[Event('AdMob Banner', 'Ad Opened')]]

_Called when an ad was opened._

### On Consent Changed

[[Event('AdMob Banner', 'On Consent Changed', 'personalized')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |personalized|`boolean`|


_Event triggered when the consent was changed._

## Methods

### Load Ad

[[Method('AdMob Banner', 'Load Ad', false)]]

_Load a new AdMob Banner ad._

### RevokeConsent

[[Method('AdMob Banner', 'RevokeConsent', false)]]

_Deletes the user's consent. Useful if you want to test the consent dialog in development._

## Properties

### Ad Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_This property must be set to true to receive ads._

### Ad Unit Id

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Ad Unit Id')]]

| Type | Default |
|:----:|:-------:|
|text|ca-app-pub-3940256099942544/6300978111|

_Set Ad Unit ID_

### Consent Development Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Development Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled you will see the consent dialog no matter if you are located in Europe or not. Please use this option only in development.  If this setting is enabled ALL taken consents will not be saved._

### Consent Message

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Message')]]

| Type | Default |
|:----:|:-------:|
|text|Can we continue to use your data to tailor ads for you?|

_The message for the consent dialog._

### Consent Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Consent Title')]]

| Type | Default |
|:----:|:-------:|
|text|Data Protection|

_The title for the consent dialog._

### Test Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Test Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If you want to test the component then that this property to true. Then you will receive test ads._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Personalized Result

:eyes: Read-Only property
[[PropertyBlockGetter('AdMob Banner', 'Personalized Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Returns the current personalized consent. If true user has consent to personalized ads._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('AdMob Banner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._