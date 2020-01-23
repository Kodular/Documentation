# Google Play Games

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that enables game user authentication, leaderboards, and more.  
Powered by the Google Play Games service.

## Events

### Got Player

[[Event('Google Play Games', 'Got Player', 'name', 'id', 'level', 'xp')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |name|`text`|
    |id|`text`|
    |level|`number`|
    |xp|`number`|


Got player info

### Signed In

[[Event('Google Play Games', 'Signed In', 'success')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|


User signed in.

### Signed Out

[[Event('Google Play Games', 'Signed Out')]]

User signed out.

## Methods

### Get Player

_Block preview not available_

Get the current player

### Increment Achievement

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |achievement Id|`text`|
    |by|`number`|


Increment an achievement.

### Is Signed In

_Block preview not available_

{>>Returns `boolean`<<}

Is user signed in?

### Show Achievements

_Block preview not available_

Shows Achievement.

### Show Leaderboard

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|


Shows Leaderboard.

### Sign In

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |use Last Account|`boolean`|


Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

### Sign Out

_Block preview not available_

Sign out the user.

### Submit Score

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|
    |score|`number`|


Submits user score to leaderboard.

### Unlock Achievements

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |achievement Id|`text`|


Unlock an achievement.

## Properties

### Google Play Games App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Play Games', 'Google Play Games App ID')]]

| Type |
|:----:|
|text|

_No description available_