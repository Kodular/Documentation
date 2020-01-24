# Firebase Database

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that communicates with a Firebase to store and retrieve information.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Data Changed

Indicates that the data in the Firebase has changed
Launches an event with the tag and value that have been updated.

[[Event('Firebase Database', 'Data Changed', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Firebase Error

Indicates that the communication with the Firebase signaled an error.

[[Event('Firebase Database', 'Firebase Error', 'message')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### First Removed

Event triggered by the "RemoveFirst" function. The argument "value" is the object that was the first in the list, and which is now removed.

[[Event('Firebase Database', 'First Removed', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-any">Any</span>|


### Got Value

Indicates that a GetValue request has succeeded.

[[Event('Firebase Database', 'Got Value', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value|<span class="chip chip-any">Any</span>|


### Tag List

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

[[Event('Firebase Database', 'Tag List', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-list">List</span>|


## Methods

### Append Value

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

[[Method('Firebase Database', 'Append Value', False, 'tag', 'valueToAdd')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Add|<span class="chip chip-any">Any</span>|


### Clear Tag

Remove the tag from Firebase

[[Method('Firebase Database', 'Clear Tag', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Get Tag List

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

[[Method('Firebase Database', 'Get Tag List', False)]]

### Get Value

GetValue asks Firebase to get the value stored under the given tag
It will pass valueIfTagNotThere to GotValue if there is no value storedunder the tag.

[[Method('Firebase Database', 'Get Value', False, 'tag', 'valueIfTagNotThere')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|


### Go Offline

Take the database offline

[[Method('Firebase Database', 'Go Offline', False)]]

### Go Online

Take the database online

[[Method('Firebase Database', 'Go Online', False)]]

### Remove First

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

[[Method('Firebase Database', 'Remove First', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Store Value

Asks Firebase to store the given value under the given tag.

[[Method('Firebase Database', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


### Unauthenticate

If you are having difficulty with the Companion and you are switching between different Firebase accounts, you may need to use this function to clear internal Firebase caches. You can just use the "Do It" function on this block in the blocks editor. Note: You should not normally need to use this block as part of an application.

[[Method('Firebase Database', 'Unauthenticate', False)]]

## Properties

### Default URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Developer Bucket

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

Getter for the DeveloperBucket.

### Firebase Token

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the FirebaseToken from this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase Token')]]

### Firebase URL

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>DEFAULT</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the URL for this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase URL')]]

### Persist

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

If true, variables will retain their values when off-line and the App exits. Values will be uploaded to Firebase the next time the App is run while connected to the network. This is useful for applications which will gather data while not connected to the network. Note: AppendValue and RemoveFirst will not work correctly when off-line, they require a network connection.  
  
 _Note_: If you set Persist on any Firebase component, on any screen, it makes all Firebase components on all screens persistent. This is a limitation of the low level Firebase library. Also be aware that if you want to set persist to true, you should do so before connecting the Companion for incremental development.

### Project Bucket

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the ProjectBucket for this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Project Bucket')]]