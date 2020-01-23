# Notification

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that sends a notification to the user''s device.

## Methods

### Are Notification Enabled

_Block preview not available_

{>>Returns `boolean`<<}

Check wether the app can send Notifications

### Big Picture Notification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |notification ID|`number`|
    |title|`text`|
    |message|`text`|
    |big Picture|`text`|
    |start Value|`text`|
    |remove On Click|`boolean`|


Send a normal notification

### Cancel All Notifications

_Block preview not available_

Cancel all Notifications

### Cancel Notification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id|`number`|


Cancel a Notification with an id

### Normal Notification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |notification ID|`number`|
    |title|`text`|
    |message|`text`|
    |start Value|`text`|
    |remove On Click|`boolean`|


Send a normal notification

### Simple Notification

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |message|`text`|


Send a simple notification

## Properties

### Priority

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Priority')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the priority level. 1 = "Default", 2 = "high", 3 = "low", 4 = "max", 5 = "min"

### Visibility

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Notification', 'Visibility')]]

| Type | Default |
|:----:|:-------:|
|number|1|

Set the visibility property. 1 = "public", 2 = "private", 3 = "secret".