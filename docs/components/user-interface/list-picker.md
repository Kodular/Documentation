# List Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|17|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A button that, when clicked on, displays a list of texts for the user to choose among. The texts can be specified through the Designer or Blocks Editor by setting the <code>ElementsFromString</code> property to their string-separated concatenation (for example, <em>choice 1, choice 2, choice 3</em>) or by setting the <code>Elements</code> property to a List in the Blocks editor.</p><p>Setting property ShowFilterBar to true, will make the list searchable.  Other properties affect the appearance of the button (<code>TextAlignment</code>, <code>BackgroundColor</code>, etc.) and whether it can be clicked on (<code>Enabled</code>).</p>_

## Events

### After Picking

[[Event('List Picker', 'After Picking', 'selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |selection|`text`|


_Event to be raised after the picker activity returns its
 result and the properties have been filled in._

### Before Picking

[[Event('List Picker', 'Before Picking')]]

_Event to raise when the button of the component is clicked or the list is shown
 using the Open block.  This event occurs before the list of items is displayed, and
 can be used to prepare the list before it is shown._

### Got Focus

[[Event('List Picker', 'Got Focus')]]

_Indicates the cursor moved over the button so it is now possible to click it._

### Lost Focus

[[Event('List Picker', 'Lost Focus')]]

_Indicates the cursor moved away from the button so it is now no longer possible to click it._

### Touch Down

[[Event('List Picker', 'Touch Down')]]

_Indicates that the button was pressed down._

### Touch Up

[[Event('List Picker', 'Touch Up')]]

_Indicates that a button has been released._

## Methods

### AnimationStyle

[[Method('List Picker', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### ButtonClick

[[Method('List Picker', 'ButtonClick', false)]]

_Perform a button click as function._

### Open

[[Method('List Picker', 'Open', false)]]

_Opens the picker, as though the user clicked on it._

### SetShadow

[[Method('List Picker', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black._

### WithIconFromFontAwesome

[[Method('List Picker', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://fontawesome.com/cheatsheet Use as example for a heart icon just 'f004'._

### WithIconFromMaterialFont

[[Method('List Picker', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |icon Name|`text`|
    |icon Color|`number`|
    |padding|`number`|
    |size|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text. Use a material icon as the button icon without uploading a image resource into your project. You can find the icon name (or code) here at https://material.io/icons_

### WithIconFromPicture

[[Method('List Picker', 'WithIconFromPicture', false, 'position picture padding width height')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`text`|
    |picture|`text`|
    |padding|`number`|
    |width|`number`|
    |height|`number`|


_Show an image on the given position near to the button. You can use following words for the position: 'Left', 'Right', 'Top' or 'Bottom'. Use the padding to add space between the icon and text._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Returns the button's background color_

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the button have a outside border shadow on click._

### Elements From String

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Elements From String')]]

| Type |
|:----:|
|text|

_ElementsFromString property setter method_

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set, user can tap check box to cause action._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in bold._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in italics._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Point size for button text._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Font family for button text._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported._

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Image')]]

| Type |
|:----:|
|text|

_Image to display on button._

### Item Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Item Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The background color of the ListPicker items._

### Item Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Item Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_The text color of the ListPicker items._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation._

### Selection

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Selection')]]

| Type |
|:----:|
|text|

_The selected item.  When directly changed by the programmer, the SelectionIndex property is also changed to the first item in the ListPicker with the given value.  If the value does not appear, SelectionIndex will be set to 0._

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed._

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies if a visual feedback should be shown for a button that as an image as background._

### Show Filter Bar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Show Filter Bar')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Returns current state of ShowFilterBar indicating if Search Filter Bar will be displayed on ListPicker or not_

### Status Bar Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Status Bar Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF2196F2|

_The StatusBarColor of the ListPicker._

### Status Bar Visible

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Status Bar Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to show status bar_

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Text')]]

| Type |
|:----:|
|text|

_Text to display on button._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Left, center, or right._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Color for button text._

### Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Title')]]

| Type |
|:----:|
|text|

_Optional title displayed at the top of the list of choices._

### Title Bar Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Title Bar Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF03A9F3|

_The TitleBarColor of the ListPicker._

### Title Visible

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Title Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to show title bar_

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the buttons touch color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Elements

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Elements')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_Elements property getter method_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Selection Index

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Selection Index')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_The index of the currently selected item, starting at 1.  If no item is selected, the value will be 0.  If an attempt is made to set this to a number less than 1 or greater than the number of items in the ListPicker, SelectionIndex will be set to 0, and Selection will be set to the empty text._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('List Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._