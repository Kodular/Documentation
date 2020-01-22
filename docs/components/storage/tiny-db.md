# Tiny DB

## Overview

**TinyDB** is a non-visible component that stores data for an app.

Apps created with Kodular are initialized each time they run. This means that if an app sets the value of a variable and the user then quits the app, the value of that variable will not be remembered the next time the app is run. In contrast, TinyDB is a persistent data store for the app. The data stored in a TinyDB will be available each time the app is run. An example might be a game that saves the high score and retrieves it each time the game is played.

Data items consist of tags and values. To store a data item, you specify the tag it should be stored under. The tag must be a text block, giving the data a name. Subsequently, you can retrieve the data that was stored under a given tag.

You cannot use the TinyDB to pass data between two different apps on the phone, although you can use the TinyDB to share data between the different screens of a multi-screen app.

When you are developing apps using the Kodular Companion, all the apps using that Companion will share the same TinyDB. That sharing will disappear once the apps are packaged and installed on the phone. During development you should be careful to clear the Companion app's data each time you start working on a new app.

## Properties

### Namespace
[[PropertyBlockGetterAndSetter('TinyDB', 'Namespace')]]

Namespace for storing data. All TinyDB components in the same app with the same namespace property access the same data.

Each namespace represents a single data store that is shared by the entire app. If you have multiple TinyDB components with the same namespace within an app, they use the same data store, even if they are on different screens.

## Methods

### Clear All
[[Method('TinyDB', 'Clear All')]]

Clear the entire data store in the TinyDB.

### Clear Tag
[[Method('TinyDB', 'Clear Tag', False, 'tag')]]

Clear the entry with the given tag.

### Get Tags
[[Method('TinyDB', 'Get Tags', True)]]

Return a list of all the tags in the TinyDB.

### Get Value
[[Method('TinyDB', 'Get Value', True, 'tag', 'value If Tag Not There')]]

Retrieve the value stored under the given tag. If there's no such tag, then return valueIfTagNotThere.

### Store Value
[[Method('TinyDB', 'Store Value', False, 'tag', 'value To Store')]]

Store the value under the given tag. The storage persists on the phone when the app is restarted.
