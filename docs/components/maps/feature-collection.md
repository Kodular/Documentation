# Feature Collection

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Maps**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

## Overview

A FeatureColletion contains one or more map features as a group. Any events fired on a feature in the collection will also trigger the corresponding event on the collection object. FeatureCollections can be loaded from external resources as a means of populating a Map with content.

## Events

### Feature Click

The user clicked on a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20Click%22,%20%22param%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|

### Feature Drag

The user dragged a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20Drag%22,%20%22param%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|

### Feature Long Click

The user long-pressed on a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20Long%20Click%22,%20%22param%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|

### Feature Start Drag

The user started dragging a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20Start%20Drag%22,%20%22param%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|

### Feature Stop Drag

The user stopped dragging a map feature.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20Stop%20Drag%22,%20%22param%22:%20%5B%22feature%22%5D%7D"></div>

| Params | []() |
|--------|------|
|feature|<span class="chip chip-component">Component</span>|

### Got Features

A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Got%20Features%22,%20%22param%22:%20%5B%22url%22,%20%22features%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|features|<span class="chip chip-list">List</span>|

### Load Error

An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Load%20Error%22,%20%22param%22:%20%5B%22url%22,%20%22response%20Code%22,%20%22error%20Message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|response Code|<span class="chip chip-number">Number</span>|
|error Message|<span class="chip chip-text">Text</span>|

## Methods

### Feature From Description

<span class="chip chip-any">Returns: <i>Any</i></span>

Convert a feature description into an App Inventor map feature. Currently the onlysupported conversion is from a GeoJSON point to Marker component. If the feature hasproperties, they will be mapped into App Inventor properties using the following mapping:description becomes Description;draggable becomes Draggable;infobox becomes EnableInfobox;fill becomes FillColor;fill-opacity becomes FillOpacity;image becomes ImageAsset;stroke becomes StrokeColor;stroke-opacity becomes StrokeOpacity;stroke-width becomes StrokeWidth;title becomes Title;visible becomes Visible

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Feature%20From%20Description%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22description%22%5D%7D"></div>

| Params | []() |
|--------|------|
|description|<span class="chip chip-list">List</span>|

### Load From URL

Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Load%20From%20URL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|

## Properties

### Features

<span style="user-select: none;"><span class="chip chip-list">List</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The list of features placed on this map. This list also includes any features created by calls to FeatureFromDescription

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Features%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Features%22,%20%22getter%22:%20false%7D"></div>

### Features From Geo JSON

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Loads a collection of features from the given string. If the string is not valid GeoJSON, the ErrorLoadingFeatureCollection error will be run with url = 

<string>.</string>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Features%20From%20Geo%20JSON%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Source

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Gets or sets the source URL used to populate the feature collection. If the feature collection was not loaded from a URL, this will be the empty string.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Source%22,%20%22getter%22:%20true%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Feature%20Collection%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
