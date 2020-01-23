# Firebase Database

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that communicates with a Firebase to store and retrieve information.

## Events

### Data Changed

[[Event('Firebase Database', 'Data Changed', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|Text|
|value|Any|


Indicates that the data in the Firebase has changed
Launches an event with the tag and value that have been updated.

### Firebase Error

[[Event('Firebase Database', 'Firebase Error', 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Indicates that the communication with the Firebase signaled an error.

### First Removed

[[Event('Firebase Database', 'First Removed', 'value')]]

| Params | []() |
|--------|------|
|value|Any|


Event triggered by the "RemoveFirst" function. The argument "value" is the object that was the first in the list, and which is now removed.

### Got Value

[[Event('Firebase Database', 'Got Value', 'tag', 'value')]]

| Params | []() |
|--------|------|
|tag|Text|
|value|Any|


Indicates that a GetValue request has succeeded.

### Tag List

[[Event('Firebase Database', 'Tag List', 'value')]]

| Params | []() |
|--------|------|
|value|List|


Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

## Methods

### Append Value

[[Method('Firebase Database', 'Append Value', False, 'tag', 'valueToAdd')]]

| Params | []() |
|--------|------|
|tag|Text|
|value To Add|Any|


Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

### Clear Tag

[[Method('Firebase Database', 'Clear Tag', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|Text|


Remove the tag from Firebase

### Get Tag List

[[Method('Firebase Database', 'Get Tag List', False)]]

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

### Get Value

[[Method('Firebase Database', 'Get Value', False, 'tag', 'valueIfTagNotThere')]]

| Params | []() |
|--------|------|
|tag|Text|
|value If Tag Not There|Any|


GetValue asks Firebase to get the value stored under the given tag
It will pass valueIfTagNotThere to GotValue if there is no value storedunder the tag.

### Go Offline

[[Method('Firebase Database', 'Go Offline', False)]]

Take the database offline

### Go Online

[[Method('Firebase Database', 'Go Online', False)]]

Take the database online

### Remove First

[[Method('Firebase Database', 'Remove First', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|Text|


Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

### Store Value

[[Method('Firebase Database', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|Text|
|value To Store|Any|


Asks Firebase to store the given value under the given tag.

### Unauthenticate

[[Method('Firebase Database', 'Unauthenticate', False)]]

If you are having difficulty with the Companion and you are switching between different Firebase accounts, you may need to use this function to clear internal Firebase caches. You can just use the "Do It" function on this block in the blocks editor. Note: You should not normally need to use this block as part of an application.

## Properties

### Default URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Firebase Database', 'Default URL')]]

### Developer Bucket

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Getter for the DeveloperBucket.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Developer Bucket')]]

### Firebase Token

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns the FirebaseToken from this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase Token')]]

### Firebase URL

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>DEFAULT</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the URL for this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase URL')]]

### Persist

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, variables will retain their values when off-line and the App exits. Values will be uploaded to Firebase the next time the App is run while connected to the network. This is useful for applications which will gather data while not connected to the network. Note: AppendValue and RemoveFirst will not work correctly when off-line, they require a network connection.  
  
 _Note_: If you set Persist on any Firebase component, on any screen, it makes all Firebase components on all screens persistent. This is a limitation of the low level Firebase library. Also be aware that if you want to set persist to true, you should do so before connecting the Companion for incremental development.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Persist')]]

### Project Bucket

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets the ProjectBucket for this FirebaseDB.

[[PropertyBlockGetterAndSetter('Firebase Database', 'Project Bucket')]]