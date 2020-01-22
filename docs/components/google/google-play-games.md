# Google Play Games

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that enables game user authentication, leaderboards, and more.<br>Powered by the Google Play Games service._

## Properties

### Google Play Games App ID

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Play Games', 'Google Play Games App ID')]]

| Type |
|:----:|
|text|

_No description available_

## Methods

### GetPlayer



[[Method('Google Play Games', 'GetPlayer', false)]]

Get the current player

### IncrementAchievement



[[Method('Google Play Games', 'IncrementAchievement', false, 'achievementId by')]]

**Parameters**

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

**Parameters**

| Name | Type |
|------|------|
|leaderboard Id|`text`|


Shows Leaderboard.

### SignIn



[[Method('Google Play Games', 'SignIn', false, 'useLastAccount')]]

**Parameters**

| Name | Type |
|------|------|
|use Last Account|`boolean`|


Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

### SignOut



[[Method('Google Play Games', 'SignOut', false)]]

Sign out the user.

### SubmitScore



[[Method('Google Play Games', 'SubmitScore', false, 'leaderboardId score')]]

**Parameters**

| Name | Type |
|------|------|
|leaderboard Id|`text`|
|score|`number`|


Submits user score to leaderboard.

### UnlockAchievement



[[Method('Google Play Games', 'UnlockAchievement', false, 'achievementId')]]

**Parameters**

| Name | Type |
|------|------|
|achievement Id|`text`|


Unlock an achievement.