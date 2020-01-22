# JSON

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that parses and handles data encoded as JSON.

## Events

### Error Occurred

[[Event('JSON', 'Error Occurred', 'functionName errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |function Name|`text`|
    |error Message|`text`|


Triggers when there is a JSON error.

## Methods

### AddBooleanToJSONArray

[[Method('JSON', 'AddBooleanToJSONArray', true, 'jsonArray trueOrFalse defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |true Or false|`boolean`|
    |default Value|`text`|


Add True or False to a JSON Array.

### AddBooleanToJSONObject

[[Method('JSON', 'AddBooleanToJSONObject', true, 'jsonObject trueOrFalse name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |true Or false|`boolean`|
    |name|`text`|
    |default Value|`text`|


Add True or False to a JSON Object.

### AddJSONArrayToJSONArray

[[Method('JSON', 'AddJSONArrayToJSONArray', true, 'jsonArray newJsonArray defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |new JSONArray|`text`|
    |default Value|`text`|


Add a JSON Array to a JSON Array.

### AddJSONObjectToJSONArray

[[Method('JSON', 'AddJSONObjectToJSONArray', true, 'jsonArray jsonObject defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |jsonObject|`text`|
    |default Value|`text`|


Add a JSON Object to a JSON Array.

### AddJSONObjectToJSONObject

[[Method('JSON', 'AddJSONObjectToJSONObject', true, 'jsonObject newJsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |new JSONObject|`text`|
    |name|`text`|
    |default Value|`text`|


Add a JSON Object to a JSON Object.

### AddNumberToJSONArray

[[Method('JSON', 'AddNumberToJSONArray', true, 'jsonArray number defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |number|`number`|
    |default Value|`text`|


Add a Number to a JSON Array.

### AddNumberToJSONObject

[[Method('JSON', 'AddNumberToJSONObject', true, 'jsonObject number name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |number|`number`|
    |name|`text`|
    |default Value|`text`|


Add a Number to a JSON Object.

### AddTextToJSONArray

[[Method('JSON', 'AddTextToJSONArray', true, 'jsonArray text defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |text|`text`|
    |default Value|`text`|


Add Text to a JSON Array.

### AddTextToJSONObject

[[Method('JSON', 'AddTextToJSONObject', true, 'jsonObject text name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |text|`text`|
    |name|`text`|
    |default Value|`text`|


Add Text to a JSON Object.

### GetBooleanFromJSONAray

[[Method('JSON', 'GetBooleanFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`boolean`|


Get a True or False from a JSON Array.

### GetBooleanFromJSONObject

[[Method('JSON', 'GetBooleanFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`boolean`|


Get a true or false value from a JSON Object.

### GetJSONArrayFromJSONObject

[[Method('JSON', 'GetJSONArrayFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


Get a JSON Array from a JSON Object.

### GetJSONObjectFromJSONAray

[[Method('JSON', 'GetJSONObjectFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`text`|


Get a JSON Object from a JSON Array.

### GetJSONObjectFromJSONObject

[[Method('JSON', 'GetJSONObjectFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


Get a JSON Object from a JSON Object.

### GetLengthOfJSONArray

[[Method('JSON', 'GetLengthOfJSONArray', true, 'jsonArray defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |default Value|`number`|


Get the length of a JSON Array.

### GetNumberFromJSONAray

[[Method('JSON', 'GetNumberFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`number`|


Get a Number from a JSON Array.

### GetNumberFromJSONObject

[[Method('JSON', 'GetNumberFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`number`|


Get a number from a JSON Object.

### GetTextFromJSONAray

[[Method('JSON', 'GetTextFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`text`|


Get Text from a JSON Array.

### GetTextFromJSONObject

[[Method('JSON', 'GetTextFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


Get text from a JSON object.