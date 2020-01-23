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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


The ActivityError event is no longer used. Please use the Screen.ErrorOccurred event instead.

### After Activity

[[Event('Activity Starter', 'After Activity', 'result')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |result|`text`|


Event raised after this ActivityStarter returns.

## Methods

### Resolve Activity

_Block preview not available_

{>>Returns `text`<<}

Returns the name of the activity that corresponds to this ActivityStarter, or an empty string if no corresponding activity can be found.

### Start Activity

_Block preview not available_

Start the activity corresponding to this ActivityStarter.

## Properties

### Action

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Action')]]

| Type |
|:----:|
|text|

Returns the action that will be used to start the activity.

### Activity Class

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Class')]]

| Type |
|:----:|
|text|

Returns the class part of the specific component that will be started.

### Activity Package

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Package')]]

| Type |
|:----:|
|text|

Returns the package part of the specific component that will be started.

### Data Type

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Type')]]

| Type |
|:----:|
|text|

Returns the MIME type to pass to the activity.

### Data Uri

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Uri')]]

| Type |
|:----:|
|text|

Returns the data URI that will be used to start the activity.

### Extra Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Key')]]

| Type |
|:----:|
|text|

Returns the extra key that will be passed to the activity
DEPRECATED: New code should use Extras property instead.

### Extra Value

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Value')]]

| Type |
|:----:|
|text|

Returns the extra value that will be passed to the activity
DEPRECATED: New code should use Extras property instead.

### Result Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Result Name')]]

| Type |
|:----:|
|text|

Returns the name that will be used to retrieve a result from the activity.

### Extras

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extras')]]

| Type | Default |
|:----:|:-------:|
|list|None|

Specifies the list of key-value pairs that will be passed as extra data to the activity.

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the result from the activity.

### Result Type

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the MIME type from the activity.

### Result URI

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result URI')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Returns the URI from the activity.