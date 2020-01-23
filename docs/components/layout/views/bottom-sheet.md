# Bottom Sheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows a visible layout at the bottom of the screen.

## Events

### Closed

[[Event('Bottom Sheet', 'Closed')]]

Event to detect that the dialog was closed.

### Opened

[[Event('Bottom Sheet', 'Opened')]]

Event to detect that the dialog was opened.

## Methods

### Hide Dialog

_Block preview not available_

Hide the bottom sheet dialog.

### Register Component As Dialog

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|


Register any component as example a 'button', that will be later your bottom sheet dialog.

### Register Layout As Dialog

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |layout|`component`|


Register any layout as example a 'horizontal arrangement', that will be later your bottom sheet dialog.

### Show Dialog

_Block preview not available_

Show the bottom sheet dialog.

## Properties

### Dim Background

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Dim Background')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true the user will see a dark background effect. Else the background have then no dark background effect.

### Show Status Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Show Status Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.