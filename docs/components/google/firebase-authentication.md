# Firebase Authentication

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|3|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets users sign in using authentication services provided by Firebase.

## Events

### Current User Failed

[[Event('Firebase Authentication', 'Current User Failed')]]

Triggers when the current Firebase User failed to load

### Current User Success

[[Event('Firebase Authentication', 'Current User Success', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|user ID|Text|
|name|Text|
|email|Text|
|phone Number|Text|
|profile Picture|Text|


Triggers when the current Firebase User was successful loaded

### Got Id Token

[[Event('Firebase Authentication', 'Got Id Token', 'idToken')]]

| Params | []() |
|--------|------|
|id Token|Text|


Triggers when the 'Get Id Token' got a result. If there was a error it returns a empty text.

### Login Failed

[[Event('Firebase Authentication', 'Login Failed', 'provider')]]

| Params | []() |
|--------|------|
|provider|Text|


Triggers when the Firebase Login failed

### Login Success

[[Event('Firebase Authentication', 'Login Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|provider|Text|
|user ID|Text|
|name|Text|
|email|Text|
|phone Number|Text|
|profile Picture|Text|


Triggers when the Firebase Login was successful

### Reset Password Email Done

[[Event('Firebase Authentication', 'Reset Password Email Done', 'success')]]

| Params | []() |
|--------|------|
|success|Boolean|


Triggers when the 'Send Reset Password Email' got a result. Returns true if the reset email was send.

### Sign Up Failed

[[Event('Firebase Authentication', 'Sign Up Failed', 'provider', 'message')]]

| Params | []() |
|--------|------|
|provider|Text|
|message|Text|


Triggers when the Firebase Sign Up failed

### Sign Up Success

[[Event('Firebase Authentication', 'Sign Up Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

| Params | []() |
|--------|------|
|provider|Text|
|user ID|Text|
|name|Text|
|email|Text|
|phone Number|Text|
|profile Picture|Text|


Triggers when the Firebase Sign Up failed

### User Update Failed

[[Event('Firebase Authentication', 'User Update Failed', 'type')]]

| Params | []() |
|--------|------|
|type|Text|


Triggers when updating of the user failed

### User Update Success

[[Event('Firebase Authentication', 'User Update Success', 'type')]]

| Params | []() |
|--------|------|
|type|Text|


Triggers when updating of the user was successful

## Methods

### Email Password Login

[[Method('Firebase Authentication', 'Email Password Login', False, 'email', 'password')]]

| Params | []() |
|--------|------|
|email|Text|
|password|Text|


Try to let the user sign in with Email and Password

### Email Password Sign Up

[[Method('Firebase Authentication', 'Email Password Sign Up', False, 'email', 'password')]]

| Params | []() |
|--------|------|
|email|Text|
|password|Text|


Create a new user by Email and Password

### Get Current User

[[Method('Firebase Authentication', 'Get Current User', False)]]

Try to get the user that is signed in

### Get Id Token

[[Method('Firebase Authentication', 'Get Id Token', False)]]

Get the id token from the current user.

### Google Sign In

[[Method('Firebase Authentication', 'Google Sign In', False)]]

Try to let the user sign in with Google

### Is Signed In

[[Method('Firebase Authentication', 'Is Signed In', True)]]

{>>Returns `boolean`<<}

Check if the user is signed in

### Logout

[[Method('Firebase Authentication', 'Logout', False)]]

Log the current user out

### Phone Number Sign In

[[Method('Firebase Authentication', 'Phone Number Sign In', False, 'phoneNumber')]]

| Params | []() |
|--------|------|
|phone Number|Text|


Try to let the user sign in with a Phone Number

### Send Reset Password Email

[[Method('Firebase Authentication', 'Send Reset Password Email', False, 'email')]]

| Params | []() |
|--------|------|
|email|Text|


Get the id token from the current user.

### Update Email

[[Method('Firebase Authentication', 'Update Email', False, 'email')]]

| Params | []() |
|--------|------|
|email|Text|


Try to update the email of the current user (The user must have been recently signed in)

### Update Phone Number

[[Method('Firebase Authentication', 'Update Phone Number', False, 'phoneNumber')]]

| Params | []() |
|--------|------|
|phone Number|Text|


Try to update the phone number of the current user (The user must have been recently signed in)

### Update Profile

[[Method('Firebase Authentication', 'Update Profile', False, 'name', 'profilePicture')]]

| Params | []() |
|--------|------|
|name|Text|
|profile Picture|Text|


Try to update the profile of the current user (The user must have been recently signed in)

### Verify Email

[[Method('Firebase Authentication', 'Verify Email', False)]]

Verify the Email

### Verify Phone Code

[[Method('Firebase Authentication', 'Verify Phone Code', False, 'code')]]

| Params | []() |
|--------|------|
|code|Text|


Verify the SMS code