# Google Play Games

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that enables game user authentication, leaderboards, and more.<br>Powered by the Google Play Games service._

## Events

### Got Player

[[Event('Google Play Games', 'Got Player', 'name id level xp')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |name|`text`|
    |id|`text`|
    |level|`number`|
    |xp|`number`|


_Got player info_

### Signed In

[[Event('Google Play Games', 'Signed In', 'success')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|


_User signed in._

### Signed Out

[[Event('Google Play Games', 'Signed Out')]]

_User signed out._

## Methods

### GetPlayer

[[Method('Google Play Games', 'GetPlayer', false)]]

_Get the current player_

### IncrementAchievement

[[Method('Google Play Games', 'IncrementAchievement', false, 'achievementId by')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |achievement Id|`text`|
    |by|`number`|


_Increment an achievement._

### IsSignedIn

[[Method('Google Play Games', 'IsSignedIn', true)]]

{>>Returns `boolean`<<}

_Is user signed in?_

### ShowAchievements

[[Method('Google Play Games', 'ShowAchievements', false)]]

_Shows Achievement._

### ShowLeaderboard

[[Method('Google Play Games', 'ShowLeaderboard', false, 'leaderboardId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|


_Shows Leaderboard._

### SignIn

[[Method('Google Play Games', 'SignIn', false, 'useLastAccount')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |use Last Account|`boolean`|


_Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account_

### SignOut

[[Method('Google Play Games', 'SignOut', false)]]

_Sign out the user._

### SubmitScore

[[Method('Google Play Games', 'SubmitScore', false, 'leaderboardId score')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |leaderboard Id|`text`|
    |score|`number`|


_Submits user score to leaderboard._

### UnlockAchievement

[[Method('Google Play Games', 'UnlockAchievement', false, 'achievementId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |achievement Id|`text`|


_Unlock an achievement._

## Properties

### Google Play Games App ID

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Play Games', 'Google Play Games App ID')]]

| Type |
|:----:|
|text|

_No description available_