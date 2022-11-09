# Activity Starter

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Connectivity**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">6</span>|

## Overview

A component that can launch an activity using the `` StartActivity `` method.

Activities that can be launched include: 

*    starting other App Inventor for Android apps 
*    starting the camera application 
*    performing web search 
*    opening a browser to a specified web page
*    opening the map application to a specified location

You can also launch activities that return text data. See the documentation on using the Activity Starter for examples.

## Events

### Activity Canceled

Event raised if this ActivityStarter returns because the activity was canceled.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Activity%20Canceled%22,%20%22param%22:%20%5B%5D%7D"></div>

### ActivityError

The ActivityError event is no longer used. Please use the Screen.ErrorOccurred event instead.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22ActivityError%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### After Activity

Event raised after this ActivityStarter returns.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22After%20Activity%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|

## Methods

### Resolve Activity

<span class="chip chip-text">Returns: <i>Text</i></span>

Returns the name of the activity that corresponds to this ActivityStarter, or an empty string if no corresponding activity can be found.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Resolve%20Activity%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Start Activity

Start the activity corresponding to this ActivityStarter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Start%20Activity%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Action

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the action that will be used to start the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Action%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Action%22,%20%22getter%22:%20false%7D"></div>

### Activity Class

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the class part of the specific component that will be started.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Activity%20Class%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Activity%20Class%22,%20%22getter%22:%20false%7D"></div>

### Activity Package

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the package part of the specific component that will be started.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Activity%20Package%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Activity%20Package%22,%20%22getter%22:%20false%7D"></div>

### Data Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the MIME type to pass to the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Data%20Type%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Data%20Type%22,%20%22getter%22:%20false%7D"></div>

### Data Uri

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the data URI that will be used to start the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Data%20Uri%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Data%20Uri%22,%20%22getter%22:%20false%7D"></div>

### Extra Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the extra key that will be passed to the activity  
DEPRECATED: New code should use Extras property instead.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extra%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extra%20Key%22,%20%22getter%22:%20false%7D"></div>

### Extra Value

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the extra value that will be passed to the activity  
DEPRECATED: New code should use Extras property instead.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extra%20Value%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extra%20Value%22,%20%22getter%22:%20false%7D"></div>

### Extras

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Specifies the list of key-value pairs that will be passed as extra data to the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extras%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Extras%22,%20%22getter%22:%20false%7D"></div>

### Result

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the result from the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Result%22,%20%22getter%22:%20true%7D"></div>

### Result Name

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Returns the name that will be used to retrieve a result from the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Result%20Name%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Result%20Name%22,%20%22getter%22:%20false%7D"></div>

### Result Type

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the MIME type from the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Result%20Type%22,%20%22getter%22:%20true%7D"></div>

### Result URI

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the URI from the activity.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Activity%20Starter%22,%20%22name%22:%20%22Result%20URI%22,%20%22getter%22:%20true%7D"></div>
