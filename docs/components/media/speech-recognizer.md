# Speech Recognizer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that converts spoken words to text using voice recognition.

## Events

### After Getting Text

Simple event to raise after the VoiceReco activity has returned

[[Event('Speech Recognizer', 'After Getting Text', 'result')]]

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|


### Before Getting Text

Simple event to raise when VoiceReco is invoked but before the VoiceRecoactivity is started.

[[Event('Speech Recognizer', 'Before Getting Text')]]

## Methods

### Get Text

Solicits speech input from the user. After the speech is converted totext, the AfterGettingText event will be raised.

[[Method('Speech Recognizer', 'Get Text', False)]]

## Properties

### Result

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Result property getter method.

[[PropertyBlockGetter('Speech Recognizer', 'Result')]]