# Snackbar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that displays an alert at the bottom of the screen.

## Events

### Click

User clicked on the action button.

[[Event('Snackbar', 'Click')]]

### On Dismissed

Event to detect the snackbar was dismissed. Possible results can be: "UNDEFINED", "ACTION", "CONSECUTIVE", "MANUAL", "SWIPE" or "TIMEOUT". You can find more information at: https://developer.android.com/reference/android/support/design/widget/Snackbar.Callback.html

[[Event('Snackbar', 'On Dismissed', 'event')]]

| Params | []() |
|--------|------|
|event|<span class="chip chip-text">Text</span>|


### On Shown

Event to detect the snackbar is shown.

[[Event('Snackbar', 'On Shown')]]

## Methods

### Dismiss

Dismiss the snackbar.

[[Method('Snackbar', 'Dismiss', False)]]

### Is Shown

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true whether this snackbar is currently being shown.

[[Method('Snackbar', 'Is Shown', True)]]

### Show

Show Snackbar (message supports HTML formatting)

[[Method('Snackbar', 'Show', False, 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Show With Button

Show Snackbar with action button (message supports HTML formatting)

[[Method('Snackbar', 'Show With Button', False, 'message', 'buttonText')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #444444;">Default: <i>#444444FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the snackbar's background color.

[[PropertyBlockGetterAndSetter('Snackbar', 'Background Color')]]

### Button Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the action button's text color.

[[PropertyBlockGetterAndSetter('Snackbar', 'Button Text Color')]]

### Duration

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the length of time that the Snackbar is shown

[[PropertyBlockGetterAndSetter('Snackbar', 'Duration')]]

### Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Snackbar', 'Text Color')]]