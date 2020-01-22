# Feature Collection

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Maps|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A FeatureColletion contains one or more map features as a group. Any events fired on a feature in the collection will also trigger the corresponding event on the collection object. FeatureCollections can be loaded from external resources as a means of populating a Map with content._

## Events

### Feature Click

[[Event('Feature Collection', 'Feature Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user clicked on a map feature._

### Feature Drag

[[Event('Feature Collection', 'Feature Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user dragged a map feature._

### Feature Long Click

[[Event('Feature Collection', 'Feature Long Click', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user long-pressed on a map feature._

### Feature Start Drag

[[Event('Feature Collection', 'Feature Start Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user started dragging a map feature._

### Feature Stop Drag

[[Event('Feature Collection', 'Feature Stop Drag', 'feature')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |feature|`component`|


_The user stopped dragging a map feature._

### Got Features

[[Event('Feature Collection', 'Got Features', 'url features')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |features|`list`|


_A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features._

### Load Error

[[Event('Feature Collection', 'Load Error', 'url responseCode errorMessage')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |response Code|`number`|
    |error Message|`text`|


_An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message._

## Methods

### FeatureFromDescription

[[Method('Feature Collection', 'FeatureFromDescription', true, 'description')]]

{>>Returns `any`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |description|`list`|


_Convert a feature description into an App Inventor map feature. Currently the only
 supported conversion is from a GeoJSON point to Marker component. If the feature has
 properties, they will be mapped into App Inventor properties using the following mapping:

 description becomes Description;
 draggable becomes Draggable;
 infobox becomes EnableInfobox;
 fill becomes FillColor;
 fill-opacity becomes FillOpacity;
 image becomes ImageAsset;
 stroke becomes StrokeColor;
 stroke-opacity becomes StrokeOpacity;
 stroke-width becomes StrokeWidth;
 title becomes Title;
 visible becomes Visible_

### LoadFromURL

[[Method('Feature Collection', 'LoadFromURL', false, 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


_<p>Load a feature collection in <a href="https://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.</p>_

## Properties

### Features From Geo JSON

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Features From Geo JSON')]]

| Type |
|:----:|
|text|

_Loads a collection of features from the given string. If the string is not valid GeoJSON, the ErrorLoadingFeatureCollection error will be run with url = <string>._

### Source

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Feature Collection', 'Source')]]

| Type |
|:----:|
|text|

_Gets or sets the source URL used to populate the feature collection. If the feature collection was not loaded from a URL, this will be the empty string._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Features

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Features')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription_

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Feature Collection', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._