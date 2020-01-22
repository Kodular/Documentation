# Snackbar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that displays an alert at the bottom of the screen._

## Events

### Click

[[Event('Snackbar', 'Click')]]

_User clicked on the action button._

### On Dismissed

[[Event('Snackbar', 'On Dismissed', 'event')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |event|`text`|


_Event to detect the snackbar was dismissed. Possible results can be: "UNDEFINED", "ACTION", "CONSECUTIVE", "MANUAL", "SWIPE" or "TIMEOUT". You can find more information at: https://developer.android.com/reference/android/support/design/widget/Snackbar.Callback.html_

### On Shown

[[Event('Snackbar', 'On Shown')]]

_Event to detect the snackbar is shown._

## Methods

### Dismiss

[[Method('Snackbar', 'Dismiss', false)]]

_Dismiss the snackbar._

### IsShown

[[Method('Snackbar', 'IsShown', true)]]

{>>Returns `boolean`<<}

_Returns true whether this snackbar is currently being shown._

### Show

[[Method('Snackbar', 'Show', false, 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_Show Snackbar (message supports HTML formatting)_

### ShowWithButton

[[Method('Snackbar', 'ShowWithButton', false, 'message buttonText')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |button Text|`text`|


_Show Snackbar with action button (message supports HTML formatting)_

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Specifies the snackbar's background color._

### Button Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Button Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the action button's text color._

### Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Specifies the length of time that the Snackbar is shown_

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_No description available_