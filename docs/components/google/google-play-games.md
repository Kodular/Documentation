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

| Params | []() |
|--------|------|
|name|Text|
|id|Text|
|level|Number|
|xp|Number|


Got player info

### Signed In

[[Event('Google Play Games', 'Signed In', 'success')]]

| Params | []() |
|--------|------|
|success|Boolean|


User signed in.

### Signed Out

[[Event('Google Play Games', 'Signed Out')]]

User signed out.

## Methods

### Get Player

[[Method('Google Play Games', 'Get Player', False)]]

Get the current player

### Increment Achievement

[[Method('Google Play Games', 'Increment Achievement', False, 'achievementId', 'by')]]

| Params | []() |
|--------|------|
|achievement Id|Text|
|by|Number|


Increment an achievement.

### Is Signed In

[[Method('Google Play Games', 'Is Signed In', True)]]

{>>Returns `boolean`<<}

Is user signed in?

### Show Achievements

[[Method('Google Play Games', 'Show Achievements', False)]]

Shows Achievement.

### Show Leaderboard

[[Method('Google Play Games', 'Show Leaderboard', False, 'leaderboardId')]]

| Params | []() |
|--------|------|
|leaderboard Id|Text|


Shows Leaderboard.

### Sign In

[[Method('Google Play Games', 'Sign In', False, 'useLastAccount')]]

| Params | []() |
|--------|------|
|use Last Account|Boolean|


Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

### Sign Out

[[Method('Google Play Games', 'Sign Out', False)]]

Sign out the user.

### Submit Score

[[Method('Google Play Games', 'Submit Score', False, 'leaderboardId', 'score')]]

| Params | []() |
|--------|------|
|leaderboard Id|Text|
|score|Number|


Submits user score to leaderboard.

### Unlock Achievements

[[Method('Google Play Games', 'Unlock Achievements', False, 'achievementId')]]

| Params | []() |
|--------|------|
|achievement Id|Text|


Unlock an achievement.

## Properties

### Google Play Games App ID

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

[[PropertyBlockGetterAndSetter('Google Play Games', 'Google Play Games App ID')]]