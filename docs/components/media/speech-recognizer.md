# Speech Recognizer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that converts spoken words to text using voice recognition.

## Events

### After Getting Text

[[Event('Speech Recognizer', 'After Getting Text', 'result')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |result|`text`|


Simple event to raise after the VoiceReco activity has returned

### Before Getting Text

[[Event('Speech Recognizer', 'Before Getting Text')]]

Simple event to raise when VoiceReco is invoked but before the VoiceReco
 activity is started.

## Methods

### GetText

[[Method('Speech Recognizer', 'GetText', false)]]

Solicits speech input from the user.  After the speech is converted to
 text, the AfterGettingText event will be raised.

## Properties

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Speech Recognizer', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Result property getter method.