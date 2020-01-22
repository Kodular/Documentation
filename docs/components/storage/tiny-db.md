# Tiny DB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_TinyDB is a non-visible component that stores data for an app. <p> Apps created with App Inventor are initialized each time they run: If an app sets the value of a variable and the user then quits the app, the value of that variable will not be remembered the next time the app is run. In contrast, TinyDB is a <em> persistent </em> data store for the app, that is, the data stored there will be available each time the app is run. An example might be a game that saves the high score and retrieves it each time the game is played. </<p> <p> Data items are strings stored under <em>tags</em> . To store a data item, you specify the tag it should be stored under.  Subsequently, you can retrieve the data that was stored under a given tag. </p><p> There is only one data store per app. Even if you have multiple TinyDB components, they will use the same data store. To get the effect of separate stores, use different keys. Also each app has its own data store. You cannot use TinyDB to pass data between two different apps on the phone, although you <em>can</em> use TinyDb to shares data between the different screens of a multi-screen app. </p> <p>When you are developing apps using the AI Companion, all the apps using that companion will share the same TinyDb.  That sharing will disappear once the apps are packaged.  But, during development, you should be careful to clear the TinyDb each time you start working on a new app.</p>_

## Properties

### Namespace

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Tiny DB', 'Namespace')]]

| Type | Default |
|:----:|:-------:|
|text|TinyDB1|

Namespace for storing data.

## Methods

### ClearAll



[[Method('Tiny DB', 'ClearAll', false)]]

Clear the entire data store

### ClearTag



[[Method('Tiny DB', 'ClearTag', false, 'tag')]]

**Parameters**

| Name | Type |
|------|------|
|tag|`text`|


Clear the entry with the given tag

### GetTags



[[Method('Tiny DB', 'GetTags', true)]]

{>>Returns `any`<<}


Return a list of all the tags in the data store

### GetValue



[[Method('Tiny DB', 'GetValue', true, 'tag valueIfTagNotThere')]]

{>>Returns `any`<<}


**Parameters**

| Name | Type |
|------|------|
|tag|`text`|
|value If Tag Not There|`any`|


Retrieve the value stored under the given tag.  If there's no such tag, then return valueIfTagNotThere.

### StoreValue



[[Method('Tiny DB', 'StoreValue', false, 'tag valueToStore')]]

**Parameters**

| Name | Type |
|------|------|
|tag|`text`|
|value To Store|`any`|


Store the given value under the given tag.  The storage persists on the
 phone when the app is restarted.