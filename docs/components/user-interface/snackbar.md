# Snackbar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that displays an alert at the bottom of the screen.

## Events

### Click

[[Event('Snackbar', 'Click')]]

User clicked on the action button.

### On Dismissed

[[Event('Snackbar', 'On Dismissed', 'event')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |event|`text`|


Event to detect the snackbar was dismissed. Possible results can be: "UNDEFINED", "ACTION", "CONSECUTIVE", "MANUAL", "SWIPE" or "TIMEOUT". You can find more information at: https://developer.android.com/reference/android/support/design/widget/Snackbar.Callback.html

### On Shown

[[Event('Snackbar', 'On Shown')]]

Event to detect the snackbar is shown.

## Methods

### Dismiss

_Block preview not available_

Dismiss the snackbar.

### IsShown

_Block preview not available_

{>>Returns `boolean`<<}

Returns true whether this snackbar is currently being shown.

### Show

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


Show Snackbar (message supports HTML formatting)

### ShowWithButton

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|
    |button Text|`text`|


Show Snackbar with action button (message supports HTML formatting)

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Specifies the snackbar's background color.

### Button Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Button Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the action button's text color.

### Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the length of time that the Snackbar is shown

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_No description available_