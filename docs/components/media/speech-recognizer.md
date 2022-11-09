# Speech Recognizer

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">3</span>|

## Overview

A non-visible component that converts spoken words to text using voice recognition.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.RECORD_AUDIO](https://developer.android.com/reference/android/Manifest.permission.html#RECORD_AUDIO)

## Events

### After Getting Text

Simple event to raise after the VoiceReco activity has returned
Partial is 'false' when SpeechRecognizer stops automatically after listening,else it is 'true' if SpeechRecognizer returns partial results.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22After%20Getting%20Text%22,%20%22param%22:%20%5B%22result%22,%20%22partial%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|
|partial|<span class="chip chip-boolean">Boolean</span>|

### Before Getting Text

Simple event to raise when VoiceReco is invoked but before the VoiceRecoactivity is started.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Before%20Getting%20Text%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Get Text

Solicits speech input from the user. After the speech is converted totext, the AfterGettingText event will be raised.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Get%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop

Function used to forcefully stop listening speech in cases whereSpeechRecognizer cannot stop automatically
This function works only when UseLegacy property is set to 'false'.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Stop%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Blocks</span></span>

Suggests the language to use for recognizing speech. An empty string (the default) willuse the system's default language  
 Language is specified using a [language tag](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) with an optional region suffix, such as en or es-MX. The set of supported languages will vary by device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20false%7D"></div>

### Result

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Result property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Result%22,%20%22getter%22:%20true%7D"></div>

### Use Legacy

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true, an app can retain their older behaviour.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Use%20Legacy%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Use%20Legacy%22,%20%22getter%22:%20false%7D"></div>
