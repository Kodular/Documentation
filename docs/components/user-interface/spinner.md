# Spinner

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A spinner component that displays a pop-up with a list of elements. These elements can be set in the Designer or Blocks Editor by setting the<code>ElementsFromString</code> property to a string-separated concatenation (for example, <em>choice 1, choice 2, choice 3</em>) or by setting the <code>Elements</code> property to a List in the Blocks editor. Spinners are created with the first item already selected. So selecting  it does not generate an After Picking event. Consequently it's useful to make the  first Spinner item be a non-choice like "Select from below...". </p>_

## Events

### After Selecting

[[Event('Spinner', 'After Selecting', 'selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |selection|`text`|


_Event called after the user selects an item from the dropdown list._

## Methods

### DisplayDropdown

[[Method('Spinner', 'DisplayDropdown', false)]]

_displays the dropdown list for selection, same action as when the user clicks on the spinner._

## Properties

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Elements From String')]]

| Type | Default |
|:----:|:-------:|
|text|Item1, Item2, Item3|

_Sets the Spinner list to the elements passed in the comma-separated string._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Item Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Item Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF03A9F3|

_Set the background color for the spinner items._

### Item Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Item Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Set the text color for the spinner items._

### Prompt

:warning: ==**Deprecated**== <small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Prompt')]]

| Type |
|:----:|
|text|

_Text with the current title for the Spinner window._

### Prompt Item Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Prompt Item Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the text color for the spinner items prompt/hint._

### Selection

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Selection')]]

| Type |
|:----:|
|text|

_Returns the current selected item in the spinner._

### Spinner Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Spinner Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

_Set the text color for the spinner._

### Spinner Text Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Spinner Text Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The size of the spinner selected text._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|18|

_The text size of the spinner items._

### Use Prompt

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Use Prompt')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true the first spinner item will be the prompt text._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_returns a list of text elements to be picked from._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Selection Index

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Selection Index')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The index of the currently selected item, starting at 1. If no item is selected, the value will be 0._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Spinner', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._