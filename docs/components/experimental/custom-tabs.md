# Custom Tabs

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Experimental|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that opens web pages as custom tabs on Google Chrome._

## Methods

### AddMenuItemOpenApp

[[Method('Custom Tabs', 'AddMenuItemOpenApp', false, 'title packageName')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |package Name|`text`|


_Use this block to add a menu item with the given title to open any app you want with the package name. The package name can be as example 'com.instagram.android' to open Instagram on the menu item click. If the app is not installed the menu item will not be added._

### AddMenuItemOpenPage

[[Method('Custom Tabs', 'AddMenuItemOpenPage', false, 'title page')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |title|`text`|
    |page|`text`|


_Use this block to add a menu item with the given title and page link. The page can be as example 'https://www.instagram.com/kodular/'. If the user have Instagram installed,the page will then be opened in the official Instagram app. Else in the default browser._

### OpenCustomTab

[[Method('Custom Tabs', 'OpenCustomTab', false)]]

_Use this block to open the custom tab._

## Properties

### Default Share Menu Item

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Default Share Menu Item')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether or not to add the default share menu item into the menu._

### Instant Apps Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Instant Apps Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether or not to enable instant apps._

### Show Title

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Show Title')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Whether or not to show the title._

### Toolbar Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Toolbar Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF3F51B5|

_Specifies the color of the toolbar._

### URL

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'URL')]]

| Type |
|:----:|
|text|

_The URL to load in the custom tab. The URL must start with 'http://' or 'https://'_

### Url Bar Hiding On Scroll

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Custom Tabs', 'Url Bar Hiding On Scroll')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether or not to hide the url bar on scrolling._