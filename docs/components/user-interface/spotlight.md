# Spotlight

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that brings emphasis to the specified component by means of darkening the screen around that component._

## Events

### Clicked

[[Event('Spotlight', 'Clicked')]]

_Event triggered when the spotlight is clicked._

## Methods

### ShowSpotlight

[[Method('Spotlight', 'ShowSpotlight', false)]]

_Use this block to show the spotlight._

### ShowSpotlightOnFAB

[[Method('Spotlight', 'ShowSpotlightOnFAB', false, 'floatingActionButton')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |floating Action Button|`component`|


_Use this block to show the spotlight on a floating action button._

## Properties

### Circle Padding

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Circle Padding')]]

| Type | Default |
|:----:|:-------:|
|number|20|

_The padding for the circle spotlight. Default is '20'._

### Component

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Component')]]

| Type |
|:----:|
|component|

_The component to show in the spotlight._

### Dismiss On Back Press

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Dismiss On Back Press')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Dismiss the spotlight on back pressed._

### Dismiss On Touch

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Dismiss On Touch')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Dismiss the spotlight on touch_

### Enable Dismiss After Shown

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Enable Dismiss After Shown')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Dismiss spotlight on touch after spotlight is completely visible._

### Enable Reveal Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Enable Reveal Animation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Enable reveal animation (Only for Lollipop and above)._

### Fadein Text Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Fadein Text Duration')]]

| Type | Default |
|:----:|:-------:|
|number|400|

_Fade in animation duration for spotlight text (Heading and Sub-heading)._

### Font Heading Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Font Heading Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Heading Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Font Heading Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Font Subheading Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Font Subheading Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Subheading Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Font Subheading Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Heading Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text')]]

| Type |
|:----:|
|text|

_The Spotlight heading text._

### Heading Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_The Spotlight heading text color._

### Heading Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Heading Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|32|

_The Spotlight heading size._

### Intro Animation Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Intro Animation Duration')]]

| Type | Default |
|:----:|:-------:|
|number|400|

_Intro animation duration (For Reveal and Fadein)._

### Line And Arc Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Line And Arc Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_The Spotlight line and arc color._

### Line Animation Duration

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Line Animation Duration')]]

| Type | Default |
|:----:|:-------:|
|number|400|

_Line animation duration_

### Mask Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Mask Color')]]

| Type | Default |
|:----:|:-------:|
|number|&Hbe000000|

_The Spotlight mask color_

### Show Target Arc

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Show Target Arc')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true you will see a half round circle below the spotlight circle._

### Subheading Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text')]]

| Type |
|:----:|
|text|

_The Spotlight subheading text._

### Subheading Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_The Spotlight subheading text color._

### Subheading Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spotlight', 'Subheading Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|16|

_The Spotlight subheading text size._