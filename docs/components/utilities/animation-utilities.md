# Animation Utilities

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component with which other components can be animated.

## Events

### Error

[[Event('Animation Utilities', 'Error', 'errorCode', 'errorMessage', 'method')]]

| Params | []() |
|--------|------|
|error Code|Number|
|error Message|Text|
|method|Text|


This event is triggered when there was a error catched. Possible values for the error code and method: 1 'GetLeftPosition', 2 'GetTopPosition', 3 'GetRightPosition', 4 'GetBottomPosition', 5 'GetXPosition', 6 'GetYPosition', 7 'Rotation', 8 'BounceHorizontal', 9 'BounceVertical', 10 'OvershootHorizontal', 11 'OvershootVertical', 12 'Zoom'. The error message will return you the error reason.

## Methods

### Bounce Horizontal

[[Method('Animation Utilities', 'Bounce Horizontal', False, 'component', 'startPosition', 'endPosition', 'duration')]]

| Params | []() |
|--------|------|
|component|Component|
|start Position|Number|
|end Position|Number|
|duration|Number|


Start a horizontal bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### Bounce Vertical

[[Method('Animation Utilities', 'Bounce Vertical', False, 'component', 'startPosition', 'endPosition', 'duration')]]

| Params | []() |
|--------|------|
|component|Component|
|start Position|Number|
|end Position|Number|
|duration|Number|


Start a vertical bounce animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### Get Bottom Position

[[Method('Animation Utilities', 'Get Bottom Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the bottom position of a component. It will return '-9999' if there was a error.

### Get Left Position

[[Method('Animation Utilities', 'Get Left Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the left position of a component. It will return '-9999' if there was a error.

### Get Right Position

[[Method('Animation Utilities', 'Get Right Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the right position of a component. It will return '-9999' if there was a error.

### Get Top Position

[[Method('Animation Utilities', 'Get Top Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the top position of a component. It will return '-9999' if there was a error.

### Get X Position

[[Method('Animation Utilities', 'Get X Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the x position of a component. It will return '-9999' if there was a error.

### Get Y Position

[[Method('Animation Utilities', 'Get Y Position', True, 'component')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|component|Component|


Returns the y position of a component. It will return '-9999' if there was a error.

### Overshoot Horizontal

[[Method('Animation Utilities', 'Overshoot Horizontal', False, 'component', 'startPosition', 'endPosition', 'duration', 'tension')]]

| Params | []() |
|--------|------|
|component|Component|
|start Position|Number|
|end Position|Number|
|duration|Number|
|tension|Number|


Start a horizontal overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### Overshoot Vertical

[[Method('Animation Utilities', 'Overshoot Vertical', False, 'component', 'startPosition', 'endPosition', 'duration', 'tension')]]

| Params | []() |
|--------|------|
|component|Component|
|start Position|Number|
|end Position|Number|
|duration|Number|
|tension|Number|


Start a vertical overshoot animation. If 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.

### Rotation

[[Method('Animation Utilities', 'Rotation', False, 'component', 'rotationStartDegrees', 'rotationEndDegrees', 'duration')]]

| Params | []() |
|--------|------|
|component|Component|
|rotation Start Degrees|Number|
|rotation End Degrees|Number|
|duration|Number|


Start a rotation on any component. Use as example in 'rotation Start Degrees' 0, in 'rotation End Degrees' 360 and in 'duration' 300 (millisecond) to run a clockwise, 360 degress animation. You can also use negative numbers for the degress.

### Zoom

[[Method('Animation Utilities', 'Zoom', False, 'component', 'startScale', 'endScale', 'duration')]]

| Params | []() |
|--------|------|
|component|Component|
|start Scale|Number|
|end Scale|Number|
|duration|Number|


Start a zoom animation. 'tension' is set to 0 you will not see a overshoot animation. Then you will see just a simple deceleration animation. The duration is set in millisecond. Use as example for 1 second '1000'.