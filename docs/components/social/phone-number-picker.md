# Phone Number Picker

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|10|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A button that, when clicked on, displays a list of the contacts' phone numbers to choose among. After the user has made a selection, the following properties will be set to information about the chosen contact: <ul>
<li> <code>ContactName</code>: the contact's name </li>
 <li> <code>PhoneNumber</code>: the contact's phone number </li>
 <li> <code>EmailAddress</code>: the contact's email address </li> <li> <code>Picture</code>: the name of the file containing the contact's image, which can be used as a <code>Picture</code> property value for the <code>Image</code> or <code>ImageSprite</code> component.</li></ul>
</p><p>Other properties affect the appearance of the button (<code>TextAlignment</code>, <code>BackgroundColor</code>, etc.) and whether it can be clicked on (<code>Enabled</code>).</p>
<p>The PhoneNumberPicker component may not work on all Android devices. For example, on Android systems before system 3.0, the returned lists of phone numbers and email addresses will be empty.
_

## Events

### After Picking

[[Event('Phone Number Picker', 'After Picking', 'selection')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |selection|`text`|


_Event to be raised after the picker activity returns its
 result and the properties have been filled in._

### Before Picking

[[Event('Phone Number Picker', 'Before Picking')]]

_Event to raise when the button of the component is clicked or the list is shown
 using the Open block.  This event occurs before the list of items is displayed, and
 can be used to prepare the list before it is shown._

### Got Focus

[[Event('Phone Number Picker', 'Got Focus')]]

_Indicates the cursor moved over the button so it is now possible to click it._

### Lost Focus

[[Event('Phone Number Picker', 'Lost Focus')]]

_Indicates the cursor moved away from the button so it is now no longer possible to click it._

### Touch Down

[[Event('Phone Number Picker', 'Touch Down')]]

_Indicates that the button was pressed down._

### Touch Up

[[Event('Phone Number Picker', 'Touch Up')]]

_Indicates that a button has been released._

## Methods

### AnimationStyle

[[Method('Phone Number Picker', 'AnimationStyle', false, 'style position size color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |style|`text`|
    |position|`text`|
    |size|`number`|
    |color|`number`|


_Allows you to set animation style. Valid (case-insensitive) values are: ChasingDots, Circle, CubeGrid, DoubleBounce, FadingCircle, FoldingCube, Pulse, RotatingCircle, RotatingPlane, ThreeBounce, WanderingCubes, Wave. If invalid style is used, animation will be removed.Position can be: top, left, right, bottom. Size can be 100._

### ButtonClick

[[Method('Phone Number Picker', 'ButtonClick', false)]]

_Perform a button click as function._

### Open

[[Method('Phone Number Picker', 'Open', false)]]

_Opens the picker, as though the user clicked on it._

### SetShadow

[[Method('Phone Number Picker', 'SetShadow', false, 'x y radius color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |radius|`number`|
    |color|`number`|


_Place a blurred shadow of text underneath the text, drawn with the specified x, y, radius, color (e.g. -11, 12, 13, black._

### ViewContact

[[Method('Phone Number Picker', 'ViewContact', false, 'uri')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |uri|`text`|


_view a contact via its URI_

### WithIconFromFontAwesome

[[Method('Phone Number Picker', 'WithIconFromFontAwesome', false, 'position iconName iconColor padding size')]]

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

[[Method('Phone Number Picker', 'WithIconFromMaterialFont', false, 'position iconName iconColor padding size')]]

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

[[Method('Phone Number Picker', 'WithIconFromPicture', false, 'position picture padding width height')]]

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
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF444444|

_Returns the button's background color_

### Border Shadow

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Border Shadow')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true if the button have a outside border shadow on click._

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set, user can tap check box to cause action._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in bold._

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If set, button text is displayed in italics._

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_Point size for button text._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Font family for button text._

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### HTML Format

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'HTML Format')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If true, then this button will show html text else it will show plain text. Note: Not all HTML is supported._

### Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Image')]]

| Type |
|:----:|
|text|

_Image to display on button._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the button is rotated around the pivot point. Increasing values result in clockwise rotation._

### Shape

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Shape')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_Specifies the button's shape (default, rounded, rectangular, oval). The shape will not be visible if an Image is being displayed._

### Show Feedback

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Show Feedback')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies if a visual feedback should be shown for a button that as an image as background._

### Text

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text')]]

| Type |
|:----:|
|text|

_Text to display on button._

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Left, center, or right._

### Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Color for button text._

### Touch Color

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Touch Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFCCCCCC|

_Set the buttons touch color._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Contact Name

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Contact Name')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Name property getter method._

### Contact URI

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Contact URI')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_URI that specifies the location of the contact on the device._

### Email Address

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Email Address')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_EmailAddress property getter method._

### Email Address List

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Email Address List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_EmailAddressList property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Phone Number

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Phone Number')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_PhoneNumber property getter method._

### Phone Number List

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Phone Number List')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_PhoneNumberList property getter method._

### Picture

:eyes: Read-Only property
[[PropertyBlockGetter('Phone Number Picker', 'Picture')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Picture URI for this contact, which can be
 used to retrieve the contact's photo and other fields._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Phone Number Picker', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._