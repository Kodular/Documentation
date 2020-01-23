# Google Play Games

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that enables game user authentication, leaderboards, and more.  
Powered by the Google Play Games service.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#android.permission.INTERNET)


## Events

### Got Player

Got player info

[[Event('Google Play Games', 'Got Player', 'name', 'id', 'level', 'xp')]]

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-text">Text</span>|
|level|<span class="chip chip-number">Number</span>|
|xp|<span class="chip chip-number">Number</span>|


### Signed In

User signed in.

[[Event('Google Play Games', 'Signed In', 'success')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


### Signed Out

User signed out.

[[Event('Google Play Games', 'Signed Out')]]

## Methods

### Get Player

Get the current player

[[Method('Google Play Games', 'Get Player', False)]]

### Increment Achievement

Increment an achievement.

[[Method('Google Play Games', 'Increment Achievement', False, 'achievementId', 'by')]]

| Params | []() |
|--------|------|
|achievement Id|<span class="chip chip-text">Text</span>|
|by|<span class="chip chip-number">Number</span>|


### Is Signed In

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Is user signed in?

[[Method('Google Play Games', 'Is Signed In', True)]]

### Show Achievements

Shows Achievement.

[[Method('Google Play Games', 'Show Achievements', False)]]

### Show Leaderboard

Shows Leaderboard.

[[Method('Google Play Games', 'Show Leaderboard', False, 'leaderboardId')]]

| Params | []() |
|--------|------|
|leaderboard Id|<span class="chip chip-text">Text</span>|


### Sign In

Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

[[Method('Google Play Games', 'Sign In', False, 'useLastAccount')]]

| Params | []() |
|--------|------|
|use Last Account|<span class="chip chip-boolean">Boolean</span>|


### Sign Out

Sign out the user.

[[Method('Google Play Games', 'Sign Out', False)]]

### Submit Score

Submits user score to leaderboard.

[[Method('Google Play Games', 'Submit Score', False, 'leaderboardId', 'score')]]

| Params | []() |
|--------|------|
|leaderboard Id|<span class="chip chip-text">Text</span>|
|score|<span class="chip chip-number">Number</span>|


### Unlock Achievements

Unlock an achievement.

[[Method('Google Play Games', 'Unlock Achievements', False, 'achievementId')]]

| Params | []() |
|--------|------|
|achievement Id|<span class="chip chip-text">Text</span>|


## Properties

### Google Play Games App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 