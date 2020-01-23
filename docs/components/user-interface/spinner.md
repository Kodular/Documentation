# Spinner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|3|

## Overview

A spinner component that displays a pop-up with a list of elements. These elements can be set in the Designer or Blocks Editor by setting the`` ElementsFromString `` property to a string-separated concatenation (for example, _choice 1, choice 2, choice 3_) or by setting the `` Elements `` property to a List in the Blocks editor. Spinners are created with the first item already selected. So selecting it does not generate an After Picking event. Consequently it's useful to make the first Spinner item be a non-choice like "Select from below...". 

## Events

### After Selecting

Event called after the user selects an item from the dropdown list.

[[Event('Spinner', 'After Selecting', 'selection')]]

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|


## Methods

### Display Dropdown

displays the dropdown list for selection, same action as when the user clicks on the spinner.

[[Method('Spinner', 'Display Dropdown', False)]]

## Properties

### Elements From String

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Item1, Item2, Item3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the Spinner list to the elements passed in the comma-separated string.

[[PropertyBlockGetterAndSetter('Spinner', 'Elements From String')]]

### Font Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spinner', 'Font Bold')]]

### Font Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spinner', 'Font Italic')]]

### Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spinner', 'Font Typeface')]]

### Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Spinner', 'Font Typeface Import')]]

### Item Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #03A9F3;">Default: <i>#03A9F3FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the background color for the spinner items.

[[PropertyBlockGetterAndSetter('Spinner', 'Item Background Color')]]

### Item Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text color for the spinner items.

[[PropertyBlockGetterAndSetter('Spinner', 'Item Text Color')]]

### Prompt

:warning: ==**Deprecated**==

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Text with the current title for the Spinner window.

[[PropertyBlockGetterAndSetter('Spinner', 'Prompt')]]

### Prompt Item Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text color for the spinner items prompt/hint.

[[PropertyBlockGetterAndSetter('Spinner', 'Prompt Item Color')]]

### Selection

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the current selected item in the spinner.

[[PropertyBlockGetterAndSetter('Spinner', 'Selection')]]

### Spinner Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #2196F2;">Default: <i>#2196F2FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text color for the spinner.

[[PropertyBlockGetterAndSetter('Spinner', 'Spinner Color')]]

### Spinner Text Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The size of the spinner selected text.

[[PropertyBlockGetterAndSetter('Spinner', 'Spinner Text Size')]]

### Text Alignment

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Spinner', 'Text Alignment')]]

### Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The text size of the spinner items.

[[PropertyBlockGetterAndSetter('Spinner', 'Font Size')]]

### Use Prompt

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If true the first spinner item will be the prompt text.

[[PropertyBlockGetterAndSetter('Spinner', 'Use Prompt')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Spinner', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Spinner', 'Column')]]

### Elements

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

returns a list of text elements to be picked from.

[[PropertyBlockGetterAndSetter('Spinner', 'Elements')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Spinner', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Spinner', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Spinner', 'Row')]]

### Selection Index

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0.

[[PropertyBlockGetterAndSetter('Spinner', 'Selection Index')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Spinner', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Spinner', 'Width Percent')]]