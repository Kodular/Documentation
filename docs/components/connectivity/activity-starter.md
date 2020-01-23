# Activity Starter

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

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

[[Event('Activity Starter', 'Activity Canceled')]]

Event raised if this ActivityStarter returns because the activity was canceled.

### ActivityError

[[Event('Activity Starter', 'ActivityError', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


The ActivityError event is no longer used. Please use the Screen.ErrorOccurred event instead.

### After Activity

[[Event('Activity Starter', 'After Activity', 'result')]]

| Params | []() |
|--------|------|
|result|Text|


Event raised after this ActivityStarter returns.

## Methods

### Resolve Activity

[[Method('Activity Starter', 'Resolve Activity', True)]]

{>>Returns `text`<<}

Returns the name of the activity that corresponds to this ActivityStarter, or an empty string if no corresponding activity can be found.

### Start Activity

[[Method('Activity Starter', 'Start Activity', False)]]

Start the activity corresponding to this ActivityStarter.

## Properties

### Action

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the action that will be used to start the activity.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Action')]]

### Activity Class

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the class part of the specific component that will be started.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Class')]]

### Activity Package

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the package part of the specific component that will be started.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Package')]]

### Data Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the MIME type to pass to the activity.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Type')]]

### Data Uri

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the data URI that will be used to start the activity.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Uri')]]

### Extra Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the extra key that will be passed to the activity
DEPRECATED: New code should use Extras property instead.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Key')]]

### Extra Value

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the extra value that will be passed to the activity
DEPRECATED: New code should use Extras property instead.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Value')]]

### Result Name

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the name that will be used to retrieve a result from the activity.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Result Name')]]

### Extras

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the list of key-value pairs that will be passed as extra data to the activity.

[[PropertyBlockGetterAndSetter('Activity Starter', 'Extras')]]

### Result

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the result from the activity.

[[PropertyBlockGetter('Activity Starter', 'Result')]]

### Result Type

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the MIME type from the activity.

[[PropertyBlockGetter('Activity Starter', 'Result Type')]]

### Result URI

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the URI from the activity.

[[PropertyBlockGetter('Activity Starter', 'Result URI')]]