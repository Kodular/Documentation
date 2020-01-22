# Rating Bar

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that lets the user submit a star rating._

## Events

### Changed

[[Event('Rating Bar', 'Changed', 'rating')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |rating|`number`|


_Event invoked when the rating has been changed._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF9E9E9E|

_Change the background color of the star._

### Is Indicator

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Is Indicator')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether this rating bar should only be an indicator (thus non-changeable by the user)._

### Set Number Of Stars

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Number Of Stars')]]

| Type | Default |
|:----:|:-------:|
|number|5|

_Sets the number of stars to show._

### Set Step Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Step Size')]]

| Type | Default |
|:----:|:-------:|
|number|.5|

_Sets the step size (granularity) of this rating bar._

### Star Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Star Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFF34336|

_Change the color of the star._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Get Number Of Stars

:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Number Of Stars')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the number of stars shown._

### Get Rating

:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Rating')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Gets the current rating (number of stars filled)._

### Get Step Size

:eyes: Read-Only property
[[PropertyBlockGetter('Rating Bar', 'Get Step Size')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Gets the step size (granularity) of this rating bar._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Set Rating

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Rating')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Sets the rating (the number of stars filled)._