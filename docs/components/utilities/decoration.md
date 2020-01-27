# Decoration

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Utilities**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

## Overview

A non-visible component that modifies other components'' padding, margins, and other visual properties.

## Methods

### Set Margin

Margin is a way for a component to enforce some distance from others components. By specifying margin for a component, we say that keep this much distance from this component.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Decoration%22,%20%22name%22:%20%22Set%20Margin%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|values|<span class="chip chip-text">Text</span>|

### Set Padding

The padding around the component. Padding is the space inside the border, between the border and the actual component content. Use single number like 5 to specify padding for top, left, bottom, righ. You can also use 4 different numbers like 5,0,10,0 for top, left, bottom right.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Decoration%22,%20%22name%22:%20%22Set%20Padding%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22,%20%22values%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|values|<span class="chip chip-text">Text</span>|

### Set Shape

This block allows you to create a rectangle or round shape for the visible component. You can use Color for backgroundColor and borderColor.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Decoration%22,%20%22name%22:%20%22Set%20Shape%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22component%22,%20%22background%20Color%22,%20%22border%20Color%22,%20%22is%20Round%22%5D%7D"></div>

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|background Color|<span class="chip chip-number">Number</span>|
|border Color|<span class="chip chip-number">Number</span>|
|is Round|<span class="chip chip-boolean">Boolean</span>|
