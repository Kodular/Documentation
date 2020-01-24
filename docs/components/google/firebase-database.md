# Firebase Database

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that communicates with a Firebase to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Data Changed

Indicates that the data in the Firebase has changed
Launches an event with the tag and value that have been updated.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Data%20Changed%22,%20%22params%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Firebase Error

Indicates that the communication with the Firebase signaled an error.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Firebase%20Error%22,%20%22params%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### First Removed

Event triggered by the "RemoveFirst" function. The argument "value" is the object that was the first in the list, and which is now removed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22First%20Removed%22,%20%22params%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-any">Any</span>|


### Got Value

Indicates that a GetValue request has succeeded.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Got%20Value%22,%20%22params%22:%20%5B%22tag%22,%20%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Tag List

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Tag%20List%22,%20%22params%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-list">List</span>|


## Methods

### Append Value

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Append%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20To%20Add%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Add|<span class="chip chip-any">Any</span>|


### Clear Tag

Remove the tag from Firebase

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Clear%20Tag%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Get Tag List

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Get%20Tag%20List%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Get Value

GetValue asks Firebase to get the value stored under the given tag
It will pass valueIfTagNotThere to GotValue if there is no value storedunder the tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|


### Go Offline

Take the database offline

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Go%20Offline%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Go Online

Take the database online

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Go%20Online%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Remove First

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Remove%20First%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Store Value

Asks Firebase to store the given value under the given tag.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Store%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20To%20Store%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


### Unauthenticate

If you are having difficulty with the Companion and you are switching between different Firebase accounts, you may need to use this function to clear internal Firebase caches. You can just use the "Do It" function on this block in the blocks editor. Note: You should not normally need to use this block as part of an application.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Unauthenticate%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Default URL

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Developer Bucket

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

Getter for the DeveloperBucket.


### Firebase Token

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns the FirebaseToken from this FirebaseDB.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Firebase%20Token%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Firebase%20Token%22,%20%22getter%22:%20false%7D"></div>


### Firebase URL

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>DEFAULT</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Gets the URL for this FirebaseDB.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Firebase%20URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Firebase%20URL%22,%20%22getter%22:%20false%7D"></div>


### Persist

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

If true, variables will retain their values when off-line and the App exits. Values will be uploaded to Firebase the next time the App is run while connected to the network. This is useful for applications which will gather data while not connected to the network. Note: AppendValue and RemoveFirst will not work correctly when off-line, they require a network connection.  
  
 _Note_: If you set Persist on any Firebase component, on any screen, it makes all Firebase components on all screens persistent. This is a limitation of the low level Firebase library. Also be aware that if you want to set persist to true, you should do so before connecting the Companion for incremental development.


### Project Bucket

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Gets the ProjectBucket for this FirebaseDB.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Project%20Bucket%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Firebase%20Database%22,%20%22name%22:%20%22Project%20Bucket%22,%20%22getter%22:%20false%7D"></div>
