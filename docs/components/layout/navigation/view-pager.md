# View Pager

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|3|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that groups other layout components each of which can be accessed by swiping left or right._

## Events

### Page Selected

[[Event('View Pager', 'Page Selected', 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Event to detect that a page was selected._

## Methods

### AddComponentToView

[[Method('View Pager', 'AddComponentToView', false, 'component tabName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |component|`component`|
    |tab Name|`text`|


_Add a component to the view pager. The first added component will be the first visible component on the screen._

### RemoveAllTabs

[[Method('View Pager', 'RemoveAllTabs', false)]]

_Remove all tab's from view pager._

### RemoveViewAt

[[Method('View Pager', 'RemoveViewAt', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Removes a before added view from the view pager. If you want to delete the first page then use as position '1'._

## Properties

### Show Tabs

<small>Available as ^^Experimental^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Show Tabs')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If set to true, you will see tabs above the view pager._

### Tabs Active Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Active Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFF4081|

_Specifies the tab's text color for active tab's._

### Tabs Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_Specifies the tab's background color._

### Tabs Indicator Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Indicator Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the tab's indicator color._

### Tabs Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Mode')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed._

### Tabs Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the tab's text color for not selected tab's._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Get Current Page

:eyes: Read-Only property
[[PropertyBlockGetter('View Pager', 'Get Current Page')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Get the current selected visible page._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Select Page

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Select Page')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Select a page which is then the active page._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('View Pager', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._