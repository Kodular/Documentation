# Video Picker

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

## Overview

A special-purpose button. When the user taps an video picker, the device's video gallery appears, and the user can choose an video.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### After Picking

Event to be raised after the picker activity returns itsresult and the properties have been filled in.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22After%20Picking%22,%20%22param%22:%20%5B%22selection%22%5D%7D"></div>

| Params | []() |
|--------|------|
|selection|<span class="chip chip-text">Text</span>|

### Before Picking

Event to raise when the button of the component is clicked or the list is shownusing the Open block. This event occurs before the list of items is displayed, andcan be used to prepare the list before it is shown.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Before%20Picking%22,%20%22param%22:%20%5B%5D%7D"></div>

### Got Focus

Indicates the cursor moved over the button so it is now possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Got%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### Lost Focus

Indicates the cursor moved away from the button so it is now no longer possible to click it.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Lost%20Focus%22,%20%22param%22:%20%5B%5D%7D"></div>

### Touch Down

Indicates that the button was pressed down.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Touch%20Down%22,%20%22param%22:%20%5B%5D%7D"></div>

### Touch Up

Indicates that a button has been released.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Touch%20Up%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Button Click

Perform a button click as function.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Button%20Click%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Open

Opens the picker, as though the user clicked on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Open%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Animation Style

Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Set%20Animation%20Style%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22style%22,%20%22position%22,%20%22size%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|style|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-text">Text</span>|
|size|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### Set Shadow

Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Set%20Shadow%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22,%20%22radius%22,%20%22color%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|

### With Icon From Font Awesome

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Font%20Awesome%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|

### With Icon From Material Font

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Material%20Font%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22,%20%22icon%20Name%22,%20%22icon%20Color%22,%20%22padding%22,%20%22size%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|icon Name|<span class="chip chip-text">Text</span>|
|icon Color|<span class="chip chip-number">Number</span>|
|padding|<span class="chip chip-number">Number</span>|
|size|<span class="chip chip-number">Number</span>|

### With Icon From Picture

Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22With%20Icon%20From%20Picture%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22position%22,%20%22picture%22,%20%22padding%22,%20%22width%22,%20%22height%22%5D%7D"></div>

| Params | []() |
|--------|------|
|position|<span class="chip chip-text">Text</span>|
|picture|<span class="chip chip-text">Text</span>|
|padding|<span class="chip chip-number">Number</span>|
|width|<span class="chip chip-number">Number</span>|
|height|<span class="chip chip-number">Number</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#444444FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #444444;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the button's background color

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Returns true if the button have a outside border shadow on click.

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set, user can tap check box to cause action.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Font Bold

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set, button text is displayed in bold.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Bold%22,%20%22getter%22:%20false%7D"></div>

### Font Italic

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If set, button text is displayed in italics.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Italic%22,%20%22getter%22:%20false%7D"></div>

### Font Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Point size for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>

### Font Typeface

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Font family for button text.

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported.

### Image

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Image to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Image%22,%20%22getter%22:%20false%7D"></div>

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>

### Selection

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Path to the file containing the video that was selected.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Selection%22,%20%22getter%22:%20true%7D"></div>

### Shape

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed.

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies if a visual feedback should be shown for a button that as an image as background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Show%20Feedback%22,%20%22getter%22:%20false%7D"></div>

### Text

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Text to display on button.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Text%22,%20%22getter%22:%20false%7D"></div>

### Text Alignment

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Left, center, or right.

### Text Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#FFFFFFFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #FFFFFF;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Color for button text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Text%20Color%22,%20%22getter%22:%20false%7D"></div>

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#CCCCCCFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #CCCCCC;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Set the buttons touch color.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Touch%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Video%20Picker%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
