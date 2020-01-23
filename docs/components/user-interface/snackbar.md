# Snackbar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|4|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that displays an alert at the bottom of the screen.

## Events

### Click

[[Event('Snackbar', 'Click')]]

User clicked on the action button.

### On Dismissed

[[Event('Snackbar', 'On Dismissed', 'event')]]

| Params | []() |
|--------|------|
|event|Text|


Event to detect the snackbar was dismissed. Possible results can be: "UNDEFINED", "ACTION", "CONSECUTIVE", "MANUAL", "SWIPE" or "TIMEOUT". You can find more information at: https://developer.android.com/reference/android/support/design/widget/Snackbar.Callback.html

### On Shown

[[Event('Snackbar', 'On Shown')]]

Event to detect the snackbar is shown.

## Methods

### Dismiss

[[Method('Snackbar', 'Dismiss', False)]]

Dismiss the snackbar.

### Is Shown

[[Method('Snackbar', 'Is Shown', True)]]

{>>Returns `boolean`<<}

Returns true whether this snackbar is currently being shown.

### Show

[[Method('Snackbar', 'Show', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Show Snackbar (message supports HTML formatting)

### Show With Button

[[Method('Snackbar', 'Show With Button', False, 'message', 'buttonText')]]

| Params | []() |
|--------|------|
|message|Text|
|button Text|Text|


Show Snackbar with action button (message supports HTML formatting)

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF444444</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the snackbar's background color.

[[PropertyBlockGetterAndSetter('Snackbar', 'Background Color')]]

### Button Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the action button's text color.

[[PropertyBlockGetterAndSetter('Snackbar', 'Button Text Color')]]

### Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the length of time that the Snackbar is shown

[[PropertyBlockGetterAndSetter('Snackbar', 'Duration')]]

### Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Snackbar', 'Text Color')]]