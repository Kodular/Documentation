# Bottom Sheet

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that shows a visible layout at the bottom of the screen._

## Events

### Closed

[[Event('Bottom Sheet', 'Closed')]]

_Event to detect that the dialog was closed._

### Opened

[[Event('Bottom Sheet', 'Opened')]]

_Event to detect that the dialog was opened._

## Methods

### HideDialog

[[Method('Bottom Sheet', 'HideDialog', false)]]

_Hide the bottom sheet dialog._

### RegisterComponentAsDialog

[[Method('Bottom Sheet', 'RegisterComponentAsDialog', false, 'component')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|


_Register any component as example a 'button', that will be later your bottom sheet dialog._

### RegisterLayoutAsDialog

[[Method('Bottom Sheet', 'RegisterLayoutAsDialog', false, 'layout')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |layout|`component`|


_Register any layout as example a 'horizontal arrangement', that will be later your bottom sheet dialog._

### ShowDialog

[[Method('Bottom Sheet', 'ShowDialog', false)]]

_Show the bottom sheet dialog._

## Properties

### Dim Background

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Dim Background')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true the user will see a dark background effect. Else the background have then no dark background effect._

### Show Status Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Show Status Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_The status bar is the topmost bar on the screen. This property reports whether the status bar is visible._