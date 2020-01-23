# Tiny DB

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Storage|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

TinyDB is a non-visible component that stores data for an app. 

 Apps created with App Inventor are initialized each time they run: If an app sets the value of a variable and the user then quits the app, the value of that variable will not be remembered the next time the app is run. In contrast, TinyDB is a _ persistent _ data store for the app, that is, the data stored there will be available each time the app is run. An example might be a game that saves the high score and retrieves it each time the game is played. <!--<p--> 

 Data items are strings stored under _tags_ . To store a data item, you specify the tag it should be stored under. Subsequently, you can retrieve the data that was stored under a given tag. 

 There is only one data store per app. Even if you have multiple TinyDB components, they will use the same data store. To get the effect of separate stores, use different keys. Also each app has its own data store. You cannot use TinyDB to pass data between two different apps on the phone, although you _can_ use TinyDb to shares data between the different screens of a multi-screen app. 

 

When you are developing apps using the AI Companion, all the apps using that companion will share the same TinyDb. That sharing will disappear once the apps are packaged. But, during development, you should be careful to clear the TinyDb each time you start working on a new app.

## Methods

### Clear All

[[Method('Tiny DB', 'Clear All', False)]]

Clear the entire data store

### Clear Tag

[[Method('Tiny DB', 'Clear Tag', False, 'tag')]]

| Params | []() |
|--------|------|
|tag|Text|


Clear the entry with the given tag

### Get Tags

[[Method('Tiny DB', 'Get Tags', True)]]

{>>Returns `any`<<}

Return a list of all the tags in the data store

### Get Value

[[Method('Tiny DB', 'Get Value', True, 'tag', 'valueIfTagNotThere')]]

{>>Returns `any`<<}

| Params | []() |
|--------|------|
|tag|Text|
|value If Tag Not There|Any|


Retrieve the value stored under the given tag. If there's no such tag, then return valueIfTagNotThere.

### Store Value

[[Method('Tiny DB', 'Store Value', False, 'tag', 'valueToStore')]]

| Params | []() |
|--------|------|
|tag|Text|
|value To Store|Any|


Store the given value under the given tag. The storage persists on thephone when the app is restarted.

## Properties

### Namespace

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>TinyDB1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Namespace for storing data.

[[PropertyBlockGetterAndSetter('Tiny DB', 'Namespace')]]