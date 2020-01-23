# Bottom Sheet

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Views|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that shows a visible layout at the bottom of the screen.

## Events

### Closed

Event to detect that the dialog was closed.

[[Event('Bottom Sheet', 'Closed')]]

### Opened

Event to detect that the dialog was opened.

[[Event('Bottom Sheet', 'Opened')]]

## Methods

### Hide Dialog

Hide the bottom sheet dialog.

[[Method('Bottom Sheet', 'Hide Dialog', False)]]

### Register Component As Dialog

Register any component as example a 'button', that will be later your bottom sheet dialog.

[[Method('Bottom Sheet', 'Register Component As Dialog', False, 'component')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Register Layout As Dialog

Register any layout as example a 'horizontal arrangement', that will be later your bottom sheet dialog.

[[Method('Bottom Sheet', 'Register Layout As Dialog', False, 'layout')]]

| Params | []() |
|--------|------|
|layout|<span class="chip chip-component">Component</span>|


### Show Dialog

Show the bottom sheet dialog.

[[Method('Bottom Sheet', 'Show Dialog', False)]]

## Properties

### Dim Background

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to true the user will see a dark background effect. Else the background have then no dark background effect.

[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Dim Background')]]

### Show Status Bar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

[[PropertyBlockGetterAndSetter('Bottom Sheet', 'Show Status Bar')]]