# List Picker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|17|

## Overview

A button that, when clicked on, displays a list of texts for the user to choose among. The texts can be specified through the Designer or Blocks Editor by setting the `` ElementsFromString `` property to their string-separated concatenation (for example, _choice 1, choice 2, choice 3_) or by setting the `` Elements `` property to a List in the Blocks editor.

Setting property ShowFilterBar to true, will make the list searchable. Other properties affect the appearance of the button (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be clicked on (`` Enabled ``).

## Events

### After Picking

[[Event('List Picker', 'After Picking', 'selection')]]

| Params | []() |
|--------|------|
|selection|Text|


Event to be raised after the picker activity returns itsresult and the properties have been filled in.

### Before Picking

[[Event('List Picker', 'Before Picking')]]

Event to raise when the button of the component is clicked or the list is shownusing the Open block. This event occurs before the list of items is displayed, andcan be used to prepare the list before it is shown.

### Got Focus

[[Event('List Picker', 'Got Focus')]]

Indicates the cursor moved over the button so it is now possible to click it.

### Lost Focus

[[Event('List Picker', 'Lost Focus')]]

Indicates the cursor moved away from the button so it is now no longer possible to click it.

### Touch Down

[[Event('List Picker', 'Touch Down')]]

Indicates that the button was pressed down.

### Touch Up

[[Event('List Picker', 'Touch Up')]]

Indicates that a button has been released.

## Methods

### Set Animation Style

[[Method('List Picker', 'Set Animation Style', False, 'style', 'position', 'size', 'color')]]

| Params | []() |
|--------|------|
|style|Text|
|position|Text|
|size|Number|
|color|Number|


Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

### Button Click

[[Method('List Picker', 'Button Click', False)]]

Perform a button click as function.

### Open

[[Method('List Picker', 'Open', False)]]

Opens the picker, as though the user clicked on it.

### Set Shadow

[[Method('List Picker', 'Set Shadow', False, 'x', 'y', 'radius', 'color')]]

| Params | []() |
|--------|------|
|x|Number|
|y|Number|
|radius|Number|
|color|Number|


Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

### With Icon From Font Awesome

[[Method('List Picker', 'With Icon From Font Awesome', False, 'position', 'iconName', 'iconColor', 'padding', 'size')]]

| Params | []() |
|--------|------|
|position|Text|
|icon Name|Text|
|icon Color|Number|
|padding|Number|
|size|Number|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'.

### With Icon From Material Font

[[Method('List Picker', 'With Icon From Material Font', False, 'position', 'iconName', 'iconColor', 'padding', 'size')]]

| Params | []() |
|--------|------|
|position|Text|
|icon Name|Text|
|icon Color|Number|
|padding|Number|
|size|Number|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

### With Icon From Picture

[[Method('List Picker', 'With Icon From Picture', False, 'position', 'picture', 'padding', 'width', 'height')]]

| Params | []() |
|--------|------|
|position|Text|
|picture|Text|
|padding|Number|
|width|Number|
|height|Number|


Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text.

## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF444444</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the button's background color

[[PropertyBlockGetterAndSetter('List Picker', 'Background Color')]]

### Border Shadow

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Returns true if the button have a outside border shadow on click.

[[PropertyBlockGetterAndSetter('List Picker', 'Border Shadow')]]

### Elements From String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

ElementsFromString property setter method

[[PropertyBlockGetterAndSetter('List Picker', 'Elements From String')]]

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set, user can tap check box to cause action.

[[PropertyBlockGetterAndSetter('List Picker', 'Enabled')]]

### Font Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set, button text is displayed in bold.

[[PropertyBlockGetterAndSetter('List Picker', 'Font Bold')]]

### Font Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set, button text is displayed in italics.

[[PropertyBlockGetterAndSetter('List Picker', 'Font Italic')]]

### Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Point size for button text.

[[PropertyBlockGetterAndSetter('List Picker', 'Font Size')]]

### Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Font family for button text.

[[PropertyBlockGetterAndSetter('List Picker', 'Font Typeface')]]

### Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('List Picker', 'Font Typeface Import')]]

### HTML Format

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

[[PropertyBlockGetterAndSetter('List Picker', 'HTML Format')]]

### Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Image to display on button.

[[PropertyBlockGetterAndSetter('List Picker', 'Image')]]

### Item Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF000000</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The background color of the ListPicker items.

[[PropertyBlockGetterAndSetter('List Picker', 'Item Background Color')]]

### Item Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The text color of the ListPicker items.

[[PropertyBlockGetterAndSetter('List Picker', 'Item Text Color')]]

### Rotation Angle

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

[[PropertyBlockGetterAndSetter('List Picker', 'Rotation Angle')]]

### Selection

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The selected item. When directly changed by the programmer, the SelectionIndex property is also changed to the first item in the ListPicker with the given value. If the value does not appear, SelectionIndex will be set to 0.

[[PropertyBlockGetterAndSetter('List Picker', 'Selection')]]

### Shape

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

[[PropertyBlockGetterAndSetter('List Picker', 'Shape')]]

### Show Feedback

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Specifies if a visual feedback should be shown for a button that as an image as background.

[[PropertyBlockGetterAndSetter('List Picker', 'Show Feedback')]]

### Show Filter Bar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns current state of ShowFilterBar indicating if Search Filter Bar will be displayed on ListPicker or not

[[PropertyBlockGetterAndSetter('List Picker', 'Show Filter Bar')]]

### Status Bar Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF2196F2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

The StatusBarColor of the ListPicker.

[[PropertyBlockGetterAndSetter('List Picker', 'Status Bar Color')]]

### Status Bar Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Whether to show status bar

[[PropertyBlockGetterAndSetter('List Picker', 'Status Bar Visible')]]

### Text

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Text to display on button.

[[PropertyBlockGetterAndSetter('List Picker', 'Text')]]

### Text Alignment

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Left, center, or right.

[[PropertyBlockGetterAndSetter('List Picker', 'Text Alignment')]]

### Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Color for button text.

[[PropertyBlockGetterAndSetter('List Picker', 'Text Color')]]

### Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Optional title displayed at the top of the list of choices.

[[PropertyBlockGetterAndSetter('List Picker', 'Title')]]

### Title Bar Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFF03A9F3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

The TitleBarColor of the ListPicker.

[[PropertyBlockGetterAndSetter('List Picker', 'Title Bar Color')]]

### Title Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Whether to show title bar

[[PropertyBlockGetterAndSetter('List Picker', 'Title Visible')]]

### Touch Color

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>&HFFCCCCCC</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Set the buttons touch color.

[[PropertyBlockGetterAndSetter('List Picker', 'Touch Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('List Picker', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('List Picker', 'Column')]]

### Elements

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Elements property getter method

[[PropertyBlockGetterAndSetter('List Picker', 'Elements')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('List Picker', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('List Picker', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('List Picker', 'Row')]]

### Selection Index

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0. If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListPicker, SelectionIndex will be set to 0, and Selection will be set to the empty text.

[[PropertyBlockGetterAndSetter('List Picker', 'Selection Index')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('List Picker', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('List Picker', 'Width Percent')]]