# Tab Layout

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Navigation|1|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that groups other layout components such that only one of its children is shown at a time. Each of the child layouts can be accessed either by swiping left and right, or using the tabs at the top._

## Events

### Tab Item Selected

[[Event('Tab Layout', 'Tab Item Selected', 'tab position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tab|`text`|
    |position|`number`|


_The event returns the name or the position of the selected tab._

## Methods

### AddNewTab

[[Method('Tab Layout', 'AddNewTab', false, 'name icon')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |name|`text`|
    |icon|`text`|


_Add a new tab to the tab layout. If you don't want a icon then let it empty._

### AddNewTabAt

[[Method('Tab Layout', 'AddNewTabAt', false, 'name icon position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |name|`text`|
    |icon|`text`|
    |position|`number`|


_Add a new tab to the tab layout at the given position. If you don't want a icon then let it empty._

### CountTabs

[[Method('Tab Layout', 'CountTabs', true)]]

{>>Returns `number`<<}

_Returns the number of current added tab's._

### RemoveAllTabs

[[Method('Tab Layout', 'RemoveAllTabs', false)]]

_Remove all tab's from tab layout._

### RemoveTabAt

[[Method('Tab Layout', 'RemoveTabAt', false, 'position')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |position|`number`|


_Removes a before added tab. If you want to delete the first tab then use as position '1'._

## Properties

### Tabs Active Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Active Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFF4081|

_Specifies the tab's text color for active tab's._

### Tabs Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_Specifies the tab's background color._

### Tabs Indicator Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Indicator Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the tab's indicator color._

### Tabs Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Mode')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed._

### Tabs Text Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Text Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_Specifies the tab's text color for not selected tab's._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Get Current Tab

:eyes: Read-Only property
[[PropertyBlockGetter('Tab Layout', 'Get Current Tab')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Get the current selected tab._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Select Tab

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Select Tab')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Select a tab which is then the active tab._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tab Layout', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._