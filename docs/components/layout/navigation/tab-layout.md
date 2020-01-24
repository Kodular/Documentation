# Tab Layout

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Navigation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that groups other layout components such that only one of its children is shown at a time. Each of the child layouts can be accessed either by swiping left and right, or using the tabs at the top.

## Events

### Tab Item Selected

The event returns the name or the position of the selected tab.

[[Event('Tab Layout', 'Tab Item Selected', 'tab', 'position')]]

| Params | []() |
|--------|------|
|tab|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-number">Number</span>|


## Methods

### Add New Tab

Add a new tab to the tab layout. If you don't want a icon then let it empty.

[[Method('Tab Layout', 'Add New Tab', False, 'name', 'icon')]]

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|


### Add New Tab At

Add a new tab to the tab layout at the given position. If you don't want a icon then let it empty.

[[Method('Tab Layout', 'Add New Tab At', False, 'name', 'icon', 'position')]]

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|icon|<span class="chip chip-text">Text</span>|
|position|<span class="chip chip-number">Number</span>|


### Count Tabs

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the number of current added tab's.

[[Method('Tab Layout', 'Count Tabs', True)]]

### Remove All Tabs

Remove all tab's from tab layout.

[[Method('Tab Layout', 'Remove All Tabs', False)]]

### Remove Tab At

Removes a before added tab. If you want to delete the first tab then use as position '1'.

[[Method('Tab Layout', 'Remove Tab At', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


## Properties

### Tabs Active Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FF4081;">Default: <i>#FF4081FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's text color for active tab's.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Active Text Color')]]

### Tabs Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's background color.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Background Color')]]

### Tabs Indicator Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's indicator color.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Indicator Color')]]

### Tabs Mode

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Mode')]]

### Tabs Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's text color for not selected tab's.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Tabs Text Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Get Current Tab

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the current selected tab.

[[PropertyBlockGetter('Tab Layout', 'Get Current Tab')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Select Tab

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Select a tab which is then the active tab.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Select Tab')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Tab Layout', 'Width Percent')]]