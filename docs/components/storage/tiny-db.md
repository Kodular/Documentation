# Tiny DB

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Storage**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

TinyDB is a non-visible component that stores data for an app. 

 Apps created with App Inventor are initialized each time they run: If an app sets the value of a variable and the user then quits the app, the value of that variable will not be remembered the next time the app is run. In contrast, TinyDB is a _ persistent _ data store for the app, that is, the data stored there will be available each time the app is run. An example might be a game that saves the high score and retrieves it each time the game is played. <!--<p--> 

 Data items are strings stored under _tags_ . To store a data item, you specify the tag it should be stored under. Subsequently, you can retrieve the data that was stored under a given tag. 

 There is only one data store per app. Even if you have multiple TinyDB components, they will use the same data store. To get the effect of separate stores, use different keys. Also each app has its own data store. You cannot use TinyDB to pass data between two different apps on the phone, although you _can_ use TinyDb to shares data between the different screens of a multi-screen app. 

 

When you are developing apps using the AI Companion, all the apps using that companion will share the same TinyDb. That sharing will disappear once the apps are packaged. But, during development, you should be careful to clear the TinyDb each time you start working on a new app.

## Methods

### Clear All

Clear the entire data store

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Clear%20All%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Clear Tag

Clear the entry with the given tag

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Clear%20Tag%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|


### Get Tags

<span class="chip chip-any">Returns: <i>Any</i></span> 

Return a list of all the tags in the data store

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Get%20Tags%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Value

<span class="chip chip-any">Returns: <i>Any</i></span> 

Retrieve the value stored under the given tag. If there's no such tag, then return valueIfTagNotThere.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Get%20Value%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22tag%22,%20%22value%20If%20Tag%20Not%20There%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value If Tag Not There|<span class="chip chip-any">Any</span>|


### Store Value

Store the given value under the given tag. The storage persists on thephone when the app is restarted.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Store%20Value%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22tag%22,%20%22value%20To%20Store%22%5D%7D"></div>


| Params | []() |
|--------|------|
|tag|<span class="chip chip-text">Text</span>|
|value To Store|<span class="chip chip-any">Any</span>|


## Properties

### Namespace

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>TinyDB1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Namespace for storing data.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Namespace%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Tiny%20DB%22,%20%22name%22:%20%22Namespace%22,%20%22getter%22:%20false%7D"></div>
