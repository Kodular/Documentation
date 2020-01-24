# Web Viewer

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Layout > Views**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">13</span>|

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

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)

## Events

### After JS Evaluated

Get the result of the evaluated JS

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22After%20JS%20Evaluated%22,%20%22param%22:%20%5B%22result%22%5D%7D"></div>

| Params | []() |
|--------|------|
|result|<span class="chip chip-text">Text</span>|

### Cookies Removed

This event return true when the cookies have been successfully removed. If the cookies was successfully cleared then the next run returns false as status, if in this time no new cookies was set.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Cookies%20Removed%22,%20%22param%22:%20%5B%22success%22%5D%7D"></div>

| Params | []() |
|--------|------|
|success|<span class="chip chip-boolean">Boolean</span>|

### On Console Message

Get webpage console output

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22On%20Console%20Message%22,%20%22param%22:%20%5B%22message%22,%20%22line%20Number%22,%20%22source%20Id%22%5D%7D"></div>

| Params | []() |
|--------|------|
|message|<span class="chip chip-text">Text</span>|
|line Number|<span class="chip chip-number">Number</span>|
|source Id|<span class="chip chip-text">Text</span>|

### On Download Start

Event for listening download links.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22On%20Download%20Start%22,%20%22param%22:%20%5B%22url%22,%20%22content%20Disposition%22,%20%22mime%20Type%22,%20%22content%20Length%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|
|content Disposition|<span class="chip chip-text">Text</span>|
|mime Type|<span class="chip chip-text">Text</span>|
|content Length|<span class="chip chip-number">Number</span>|

### Page Loaded

Triggers when page finished loading

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Page%20Loaded%22,%20%22param%22:%20%5B%5D%7D"></div>

### Progress Changed

Event to detect that the loading progress has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Progress%20Changed%22,%20%22param%22:%20%5B%22progress%22%5D%7D"></div>

| Params | []() |
|--------|------|
|progress|<span class="chip chip-number">Number</span>|

### Web View String Change

When the JavaScript calls AppInventor.setWebViewString this event is run.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Web%20View%20String%20Change%22,%20%22param%22:%20%5B%22value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|value|<span class="chip chip-text">Text</span>|

## Methods

### Can Go Back

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the WebViewer can go back in the history list.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Can%20Go%20Back%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Can Go Back Or Forward

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the WebViewer can go back or forward the number of steps in the history list.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Can%20Go%20Back%20Or%20Forward%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22steps%22%5D%7D"></div>

| Params | []() |
|--------|------|
|steps|<span class="chip chip-number">Number</span>|

### Can Go Forward

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the WebViewer can go forward in the history list.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Can%20Go%20Forward%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Clear Caches

Clear WebView caches.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Clear%20Caches%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Clear Cookies

Start to clear the WebView cookies.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Clear%20Cookies%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Clear Locations

Clear stored location permissions.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Clear%20Locations%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Evaluate JS

Evaluate JS in the context of the current page

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Evaluate%20JS%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22script%22%5D%7D"></div>

| Params | []() |
|--------|------|
|script|<span class="chip chip-text">Text</span>|

### Go Back

Go back to the previous page in the history list. Does nothing if there is no previous page.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Go%20Back%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Go Back Or Forward

Go forward or backward a number of steps away from the current page. Steps is negative if backward and positive if forward.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Go%20Back%20Or%20Forward%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22steps%22%5D%7D"></div>

| Params | []() |
|--------|------|
|steps|<span class="chip chip-number">Number</span>|

### Go Forward

Go forward to the next page in the history list. Does nothing if there is no next page.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Go%20Forward%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Go Home

Loads the home URL page. This happens automatically when the home URL is changed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Go%20Home%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Go To URL

Load the page at the given URL.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Go%20To%20URL%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22url%22%5D%7D"></div>

| Params | []() |
|--------|------|
|url|<span class="chip chip-text">Text</span>|

### Load HTML

Load HTML content using Base64-encoded data URI scheme

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Load%20HTML%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22html%22%5D%7D"></div>

| Params | []() |
|--------|------|
|html|<span class="chip chip-text">Text</span>|

### Reload

Reloads the current page

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Reload%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Stop Loading

Stops the current load.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Stop%20Loading%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Desktop Mode

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>false</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Get/Set Desktop mode by altering the user agent string.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Desktop%20Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Desktop%20Mode%22,%20%22getter%22:%20false%7D"></div>

### Enable JavaScript

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Enable/Disable JavaScript. Enabled by default

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Enable%20JavaScript%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Enable%20JavaScript%22,%20%22getter%22:%20false%7D"></div>

### Follow Links

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Determines whether to follow links when they are tapped in the WebViewer. If you follow links, you can use GoBack and GoForward to navigate the browser history.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Follow%20Links%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Follow%20Links%22,%20%22getter%22:%20false%7D"></div>

### Home Url

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

URL of the page the WebViewer should initially open to. Setting this will load the page.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Home%20Url%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Home%20Url%22,%20%22getter%22:%20false%7D"></div>

### Ignore SSL Errors

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Determine whether or not to ignore SSL errors. Set to true to ignore errors. Use this to accept self signed certificates from websites.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Ignore%20SSL%20Errors%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Ignore%20SSL%20Errors%22,%20%22getter%22:%20false%7D"></div>

### Load Images

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Whether or not to automatically load images

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Load%20Images%22,%20%22getter%22:%20true%7D"></div>

### Prompt for Permission

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

If True, then prompt the user of the WebView to give permission to access the geolocation API. If False, then assume permission is granted.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Prompt%20for%20Permission%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Prompt%20for%20Permission%22,%20%22getter%22:%20false%7D"></div>

### Scrollbar

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether to display a scrollbar

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Scrollbar%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Scrollbar%22,%20%22getter%22:%20false%7D"></div>

### Use External Browser

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Open a link in the webviewer page using the external browser. If true the page will be loaded in the external browser and not in the webviewer itself.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Use%20External%20Browser%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Use%20External%20Browser%22,%20%22getter%22:%20false%7D"></div>

### User Agent

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Get User Agent

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22User%20Agent%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22User%20Agent%22,%20%22getter%22:%20false%7D"></div>

### Uses Location

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Whether or not to give the application permission to use the Javascript geolocation API. This property is available only in the designer.

### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Zoom Display

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Show or Hide the zoom display.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Zoom%20Display%22,%20%22getter%22:%20true%7D"></div>

### Zoom Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Enable or Disable pinch zooming. This effects both pinch zooming and the zoom controls.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Zoom%20Enabled%22,%20%22getter%22:%20true%7D"></div>

### Zoom Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>100</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The zoom of the page in percent %

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Zoom%20Percent%22,%20%22getter%22:%20true%7D"></div>

### Current Page Title

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Title of the page currently viewed

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Current%20Page%20Title%22,%20%22getter%22:%20true%7D"></div>

### Current URL

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

URL of the page currently viewed. This could be different from the Home URL if new pages were visited by following links.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Current%20URL%22,%20%22getter%22:%20true%7D"></div>

### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Web View String

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Gets the WebView's String, which is viewable through Javascript in the WebView as the window.AppInventor object

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Web%20View%20String%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Web%20View%20String%22,%20%22getter%22:%20false%7D"></div>

### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Web%20Viewer%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
