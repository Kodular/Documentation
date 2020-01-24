# Sharing

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

Sharing is a non-visible component that enables sharing files and/or messages between your app and other apps installed on a device. The component will display a list of the installed apps that can handle the information provided, and will allow the user to choose one to share the content with, for instance a mail app, a social network app, a texting app, and so on.  
The file path can be taken directly from other components such as the Camera or the ImagePicker, but can also be specified directly to read from storage. Be aware that different devices treat storage differently, so a few things to try if, for instance, you have a file called arrow.gif in the folder `` Appinventor/assets ``, would be: 

*   `` "file:///sdcard/Appinventor/assets/arrow.gif" ``
 or *   `` "/storage/Appinventor/assets/arrow.gif" ``

??? example "Permissions"
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### App Not Found

This event returns the social media name if an app is not installed. Possible names are 'Facebook Messenger', 'Facebook', 'Twitter', 'Telegram', 'Twitter', 'Snapchat', 'Google Plus' or the given custom package name.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22App%20Not%20Found%22,%20%22params%22:%20%5B%22name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|name|<span class="chip chip-text">Text</span>|


## Methods

### Share File

Shares a file through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the file inserted on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20File%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22file%22%5D%7D"></div>


| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|


### Share File With Message

Shares both a file and a message through any capable application installed on the phone by displaying a list of available apps and allowing the user to choose one from the list. The selected app will open with the file and message inserted on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20File%20With%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22file%22,%20%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|file|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|


### Share Message

Shares a message through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the message inserted on it.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To

Shares a message through the given app. If the given app is not installed, then the 'AppNotFound' event will be invoked and return the given name.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22,%20%22name%22,%20%22package%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|name|<span class="chip chip-text">Text</span>|
|package Name|<span class="chip chip-text">Text</span>|


### Share Message To Facebook

Shares a message through Facebook. If Facebook is not installed, then the 'AppNotFound' event will be invoked and return the name 'Facebook'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Facebook%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To Facebook Messenger

Shares a message through Facebook Messenger. If Messenger is not installed, then the 'AppNotFound' event will be invoked and return the name 'Facebook Messenger'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Facebook%20Messenger%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To Google+

Shares a message through Google Plus. If Google+ is not installed, then the 'AppNotFound' event will be invoked and return the name 'Google Plus'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Google+%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To Snapchat

Shares a message through Snapchat. If Snapchat is not installed, then the 'AppNotFound' event will be invoked and return the name 'Snapchat'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Snapchat%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To Telegram

Shares a message through Telegram. If Telegram is not installed, then the 'AppNotFound' event will be invoked and return the name 'Telegram'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Telegram%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To Twitter

Shares a message through Twitter. If Twitter is not installed, then the 'AppNotFound' event will be invoked and return the name 'Twitter'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20Twitter%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


### Share Message To WhatsApp

Shares a message through WhatsApp. If WhatsApp is not installed, then the 'AppNotFound' event will be invoked and return the name 'WhatsApp'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Message%20To%20WhatsApp%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22message%22%5D%7D"></div>


| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|


## Properties

### Share Dialog Message

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>Send using...</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the text for the sharing dialog. The default text is 'Send using...'.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Sharing%22,%20%22name%22:%20%22Share%20Dialog%20Message%22,%20%22getter%22:%20false%7D"></div>
