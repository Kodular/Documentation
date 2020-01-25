# Speech Recognizer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that converts spoken words to text using voice recognition.

## Events

### After Getting Text

Simple event to raise after the VoiceReco activity has returned

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22After%20Getting%20Text%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|

### Before Getting Text

Simple event to raise when VoiceReco is invoked but before the VoiceRecoactivity is started.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Before%20Getting%20Text%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Get Text

Solicits speech input from the user. After the speech is converted totext, the AfterGettingText event will be raised.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Get%20Text%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Result

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Result property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Speech%20Recognizer%22,%20%22name%22:%20%22Result%22,%20%22getter%22:%20true%7D"></div>
