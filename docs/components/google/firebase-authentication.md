# Firebase Authentication

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|3|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that lets users sign in using authentication services provided by Firebase.

## Events

### Current User Failed

[[Event('Firebase Authentication', 'Current User Failed')]]

Triggers when the current Firebase User failed to load

### Current User Success

[[Event('Firebase Authentication', 'Current User Success', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


Triggers when the current Firebase User was successful loaded

### Got Id Token

[[Event('Firebase Authentication', 'Got Id Token', 'idToken')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |id Token|`text`|


Triggers when the 'Get Id Token' got a result. If there was a error it returns a empty text.

### Login Failed

[[Event('Firebase Authentication', 'Login Failed', 'provider')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |provider|`text`|


Triggers when the Firebase Login failed

### Login Success

[[Event('Firebase Authentication', 'Login Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |provider|`text`|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


Triggers when the Firebase Login was successful

### Reset Password Email Done

[[Event('Firebase Authentication', 'Reset Password Email Done', 'success')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|


Triggers when the 'Send Reset Password Email' got a result. Returns true if the reset email was send.

### Sign Up Failed

[[Event('Firebase Authentication', 'Sign Up Failed', 'provider', 'message')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |provider|`text`|
    |message|`text`|


Triggers when the Firebase Sign Up failed

### Sign Up Success

[[Event('Firebase Authentication', 'Sign Up Success', 'provider', 'userID', 'name', 'email', 'phoneNumber', 'profilePicture')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |provider|`text`|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


Triggers when the Firebase Sign Up failed

### User Update Failed

[[Event('Firebase Authentication', 'User Update Failed', 'type')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |type|`text`|


Triggers when updating of the user failed

### User Update Success

[[Event('Firebase Authentication', 'User Update Success', 'type')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |type|`text`|


Triggers when updating of the user was successful

## Methods

### EmailPasswordLogin

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |email|`text`|
    |password|`text`|


Try to let the user sign in with Email and Password

### EmailPasswordSignUp

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |email|`text`|
    |password|`text`|


Create a new user by Email and Password

### GetCurrentUser

_Block preview not available_

Try to get the user that is signed in

### GetIdToken

_Block preview not available_

Get the id token from the current user.

### GoogleSignIn

_Block preview not available_

Try to let the user sign in with Google

### IsSignedIn

_Block preview not available_

{>>Returns `boolean`<<}

Check if the user is signed in

### Logout

_Block preview not available_

Log the current user out

### PhoneNumberSignIn

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |phone Number|`text`|


Try to let the user sign in with a Phone Number

### SendResetPasswordEmail

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |email|`text`|


Get the id token from the current user.

### UpdateEmail

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |email|`text`|


Try to update the email of the current user (The user must have been recently signed in)

### UpdatePhoneNumber

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |phone Number|`text`|


Try to update the phone number of the current user (The user must have been recently signed in)

### UpdateProfile

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |name|`text`|
    |profile Picture|`text`|


Try to update the profile of the current user (The user must have been recently signed in)

### VerifyEmail

_Block preview not available_

Verify the Email

### VerifyPhoneCode

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |code|`text`|


Verify the SMS code