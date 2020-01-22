# Firebase Authentication

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|3|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that lets users sign in using authentication services provided by Firebase._

## Methods

### EmailPasswordLogin



[[Method('Firebase Authentication', 'EmailPasswordLogin', false, 'email password')]]

**Parameters**

| Name | Type |
|------|------|
|email|`text`|
|password|`text`|


Try to let the user sign in with Email and Password

### EmailPasswordSignUp



[[Method('Firebase Authentication', 'EmailPasswordSignUp', false, 'email password')]]

**Parameters**

| Name | Type |
|------|------|
|email|`text`|
|password|`text`|


Create a new user by Email and Password

### GetCurrentUser



[[Method('Firebase Authentication', 'GetCurrentUser', false)]]

Try to get the user that is signed in

### GetIdToken



[[Method('Firebase Authentication', 'GetIdToken', false)]]

Get the id token from the current user.

### GoogleSignIn



[[Method('Firebase Authentication', 'GoogleSignIn', false)]]

Try to let the user sign in with Google

### IsSignedIn



[[Method('Firebase Authentication', 'IsSignedIn', true)]]

{>>Returns `boolean`<<}


Check if the user is signed in

### Logout



[[Method('Firebase Authentication', 'Logout', false)]]

Log the current user out

### PhoneNumberSignIn



[[Method('Firebase Authentication', 'PhoneNumberSignIn', false, 'phoneNumber')]]

**Parameters**

| Name | Type |
|------|------|
|phone Number|`text`|


Try to let the user sign in with a Phone Number

### SendResetPasswordEmail



[[Method('Firebase Authentication', 'SendResetPasswordEmail', false, 'email')]]

**Parameters**

| Name | Type |
|------|------|
|email|`text`|


Get the id token from the current user.

### UpdateEmail



[[Method('Firebase Authentication', 'UpdateEmail', false, 'email')]]

**Parameters**

| Name | Type |
|------|------|
|email|`text`|


Try to update the email of the current user (The user must have been recently signed in)

### UpdatePhoneNumber



[[Method('Firebase Authentication', 'UpdatePhoneNumber', false, 'phoneNumber')]]

**Parameters**

| Name | Type |
|------|------|
|phone Number|`text`|


Try to update the phone number of the current user (The user must have been recently signed in)

### UpdateProfile



[[Method('Firebase Authentication', 'UpdateProfile', false, 'name profilePicture')]]

**Parameters**

| Name | Type |
|------|------|
|name|`text`|
|profile Picture|`text`|


Try to update the profile of the current user (The user must have been recently signed in)

### VerifyEmail



[[Method('Firebase Authentication', 'VerifyEmail', false)]]

Verify the Email

### VerifyPhoneCode



[[Method('Firebase Authentication', 'VerifyPhoneCode', false, 'code')]]

**Parameters**

| Name | Type |
|------|------|
|code|`text`|


Verify the SMS code