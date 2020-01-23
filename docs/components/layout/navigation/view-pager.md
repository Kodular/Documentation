# View Pager

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Navigation|API 19, Android 4.4 - 4.4.4 KitKat|3|

## Overview

A visible component that groups other layout components each of which can be accessed by swiping left or right.

## Events

### Page Selected

Event to detect that a page was selected.

[[Event('View Pager', 'Page Selected', 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


## Methods

### Add Component To View

Add a component to the view pager. The first added component will be the first visible component on the screen.

[[Method('View Pager', 'Add Component To View', False, 'component', 'tabName')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|tab Name|<span class="chip chip-text">Text</span>|


### Remove All Tabs

Remove all tab's from view pager.

[[Method('View Pager', 'Remove All Tabs', False)]]

### Remove View At

Removes a before added view from the view pager. If you want to delete the first page then use as position '1'.

[[Method('View Pager', 'Remove View At', False, 'position')]]

| Params | []() |
|--------|------|
|position|<span class="chip chip-number">Number</span>|


## Properties

### Show Tabs

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Experimental^^ Property</small>

If set to true, you will see tabs above the view pager.

[[PropertyBlockGetterAndSetter('View Pager', 'Show Tabs')]]

### Tabs Active Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FF4081;">Default: <i>#FF4081FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's text color for active tab's.

[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Active Text Color')]]

### Tabs Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's background color.

[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Background Color')]]

### Tabs Indicator Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's indicator color.

[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Indicator Color')]]

### Tabs Mode

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Choose the mode used for the tab's. If no mode is specified, 'Scrollable' is taken as 'Default'. Use '0' for scrollable and '1' for fixed.

[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Mode')]]

### Tabs Text Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the tab's text color for not selected tab's.

[[PropertyBlockGetterAndSetter('View Pager', 'Tabs Text Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies whether the component should be visible on the screen. Value is true if the component is showing and false if hidden.

[[PropertyBlockGetterAndSetter('View Pager', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Get Current Page

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Get the current selected visible page.

[[PropertyBlockGetter('View Pager', 'Get Current Page')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('View Pager', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('View Pager', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Select Page

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Select a page which is then the active page.

[[PropertyBlockGetterAndSetter('View Pager', 'Select Page')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('View Pager', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('View Pager', 'Width Percent')]]