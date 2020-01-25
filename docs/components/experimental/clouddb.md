# CloudDB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

Non-visible component that communicates with CloudDB server to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.ACCESS_NETWORK_STATE](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_NETWORK_STATE)

## Events

### CloudDB Error

Indicates that an error occurred while communicating with the CloudDB Redis server.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22CloudDB%20Error%22,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

### Data Changed

Indicates that the data in the CloudDB project has changed
Launches an event with the tag and value that have been updated.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Data%20Changed%22,%20%22param%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|

### First Removed

Event triggered by the "RemoveFirstFromList" function. The argument "value" is the object that was the first in the list, and which is now removed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22First%20Removed%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-any">Any</span>|

### Got Value

Indicates that a GetValue request has succeeded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Got%20Value%22,%20%22param%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|

### Tag List

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Tag%20List%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-list">List</span>|

## Methods

### Append Value To List

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Append%20Value%20To%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22item%20To%20Add%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|item To Add|<span class="chip chip-any">Any</span>|

### Clear Tag

Remove the tag from CloudDB

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Clear%20Tag%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Cloud Connected

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

returns True if we are on the network and will likely be able to connect to the CloudDB server.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Cloud%20Connected%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Get Tag List

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Get%20Tag%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Get Value

Get the Value for a tag, doesn't return the value but will cause a GotValue event to fire when the value is looked up.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|

### Remove First From List

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Remove%20First%20From%20List%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|

### Store Value

Store a value at a tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Store%20Value%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22tag%22,%20%22value%20To%20Store%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|

## Properties

### Default Redis Server

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

The Default Redis Server to use.

### Project ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Gets the ProjectID for this CloudDB project.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Project%20ID%22,%20%22getter%22:%20true%7D"></div>

### Redis Port

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>6381</i></span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The Redis Server port to use. Defaults to 6381

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Redis%20Port%22,%20%22getter%22:%20true%7D"></div>

### Redis Server

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>DEFAULT</i></span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The Redis Server to use to store data. A setting of "DEFAULT" means that the MIT server will be used.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22CloudDB%22,%20%22name%22:%20%22Redis%20Server%22,%20%22getter%22:%20true%7D"></div>

### Token

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

This field contains the authentication token used to login to the backed Redis server. For the "DEFAULT" server, do not edit this value, the system will fill it in for you. A system administrator may also provide a special value to you which can be used to share data between multiple projects from multiple people. If using your own Redis server, set a password in the server's config and enter it here.

### Use SSL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Set to true to use SSL to talk to CloudDB/Redis server. This should be set to True for the "DEFAULT" server.
