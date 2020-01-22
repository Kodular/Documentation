# Firebase Authentication

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that lets users sign in using authentication services provided by Firebase._

## Events

### Current User Failed

[[Event('Firebase Authentication', 'Current User Failed')]]

_Triggers when the current Firebase User failed to load_

### Current User Success

[[Event('Firebase Authentication', 'Current User Success', 'userID name email phoneNumber profilePicture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


_Triggers when the current Firebase User was successful loaded_

### Got Id Token

[[Event('Firebase Authentication', 'Got Id Token', 'idToken')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |id Token|`text`|


_Triggers when the 'Get Id Token' got a result. If there was a error it returns a empty text._

### Login Failed

[[Event('Firebase Authentication', 'Login Failed', 'provider')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |provider|`text`|


_Triggers when the Firebase Login failed_

### Login Success

[[Event('Firebase Authentication', 'Login Success', 'provider userID name email phoneNumber profilePicture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |provider|`text`|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


_Triggers when the Firebase Login was successful_

### Reset Password Email Done

[[Event('Firebase Authentication', 'Reset Password Email Done', 'success')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|


_Triggers when the 'Send Reset Password Email' got a result. Returns true if the reset email was send._

### Sign Up Failed

[[Event('Firebase Authentication', 'Sign Up Failed', 'provider message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |provider|`text`|
    |message|`text`|


_Triggers when the Firebase Sign Up failed_

### Sign Up Success

[[Event('Firebase Authentication', 'Sign Up Success', 'provider userID name email phoneNumber profilePicture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |provider|`text`|
    |user ID|`text`|
    |name|`text`|
    |email|`text`|
    |phone Number|`text`|
    |profile Picture|`text`|


_Triggers when the Firebase Sign Up failed_

### User Update Failed

[[Event('Firebase Authentication', 'User Update Failed', 'type')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |type|`text`|


_Triggers when updating of the user failed_

### User Update Success

[[Event('Firebase Authentication', 'User Update Success', 'type')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |type|`text`|


_Triggers when updating of the user was successful_

## Methods

### EmailPasswordLogin

[[Method('Firebase Authentication', 'EmailPasswordLogin', false, 'email password')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |email|`text`|
    |password|`text`|


_Try to let the user sign in with Email and Password_

### EmailPasswordSignUp

[[Method('Firebase Authentication', 'EmailPasswordSignUp', false, 'email password')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |email|`text`|
    |password|`text`|


_Create a new user by Email and Password_

### GetCurrentUser

[[Method('Firebase Authentication', 'GetCurrentUser', false)]]

_Try to get the user that is signed in_

### GetIdToken

[[Method('Firebase Authentication', 'GetIdToken', false)]]

_Get the id token from the current user._

### GoogleSignIn

[[Method('Firebase Authentication', 'GoogleSignIn', false)]]

_Try to let the user sign in with Google_

### IsSignedIn

[[Method('Firebase Authentication', 'IsSignedIn', true)]]

{>>Returns `boolean`<<}

_Check if the user is signed in_

### Logout

[[Method('Firebase Authentication', 'Logout', false)]]

_Log the current user out_

### PhoneNumberSignIn

[[Method('Firebase Authentication', 'PhoneNumberSignIn', false, 'phoneNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |phone Number|`text`|


_Try to let the user sign in with a Phone Number_

### SendResetPasswordEmail

[[Method('Firebase Authentication', 'SendResetPasswordEmail', false, 'email')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |email|`text`|


_Get the id token from the current user._

### UpdateEmail

[[Method('Firebase Authentication', 'UpdateEmail', false, 'email')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |email|`text`|


_Try to update the email of the current user (The user must have been recently signed in)_

### UpdatePhoneNumber

[[Method('Firebase Authentication', 'UpdatePhoneNumber', false, 'phoneNumber')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |phone Number|`text`|


_Try to update the phone number of the current user (The user must have been recently signed in)_

### UpdateProfile

[[Method('Firebase Authentication', 'UpdateProfile', false, 'name profilePicture')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |name|`text`|
    |profile Picture|`text`|


_Try to update the profile of the current user (The user must have been recently signed in)_

### VerifyEmail

[[Method('Firebase Authentication', 'VerifyEmail', false)]]

_Verify the Email_

### VerifyPhoneCode

[[Method('Firebase Authentication', 'VerifyPhoneCode', false, 'code')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |code|`text`|


_Verify the SMS code_