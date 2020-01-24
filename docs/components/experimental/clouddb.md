# CloudDB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that communicates with CloudDB server to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)


## Events

### CloudDB Error

Indicates that an error occurred while communicating with the CloudDB Redis server.

[[Event('CloudDB', 'CloudDB Error', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Data Changed

Indicates that the data in the CloudDB project has changed
Launches an event with the tag and value that have been updated.

[[Event('CloudDB', 'Data Changed', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### First Removed

Event triggered by the "RemoveFirstFromList" function. The argument "value" is the object that was the first in the list, and which is now removed.

[[Event('CloudDB', 'First Removed', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-any">Any</span>|


### Got Value

Indicates that a GetValue request has succeeded.

[[Event('CloudDB', 'Got Value', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Tag List

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

[[Event('CloudDB', 'Tag List', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-list">List</span>|


## Methods

### Append Value To List

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

[[Method('CloudDB', 'Append Value To List', False, 'tag', 'itemToAdd')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|item To Add|<span class="chip chip-any">Any</span>|


### Clear Tag

Remove the tag from CloudDB

[[Method('CloudDB', 'Clear Tag', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Cloud Connected

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

returns True if we are on the network and will likely be able to connect to the CloudDB server.

[[Method('CloudDB', 'Cloud Connected', True)]]

### Get Tag List

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

[[Method('CloudDB', 'Get Tag List', False)]]

### Get Value

Get the Value for a tag, doesn't return the value but will cause a GotValue event to fire when the value is looked up.

[[Method('CloudDB', 'Get Value', False, 'tag', 'valueIfTagNotThere')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|


### Remove First From List

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

[[Method('CloudDB', 'Remove First From List', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Store Value

Store a value at a tag.

[[Method('CloudDB', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


## Properties

### Default Redis Server

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The Default Redis Server to use.

### Project ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the ProjectID for this CloudDB project.

[[PropertyBlockGetter('CloudDB', 'Project ID')]]

### Redis Port

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>6381</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Redis Server port to use. Defaults to 6381

[[PropertyBlockGetter('CloudDB', 'Redis Port')]]

### Redis Server

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>DEFAULT</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The Redis Server to use to store data. A setting of "DEFAULT" means that the MIT server will be used.

[[PropertyBlockGetter('CloudDB', 'Redis Server')]]

### Token

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

This field contains the authentication token used to login to the backed Redis server. For the "DEFAULT" server, do not edit this value, the system will fill it in for you. A system administrator may also provide a special value to you which can be used to share data between multiple projects from multiple people. If using your own Redis server, set a password in the server's config and enter it here.

### Use SSL

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Set to true to use SSL to talk to CloudDB/Redis server. This should be set to True for the "DEFAULT" server.