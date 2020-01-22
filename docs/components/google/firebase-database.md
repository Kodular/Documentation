# Firebase Database

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that communicates with a Firebase to store and retrieve information.

## Events

### Data Changed

[[Event('Firebase Database', 'Data Changed', 'tag value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`any`|


Indicates that the data in the Firebase has changed.
 Launches an event with the tag and value that have been updated.

### Firebase Error

[[Event('Firebase Database', 'Firebase Error', 'message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|


Indicates that the communication with the Firebase signaled an error.

### First Removed

[[Event('Firebase Database', 'First Removed', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`any`|


Event triggered by the "RemoveFirst" function. The argument "value" is the object that was the first in the list, and which is now removed.

### Got Value

[[Event('Firebase Database', 'Got Value', 'tag value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value|`any`|


Indicates that a GetValue request has succeeded.

### Tag List

[[Event('Firebase Database', 'Tag List', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`list`|


Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

## Methods

### AppendValue

[[Method('Firebase Database', 'AppendValue', false, 'tag valueToAdd')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value To Add|`any`|


Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

### ClearTag

[[Method('Firebase Database', 'ClearTag', false, 'tag')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|


Remove the tag from Firebase

### GetTagList

[[Method('Firebase Database', 'GetTagList', false)]]

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

### GetValue

[[Method('Firebase Database', 'GetValue', false, 'tag valueIfTagNotThere')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value If Tag Not There|`any`|


GetValue asks Firebase to get the value stored under the given tag.
 It will pass valueIfTagNotThere to GotValue if there is no value stored
 under the tag.

### GoOffline

[[Method('Firebase Database', 'GoOffline', false)]]

Take the database offline

### GoOnline

[[Method('Firebase Database', 'GoOnline', false)]]

Take the database online

### RemoveFirst

[[Method('Firebase Database', 'RemoveFirst', false, 'tag')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|


Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

### StoreValue

[[Method('Firebase Database', 'StoreValue', false, 'tag valueToStore')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |tag|`text`|
    |value To Store|`any`|


Asks Firebase to store the given value under the given tag.

### Unauthenticate

[[Method('Firebase Database', 'Unauthenticate', false)]]

If you are having difficulty with the Companion and you are switching between different Firebase accounts, you may need to use this function to clear internal Firebase caches. You can just use the "Do It" function on this block in the blocks editor. Note: You should not normally need to use this block as part of an application.

## Properties

### Default URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Default URL')]]

| Type |
|:----:|
|text|

_No description available_

### Developer Bucket

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Developer Bucket')]]

| Type |
|:----:|
|text|

Getter for the DeveloperBucket.

### Firebase Token

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase Token')]]

| Type |
|:----:|
|text|

Returns the FirebaseToken from this FirebaseDB.

### Firebase URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase URL')]]

| Type | Default |
|:----:|:-------:|
|text|DEFAULT|

Gets the URL for this FirebaseDB.

### Persist

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Persist')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, variables will retain their values when off-line and the App exits. Values will be uploaded to Firebase the next time the App is run while connected to the network. This is useful for applications which will gather data while not connected to the network. Note: AppendValue and RemoveFirst will not work correctly when off-line, they require a network connection.<br/><br/> <i>Note</i>: If you set Persist on any Firebase component, on any screen, it makes all Firebase components on all screens persistent. This is a limitation of the low level Firebase library. Also be aware that if you want to set persist to true, you should do so before connecting the Companion for incremental development.

### Project Bucket

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Project Bucket')]]

| Type |
|:----:|
|text|

Gets the ProjectBucket for this FirebaseDB.