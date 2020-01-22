# Speech Recognizer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that converts spoken words to text using voice recognition._

## Properties

### Result



:eyes: Read-Only property
[[PropertyBlockGetter('Speech Recognizer', 'Result')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Result property getter method.

## Methods

### GetText



[[Method('Speech Recognizer', 'GetText', false)]]

Solicits speech input from the user.  After the speech is converted to
 text, the AfterGettingText event will be raised.