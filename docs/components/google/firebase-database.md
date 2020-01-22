# Firebase Database

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that communicates with a Firebase to store and retrieve information._

## Properties

### Default URL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Default URL')]]

| Type |
|:----:|
|text|

_No description available_

### Developer Bucket

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Developer Bucket')]]

| Type |
|:----:|
|text|

Getter for the DeveloperBucket.

### Firebase Token

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase Token')]]

| Type |
|:----:|
|text|

Returns the FirebaseToken from this FirebaseDB.

### Firebase URL

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Firebase URL')]]

| Type | Default |
|:----:|:-------:|
|text|DEFAULT|

Gets the URL for this FirebaseDB.

### Persist

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Persist')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

If true, variables will retain their values when off-line and the App exits. Values will be uploaded to Firebase the next time the App is run while connected to the network. This is useful for applications which will gather data while not connected to the network. Note: AppendValue and RemoveFirst will not work correctly when off-line, they require a network connection.<br/><br/> <i>Note</i>: If you set Persist on any Firebase component, on any screen, it makes all Firebase components on all screens persistent. This is a limitation of the low level Firebase library. Also be aware that if you want to set persist to true, you should do so before connecting the Companion for incremental development.

### Project Bucket

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Firebase Database', 'Project Bucket')]]

| Type |
|:----:|
|text|

Gets the ProjectBucket for this FirebaseDB.