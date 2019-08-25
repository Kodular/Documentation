# JSON

## Overview

The **JSON** component can be used to make JSON arrays and objects and fetch data from them.

!!! caution
		JSON arrays number positions from `0`, unlike the rest of Kodular components.

## Methods

### Add Boolean To JSONArray
![](/assets/images/components/utilities/json/m_add-boolean-to-json-array.png)

\[ Text `jsonArray`, Boolean `true Or False`, Text `default Value` \]

Adds a boolean to the JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the new JSON array is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The original JSON array.
`true Or False`  | **Boolean:**  `True` if "true" is to be added to the array, `False` if "false" is to be added instead.
`default Value`  | **Text:**  The JSON array that will be returned in case there is a problem parsing `jsonArray`.


### Add Boolean To JSONObject
![](/assets/images/components/utilities/json/m_add-boolean-to-json-object.png)

\[ Text `jsonObject`, Boolean `true Or False`, Text `name`, Text `default Value` \]

Adds a boolean to the JSON object. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the new JSON object is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The original JSON array.
`true Or False`  | **Boolean:**  `True` if "true" is to be added as the tag's value, `False` if "false" is to be added instead.
`name`           | **Text:**  The name of the JSON tag.
`default Value`  | **Text:**  The JSON object that will be returned in case there is a problem parsing `jsonObject`.


### Add JSONArray To JSONArray
![](/assets/images/components/utilities/json/m_add-json-array-to-json-array.png)

\[ Text `jsonArray`, Text `new JSONArray`, Text `default Value` \]

Adds a JSON array as a child of another JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the new JSON array is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The original JSON array.
`new JSONArray`  | **Text:**  The JSON array that is to be added as a child of `jsonArray`.
`default Value`  | **Text:**  The JSON array that will be returned in case there is a problem parsing `jsonArray`.


### Add JSONObject To JSONArray
![](/assets/images/components/utilities/json/m_add-json-object-to-json-array.png)

\[ Text `jsonArray`, Text `jsonObject`, Text `default Value` \]

Adds a JSON object to a JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON array is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The original JSON array.
`jsonObject`     | **Text:**  The JSON object that is to be appended to `jsonArray`.
`default Value`  | **Text:**  The JSON array that will be returned in case there is a problem parsing `jsonArray`.


### Add JSONObject To JSONObject
![](/assets/images/components/utilities/json/m_add-json-object-to-json-object.png)

\[ Text `jsonObject`, Text `new JSONObject`, Text `name`, Text `default Value` \]

Adds a JSON object to another JSON object as a key/value pair with the key being `name` and the value `new JSONObject`. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON object is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The original JSON object.
`new JSONObject` | **Text:**  The JSON object that is to be added to `jsonObject`.
`name`           | **Text:**  The tag name of the JSON object that will be added to `jsonObject`.
`default Value`  | **Text:**  The JSON object that will be returned in case there is a problem parsing `jsonObject`.


### Add Number To JSONArray
![](/assets/images/components/utilities/json/m_add-number-to-json-array.png)

\[ Text `jsonArray`, Number `number`, Text `default Value` \]

Adds a number to a JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON array is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The original JSON array.
`number`         | **Number:**  The number that is to be added to `jsonArray`.
`default Value`  | **Text:**  The JSON array that will be returned in case there is a problem parsing `jsonArray`.


### Add Number To JSONObject
![](/assets/images/components/utilities/json/m_add-number-to-json-object.png)

\[ Text `jsonObject`, Number `number`, Text `name`, Text `default Value` \]

Adds a number to a JSON object. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON object is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The original JSON object.
`number`         | **Number:**  The number that is to be added to `jsonObject`.
`name`           | **Text:**  The tag name of the number that will be added to `jsonObject`.
`default Value`  | **Text:**  The JSON object that will be returned in case there is a problem parsing `jsonObject`.


### Add Text To JSONArray
![](/assets/images/components/utilities/json/m_add-text-to-json-array.png)

\[ Text `jsonArray`, Text `text`, Text `default Value` \]

Adds text to a JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON array is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The original JSON array.
`text`           | **Text:**  The text that is to be added to `jsonArray`.
`default Value`  | **Text:**  The JSON array that will be returned in case there is a problem parsing `jsonArray`.


### Add Text To JSONObject
![](/assets/images/components/utilities/json/m_add-text-to-json-object.png)

\[ Text `jsonObject`, Text `text`, Text `name`, Text `default Value` \]

Adds text to a JSON object. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. If the operation is successful, the updated JSON object is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The original JSON object.
`text`           | **Text:**  The text that is to be added to `jsonObject`.
`name`           | **Text:**  The tag name of the text that will be added to `jsonObject`.
`default Value`  | **Text:**  The JSON object that will be returned in case there is a problem parsing `jsonObject`.


### Get Boolean From JSONArray
![](/assets/images/components/utilities/json/m_get-boolean-from-json-array.png)

\[ Text `jsonArray`, Number `index`, Text `default Value` \]

Fetches a boolean value from the JSON array in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The JSON array containing the boolean.
`index`          | **Number:**  The position of the boolean in `jsonArray`.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonArray`.


### Get Boolean From JSONObject
![](/assets/images/components/utilities/json/m_get-boolean-from-json-object.png)

\[ Text `jsonObject`, Number `index`, Text `default Value` \]

Fetches a boolean value from the JSON object in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The JSON object containing the boolean.
`index`          | **Number:**  The position of the boolean in `jsonObject`.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonObject`.


### Get JSONArray From JSONObject
![](/assets/images/components/utilities/json/m_get-json-array-from-json-object.png)

\[ Text `jsonObject`, Text `name`, Text `default Value` \]

Fetches a JSON array from the JSON object by the name of the array's tag. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The JSON object containing the JSON array.
`name`           | **Text:**  The tag name, the value of which is to be returned.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonObject`.


### Get JSONObject From JSONArray
![](/assets/images/components/utilities/json/m_get-json-object-from-json-array.png)

\[ Text `jsonArray`, Number `index`, Text `default Value` \]

Fetches a JSON object from the JSON array present in the specified index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The JSON array containing the JSON object.
`index`          | **Number:**  The index of the JSON object.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonArray`.


### Get JSONObject From JSONObject
![](/assets/images/components/utilities/json/m_get-json-object-from-json-object.png)

\[ Text `jsonObject`, Text `name`, Text `default Value` \]

Fetches a JSON object from the JSON object by the name of the child's tag. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The JSON object containing the JSON object.
`name`           | **Text:**  The tag name, the value of which is to be returned.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonObject`.


### Get Length of JSONArray
![](/assets/images/components/utilities/json/m_get-length-of-json-array.png)

\[ Text `jsonArray`, Text `default Value` \]

Returns the length of the JSON array. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The JSON array of which the length is to be returned.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonArray`.


### Get Number From JSONArray
![](/assets/images/components/utilities/json/m_get-number-from-json-array.png)

\[ Text `jsonArray`, Number `index`, Text `default Value` \]

Fetches a number from the JSON array in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The JSON array containing the number.
`index`          | **Number:**  The position of the number in `jsonArray`.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonArray`.


### Get Number From JSONObject
![](/assets/images/components/utilities/json/m_get-number-from-json-object.png)

\[ Text `jsonObject`, Text `name`, Text `default Value` \]

Fetches a number from the JSON object in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The JSON object containing the number.
`name`           | **Text:**  The tag name, the value of which is to be returned.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonObject`.


### Get Text From JSONArray
![](/assets/images/components/utilities/json/m_get-text-from-json-array.png)

\[ Text `jsonArray`, Number `index`, Text `default Value` \]

Fetches a text from the JSON array in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonArray`      | **Text:**  The JSON array containing the text.
`index`          | **Number:**  The position of the text in `jsonArray`.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonArray`.


### Get Text From JSONObject
![](/assets/images/components/utilities/json/m_get-text-from-json-object.png)

\[ Text `jsonObject`, Text `name`, Text `default Value` \]

Fetches a text from the JSON object in the given index. If there is a problem parsing the JSON, [Error Occurred](#error-occurred) is triggered and `default Value` is returned. 

Params           |  []()       
---------------- | ------- 
`jsonObject`     | **Text:**  The JSON object containing the text.
`name`           | **Text:**  The tag name, the value of which is to be returned.
`default Value`  | **Text:**  The value that will be returned in case there is a problem parsing `jsonObject`.


## Events

### Error Occurred
![](/assets/images/components/utilities/json/e_error-occurred.png)

\[ Text `function Name`, Text `error Message` \]

Triggers when there was a problem parsing the JSON.

Params             |  []()       
------------------ | ------- 
`function Name`    | **Text:**  The name of the function that caused the error.
`error Message`    | **Text:**  The error message which can be used for debugging.