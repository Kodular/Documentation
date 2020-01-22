# Activity Starter

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Connectivity|6|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that can launch an activity using the <code>StartActivity</code> method.<p>Activities that can be launched include: <ul> 
<li> starting other App Inventor for Android apps </li> 
<li> starting the camera application </li> 
<li> performing web search </li> 
<li> opening a browser to a specified web page</li> 
<li> opening the map application to a specified location</li></ul> 
You can also launch activities that return text data.  See the documentation on using the Activity Starter for examples.</p>_

## Events

### Activity Canceled

[[Event('Activity Starter', 'Activity Canceled')]]

_Event raised if this ActivityStarter returns because the activity was canceled._

### ActivityError

[[Event('Activity Starter', 'ActivityError', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


_The ActivityError event is no longer used. Please use the Screen.ErrorOccurred event instead._

### After Activity

[[Event('Activity Starter', 'After Activity', 'result')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |result|`text`|


_Event raised after this ActivityStarter returns._

## Methods

### ResolveActivity

[[Method('Activity Starter', 'ResolveActivity', true)]]

{>>Returns `text`<<}

_Returns the name of the activity that corresponds to this ActivityStarter, or an empty string if no corresponding activity can be found._

### StartActivity

[[Method('Activity Starter', 'StartActivity', false)]]

_Start the activity corresponding to this ActivityStarter._

## Properties

### Action

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Action')]]

| Type |
|:----:|
|text|

_Returns the action that will be used to start the activity._

### Activity Class

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Class')]]

| Type |
|:----:|
|text|

_Returns the class part of the specific component that will be started._

### Activity Package

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Activity Package')]]

| Type |
|:----:|
|text|

_Returns the package part of the specific component that will be started._

### Data Type

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Type')]]

| Type |
|:----:|
|text|

_Returns the MIME type to pass to the activity._

### Data Uri

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Data Uri')]]

| Type |
|:----:|
|text|

_Returns the data URI that will be used to start the activity._

### Extra Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Key')]]

| Type |
|:----:|
|text|

_Returns the extra key that will be passed to the activity.
DEPRECATED: New code should use Extras property instead._

### Extra Value

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extra Value')]]

| Type |
|:----:|
|text|

_Returns the extra value that will be passed to the activity.
DEPRECATED: New code should use Extras property instead._

### Result Name

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Result Name')]]

| Type |
|:----:|
|text|

_Returns the name that will be used to retrieve a result from the activity._

### Extras

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Activity Starter', 'Extras')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_Specifies the list of key-value pairs that will be passed as extra data to the activity._

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the result from the activity._

### Result Type

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the MIME type from the activity._

### Result URI

:eyes: Read-Only property
[[PropertyBlockGetter('Activity Starter', 'Result URI')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Returns the URI from the activity._