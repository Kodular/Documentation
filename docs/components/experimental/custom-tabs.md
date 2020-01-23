# Custom Tabs

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Experimental|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that opens web pages as custom tabs on Google Chrome.

## Methods

### Add Menu Item Open App

Use this block to add a menu item with the given title to open any app you want with the package name. The package name can be as example 'com.instagram.android' to open Instagram on the menu item click. If the app is not installed the menu item will not be added.

[[Method('Custom Tabs', 'Add Menu Item Open App', False, 'title', 'packageName')]]

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|package Name|<span class="chip chip-text">Text</span>|


### Add Menu Item Open Page

Use this block to add a menu item with the given title and page link. The page can be as example 'https://www.instagram.com/kodular/'. If the user have Instagram installed,the page will then be opened in the official Instagram app. Else in the default browser.

[[Method('Custom Tabs', 'Add Menu Item Open Page', False, 'title', 'page')]]

| Params | []() |
|--------|------|
|title|<span class="chip chip-text">Text</span>|
|page|<span class="chip chip-text">Text</span>|


### Open Custom Tab

Use this block to open the custom tab.

[[Method('Custom Tabs', 'Open Custom Tab', False)]]

## Properties

### Default Share Menu Item

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether or not to add the default share menu item into the menu.

[[PropertyBlockGetterAndSetter('Custom Tabs', 'Default Share Menu Item')]]

### Instant Apps Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether or not to enable instant apps.

[[PropertyBlockGetterAndSetter('Custom Tabs', 'Instant Apps Enabled')]]

### Show Title

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether or not to show the title.

[[PropertyBlockGetterAndSetter('Custom Tabs', 'Show Title')]]

### Toolbar Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #3F51B5;">Default: <i>#3F51B5FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the color of the toolbar.

[[PropertyBlockGetterAndSetter('Custom Tabs', 'Toolbar Color')]]

### URL

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The URL to load in the custom tab. The URL must start with 'http://' or 'https://'

[[PropertyBlockGetterAndSetter('Custom Tabs', 'URL')]]

### Url Bar Hiding On Scroll

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether or not to hide the url bar on scrolling.

[[PropertyBlockGetterAndSetter('Custom Tabs', 'Url Bar Hiding On Scroll')]]