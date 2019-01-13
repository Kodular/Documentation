# Firebase Authentication

## Setup

### Sign-in Methods

#### Email/Password

To enable Firebase Auth Email and Password login in your app you need to enable this feature in the [Firebase Console](https://console.firebase.google.com/)

![Firebase Auth Email Password](/images/components/google/firebase-authentication/screenshots/email-password-enable.png)


#### Google Login

To enable Google Login for Firebase Authentication you need to do a few more steps.

1. Go to the Authenticaiton Section in the [Firebase Console](https://console.firebase.google.com/) and click on the Google Login
![Firebase Auth Google](/images/components/google/firebase-authentication/screenshots/google-enable.png)
2. Set the "Enable" switch to enabled
3. Click on the "Whitelist client IDs from external pojects" tab.
4. Find your [Client ID](#client-id) and add it there. Press the "Add" button and then hit the "Save" button

### Client ID

Your client ID is in the `google-services.json` file you download this file from the [Firebase Console](https://console.firebase.google.com/). At kodular we have the simple [Google Services Tool](https://tools.kodular.io/google-services) to get the Client ID you need.

[tools.kodular.io/google-services](https://tools.kodular.io/google-services)

## Methods

### Email Password Login

![](/images/components/google/firebase-authentication/email-password-login.png)

_**\(** Text `email`, Text `password` **\)**_ 

Try to let an user login with Email and Password.

Params       |  []()       
------------ | ------- 
`email`      | **Text:**  The email of the user.
`password`   | **Text:**  The password of the user.

### Email Password Sign Up

![](/images/components/google/firebase-authentication/email-password-sign-up.png)

_**\(** Text `email`, Text `password` **\)**_ 

Try to let an user sign up with Email and Password.

Params       |  []()       
------------ | ------- 
`email`      | **Text:**  The email of the user.
`password`   | **Text:**  The password of the user.

### Get Current User

![](/images/components/google/firebase-authentication/get-current-user.png)

_**\(** None **\)**_ 

Try to get the current user if signed in.

### Google Sign In

![](/images/components/google/firebase-authentication/google-sign-in.png)

_**\(** None **\)**_ 

Try to login or sign up the user with Google Login.

### Is Signed In

![](/images/components/google/firebase-authentication/is-signed-in.png)

Returns true if the user is signed in and false when the user is not signed in

### Logout

![](/images/components/google/firebase-authentication/logout.png)

_**\(** None **\)**_ 

If the user is signed in, then log the user out.

### Update Email

![](/images/components/google/firebase-authentication/update-email.png)

_**\(** Text `email` **\)**_ 

Try to update the email of the current user.

Params           |  []()       
---------------- | ------- 
`email`          | **Text:**  The new email of the user.

### Update Profile

![](/images/components/google/firebase-authentication/update-email.png)

_**\(** Text `email`, Url `profile Picture` **\)**_ 

Try to update the profile of the current user.

Params             |  []()       
------------------ | ------- 
`name`             | **Text:**  The new name of the user.
`profile Picture`  | **Url:**  The new profile picture of the user.

## Events

### Current User Failed

![](/images/components/google/firebase-authentication/current-user-failed.png)

_**\(** None **\)**_ 

Triggers when the Method `Get Current User` failed to load the current user. This can happen due an error or when there is not user signed in.

### Current User Success

![](/images/components/google/firebase-authentication/current-user-failed.png)

_**\(** Text `user ID`, Text `name`, Text `email`, Text `phone Number`, Url `profile Picture` **\)**_ 

Triggers when the `Method Get Current User` had success. It send information about the user in the event which you can use.

Params             |  []()       
------------------ | ------- 
`user ID`          | **Text:**  The unique ID of the user
`name`             | **Text:**  The full name of the user
`email`            | **Text:**  The email of the user
`phone Number`     | **Text:**  The phone number of the user
`profile Picture`  | **Url:**  The url of the profile Picture of the user

### Login Failed

![](/images/components/google/firebase-authentication/login-failed.png)

_**\(** Text `provider` **\)**_ 

Triggers when the login of an user failed. This can happen due an invalid email or password. Or and invalid Google Account

Params       |  []()       
------------ | ------- 
`provider`   | **Text:**  The type of login `provider` used. (`EmailPassword`, `Google`)

### Login Success

![](/images/components/google/firebase-authentication/login-success.png)

_**\(** Text `provider`, Text `user ID`, Text `name`, Text `email`, Text `phone Number`, Url `profile Picture` **\)**_ 

Triggers when the login or sign up of the user was successfull. It send information about the user in the event which you can use.

Params             |  []()       
------------------ | ------- 
`provider`         | **Text:**  The type of login `provider` used. (`EmailPassword`, `Google`)
`user ID`          | **Text:**  The unique ID of the user
`name`             | **Text:**  The full name of the user
`email`            | **Text:**  The email of the user
`phone Number`     | **Text:**  The phone number of the user
`profile Picture`  | **Url:**  The url of the profile Picture of the user

### Sign Up Failed

![](/images/components/google/firebase-authentication/sign-up-failed.png)

_**\(** Text `provider`, Text `message` **\)**_ 

Triggers when the sign up of an user failed

Params       |  []()       
------------ | ------- 
`provider`   | **Text:**  The type of login `provider` used. (`EmailPassword`)
`message`    | **Text:**  A message of what is wrong with the Sign Up

### User Update Failed

![](/images/components/google/firebase-authentication/user-update-failed.png)

_**\(** Text `type` **\)**_ 

Triggers when the information of the user could not be updated. This can happen because the user wasn't signed in recently or not signed in at all.

Params     |  []()       
---------- | ------- 
`type`     | **Text:**  The type of update `type` used. (`Profile`, `Email`)

### User Update Success

![](/images/components/google/firebase-authentication/user-update-failed.png)

_**\(** Text `type` **\)**_ 

Triggers when the information of the user was successfully updated.

Params     |  []()       
---------- | ------- 
`type`     | **Text:**  The type of update `type` used. (`Profile`, `Email`)