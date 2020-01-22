# CloudDB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that communicates with CloudDB server to store and retrieve information._

## Events

### CloudDB Error

[[Event('CloudDB', 'CloudDB Error', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


Indicates that an error occurred while communicating with the CloudDB Redis server.

### Data Changed

[[Event('CloudDB', 'Data Changed', 'tag value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`any`|


Indicates that the data in the CloudDB project has changed.
 Launches an event with the tag and value that have been updated.

### First Removed

[[Event('CloudDB', 'First Removed', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`any`|


Event triggered by the "RemoveFirstFromList" function. The argument "value" is the object that was the first in the list, and which is now removed.

### Got Value

[[Event('CloudDB', 'Got Value', 'tag value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`any`|


Indicates that a GetValue request has succeeded.

### Tag List

[[Event('CloudDB', 'Tag List', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`list`|


Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

## Methods

### AppendValueToList

[[Method('CloudDB', 'AppendValueToList', false, 'tag itemToAdd')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |item To Add|`any`|


Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

### ClearTag

[[Method('CloudDB', 'ClearTag', false, 'tag')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|


Remove the tag from CloudDB

### CloudConnected

[[Method('CloudDB', 'CloudConnected', true)]]

{>>Returns `boolean`<<}

returns True if we are on the network and will likely be able to connect to the CloudDB server.

### GetTagList

[[Method('CloudDB', 'GetTagList', false)]]

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

### GetValue

[[Method('CloudDB', 'GetValue', false, 'tag valueIfTagNotThere')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value If Tag Not There|`any`|


Get the Value for a tag, doesn't return the value but will cause a GotValue event to fire when the value is looked up.

### RemoveFirstFromList

[[Method('CloudDB', 'RemoveFirstFromList', false, 'tag')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|


Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

### StoreValue

[[Method('CloudDB', 'StoreValue', false, 'tag valueToStore')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value To Store|`any`|


Store a value at a tag.

## Properties

### Default Redis Server

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Default Redis Server')]]

| Type |
|:----:|
|text|

The Default Redis Server to use.

### Project ID

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Project ID')]]

| Type |
|:----:|
|text|

Gets the ProjectID for this CloudDB project.

### Redis Port

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Redis Port')]]

| Type | Default |
|:----:|:-------:|
|number|6381|

The Redis Server port to use. Defaults to 6381

### Redis Server

<small>Available as Common Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('CloudDB', 'Redis Server')]]

| Type | Default |
|:----:|:-------:|
|text|DEFAULT|

The Redis Server to use to store data. A setting of "DEFAULT" means that the MIT server will be used.

### Token

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Token')]]

| Type |
|:----:|
|text|

This field contains the authentication token used to login to the backed Redis server. For the "DEFAULT" server, do not edit this value, the system will fill it in for you. A system administrator may also provide a special value to you which can be used to share data between multiple projects from multiple people. If using your own Redis server, set a password in the server's config and enter it here.

### Use SSL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('CloudDB', 'Use SSL')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Set to true to use SSL to talk to CloudDB/Redis server. This should be set to True for the "DEFAULT" server.