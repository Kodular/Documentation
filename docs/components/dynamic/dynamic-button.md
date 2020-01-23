# Dynamic Button

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Dynamic Components|4|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component to create dynamic buttons in Arrangements

## Events

### Button Click

[[Event('Dynamic Button', 'Button Click', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Trigger when a Dynamic Button is clicked.

### Button Long Click

[[Event('Dynamic Button', 'Button Long Click', 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Trigger when a Dynamic Button is long clicked.

## Methods

### Create Button

[[Method('Dynamic Button', 'Create Button', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|


Create a Dynamic Button.

### Delete Button

:warning: ==**Deprecated**==

[[Method('Dynamic Button', 'Delete Button', False, 'id', 'arrangement')]]

| Params | []() |
|--------|------|
|id|Number|
|arrangement|Component|


This block is DEPRECATED! Please use instead the 'Delete Button' block without arrangement parameter.

### Delete Button

[[Method('Dynamic Button', 'Delete Button', False, 'id')]]

| Params | []() |
|--------|------|
|id|Number|


Delete a Dynamic Button.

### Get Button By Id

[[Method('Dynamic Button', 'Get Button By Id', True, 'id')]]

{>>Returns `component`<<}

| Params | []() |
|--------|------|
|id|Number|


Returns the button referenced by its id.

### Get Enabled

[[Method('Dynamic Button', 'Get Enabled', True, 'id')]]

{>>Returns `boolean`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Enabled status of a button.

### Get Font Size

[[Method('Dynamic Button', 'Get Font Size', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Font Size of a button.

### Get Height

[[Method('Dynamic Button', 'Get Height', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Height of a button.

### Get Text

[[Method('Dynamic Button', 'Get Text', True, 'id')]]

{>>Returns `text`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Text of a button.

### Get Width

[[Method('Dynamic Button', 'Get Width', True, 'id')]]

{>>Returns `number`<<}

| Params | []() |
|--------|------|
|id|Number|


Get the Width of a button.

### Set Background Color

[[Method('Dynamic Button', 'Set Background Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Background Color of a button.

### Set Enabled

[[Method('Dynamic Button', 'Set Enabled', False, 'id', 'enabled')]]

| Params | []() |
|--------|------|
|id|Number|
|enabled|Boolean|


Update the Enabled status of a button.

### Set Font

[[Method('Dynamic Button', 'Set Font', False, 'id', 'bold', 'italic')]]

| Params | []() |
|--------|------|
|id|Number|
|bold|Boolean|
|italic|Boolean|


Update the Font of a button.

### Set Font Size

[[Method('Dynamic Button', 'Set Font Size', False, 'id', 'size')]]

| Params | []() |
|--------|------|
|id|Number|
|size|Number|


Update the Font Size of a button.

### Set Height

[[Method('Dynamic Button', 'Set Height', False, 'id', 'height')]]

| Params | []() |
|--------|------|
|id|Number|
|height|Number|


Update the Height of a button.

### Set Text

[[Method('Dynamic Button', 'Set Text', False, 'id', 'text')]]

| Params | []() |
|--------|------|
|id|Number|
|text|Text|


Update the Text of a button.

### Set Text Color

[[Method('Dynamic Button', 'Set Text Color', False, 'id', 'color')]]

| Params | []() |
|--------|------|
|id|Number|
|color|Number|


Update the Text Color of a button.

### Set Width

[[Method('Dynamic Button', 'Set Width', False, 'id', 'width')]]

| Params | []() |
|--------|------|
|id|Number|
|width|Number|


Update the Width of a button.