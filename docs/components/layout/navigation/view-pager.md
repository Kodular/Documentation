# View Pager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

A visible component that groups other layout components each of which can be accessed by swiping left or right.

## Events

### Page Selected

[[Event('View Pager', 'Page Selected', 'position')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Event to detect that a page was selected.

## Methods

### AddComponentToView

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |component|`component`|
    |tab Name|`text`|


Add a component to the view pager. The first added component will be the first visible component on the screen.

### RemoveAllTabs

_Block preview not available_

Remove all tab's from view pager.

### RemoveViewAt

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |position|`number`|


Removes a before added view from the view pager. If you want to delete the first page then use as position '1'.

## Properties

### Show Tabs

<small>Available as ^^Experimental^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Show Tabs')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If set to true, you will see tabs above the view pager.

### Tabs Active Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Active Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFF4081|

Specifies the tab's text color for active tab's.

### Tabs Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

Specifies the tab's background color.

### Tabs Indicator Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Indicator Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the tab's indicator color.

### Tabs Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Mode')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

### Tabs Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

Specifies the tab's text color for not selected tab's.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Get Current Page

:eyes: Read-Only property
[[PropertyBlockGetter('View Pager', 'Get Current Page')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Get the current selected visible page.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentageof the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Select Page

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Select Page')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Select a page which is then the active page.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentageof the Width of its parent Component.