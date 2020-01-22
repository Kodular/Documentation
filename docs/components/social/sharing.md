# Sharing

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Sharing is a non-visible component that enables sharing files and/or messages between your app and other apps installed on a device. The component will display a list of the installed apps that can handle the information provided, and will allow the user to choose one to share the content with, for instance a mail app, a social network app, a texting app, and so on.<br>The file path can be taken directly from other components such as the Camera or the ImagePicker, but can also be specified directly to read from storage. Be aware that different devices treat storage differently, so a few things to try if, for instance, you have a file called arrow.gif in the folder <code>Appinventor/assets</code>, would be: <ul><li><code>"file:///sdcard/Appinventor/assets/arrow.gif"</code></li> or <li><code>"/storage/Appinventor/assets/arrow.gif"</code></li></ul>_

## Properties

### Share Dialog Message

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Sharing', 'Share Dialog Message')]]

| Type | Default |
|:----:|:-------:|
|text|Send using...|

Set the text for the sharing dialog. The default text is 'Send using...'.