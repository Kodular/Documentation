# Time Picker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">8</span>|

## Overview

A button that, when clicked on, launches a popup dialog to allow the user to select a time.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### After Time Set

This event is run when a user has set the time in the popup dialog.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22After%20Time%20Set%22,%20%22params%22:%20%5B%5D%7D"></div>


### Got Focus

Indicates the cursor moved over the button so it is now possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Got%20Focus%22,%20%22params%22:%20%5B%5D%7D"></div>


### Lost Focus

Indicates the cursor moved away from the button so it is now no longer possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22params%22:%20%5B%5D%7D"></div>


### Touch Down

Indicates that the button was pressed down.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Touch%20Down%22,%20%22params%22:%20%5B%5D%7D"></div>


### Touch Up

Indicates that a button has been released.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Touch%20Up%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Set%20Animation%20Style%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22style%22,%20%22position%22,%20%22size%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Button Click

Perform a button click as function.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Button%20Click%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Launch Picker

Launches the TimePicker popup.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Launch%20Picker%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


### Set Time To Display

Set the time to be shown in the Time Picker popup. Current time is shown by default.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Set%20Time%20To%20Display%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22hour%22,%20%22minute%22%5D%7D"></div>


| Params | []() |
|--------|------|
|hour|<span class="chip chip-number">Number</span>|
|minute|<span class="chip chip-number">Number</span>|


### Set Time To Display From Instant

Set the time from the instant to be shown in the Time Picker popup. Current time is shown by default.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Set%20Time%20To%20Display%20From%20Instant%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22instant%22%5D%7D"></div>


| Params | []() |
|--------|------|
|instant|<span class="chip chip-InstantInTime">Instantintime</span>|


### With Icon From Font Awesome

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Font%20Awesome%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### With Icon From Material Font

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Material%20Font%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>


| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|


### With Icon From Picture

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Picture%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22position%22,%20%22picture%22,%20%22padding%22,%20%22width%22,%20%22height%22%5D%7D"></div>


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

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Border Shadow

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Returns true if the button have a outside border shadow on click.


### Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, user can tap check box to cause action.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>


### Font Bold

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, button text is displayed in bold.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20false%7D"></div>


### Font Italic

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

If set, button text is displayed in italics.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20false%7D"></div>


### Font Size

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>14.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Point size for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>


### Font Typeface

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Font family for button text.


### Font Typeface Import

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>


### HTML Format

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.


### Image

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Image to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20false%7D"></div>


### Rotation Angle

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>


### Shape

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.


### Show Feedback

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Specifies if a visual feedback should be shown for a button that as an image as background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20false%7D"></div>


### Text

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Text to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>


### Text Alignment

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Left, center, or right.


### Text Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Color for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>


### Touch Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #CCCCCC;">Default: <i>#CCCCCCFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set the buttons touch color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Column property getter method.


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Hour

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The hour of the last time set using the time picker. The hour is in a 24 hour format. If the last time set was 11:53 pm, this property will return 23.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Hour%22,%20%22getter%22:%20true%7D"></div>


### Instant

<span class="chip chip-InstantInTime">Instantintime</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The instant of the last time set using the time picker

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Instant%22,%20%22getter%22:%20true%7D"></div>


### Minute

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The minute of the last time set using the time picker

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Minute%22,%20%22getter%22:%20true%7D"></div>


### Row

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Row property getter method.


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Time%20Picker%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
