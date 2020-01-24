# Yandex Translate

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Media**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

Use this component to translate words and sentences between different languages. This component needs Internet access, as it will request translations to the Yandex.Translate service. Specify the source and target language in the form source-target using two letter language codes. So"en-es" will translate from English to Spanish while "es-ru" will translate from Spanish to Russian. If you leave out the source language, the service will attempt to detect the source language. So providing just "es" will attempt to detect the source language and translate it to Spanish.

 This component is powered by the Yandex translation service. See http://api.yandex.com/translate/ for more information, including the list of available languages and the meanings of the language codes and status codes. 

Note: Translation happens asynchronously in the background. When the translation is complete, the "GotTranslation" event is triggered.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Got Translation

Event triggered when the Yandex.Translate service returns the translated text. This event also provides a response code for error handling. If the responseCode is not 200, then something went wrong with the call, and the translation will not be available.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Yandex%20Translate%22,%20%22name%22:%20%22Got%20Translation%22,%20%22params%22:%20%5B%22response%20Code%22,%20%22translation%22%5D%7D"></div>

| Params | []() |
|--------|------|
|response Code|<span class="chip chip-text">Text</span>|
|translation|<span class="chip chip-text">Text</span>|


## Methods

### Request Translation

By providing a target language to translate to (for instance, 'es' for Spanish, 'en' for English, or 'ru' for Russian), and a word or sentence to translate, this method will request a translation to the Yandex.Translate service
Once the text is translated by the external service, the event GotTranslation will be executed
Note: Yandex.Translate will attempt to detect the source language. You can also specify prepending it to the language translation. I.e., es-ru will specify Spanish to Russian translation.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Yandex%20Translate%22,%20%22name%22:%20%22Request%20Translation%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22language%20To%20Translate%20To%22,%20%22text%20To%20Translate%22%5D%7D"></div>


| Params | []() |
|--------|------|
|language To Translate To|<span class="chip chip-text">Text</span>|
|text To Translate|<span class="chip chip-text">Text</span>|


## Properties

### API Key

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Yandex%20Translate%22,%20%22name%22:%20%22API%20Key%22,%20%22getter%22:%20false%7D"></div>
