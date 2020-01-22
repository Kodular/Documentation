# Speech Recognizer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that converts spoken words to text using voice recognition._

## Events

### After Getting Text

[[Event('Speech Recognizer', 'After Getting Text', 'result')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |result|`text`|


_Simple event to raise after the VoiceReco activity has returned_

### Before Getting Text

[[Event('Speech Recognizer', 'Before Getting Text')]]

_Simple event to raise when VoiceReco is invoked but before the VoiceReco
 activity is started._

## Methods

### GetText

[[Method('Speech Recognizer', 'GetText', false)]]

_Solicits speech input from the user.  After the speech is converted to
 text, the AfterGettingText event will be raised._

## Properties

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Speech Recognizer', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Result property getter method._