# Custom Tabs

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Experimental**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

## Overview

A non-visible component that opens web pages as custom tabs on Google Chrome.

## Methods

### Add Menu Item Open App

Use this block to add a menu item with the given title to open any app you want with the package name. The package name can be as example 'com.instagram.android' to open Instagram on the menu item click. If the app is not installed the menu item will not be added.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Add%20Menu%20Item%20Open%20App%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22package%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|package Name|<span class="chip chip-text">Text</span>|

### Add Menu Item Open Page

Use this block to add a menu item with the given title and page link. The page can be as example 'https://www.instagram.com/kodular/'. If the user have Instagram installed,the page will then be opened in the official Instagram app. Else in the default browser.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Add%20Menu%20Item%20Open%20Page%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22title%22,%20%22page%22%5D%7D"></div>

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|page|<span class="chip chip-text">Text</span>|

### Open Custom Tab

Use this block to open the custom tab.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Open%20Custom%20Tab%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Default Share Menu Item

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Whether or not to add the default share menu item into the menu.

### Instant Apps Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether or not to enable instant apps.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Instant%20Apps%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Instant%20Apps%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Show Title

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Whether or not to show the title.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Show%20Title%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Show%20Title%22,%20%22getter%22:%20false%7D"></div>

### Toolbar Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#3F51B5FF</i>&nbsp;<span style="width: 16px; height: 16px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #3F51B5;"></span></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the color of the toolbar.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Toolbar%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22Toolbar%20Color%22,%20%22getter%22:%20false%7D"></div>

### URL

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

The URL to load in the custom tab. The URL must start with 'http://' or 'https://'

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22URL%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Custom%20Tabs%22,%20%22name%22:%20%22URL%22,%20%22getter%22:%20false%7D"></div>

### Url Bar Hiding On Scroll

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>          <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> </span>

Whether or not to hide the url bar on scrolling.
