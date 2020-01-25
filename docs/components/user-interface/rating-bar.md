# Rating Bar

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A visible component that lets the user submit a star rating.

## Events

### Changed

Event invoked when the rating has been changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Changed%22,%20%22param%22:%20%5B%22rating%22%5D%7D"></div>

| Params | []() |
|--------|------|
|rating|<span class="chip chip-number">Number</span>|

## Properties

### Background Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span><span class="chip chip-color">Default: <i>#9E9E9EFF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #9E9E9E;"></span></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Change the background color of the star.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>

### Get Number Of Stars

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Returns the number of stars shown.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Get%20Number%20Of%20Stars%22,%20%22getter%22:%20true%7D"></div>

### Get Rating

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Gets the current rating (number of stars filled).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Get%20Rating%22,%20%22getter%22:%20true%7D"></div>

### Get Step Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Gets the step size (granularity) of this rating bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Get%20Step%20Size%22,%20%22getter%22:%20true%7D"></div>

### Is Indicator

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Whether this rating bar should only be an indicator (thus non-changeable by the user).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Is%20Indicator%22,%20%22getter%22:%20false%7D"></div>

### Set Number Of Stars

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>5</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the number of stars to show.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Set%20Number%20Of%20Stars%22,%20%22getter%22:%20false%7D"></div>

### Set Rating

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Sets the rating (the number of stars filled).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Set%20Rating%22,%20%22getter%22:%20false%7D"></div>

### Set Step Size

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>.5</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the step size (granularity) of this rating bar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Set%20Step%20Size%22,%20%22getter%22:%20false%7D"></div>

### Star Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span><span class="chip chip-color">Default: <i>#F34336FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #F34336;"></span></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Change the color of the star.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Star%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Star%20Color%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>True</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Rating%20Bar%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>
