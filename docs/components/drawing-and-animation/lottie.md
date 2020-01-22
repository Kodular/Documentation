# Lottie

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that displays animations from a json or zip file, or from a URL._

## Events

### Animation End

[[Event('Lottie', 'Animation End')]]

_Triggers when the animation ends._

### Animation Repeat

[[Event('Lottie', 'Animation Repeat')]]

_Triggers when the animation repeated._

### Animation Start

[[Event('Lottie', 'Animation Start')]]

_Triggers when the animation starts._

### Click

[[Event('Lottie', 'Click')]]

_Triggers when the components was clicked._

### Long Click

[[Event('Lottie', 'Long Click')]]

_Triggers when the components was long clicked._

## Methods

### EndFrame

[[Method('Lottie', 'EndFrame', false, 'frame')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |frame|`number`|


_Set the frame where you want the animation to end._

### GetCurrentFrame

[[Method('Lottie', 'GetCurrentFrame', true)]]

{>>Returns `number`<<}

_Get the frame where the animation is now._

### GetFrameCount

[[Method('Lottie', 'GetFrameCount', true)]]

{>>Returns `number`<<}

_Get the count of frames in the animation._

### IsAnimating

[[Method('Lottie', 'IsAnimating', true)]]

{>>Returns `boolean`<<}

_Check if the Lottie component is animating._

### PauseAnimation

[[Method('Lottie', 'PauseAnimation', false)]]

_Pause the animation on the Lottie component._

### ResumeAnimation

[[Method('Lottie', 'ResumeAnimation', false)]]

_Resume the animation on the Lottie component._

### SetCurrentFrame

[[Method('Lottie', 'SetCurrentFrame', false, 'frame')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |frame|`number`|


_Set the frame where you want the animation to be now._

### StartAnimation

[[Method('Lottie', 'StartAnimation', false)]]

_Start the animation on the Lottie component._

### StartFrame

[[Method('Lottie', 'StartFrame', false, 'frame')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |frame|`number`|


_Set the frame where you want the animation to start._

## Properties

### Animation Speed

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Animation Speed')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Set the speed of the animation._

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Set the component clickable or not clickable._

### Loop Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Loop Animation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Set to true if you want to loop the animation._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Source')]]

| Type |
|:----:|
|text|

_Set the file or url of the file you want to load._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._