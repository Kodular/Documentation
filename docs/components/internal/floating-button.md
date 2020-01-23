# Floating Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Internal|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Floating Button Component to make a Floating Action Button on the right bottom of the screen

## Events

### Click

[[Event('Floating Button', 'Click')]]

FAB Clicked

### Long Click

[[Event('Floating Button', 'Long Click')]]

FAB Long Clicked

## Methods

### Create

_Block preview not available_

Create FAB

## Properties

### Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Color')]]

| Type | Default |
|:----:|:-------:|
|number|&H00000000|

Returns Color

### Icon

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Icon')]]

| Type |
|:----:|
|text|

Returns Icon Path

### Margin Bottom

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Margin Bottom')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Set Bottom Margin in dp, Default = 16

### Margin Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Margin Right')]]

| Type | Default |
|:----:|:-------:|
|number|8|

Set Right Margin in dp, Default = 16

### Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Size')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set FAB Size.  Set it to 1 for Normal size, 2 for Mini.

### Use Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Use Animation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Are animations on?

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Floating Button', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Is FAB visible?

### Is Created

:eyes: Read-Only property
[[PropertyBlockGetter('Floating Button', 'Is Created')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Is FAB created?