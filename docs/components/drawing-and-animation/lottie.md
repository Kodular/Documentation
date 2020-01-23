# Lottie

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that displays animations from a json or zip file, or from a URL.

## Events

### Animation End

[[Event('Lottie', 'Animation End')]]

Triggers when the animation ends.

### Animation Repeat

[[Event('Lottie', 'Animation Repeat')]]

Triggers when the animation repeated.

### Animation Start

[[Event('Lottie', 'Animation Start')]]

Triggers when the animation starts.

### Click

[[Event('Lottie', 'Click')]]

Triggers when the components was clicked.

### Long Click

[[Event('Lottie', 'Long Click')]]

Triggers when the components was long clicked.

## Methods

### EndFrame

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |frame|`number`|


Set the frame where you want the animation to end.

### GetCurrentFrame

_Block preview not available_

{>>Returns `number`<<}

Get the frame where the animation is now.

### GetFrameCount

_Block preview not available_

{>>Returns `number`<<}

Get the count of frames in the animation.

### IsAnimating

_Block preview not available_

{>>Returns `boolean`<<}

Check if the Lottie component is animating.

### PauseAnimation

_Block preview not available_

Pause the animation on the Lottie component.

### ResumeAnimation

_Block preview not available_

Resume the animation on the Lottie component.

### SetCurrentFrame

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |frame|`number`|


Set the frame where you want the animation to be now.

### StartAnimation

_Block preview not available_

Start the animation on the Lottie component.

### StartFrame

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |frame|`number`|


Set the frame where you want the animation to start.

## Properties

### Animation Speed

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Animation Speed')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the speed of the animation.

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set the component clickable or not clickable.

### Loop Animation

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Loop Animation')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set to true if you want to loop the animation.

### Source

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Source')]]

| Type |
|:----:|
|text|

Set the file or url of the file you want to load.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Lottie', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.