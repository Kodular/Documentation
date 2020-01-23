# Sharing

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Social|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

Sharing is a non-visible component that enables sharing files and/or messages between your app and other apps installed on a device. The component will display a list of the installed apps that can handle the information provided, and will allow the user to choose one to share the content with, for instance a mail app, a social network app, a texting app, and so on.  
The file path can be taken directly from other components such as the Camera or the ImagePicker, but can also be specified directly to read from storage. Be aware that different devices treat storage differently, so a few things to try if, for instance, you have a file called arrow.gif in the folder `` Appinventor/assets ``, would be: 

*   `` "file:///sdcard/Appinventor/assets/arrow.gif" ``
 or *   `` "/storage/Appinventor/assets/arrow.gif" ``

## Events

### App Not Found

[[Event('Sharing', 'App Not Found', 'name')]]

| Params | []() |
|--------|------|
|name|Text|


This event returns the social media name if an app is not installed. Possible names are 'Facebook Messenger', 'Facebook', 'Twitter', 'Telegram', 'Twitter', 'Snapchat', 'Google Plus' or the given custom package name.

## Methods

### Share File

[[Method('Sharing', 'Share File', False, 'file')]]

| Params | []() |
|--------|------|
|file|Text|


Shares a file through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the file inserted on it.

### Share File With Message

[[Method('Sharing', 'Share File With Message', False, 'file', 'message')]]

| Params | []() |
|--------|------|
|file|Text|
|message|Text|


Shares both a file and a message through any capable application installed on the phone by displaying a list of available apps and allowing the user to choose one from the list. The selected app will open with the file and message inserted on it.

### Share Message

[[Method('Sharing', 'Share Message', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the message inserted on it.

### Share Message To

[[Method('Sharing', 'Share Message To', False, 'message', 'name', 'packageName')]]

| Params | []() |
|--------|------|
|message|Text|
|name|Text|
|package Name|Text|


Shares a message through the given app. If the given app is not installed, then the 'AppNotFound' event will be invoked and return the given name.

### Share Message To Facebook

[[Method('Sharing', 'Share Message To Facebook', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Facebook. If Facebook is not installed, then the 'AppNotFound' event will be invoked and return the name 'Facebook'.

### Share Message To Facebook Messenger

[[Method('Sharing', 'Share Message To Facebook Messenger', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Facebook Messenger. If Messenger is not installed, then the 'AppNotFound' event will be invoked and return the name 'Facebook Messenger'.

### Share Message To Google+

[[Method('Sharing', 'Share Message To Google+', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Google Plus. If Google+ is not installed, then the 'AppNotFound' event will be invoked and return the name 'Google Plus'.

### Share Message To Snapchat

[[Method('Sharing', 'Share Message To Snapchat', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Snapchat. If Snapchat is not installed, then the 'AppNotFound' event will be invoked and return the name 'Snapchat'.

### Share Message To Telegram

[[Method('Sharing', 'Share Message To Telegram', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Telegram. If Telegram is not installed, then the 'AppNotFound' event will be invoked and return the name 'Telegram'.

### Share Message To Twitter

[[Method('Sharing', 'Share Message To Twitter', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through Twitter. If Twitter is not installed, then the 'AppNotFound' event will be invoked and return the name 'Twitter'.

### Share Message To WhatsApp

[[Method('Sharing', 'Share Message To WhatsApp', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Shares a message through WhatsApp. If WhatsApp is not installed, then the 'AppNotFound' event will be invoked and return the name 'WhatsApp'.

## Properties

### Share Dialog Message

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>Send using...</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Set the text for the sharing dialog. The default text is 'Send using...'.

[[PropertyBlockGetterAndSetter('Sharing', 'Share Dialog Message')]]