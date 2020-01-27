# Google Play Games

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that enables game user authentication, leaderboards, and more.  
Powered by the Google Play Games service.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Got Player

Got player info

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Got%20Player%22,%20%22param%22:%20%5B%22name%22,%20%22id%22,%20%22level%22,%20%22xp%22%5D%7D"></div>

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|id|<span class="chip chip-text">Text</span>|
|level|<span class="chip chip-number">Number</span>|
|xp|<span class="chip chip-number">Number</span>|

### Signed In

User signed in.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Signed%20In%22,%20%22param%22:%20%5B%22success%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|

### Signed Out

User signed out.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Signed%20Out%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Get Player

Get the current player

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Get%20Player%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Increment Achievement

Increment an achievement.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Increment%20Achievement%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22achievement%20Id%22,%20%22by%22%5D%7D"></div>

| Params | []() |
|--------|------|
|achievement Id|<span class="chip chip-text">Text</span>|
|by|<span class="chip chip-number">Number</span>|

### Is Signed In

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Is user signed in?

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Is%20Signed%20In%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Show Achievements

Shows Achievement.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Show%20Achievements%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Show Leaderboard

Shows Leaderboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Show%20Leaderboard%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22leaderboard%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|leaderboard Id|<span class="chip chip-text">Text</span>|

### Sign In

Sign in the user. useLastAccount, true: use the last signed in account if possible, false: open a screen to choose for an account

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Sign%20In%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22use%20Last%20Account%22%5D%7D"></div>

| Params | []() |
|--------|------|
|use Last Account|<span class="chip chip-boolean">Boolean</span>|

### Sign Out

Sign out the user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Sign%20Out%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Submit Score

Submits user score to leaderboard.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Submit%20Score%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22leaderboard%20Id%22,%20%22score%22%5D%7D"></div>

| Params | []() |
|--------|------|
|leaderboard Id|<span class="chip chip-text">Text</span>|
|score|<span class="chip chip-number">Number</span>|

### Unlock Achievements

Unlock an achievement.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20Play%20Games%22,%20%22name%22:%20%22Unlock%20Achievements%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22achievement%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|achievement Id|<span class="chip chip-text">Text</span>|

## Properties

### Google Play Games App ID

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>
