# Spinner

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">3</span>|

## Overview

A spinner component that displays a pop-up with a list of elements. These elements can be set in the Designer or Blocks Editor by setting the`` ElementsFromString `` property to a string-separated concatenation (for example, _choice 1, choice 2, choice 3_) or by setting the `` Elements `` property to a List in the Blocks editor. Spinners are created with the first item already selected. So selecting it does not generate an After Picking event. Consequently it's useful to make the first Spinner item be a non-choice like "Select from below...".

## Events

### After Selecting

Event called after the user selects an item from the dropdown list.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22After%20Selecting%22,%20%22param%22:%20%5B%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|

## Methods

### Display Dropdown

displays the dropdown list for selection, same action as when the user clicks on the spinner.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Display%20Dropdown%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Elements

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

returns a list of text elements to be picked from.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20false%7D"></div>

### Elements From String

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Item1, Item2, Item3</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the Spinner list to the elements passed in the comma-separated string.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Elements%20From%20String%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>18</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The text size of the spinner items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

### Font Typeface Import

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Item Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#03A9F3FF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #03A9F3;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the background color for the spinner items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Item%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Item%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Item Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #FFFFFF;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the text color for the spinner items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Item%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Item%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Prompt

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Text with the current title for the Spinner window.

### Prompt Item Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#CCCCCCFF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #CCCCCC;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the text color for the spinner items prompt/hint.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Prompt%20Item%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Prompt%20Item%20Color%22,%20%22getter%22:%20false%7D"></div>

### Selection

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns the current selected item in the spinner.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20false%7D"></div>

### Selection Index

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20false%7D"></div>

### Spinner Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#2196F2FF</i>&nbsp;<div style="width:10px; height: 10px; display: inline-block; border-width: 1px; border-style: solid; border-color: white; background-color: #2196F2;"></div></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Set the text color for the spinner.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Spinner%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Spinner%20Color%22,%20%22getter%22:%20false%7D"></div>

### Spinner Text Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The size of the spinner selected text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Spinner%20Text%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Spinner%20Text%20Size%22,%20%22getter%22:%20false%7D"></div>

### Text Alignment

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

### Use Prompt

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

If true the first spinner item will be the prompt text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Use%20Prompt%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Spinner%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
