# Floating Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Floating Button Component to make a Floating Action Button on the right bottom of the screen_

## Events

### Click

[[Event('Floating Button', 'Click')]]

_FAB Clicked_

### Long Click

[[Event('Floating Button', 'Long Click')]]

_FAB Long Clicked_

## Methods

### Create

[[Method('Floating Button', 'Create', false)]]

_Create FAB_

## Properties

### Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

_Returns Color_

### Icon

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Icon')]]

| Type |
|:----:|
|text|

_Returns Icon Path_

### Margin Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Margin Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Set Bottom Margin in dp, Default = 16_

### Margin Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Margin Right')]]

| Type | Default |
|:----:|:-------:|
|number|8|

_Set Right Margin in dp, Default = 16_

### Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set FAB Size.
Set it to 1 for Normal size, 2 for Mini._

### Use Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Use Animation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Are animations on?_

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Is FAB visible?_

### Is Created

:eyes: Read-Only property
[[PropertyBlockGetter('Floating Button', 'Is Created')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Is FAB created?_