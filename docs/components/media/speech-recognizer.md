# Speech Recognizer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|2|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that converts spoken words to text using voice recognition.

## Events

### After Getting Text

[[Event('Speech Recognizer', 'After Getting Text', 'result')]]

| Params | []() |
|--------|------|
|result|Text|


Simple event to raise after the VoiceReco activity has returned

### Before Getting Text

[[Event('Speech Recognizer', 'Before Getting Text')]]

Simple event to raise when VoiceReco is invoked but before the VoiceRecoactivity is started.

## Methods

### Get Text

[[Method('Speech Recognizer', 'Get Text', False)]]

Solicits speech input from the user. After the speech is converted totext, the AfterGettingText event will be raised.

## Properties

### Result

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Result property getter method.

[[PropertyBlockGetter('Speech Recognizer', 'Result')]]