# Decoration

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Utilities|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that modifies other components'' padding, margins, and other visual properties.

## Methods

### Set Margin

Margin is a way for a component to enforce some distance from others components. By specifying margin for a component, we say that keep this much distance from this component.

[[Method('Decoration', 'Set Margin', False, 'component', 'values')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|values|<span class="chip chip-text">Text</span>|


### Set Padding

The padding around the component. Padding is the space inside the border, between the border and the actual component content. Use single number like 5 to specify padding for top, left, bottom, righ. You can also use 4 different numbers like 5,0,10,0 for top, left, bottom right.

[[Method('Decoration', 'Set Padding', False, 'component', 'values')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|values|<span class="chip chip-text">Text</span>|


### Set Shape

This block allows you to create a rectangle or round shape for the visible component. You can use Color for backgroundColor and borderColor.

[[Method('Decoration', 'Set Shape', False, 'component', 'backgroundColor', 'borderColor', 'isRound')]]

| Params | []() |
|--------|------|
|component|<span class="chip chip-component">Component</span>|
|background Color|<span class="chip chip-number">Number</span>|
|border Color|<span class="chip chip-number">Number</span>|
|is Round|<span class="chip chip-boolean">Boolean</span>|
