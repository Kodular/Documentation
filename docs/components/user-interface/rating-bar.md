# Rating Bar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|User Interface|API 19, Android 4.4 - 4.4.4 KitKat|1|

## Overview

A visible component that lets the user submit a star rating.

## Events

### Changed

Event invoked when the rating has been changed.

[[Event('Rating Bar', 'Changed', 'rating')]]

| Params | []() |
|--------|------|
|rating|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #9E9E9E;">Default: <i>#9E9E9EFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the background color of the star.

[[PropertyBlockGetterAndSetter('Rating Bar', 'Background Color')]]

### Is Indicator

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether this rating bar should only be an indicator (thus non-changeable by the user).

[[PropertyBlockGetterAndSetter('Rating Bar', 'Is Indicator')]]

### Set Number Of Stars

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the number of stars to show.

[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Number Of Stars')]]

### Set Step Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>.5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the step size (granularity) of this rating bar.

[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Step Size')]]

### Star Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #F34336;">Default: <i>#F34336FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Change the color of the star.

[[PropertyBlockGetterAndSetter('Rating Bar', 'Star Color')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Rating Bar', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Get Number Of Stars

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the number of stars shown.

[[PropertyBlockGetter('Rating Bar', 'Get Number Of Stars')]]

### Get Rating

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Gets the current rating (number of stars filled).

[[PropertyBlockGetter('Rating Bar', 'Get Rating')]]

### Get Step Size

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Gets the step size (granularity) of this rating bar.

[[PropertyBlockGetter('Rating Bar', 'Get Step Size')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Set Rating

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Sets the rating (the number of stars filled).

[[PropertyBlockGetterAndSetter('Rating Bar', 'Set Rating')]]