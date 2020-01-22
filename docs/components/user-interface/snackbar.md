# Snackbar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that displays an alert at the bottom of the screen._

## Properties

### Background Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

Specifies the snackbar's background color.

### Button Text Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Button Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the action button's text color.

### Duration

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Duration')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Specifies the length of time that the Snackbar is shown

### Text Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Snackbar', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_No description available_

## Methods

### Dismiss



[[Method('Snackbar', 'Dismiss', false)]]

Dismiss the snackbar.

### IsShown



[[Method('Snackbar', 'IsShown', true)]]

{>>Returns `boolean`<<}


Returns true whether this snackbar is currently being shown.

### Show



[[Method('Snackbar', 'Show', false, 'message')]]

**Parameters**

| Name | Type |
|------|------|
|message|`text`|


Show Snackbar (message supports HTML formatting)

### ShowWithButton



[[Method('Snackbar', 'ShowWithButton', false, 'message buttonText')]]

**Parameters**

| Name | Type |
|------|------|
|message|`text`|
|button Text|`text`|


Show Snackbar with action button (message supports HTML formatting)