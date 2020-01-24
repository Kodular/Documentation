# Animation Utilities

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component with which other components can be animated.

## Events

### Error

This event is triggered when there was a error catched. Possible values for the error code and method: 1 'GetLeftPosition', 2 'GetTopPosition', 3 'GetRightPosition', 4 'GetBottomPosition', 5 'GetXPosition', 6 'GetYPosition', 7 'Rotation', 8 'BounceHorizontal', 9 'BounceVertical', 10 'OvershootHorizontal', 11 'OvershootVertical', 12 'Zoom'. The error message will return you the error reason.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Error%22,%20%22params%22:%20%5B%22error%20Code%22,%20%22error%20Message%22,%20%22method%22%5D%7D"></div>


| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|
|method|<span class="chip chip-text">Text</span>|


## Methods

### Bounce Horizontal

Start a horizontal bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Bounce%20Horizontal%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22start%20Position%22,%20%22end%20Position%22,%20%22duration%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|start Position|<span class="chip chip-number">Number</span>|
|end Position|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|


### Bounce Vertical

Start a vertical bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Bounce%20Vertical%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22start%20Position%22,%20%22end%20Position%22,%20%22duration%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|start Position|<span class="chip chip-number">Number</span>|
|end Position|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|


### Get Bottom Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the bottom position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20Bottom%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Get Left Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the left position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20Left%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Get Right Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the right position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20Right%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Get Top Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the top position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20Top%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Get X Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the x position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20X%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Get Y Position

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the y position of a component. It will return '-9999' if there was a error.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Get%20Y%20Position%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22component%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|


### Overshoot Horizontal

Start a horizontal overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Overshoot%20Horizontal%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22start%20Position%22,%20%22end%20Position%22,%20%22duration%22,%20%22tension%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|start Position|<span class="chip chip-number">Number</span>|
|end Position|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|
|tension|<span class="chip chip-number">Number</span>|


### Overshoot Vertical

Start a vertical overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Overshoot%20Vertical%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22start%20Position%22,%20%22end%20Position%22,%20%22duration%22,%20%22tension%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|start Position|<span class="chip chip-number">Number</span>|
|end Position|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|
|tension|<span class="chip chip-number">Number</span>|


### Rotation

Start a rotation on any component. Use as example in 'rotation Start Degrees' 0, in 'rotation End Degrees' 360 and in 'duration' 300 (millisecond) to run a clockwise, 360 degress animation. You can also use negative numbers for the degress.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Rotation%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22rotation%20Start%20Degrees%22,%20%22rotation%20End%20Degrees%22,%20%22duration%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|rotation Start Degrees|<span class="chip chip-number">Number</span>|
|rotation End Degrees|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|


### Zoom

Start a zoom animation. 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Animation%20Utilities%22,%20%22name%22:%20%22Zoom%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22component%22,%20%22start%20Scale%22,%20%22end%20Scale%22,%20%22duration%22%5D%7D"></div>


| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|start Scale|<span class="chip chip-number">Number</span>|
|end Scale|<span class="chip chip-number">Number</span>|
|duration|<span class="chip chip-number">Number</span>|
