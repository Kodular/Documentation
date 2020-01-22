# Shortcut Badge

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that adds a dot/badge to the app''s launcher icon when a there are unread notifications in the app._

## Methods

### ApplyCount

[[Method('Shortcut Badge', 'ApplyCount', false, 'count')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |count|`number`|


_Use this block to apply a notification badge count._

### Count

[[Method('Shortcut Badge', 'Count', true)]]

{>>Returns `number`<<}

_Use this block to return the notification count._

### RemoveCount

[[Method('Shortcut Badge', 'RemoveCount', false)]]

_Use this block to remove the notification badge count._