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

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |result|`boolean`|


Event to raise after the message is spoken.

### Before Speaking

[[Event('Text To Speech', 'Before Speaking')]]

Event to raise when Speak is invoked, before the message is spoken.

## Methods

### Speak

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|


Speaks the given message.

## Properties

### Country

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text To Speech', 'Country')]]

| Type |
|:----:|
|text|

Country code to use for speech generation. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

### Language

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text To Speech', 'Language')]]

| Type |
|:----:|
|text|

Sets the language for TextToSpeech. This changes the way that words are pronounced, not the actual language that is spoken. For example setting the language to and speaking English text with sound like someone speaking English with a French accent.

### Pitch

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text To Speech', 'Pitch')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

Sets the Pitch for TextToSpeech The values should be between 0 and 2 where lower values lower the tone of synthesized voice and greater values raise it.

### Speech Rate

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Text To Speech', 'Speech Rate')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

Sets the SpeechRate for TextToSpeech. The values should be between 0 and 2 where lower values slow down the pitch and greater values accelerate it.

### Available Countries

:eyes: Read-Only property
[[PropertyBlockGetter('Text To Speech', 'Available Countries')]]

| Type | Default |
|:----:|:-------:|
|list|None|

List of the country codes available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

### Available Languages

:eyes: Read-Only property
[[PropertyBlockGetter('Text To Speech', 'Available Languages')]]

| Type | Default |
|:----:|:-------:|
|list|None|

List of the languages available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

### Result

:eyes: Read-Only property
[[PropertyBlockGetter('Text To Speech', 'Result')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Result property getter method.