# Google Play Games

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|1|API 19 - Android 4.4 - 4.4.4 KitKat|

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

### GetPlayer

[[Method('Google Play Games', 'GetPlayer', false)]]

Get the current player

### IncrementAchievement

[[Method('Google Play Games', 'IncrementAchievement', false, 'achievementId by')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |achievement Id|`text`|
    |by|`number`|


Increment an achievement.

### IsSignedIn

[[Method('Google Play Games', 'IsSignedIn', true)]]

{>>Returns `boolean`<<}

Is user signed in?

### ShowAchievements

[[Method('Google Play Games', 'ShowAchievements', false)]]

Shows Achievement.

### ShowLeaderboard

[[Method('Google Play Games', 'ShowLeaderboard', false, 'leaderboardId')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|


Shows Leaderboard.

### SignIn

[[Method('Google Play Games', 'SignIn', false, 'useLastAccount')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |use Last Account|`boolean`|


Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

### SignOut

[[Method('Google Play Games', 'SignOut', false)]]

Sign out the user.

### SubmitScore

[[Method('Google Play Games', 'SubmitScore', false, 'leaderboardId score')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|
    |score|`number`|


Submits user score to leaderboard.

### UnlockAchievement

[[Method('Google Play Games', 'UnlockAchievement', false, 'achievementId')]]

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