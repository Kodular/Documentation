# Web Viewer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Layout > Views|API 19, Android 4.4 - 4.4.4 KitKat|13|

## Overview

Component for viewing Web pages. The Home URL can be specified in the Designer or in the Blocks Editor. The view can be set to follow links when they are tapped, and users can fill in Web forms. Warning: This is not a full browser. For example, pressing the phone's hardware Back key will exit the app, rather than move back in the browser history.

You can use the WebViewer.WebViewString property to communicate between your app and Javascript code running in the Webviewer page. In the app, you get and set WebViewString. In the WebViewer, you include Javascript that references the window.Makeroid object, using the methoods _getWebViewString()_ and _setWebViewString(text)_. 

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

Get the result of the evaluated JS

[[Event('Web Viewer', 'After JS Evaluated', 'result')]]

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|


### Cookies Removed

This event return true when the cookies have been successfully removed. If the cookies was successfully cleared then the next run returns false as status, if in this time no new cookies was set.

[[Event('Web Viewer', 'Cookies Removed', 'success')]]

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|


### On Console Message

Get webpage console output

[[Event('Web Viewer', 'On Console Message', 'message', 'lineNumber', 'sourceId')]]

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|line Number|<span class="chip chip-number">Number</span>|
|source Id|<span class="chip chip-text">Text</span>|


### On Download Start

Event for listening download links.

[[Event('Web Viewer', 'On Download Start', 'url', 'contentDisposition', 'mimetype', 'contentLength')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|content Disposition|<span class="chip chip-text">Text</span>|
|mime Type|<span class="chip chip-text">Text</span>|
|content Length|<span class="chip chip-number">Number</span>|


### Page Loaded

Triggers when page finished loading

[[Event('Web Viewer', 'Page Loaded')]]

### Progress Changed

Event to detect that the loading progress has changed.

[[Event('Web Viewer', 'Progress Changed', 'progress')]]

| Params | []() |
|--------|------|
|progress|<span class="chip chip-number">Number</span>|


### Web View String Change

When the JavaScript calls AppInventor.setWebViewString this event is run.

[[Event('Web Viewer', 'Web View String Change', 'value')]]

| Params | []() |
|--------|------|
|value|<span class="chip chip-text">Text</span>|


## Methods

### Can Go Back

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the WebViewer can go back in the history list.

[[Method('Web Viewer', 'Can Go Back', True)]]

### Can Go Back Or Forward

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the WebViewer can go back or forward the number of steps in the history list.

[[Method('Web Viewer', 'Can Go Back Or Forward', True, 'steps')]]

| Params | []() |
|--------|------|
|steps|<span class="chip chip-number">Number</span>|


### Can Go Forward

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the WebViewer can go forward in the history list.

[[Method('Web Viewer', 'Can Go Forward', True)]]

### Clear Caches

Clear WebView caches.

[[Method('Web Viewer', 'Clear Caches', False)]]

### Clear Cookies

Start to clear the WebView cookies.

[[Method('Web Viewer', 'Clear Cookies', False)]]

### Clear Locations

Clear stored location permissions.

[[Method('Web Viewer', 'Clear Locations', False)]]

### Evaluate JS

Evaluate JS in the context of the current page

[[Method('Web Viewer', 'Evaluate JS', False, 'script')]]

| Params | []() |
|--------|------|
|script|<span class="chip chip-text">Text</span>|


### Go Back

Go back to the previous page in the history list. Does nothing if there is no previous page.

[[Method('Web Viewer', 'Go Back', False)]]

### Go Back Or Forward

Go forward or backward a number of steps away from the current page. Steps is negative if backward and positive if forward.

[[Method('Web Viewer', 'Go Back Or Forward', False, 'steps')]]

| Params | []() |
|--------|------|
|steps|<span class="chip chip-number">Number</span>|


### Go Forward

Go forward to the next page in the history list. Does nothing if there is no next page.

[[Method('Web Viewer', 'Go Forward', False)]]

### Go Home

Loads the home URL page. This happens automatically when the home URL is changed.

[[Method('Web Viewer', 'Go Home', False)]]

### Go To URL

Load the page at the given URL.

[[Method('Web Viewer', 'Go To URL', False, 'url')]]

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|


### Load HTML

Load HTML content using Base64-encoded data URI scheme

[[Method('Web Viewer', 'Load HTML', False, 'html')]]

| Params | []() |
|--------|------|
|html|<span class="chip chip-text">Text</span>|


### Reload

Reloads the current page

[[Method('Web Viewer', 'Reload', False)]]

### Stop Loading

Stops the current load.

[[Method('Web Viewer', 'Stop Loading', False)]]

## Properties

### Desktop Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>false</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Get/Set Desktop mode by altering the user agent string.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Desktop Mode')]]

### Enable JavaScript

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable/Disable JavaScript. Enabled by default

[[PropertyBlockGetterAndSetter('Web Viewer', 'Enable JavaScript')]]

### Follow Links

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Determines whether to follow links when they are tapped in the WebViewer. If you follow links, you can use GoBack and GoForward to navigate the browser history.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Follow Links')]]

### Home Url

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

URL of the page the WebViewer should initially open to. Setting this will load the page.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Home Url')]]

### Ignore SSL Errors

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Determine whether or not to ignore SSL errors. Set to true to ignore errors. Use this to accept self signed certificates from websites.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Ignore SSL Errors')]]

### Load Images

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Whether or not to automatically load images

[[PropertyBlockGetter('Web Viewer', 'Load Images')]]

### Prompt for Permission

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

If True, then prompt the user of the WebView to give permission to access the geolocation API. If False, then assume permission is granted.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Prompt for Permission')]]

### Scrollbar

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether to display a scrollbar

[[PropertyBlockGetterAndSetter('Web Viewer', 'Scrollbar')]]

### Use External Browser

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Open a link in the webviewer page using the external browser. If true the page will be loaded in the external browser and not in the webviewer itself.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Use External Browser')]]

### User Agent

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Get User Agent

[[PropertyBlockGetterAndSetter('Web Viewer', 'User Agent')]]

### Uses Location

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

 <small>Available as ^^Advanced^^ Property</small>

Whether or not to give the application permission to use the Javascript geolocation API. This property is available only in the designer.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Uses Location')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Visible')]]

### Zoom Display

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Show or Hide the zoom display.

[[PropertyBlockGetter('Web Viewer', 'Zoom Display')]]

### Zoom Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enable or Disable pinch zooming. This effects both pinch zooming and the zoom controls.

[[PropertyBlockGetter('Web Viewer', 'Zoom Enabled')]]

### Zoom Percent

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The zoom of the page in percent %

[[PropertyBlockGetter('Web Viewer', 'Zoom Percent')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Column property getter method.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Column')]]

### Current Page Title

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Title of the page currently viewed

[[PropertyBlockGetter('Web Viewer', 'Current Page Title')]]

### Current URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

URL of the page currently viewed. This could be different from the Home URL if new pages were visited by following links.

[[PropertyBlockGetter('Web Viewer', 'Current URL')]]

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height, measured in pixels.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Blocks</span> 

Row property getter method.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Row')]]

### Web View String

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Gets the WebView's String, which is viewable through Javascript in the WebView as the window.AppInventor object

[[PropertyBlockGetterAndSetter('Web Viewer', 'Web View String')]]

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width, measured in pixels.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Web Viewer', 'Width Percent')]]