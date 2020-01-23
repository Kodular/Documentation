# Web Viewer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

Component for viewing Web pages. The Home URL can be specified in the Designer or in the Blocks Editor. The view can be set to follow links when they are tapped, and users can fill in Web forms. Warning: This is not a full browser. For example, pressing the phone's hardware Back key will exit the app, rather than move back in the browser history.

You can use the WebViewer.WebViewString property to communicate between your app and Javascript code running in the Webviewer page. In the app, you get and set WebViewString.  In the WebViewer, you include Javascript that references the window.Makeroid object, using the methoods _getWebViewString()_ and _setWebViewString(text)_. 

For example, if the WebViewer opens to a page that contains the Javascript command   
_document.write("The answer is" + window.Makeroid.getWebViewString());_   
and if you set WebView.WebVewString to "hello", then the web page will show   
_The answer is hello_.   
And if the Web page contains Javascript that executes the command   
_window.Makeroid.setWebViewString("hello from Javascript")_,   
then the value of the WebViewString property will be   
_hello from Javascript_.

## Events

### After JS Evaluated

[[Event('Web Viewer', 'After JS Evaluated', 'result')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |result|`text`|


Get the result of the evaluated JS

### Cookies Removed

[[Event('Web Viewer', 'Cookies Removed', 'success')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |success|`boolean`|


This event return true when the cookies have been successfully removed. If the cookies was successfully cleared then the next run returns false as status, if in this time no new cookies was set.

### On Console Message

[[Event('Web Viewer', 'On Console Message', 'message', 'lineNumber', 'sourceId')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |message|`text`|
    |line Number|`number`|
    |source Id|`text`|


Get webpage console output

### On Download Start

[[Event('Web Viewer', 'On Download Start', 'url', 'contentDisposition', 'mimetype', 'contentLength')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|
    |content Disposition|`text`|
    |mime Type|`text`|
    |content Length|`number`|


Event for listening download links.

### Page Loaded

[[Event('Web Viewer', 'Page Loaded')]]

Triggers when page finished loading

### Progress Changed

[[Event('Web Viewer', 'Progress Changed', 'progress')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |progress|`number`|


Event to detect that the loading progress has changed.

### Web View String Change

[[Event('Web Viewer', 'Web View String Change', 'value')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |value|`text`|


When the JavaScript calls AppInventor.setWebViewString this event is run.

## Methods

### CanGoBack

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the WebViewer can go back in the history list.

### CanGoBackOrForward

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |steps|`number`|


Returns true if the WebViewer can go back or forward the number of steps in the history list.

### CanGoForward

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the WebViewer can go forward in the history list.

### ClearCaches

_Block preview not available_

Clear WebView caches.

### ClearCookies

_Block preview not available_

Start to clear the WebView cookies.

### ClearLocations

_Block preview not available_

Clear stored location permissions.

### EvaluateJS

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |script|`text`|


Evaluate JS in the context of the current page

### GoBack

_Block preview not available_

Go back to the previous page in the history list. Does nothing if there is no previous page.

### GoBackOrForward

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |steps|`number`|


Go forward or backward a number of steps away from the current page. Steps is negative if backward and positive if forward.

### GoForward

_Block preview not available_

Go forward to the next page in the history list. Does nothing if there is no next page.

### GoHome

_Block preview not available_

Loads the home URL page. This happens automatically when the home URL is changed.

### GoToUrl

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |url|`text`|


Load the page at the given URL.

### LoadHtml

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |html|`text`|


Load HTML content using Base64-encoded data URI scheme

### Reload

_Block preview not available_

Reloads the current page

### StopLoading

_Block preview not available_

Stops the current load.

## Properties

### Desktop Mode

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Desktop Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

Get/Set Desktop mode by altering the user agent string.

### Enable JavaScript

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Enable JavaScript')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enable/Disable JavaScript. Enabled by default

### Follow Links

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Follow Links')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Determines whether to follow links when they are tapped in the WebViewer.  If you follow links, you can use GoBack and GoForward to navigate the browser history.

### Home Url

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Home Url')]]

| Type |
|:----:|
|text|

URL of the page the WebViewer should initially open to. Setting this will load the page.

### Ignore SSL Errors

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Ignore SSL Errors')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Determine whether or not to ignore SSL errors. Set to true to ignore errors. Use this to accept self signed certificates from websites.

### Load Images

<small>Available as ^^Advanced^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Load Images')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether or not to automatically load images

### Prompt for Permission

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Prompt for Permission')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

If True, then prompt the user of the WebView to give permission to access the geolocation API. If False, then assume permission is granted.

### Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether to display a scrollbar

### Use External Browser

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Use External Browser')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Open a link in the webviewer page using the external browser. If true the page will be loaded in the external browser and not in the webviewer itself.

### User Agent

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'User Agent')]]

| Type |
|:----:|
|text|

Get User Agent

### Uses Location

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Uses Location')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether or not to give the application permission to use the Javascript geolocation API. This property is available only in the designer.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Zoom Display

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Display')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Show or Hide the zoom display.

### Zoom Enabled

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enable or Disable pinch zooming. This effects both pinch zooming and the zoom controls.

### Zoom Percent

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Percent')]]

| Type | Default |
|:----:|:-------:|
|number|100|

The zoom of the page in percent %

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Current Page Title

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Current Page Title')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Title of the page currently viewed

### Current URL

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Current URL')]]

| Type | Default |
|:----:|:-------:|
|text|None|

URL of the page currently viewed. This could be different from the Home URL if new pages were visited by following links.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage   of the height of its parent Component.

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Web View String

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Web View String')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Gets the WebView's String, which is viewable through Javascript in the WebView as the window.AppInventor object

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage   of the Width of its parent Component.