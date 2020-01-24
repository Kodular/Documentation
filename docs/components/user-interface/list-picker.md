# List Picker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">17</span>|

## Overview

A button that, when clicked on, displays a list of texts for the user to choose among. The texts can be specified through the Designer or Blocks Editor by setting the `` ElementsFromString `` property to their string-separated concatenation (for example, _choice 1, choice 2, choice 3_) or by setting the `` Elements `` property to a List in the Blocks editor.

Setting property ShowFilterBar to true, will make the list searchable. Other properties affect the appearance of the button (`` TextAlignment ``, `` BackgroundColor ``, etc.) and whether it can be clicked on (`` Enabled ``).

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### After Picking

Event to be raised after the picker activity returns itsresult and the properties have been filled in.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22After%20Picking%22,%20%22params%22:%20%5B%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|


### Before Picking

Event to raise when the button of the component is clicked or the list is shownusing the Open block. This event occurs before the list of items is displayed, andcan be used to prepare the list before it is shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Before%20Picking%22,%20%22params%22:%20%5B%5D%7D"></div>


### Got Focus

Indicates the cursor moved over the button so it is now possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Got%20Focus%22,%20%22params%22:%20%5B%5D%7D"></div>


### Lost Focus

Indicates the cursor moved away from the button so it is now no longer possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22params%22:%20%5B%5D%7D"></div>


### Touch Down

Indicates that the button was pressed down.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Touch%20Down%22,%20%22params%22:%20%5B%5D%7D"></div>


### Touch Up

Indicates that a button has been released.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Touch%20Up%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Set%20Animation%20Style%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22style%22,%20%22position%22,%20%22size%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Button Click

Perform a button click as function.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Button%20Click%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Open

Opens the picker, as though the user clicked on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Open%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### With Icon From Font Awesome

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Font%20Awesome%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### With Icon From Material Font

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Material%20Font%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### With Icon From Picture

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Picture%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22picture%22,%20%22padding%22,%20%22width%22,%20%22height%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|picture|<span class="chip chip-text">Text</span>|
|padding|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #444444;">Default: <i>#444444FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the button's background color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Border Shadow

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns true if the button have a outside border shadow on click.


### Elements From String

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

ElementsFromString property setter method

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Elements%20From%20String%22,%20%22getter%22:%20false%7D"></div>


### Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, user can tap check box to cause action.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>


### Font Bold

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, button text is displayed in bold.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20false%7D"></div>


### Font Italic

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, button text is displayed in italics.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20false%7D"></div>


### Font Size

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>14.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Point size for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>


### Font Typeface

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Font family for button text.


### Font Typeface Import

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>


### HTML Format

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.


### Image

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Image to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20false%7D"></div>


### Item Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The background color of the ListPicker items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Item%20Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Item%20Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Item Text Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The text color of the ListPicker items.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Item%20Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Item%20Text%20Color%22,%20%22getter%22:%20false%7D"></div>


### Rotation Angle

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>


### Selection

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The selected item. When directly changed by the programmer, the SelectionIndex property is also changed to the first item in the ListPicker with the given value. If the value does not appear, SelectionIndex will be set to 0.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20false%7D"></div>


### Shape

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.


### Show Feedback

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Specifies if a visual feedback should be shown for a button that as an image as background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20false%7D"></div>


### Show Filter Bar

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns current state of ShowFilterBar indicating if Search Filter Bar will be displayed on ListPicker or not

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Show%20Filter%20Bar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Show%20Filter%20Bar%22,%20%22getter%22:%20false%7D"></div>


### Status Bar Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #2196F2;">Default: <i>#2196F2FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

The StatusBarColor of the ListPicker.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Status%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>


### Status Bar Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Whether to show status bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Status%20Bar%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Status%20Bar%20Visible%22,%20%22getter%22:%20false%7D"></div>


### Text

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Text to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>


### Text Alignment

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Left, center, or right.


### Text Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Color for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>


### Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Optional title displayed at the top of the list of choices.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%22,%20%22getter%22:%20false%7D"></div>


### Title Bar Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #03A9F3;">Default: <i>#03A9F3FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

The TitleBarColor of the ListPicker.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%20Bar%20Color%22,%20%22getter%22:%20false%7D"></div>


### Title Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Whether to show title bar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Title%20Visible%22,%20%22getter%22:%20false%7D"></div>


### Touch Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the buttons touch color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Column property getter method.


### Elements

<span class="chip chip-list">List</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Elements property getter method

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Elements%22,%20%22getter%22:%20false%7D"></div>


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Row

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Row property getter method.


### Selection Index

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0. If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListPicker, SelectionIndex will be set to 0, and Selection will be set to the empty text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Selection%20Index%22,%20%22getter%22:%20false%7D"></div>


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22List%20Picker%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
