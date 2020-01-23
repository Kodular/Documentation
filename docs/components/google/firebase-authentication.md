# Firebase Authentication

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Google|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets users sign in using authentication services provided by Firebase.

## Events

### Current User Failed

Triggers when the current Firebase User failed to load

[[Event('Firebase Authentication', 'Current User Failed')]]

### Current User Success

Triggers when the current Firebase User was successful loaded

[[Event('Firebase Authentication', 'Current User Success', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Got Id Token

Triggers when the 'Get Id Token' got a result. If there was a error it returns a empty text.

[[Event('Firebase Authentication', 'Got Id Token', 'idToken')]]

| Params | []() |
|--------|------|
|id Token|<span class="chip chip-text">Text</span>|


### Login Failed

Triggers when the Firebase Login failed

[[Event('Firebase Authentication', 'Login Failed', 'provider')]]

| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|


### Login Success

Triggers when the Firebase Login was successful

[[Event('Firebase Authentication', 'Login Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Reset Password Email Done

Triggers when the 'Send Reset Password Email' got a result. Returns true if the reset email was send.

[[Event('Firebase Authentication', 'Reset Password Email Done', 'success')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


### Sign Up Failed

Triggers when the Firebase Sign Up failed

[[Event('Firebase Authentication', 'Sign Up Failed', 'provider', 'message')]]

| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Sign Up Success

Triggers when the Firebase Sign Up failed

[[Event('Firebase Authentication', 'Sign Up Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|provider|<span class="chip chip-text">Text</span>|
|user ID|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|email|<span class="chip chip-text">Text</span>|
|phone Number|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### User Update Failed

Triggers when updating of the user failed

[[Event('Firebase Authentication', 'User Update Failed', 'type')]]

| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|


### User Update Success

Triggers when updating of the user was successful

[[Event('Firebase Authentication', 'User Update Success', 'type')]]

| Params | []() |
|--------|------|
|type|<span class="chip chip-text">Text</span>|


## Methods

### Email Password Login

Try to let the user sign in with Email and Password

[[Method('Firebase Authentication', 'Email Password Login', False, 'email', 'password')]]

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|


### Email Password Sign Up

Create a new user by Email and Password

[[Method('Firebase Authentication', 'Email Password Sign Up', False, 'email', 'password')]]

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|


### Get Current User

Try to get the user that is signed in

[[Method('Firebase Authentication', 'Get Current User', False)]]

### Get Id Token

Get the id token from the current user.

[[Method('Firebase Authentication', 'Get Id Token', False)]]

### Google Sign In

Try to let the user sign in with Google

[[Method('Firebase Authentication', 'Google Sign In', False)]]

### Is Signed In

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Check if the user is signed in

[[Method('Firebase Authentication', 'Is Signed In', True)]]

### Logout

Log the current user out

[[Method('Firebase Authentication', 'Logout', False)]]

### Phone Number Sign In

Try to let the user sign in with a Phone Number

[[Method('Firebase Authentication', 'Phone Number Sign In', False, 'phoneNumber')]]

| Params | []() |
|--------|------|
|phone Number|<span class="chip chip-text">Text</span>|


### Send Reset Password Email

Get the id token from the current user.

[[Method('Firebase Authentication', 'Send Reset Password Email', False, 'email')]]

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|


### Update Email

Try to update the email of the current user (The user must have been recently signed in)

[[Method('Firebase Authentication', 'Update Email', False, 'email')]]

| Params | []() |
|--------|------|
|email|<span class="chip chip-text">Text</span>|


### Update Phone Number

Try to update the phone number of the current user (The user must have been recently signed in)

[[Method('Firebase Authentication', 'Update Phone Number', False, 'phoneNumber')]]

| Params | []() |
|--------|------|
|phone Number|<span class="chip chip-text">Text</span>|


### Update Profile

Try to update the profile of the current user (The user must have been recently signed in)

[[Method('Firebase Authentication', 'Update Profile', False, 'name', 'profilePicture')]]

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|
|profile Picture|<span class="chip chip-text">Text</span>|


### Verify Email

Verify the Email

[[Method('Firebase Authentication', 'Verify Email', False)]]

### Verify Phone Code

Verify the SMS code

[[Method('Firebase Authentication', 'Verify Phone Code', False, 'code')]]

| Params | []() |
|--------|------|
|code|<span class="chip chip-text">Text</span>|
