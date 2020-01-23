# Feature Collection

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Maps|API 19, Android 4.4 - 4.4.4 KitKat|2|

## Overview

A FeatureColletion contains one or more map features as a group. Any events fired on a feature in the collection will also trigger the corresponding event on the collection object. FeatureCollections can be loaded from external resources as a means of populating a Map with content.

## Events

### Feature Click

The user clicked on a map feature.

[[Event('Feature Collection', 'Feature Click', 'feature')]]

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Drag

The user dragged a map feature.

[[Event('Feature Collection', 'Feature Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Long Click

The user long-pressed on a map feature.

[[Event('Feature Collection', 'Feature Long Click', 'feature')]]

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Start Drag

The user started dragging a map feature.

[[Event('Feature Collection', 'Feature Start Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Feature Stop Drag

The user stopped dragging a map feature.

[[Event('Feature Collection', 'Feature Stop Drag', 'feature')]]

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|


### Got Features

A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

[[Event('Feature Collection', 'Got Features', 'url', 'features')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|features|<span class="chip chip-list">List</span>|


### Load Error

An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

[[Event('Feature Collection', 'Load Error', 'url', 'responseCode', 'errorMessage')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|


## Methods

### Feature From Description

<span class="chip chip-any">Returns: <i>Any</i></span> 

Convert a feature description into an App Inventor map feature. Currently the onlysupported conversion is from a GeoJSON point to Marker component. If the feature hasproperties, they will be mapped into App Inventor properties using the following mapping:description becomes Description;draggable becomes Draggable;infobox becomes EnableInfobox;fill becomes FillColor;fill-opacity becomes FillOpacity;image becomes ImageAsset;stroke becomes StrokeColor;stroke-opacity becomes StrokeOpacity;stroke-width becomes StrokeWidth;title becomes Title;visible becomes Visible

[[Method('Feature Collection', 'Feature From Description', True, 'description')]]

| Params | []() |
|--------|------|
|description|<span class="chip chip-list">List</span>|


### Load From URL

Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

[[Method('Feature Collection', 'Load From URL', False, 'url')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|


## Properties

### Features From Geo JSON

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Loads a collection of features from the given string. If the string is not valid GeoJSON, the ErrorLoadingFeatureCollection error will be run with url = 

<string>.</string>

[[PropertyBlockGetterAndSetter('Feature Collection', 'Features From Geo JSON')]]

### Source

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Gets or sets the source URL used to populate the feature collection. If the feature collection was not loaded from a URL, this will be the empty string.

[[PropertyBlockGetter('Feature Collection', 'Source')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Feature Collection', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Features

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription

[[PropertyBlockGetterAndSetter('Feature Collection', 'Features')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Feature Collection', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Feature Collection', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Feature Collection', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Feature Collection', 'Width Percent')]]