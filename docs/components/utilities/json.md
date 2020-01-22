# JSON

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Utilities|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that parses and handles data encoded as JSON._

## Events

### Error Occurred

[[Event('JSON', 'Error Occurred', 'functionName errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |function Name|`text`|
    |error Message|`text`|


_Triggers when there is a JSON error._

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


_Add True or False to a JSON Array._

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


_Add True or False to a JSON Object._

### AddJSONArrayToJSONArray

[[Method('JSON', 'AddJSONArrayToJSONArray', true, 'jsonArray newJsonArray defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |new JSONArray|`text`|
    |default Value|`text`|


_Add a JSON Array to a JSON Array._

### AddJSONObjectToJSONArray

[[Method('JSON', 'AddJSONObjectToJSONArray', true, 'jsonArray jsonObject defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |jsonObject|`text`|
    |default Value|`text`|


_Add a JSON Object to a JSON Array._

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


_Add a JSON Object to a JSON Object._

### AddNumberToJSONArray

[[Method('JSON', 'AddNumberToJSONArray', true, 'jsonArray number defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |number|`number`|
    |default Value|`text`|


_Add a Number to a JSON Array._

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


_Add a Number to a JSON Object._

### AddTextToJSONArray

[[Method('JSON', 'AddTextToJSONArray', true, 'jsonArray text defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |text|`text`|
    |default Value|`text`|


_Add Text to a JSON Array._

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


_Add Text to a JSON Object._

### GetBooleanFromJSONAray

[[Method('JSON', 'GetBooleanFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`boolean`|


_Get a True or False from a JSON Array._

### GetBooleanFromJSONObject

[[Method('JSON', 'GetBooleanFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`boolean`|


_Get a true or false value from a JSON Object._

### GetJSONArrayFromJSONObject

[[Method('JSON', 'GetJSONArrayFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


_Get a JSON Array from a JSON Object._

### GetJSONObjectFromJSONAray

[[Method('JSON', 'GetJSONObjectFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`text`|


_Get a JSON Object from a JSON Array._

### GetJSONObjectFromJSONObject

[[Method('JSON', 'GetJSONObjectFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


_Get a JSON Object from a JSON Object._

### GetLengthOfJSONArray

[[Method('JSON', 'GetLengthOfJSONArray', true, 'jsonArray defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |default Value|`number`|


_Get the length of a JSON Array._

### GetNumberFromJSONAray

[[Method('JSON', 'GetNumberFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`number`|


_Get a Number from a JSON Array._

### GetNumberFromJSONObject

[[Method('JSON', 'GetNumberFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`number`|


_Get a number from a JSON Object._

### GetTextFromJSONAray

[[Method('JSON', 'GetTextFromJSONAray', true, 'jsonArray index defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonArray|`text`|
    |index|`number`|
    |default Value|`text`|


_Get Text from a JSON Array._

### GetTextFromJSONObject

[[Method('JSON', 'GetTextFromJSONObject', true, 'jsonObject name defaultVaue')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |jsonObject|`text`|
    |name|`text`|
    |default Value|`text`|


_Get text from a JSON object._