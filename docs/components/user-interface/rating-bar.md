# Rating Bar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user submit a star rating._

## Properties

### Background Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF9E9E9E|

Change the background color of the star.

### Is Indicator

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Is Indicator')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether this rating bar should only be an indicator (thus non-changeable by the user).

### Set Number Of Stars

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Number Of Stars')]]

| Type | Default |
|:----:|:-------:|
|number|5|

Sets the number of stars to show.

### Set Step Size

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Step Size')]]

| Type | Default |
|:----:|:-------:|
|number|.5|

Sets the step size (granularity) of this rating bar.

### Star Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Star Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

Change the color of the star.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Get Number Of Stars



:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Number Of Stars')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Returns the number of stars shown.

### Get Rating



:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Rating')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Gets the current rating (number of stars filled).

### Get Step Size



:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Step Size')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Gets the step size (granularity) of this rating bar.

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Set Rating



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Rating')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Sets the rating (the number of stars filled).