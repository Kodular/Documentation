# Google reCaptcha

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Google**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible that prompts users to complete a ReCaptcha challenge. Use this component to protect apps from spam and abuse, and to verify that your users are humans.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Prompt Errored

Event will be invoked when Google reCaptcha prompt returns an error status code.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Prompt%20Errored%22,%20%22param%22:%20%5B%22error%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|error Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

### Prompt Succeeded

Event will be invoked Google reCaptcha returns a success status code, returning the user response token which should be verified later.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Prompt%20Succeeded%22,%20%22param%22:%20%5B%22user%20Response%20Token%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user Response Token|<span class="chip chip-text">Text</span>|

### Validate Response

Event will be triggered after the Validate method gets a response. 'success' will return true when the prompt was completed successfully, 'challenge Timestamp' is the date the challenge was completed in ISO format, 'app Package Name' will return the package name of the app where the challenge was completed, and 'error Messages' is a list of all errors that occurred during the validation.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Validate%20Response%22,%20%22param%22:%20%5B%22success%22,%20%22challenge%20Timestamp%22,%20%22app%20Package%20Name%22,%20%22error%20Messages%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|
|challenge Timestamp|<span class="chip chip-text">Text</span>|
|app Package Name|<span class="chip chip-text">Text</span>|
|error Messages|<span class="chip chip-list">List</span>|

## Methods

### Prompt reCaptcha

Prompt the user with a Google reCaptcha challenge. Needs a reCaptcha API Site Key to work.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Prompt%20reCaptcha%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Validate

Validate the received userResponseToken with your API Secret Key, for increased security. It is recommended to use the 'Obfuscated Text' block with the API Secret Key.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Validate%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%20Response%20Token%22,%20%22secret%20Key%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user Response Token|<span class="chip chip-text">Text</span>|
|secret Key|<span class="chip chip-text">Text</span>|

## Properties

### Site Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the Google reCaptcha API Site Key. It is mandatory to use reCaptcha, as it will identify user's request with the challenge prompt.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Site%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Google%20reCaptcha%22,%20%22name%22:%20%22Site%20Key%22,%20%22getter%22:%20false%7D"></div>
