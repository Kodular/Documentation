# Text To Speech

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

:mag: {>>Non-Visible component<<}

## Overview

The TestToSpeech component speaks a given text aloud. You can set the pitch and the rate of speech. 

You can also set a language by supplying a language code. This changes the pronounciation of words, not the actual language spoken. For example, setting the language to French and speaking English text will sound like someone speaking English (en) with a French accent.

 

You can also specify a country by supplying a country code. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

 

The languages and countries available depend on the particular device, and can be listed with the AvailableLanguages and AvailableCountries properties.

## Events

### After Speaking

Event to raise after the message is spoken.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22After%20Speaking%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-boolean">Boolean</span>|

### Before Speaking

Event to raise when Speak is invoked, before the message is spoken.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Before%20Speaking%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Speak

Speaks the given message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Speak%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|

## Properties

### Available Countries

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

List of the country codes available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Available%20Countries%22,%20%22getter%22:%20true%7D"></div>

### Available Languages

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

List of the languages available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Available%20Languages%22,%20%22getter%22:%20true%7D"></div>

### Country

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Country code to use for speech generation. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Country%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Country%22,%20%22getter%22:%20false%7D"></div>

### Language

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the language for TextToSpeech. This changes the way that words are pronounced, not the actual language that is spoken. For example setting the language to and speaking English text with sound like someone speaking English with a French accent.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Language%22,%20%22getter%22:%20false%7D"></div>

### Pitch

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>1.0</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the Pitch for TextToSpeech The values should be between 0 and 2 where lower values lower the tone of synthesized voice and greater values raise it.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Pitch%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Pitch%22,%20%22getter%22:%20false%7D"></div>

### Result

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

Result property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Result%22,%20%22getter%22:%20true%7D"></div>

### Speech Rate

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>1.0</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Sets the SpeechRate for TextToSpeech. The values should be between 0 and 2 where lower values slow down the pitch and greater values accelerate it.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Speech%20Rate%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Text%20To%20Speech%22,%20%22name%22:%20%22Speech%20Rate%22,%20%22getter%22:%20false%7D"></div>
