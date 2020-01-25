# Snackbar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that displays an alert at the bottom of the screen.

## Events

### Click

User clicked on the action button.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### On Dismissed

Event to detect the snackbar was dismissed. Possible results can be: "UNDEFINED", "ACTION", "CONSECUTIVE", "MANUAL", "SWIPE" or "TIMEOUT". You can find more information at: https://developer.android.com/reference/android/support/design/widget/Snackbar.Callback.html

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22On%20Dismissed%22,%20%22param%22:%20%5B%22event%22%5D%7D"></div>

| Params | []() |
|--------|------|
|event|<span class="chip chip-text">Text</span>|

### On Shown

Event to detect the snackbar is shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22On%20Shown%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Dismiss

Dismiss the snackbar.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Dismiss%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Is Shown

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true whether this snackbar is currently being shown.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Is%20Shown%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Show

Show Snackbar (message supports HTML formatting)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Show%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Show With Button

Show Snackbar with action button (message supports HTML formatting)

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Show%20With%20Button%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22,%20%22button%20Text%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|button Text|<span class="chip chip-text">Text</span>|

## Properties

### Background Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #444444;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the snackbar's background color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Button Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the action button's text color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Button%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Button%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Duration

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

Specifies the length of time that the Snackbar is shown

### Text Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Snackbar%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>
