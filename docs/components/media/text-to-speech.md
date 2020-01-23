# Text To Speech

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Media|5|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

The TestToSpeech component speaks a given text aloud. You can set the pitch and the rate of speech. 

You can also set a language by supplying a language code. This changes the pronounciation of words, not the actual language spoken. For example, setting the language to French and speaking English text will sound like someone speaking English (en) with a French accent.

 

You can also specify a country by supplying a country code. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

 

The languages and countries available depend on the particular device, and can be listed with the AvailableLanguages and AvailableCountries properties.

## Events

### After Speaking

[[Event('Text To Speech', 'After Speaking', 'result')]]

| Params | []() |
|--------|------|
|result|Boolean|


Event to raise after the message is spoken.

### Before Speaking

[[Event('Text To Speech', 'Before Speaking')]]

Event to raise when Speak is invoked, before the message is spoken.

## Methods

### Speak

[[Method('Text To Speech', 'Speak', False, 'message')]]

| Params | []() |
|--------|------|
|message|Text|


Speaks the given message.

## Properties

### Country

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Country code to use for speech generation. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

[[PropertyBlockGetterAndSetter('Text To Speech', 'Country')]]

### Language

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the language for TextToSpeech. This changes the way that words are pronounced, not the actual language that is spoken. For example setting the language to and speaking English text with sound like someone speaking English with a French accent.

[[PropertyBlockGetterAndSetter('Text To Speech', 'Language')]]

### Pitch

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the Pitch for TextToSpeech The values should be between 0 and 2 where lower values lower the tone of synthesized voice and greater values raise it.

[[PropertyBlockGetterAndSetter('Text To Speech', 'Pitch')]]

### Speech Rate

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the SpeechRate for TextToSpeech. The values should be between 0 and 2 where lower values slow down the pitch and greater values accelerate it.

[[PropertyBlockGetterAndSetter('Text To Speech', 'Speech Rate')]]

### Available Countries

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

List of the country codes available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

[[PropertyBlockGetter('Text To Speech', 'Available Countries')]]

### Available Languages

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

List of the languages available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

[[PropertyBlockGetter('Text To Speech', 'Available Languages')]]

### Result

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Result property getter method.

[[PropertyBlockGetter('Text To Speech', 'Result')]]