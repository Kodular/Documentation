# Firebase Remote Config

## Overview

The **Firebase Remote Config** component allows you to enable and disable features to specific users without having them update the app.

## Setup

For an in-depth guide for how to setup the component see [Staging updates with Firebase Remote Config](/guides/component-examples/remote-config/)

## Methods

### Fetch
[[Method('Firebase_Remote_Config', 'Fetch')]]

Use this block to fetch the parameter values that you created in your Firebase dashboard.

### Get Boolean
[[Method('Firebase_Remote_Config', 'Get Boolean', True, 'key')]]

Use this block to return the boolean value of the specified key.

### Get Number
[[Method('Firebase_Remote_Config', 'Get Number', True, 'key')]]

Use this block to return the number value of the specified key.

### Get Text
[[Method('Firebase_Remote_Config', 'Get Text', True, 'key')]]

Use this block to return the text value of the specified key.


## Events

### Fetch Failed
[[Event('Firebase_Remote_Config', 'Fetch Failed')]]

Triggered when the parameters fail to be fetched from Firebase.

### Fetch Success
[[Event('Firebase_Remote_Config', 'Fetch Success')]]

Triggered when the parameters are successfully fetched from Firebase.
