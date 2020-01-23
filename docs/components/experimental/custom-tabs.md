# Custom Tabs

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|2|API 19 | Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that opens web pages as custom tabs on Google Chrome.

## Methods

### AddMenuItemOpenApp

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |package Name|`text`|


Use this block to add a menu item with the given title to open any app you want with the package name. The package name can be as example 'com.instagram.android' to open Instagram on the menu item click. If the app is not installed the menu item will not be added.

### AddMenuItemOpenPage

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |title|`text`|
    |page|`text`|


Use this block to add a menu item with the given title and page link. The page can be as example 'https://www.instagram.com/kodular/'. If the user have Instagram installed,the page will then be opened in the official Instagram app. Else in the default browser.

### OpenCustomTab

_Block preview not available_

Use this block to open the custom tab.

## Properties

### Default Share Menu Item

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Default Share Menu Item')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether or not to add the default share menu item into the menu.

### Instant Apps Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Instant Apps Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether or not to enable instant apps.

### Show Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Show Title')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether or not to show the title.

### Toolbar Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Toolbar Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

Specifies the color of the toolbar.

### URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'URL')]]

| Type |
|:----:|
|text|

The URL to load in the custom tab. The URL must start with 'http://' or 'https://'

### Url Bar Hiding On Scroll

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Url Bar Hiding On Scroll')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether or not to hide the url bar on scrolling.