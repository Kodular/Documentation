# Web Viewer

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_Component for viewing Web pages. The Home URL can be specified in the Designer or in the Blocks Editor. The view can be set to follow links when they are tapped, and users can fill in Web forms. Warning: This is not a full browser. For example, pressing the phone's hardware Back key will exit the app, rather than move back in the browser history.<p />You can use the WebViewer.WebViewString property to communicate between your app and Javascript code running in the Webviewer page. In the app, you get and set WebViewString.  In the WebViewer, you include Javascript that references the window.Makeroid object, using the methoods <em>getWebViewString()</em> and <em>setWebViewString(text)</em>. <p />For example, if the WebViewer opens to a page that contains the Javascript command <br /><em>document.write("The answer is" + window.Makeroid.getWebViewString());</em> <br />and if you set WebView.WebVewString to "hello", then the web page will show <br /><em>The answer is hello</em>. <br />And if the Web page contains Javascript that executes the command <br /><em>window.Makeroid.setWebViewString("hello from Javascript")</em>, <br />then the value of the WebViewString property will be <br /><em>hello from Javascript</em>._

## Events

### After JS Evaluated

[[Event('Web Viewer', 'After JS Evaluated', 'result')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |result|`text`|


_Get the result of the evaluated JS_

### Cookies Removed

[[Event('Web Viewer', 'Cookies Removed', 'success')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |success|`boolean`|


_This event return true when the cookies have been successfully removed. If the cookies was successfully cleared then the next run returns false as status, if in this time no new cookies was set._

### On Console Message

[[Event('Web Viewer', 'On Console Message', 'message lineNumber sourceId')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |message|`text`|
    |line Number|`number`|
    |source Id|`text`|


_Get webpage console output_

### On Download Start

[[Event('Web Viewer', 'On Download Start', 'url contentDisposition mimetype contentLength')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|
    |content Disposition|`text`|
    |mime Type|`text`|
    |content Length|`number`|


_Event for listening download links._

### Page Loaded

[[Event('Web Viewer', 'Page Loaded')]]

_Triggers when page finished loading_

### Progress Changed

[[Event('Web Viewer', 'Progress Changed', 'progress')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |progress|`number`|


_Event to detect that the loading progress has changed._

### Web View String Change

[[Event('Web Viewer', 'Web View String Change', 'value')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |value|`text`|


_When the JavaScript calls AppInventor.setWebViewString this event is run._

## Methods

### CanGoBack

[[Method('Web Viewer', 'CanGoBack', true)]]

{>>Returns `boolean`<<}

_Returns true if the WebViewer can go back in the history list._

### CanGoBackOrForward

[[Method('Web Viewer', 'CanGoBackOrForward', true, 'steps')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |steps|`number`|


_Returns true if the WebViewer can go back or forward the number of steps in the history list._

### CanGoForward

[[Method('Web Viewer', 'CanGoForward', true)]]

{>>Returns `boolean`<<}

_Returns true if the WebViewer can go forward in the history list._

### ClearCaches

[[Method('Web Viewer', 'ClearCaches', false)]]

_Clear WebView caches._

### ClearCookies

[[Method('Web Viewer', 'ClearCookies', false)]]

_Start to clear the WebView cookies._

### ClearLocations

[[Method('Web Viewer', 'ClearLocations', false)]]

_Clear stored location permissions._

### EvaluateJS

[[Method('Web Viewer', 'EvaluateJS', false, 'script')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |script|`text`|


_Evaluate JS in the context of the current page_

### GoBack

[[Method('Web Viewer', 'GoBack', false)]]

_Go back to the previous page in the history list. Does nothing if there is no previous page._

### GoBackOrForward

[[Method('Web Viewer', 'GoBackOrForward', false, 'steps')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |steps|`number`|


_Go forward or backward a number of steps away from the current page. Steps is negative if backward and positive if forward._

### GoForward

[[Method('Web Viewer', 'GoForward', false)]]

_Go forward to the next page in the history list. Does nothing if there is no next page._

### GoHome

[[Method('Web Viewer', 'GoHome', false)]]

_Loads the home URL page. This happens automatically when the home URL is changed._

### GoToUrl

[[Method('Web Viewer', 'GoToUrl', false, 'url')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |url|`text`|


_Load the page at the given URL._

### LoadHtml

[[Method('Web Viewer', 'LoadHtml', false, 'html')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |html|`text`|


_Load HTML content using Base64-encoded data URI scheme_

### Reload

[[Method('Web Viewer', 'Reload', false)]]

_Reloads the current page_

### StopLoading

[[Method('Web Viewer', 'StopLoading', false)]]

_Stops the current load._

## Properties

### Desktop Mode

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Desktop Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|false|

_Get/Set Desktop mode by altering the user agent string._

### Enable JavaScript

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Enable JavaScript')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Enable/Disable JavaScript. Enabled by default_

### Follow Links

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Follow Links')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Determines whether to follow links when they are tapped in the WebViewer.  If you follow links, you can use GoBack and GoForward to navigate the browser history._

### Home Url

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Home Url')]]

| Type |
|:----:|
|text|

_URL of the page the WebViewer should initially open to. Setting this will load the page._

### Ignore SSL Errors

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Ignore SSL Errors')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Determine whether or not to ignore SSL errors. Set to true to ignore errors. Use this to accept self signed certificates from websites._

### Load Images

<small>Available as ^^Advanced^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Load Images')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether or not to automatically load images_

### Prompt for Permission

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Prompt for Permission')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If True, then prompt the user of the WebView to give permission to access the geolocation API. If False, then assume permission is granted._

### Scrollbar

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Scrollbar')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether to display a scrollbar_

### Use External Browser

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Use External Browser')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Open a link in the webviewer page using the external browser. If true the page will be loaded in the external browser and not in the webviewer itself._

### User Agent

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'User Agent')]]

| Type |
|:----:|
|text|

_Get User Agent_

### Uses Location

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Uses Location')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether or not to give the application permission to use the Javascript geolocation API. This property is available only in the designer._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Zoom Display

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Display')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Show or Hide the zoom display._

### Zoom Enabled

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Enable or Disable pinch zooming. This effects both pinch zooming and the zoom controls._

### Zoom Percent

<small>Available as ^^Common^^ Property</small>

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Zoom Percent')]]

| Type | Default |
|:----:|:-------:|
|number|100|

_The zoom of the page in percent %_

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Current Page Title

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Current Page Title')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Title of the page currently viewed_

### Current URL

:eyes: Read-Only property
[[PropertyBlockGetter('Web Viewer', 'Current URL')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_URL of the page currently viewed. This could be different from the Home URL if new pages were visited by following links._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Web View String

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Web View String')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_Gets the WebView's String, which is viewable through Javascript in the WebView as the window.AppInventor object_

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Web Viewer', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._