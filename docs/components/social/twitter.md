# Twitter

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A non-visible component that enables communication with <a href="http://www.twitter.com" target="_blank">Twitter</a>. Once a user has logged into their Twitter account (and the authorization has been confirmed successful by the `` IsAuthorized `` event), many more operations are available:

*    Searching Twitter for tweets or labels (`` SearchTwitter ``)
*    Sending a Tweet (`` Tweet ``) 
*    Sending a Tweet with an Image (`` TweetWithImage ``) 
*    Directing a message to a specific user (`` DirectMessage ``)
*    Receiving the most recent messages directed to the logged-in user (`` RequestDirectMessages ``)
*    Following a specific user (`` Follow ``)
*    Ceasing to follow a specific user (`` StopFollowing ``)
*    Getting a list of users following the logged-in user (`` RequestFollowers ``)
*    Getting the most recent messages of users followed by the logged-in user (`` RequestFriendTimeline ``)
*    Getting the most recent mentions of the logged-in user (`` RequestMentions ``)

You must obtain a Consumer Key and Consumer Secret for Twitter authorization specific to your app from http://twitter.com/oauth\_clients/new

## Events

### Direct Messages Received

[[Event('Twitter', 'Direct Messages Received', 'messages')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |messages|`list`|


This event is raised when the recent messages requested through `` RequestDirectMessages `` have been retrieved. A list of the messages can then be found in the `` messages `` parameter or the `` Messages `` property.

### Followers Received

[[Event('Twitter', 'Followers Received', 'followers2')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |followers 2|`list`|


This event is raised when all of the followers of the logged-in user requested through `` RequestFollowers `` have been retrieved. A list of the followers can then be found in the `` followers `` parameter or the `` Followers `` property.

### Friend Timeline Received

[[Event('Twitter', 'Friend Timeline Received', 'timeline')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |timeline|`list`|


This event is raised when the messages requested through `` RequestFriendTimeline `` have been retrieved. The `` timeline `` parameter and the `` Timeline `` property will contain a list of lists, where each sub-list contains a status update of the form (username message)

### Is Authorized

[[Event('Twitter', 'Is Authorized')]]

This event is raised after the program calls `` Authorize `` if the authorization was successful. It is also called after a call to `` CheckAuthorized `` if we already have a valid access token. After this event has been raised, any other method for this component can be called.

### Mentions Received

[[Event('Twitter', 'Mentions Received', 'mentions')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |mentions|`list`|


This event is raised when the mentions of the logged-in user requested through `` RequestMentions `` have been retrieved. A list of the mentions can then be found in the `` mentions `` parameter or the `` Mentions `` property.

### Search Successful

[[Event('Twitter', 'Search Successful', 'searchResults')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |search Results|`list`|


This event is raised when the results of the search requested through `` SearchSuccessful `` have been retrieved. A list of the results can then be found in the `` results `` parameter or the `` Results `` property.

## Methods

### Authorize

_Block preview not available_

Redirects user to login to Twitter via the Web browser using the OAuth protocol if we don't already have authorization.

### CheckAuthorized

_Block preview not available_

Checks whether we already have access, and if so, causes IsAuthorized event handler to be called.

### DeAuthorize

_Block preview not available_

Removes Twitter authorization from this running app instance

### DirectMessage

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user|`text`|
    |message|`text`|


This sends a direct (private) message to the specified user. The message will be trimmed if it exceeds 160characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Follow

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user|`text`|


Starts following a user.

### Login

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |username|`text`|
    |password|`text`|


Twitter's API no longer supports login via username and password. Use the Authorize call instead.

### RequestDirectMessages

_Block preview not available_

Requests the 20 most recent direct messages sent to the logged-in user. When the messages have been retrieved, the system will raise the `` DirectMessagesReceived `` event and set the `` DirectMessages `` property to the list of messages.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### RequestFollowers

_Block preview not available_

Gets who is following you.

### RequestFriendTimeline

_Block preview not available_

Gets the most recent 20 messages in the user's timeline.

### RequestMentions

_Block preview not available_

Requests the 20 most recent mentions of the logged-in user. When the mentions have been retrieved, the system will raise the `` MentionsReceived `` event and set the `` Mentions `` property to the list of mentions.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### SearchTwitter

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |query|`text`|


This searches Twitter for the given String query.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### StopFollowing

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |user|`text`|


Stops following a user.

### Tweet

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |status|`text`|


This sends a tweet as the logged-in user with the specified Text, which will be trimmed if it exceeds 160 characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### TweetWithImage

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |status|`text`|
    |image Path|`text`|


This sends a tweet as the logged-in user with the specified Text and a path to the image to be uploaded, which will be trimmed if it exceeds 160 characters. If an image is not found or invalid, only the text will be tweeted.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

## Properties

### Consumer Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Key')]]

| Type |
|:----:|
|text|

ConsumerKey property getter method.

### Consumer Secret

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Secret')]]

| Type |
|:----:|
|text|

ConsumerSecret property getter method.

### Direct Messages

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Direct Messages')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains a list of the most recent messages mentioning the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` Authorized `` event.
 3.    Call the `` RequestDirectMessages `` method.
 4.    Wait for the `` DirectMessagesReceived `` event.

The value of this property will then be set to the list of direct messages retrieved (and maintain that value until any subsequent call to `` RequestDirectMessages ``).

### Followers

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Followers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains a list of the followers of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestFollowers `` method.
 4.    Wait for the `` FollowersReceived `` event.

The value of this property will then be set to the list of followers (and maintain its value until any subsequent call to `` RequestFollowers ``).

### Friend Time line

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Friend Time line')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains the 20 most recent messages of users being followed. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Specify users to follow with one or more calls to the `` Follow `` method.
 4.    Call the `` RequestFriendTimeline `` method.
 5.    Wait for the `` FriendTimelineReceived `` event.
 

The value of this property will then be set to the list of messages (and maintain its value until any subsequent call to `` RequestFriendTimeline ``.

### Mentions

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Mentions')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains a list of mentions of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestMentions `` method.
 4.    Wait for the `` MentionsReceived `` event.

The value of this property will then be set to the list of mentions (and will maintain its value until any subsequent calls to `` RequestMentions ``).

### Search Results

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Search Results')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property, which is initially empty, is set to a list of search results after the program: 

1.   Calls the `` SearchTwitter `` method.
 2.   Waits for the `` SearchSuccessful `` event.

The value of the property will then be the same as the parameter to `` SearchSuccessful ``. Note that it is not necessary to call the `` Authorize `` method before calling `` SearchTwitter ``.

### TwitPic_API_Key

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'TwitPic_API_Key')]]

| Type | Default |
|:----:|:-------:|
|text|None|

TwitPicAPIkey property getter method.

### Username

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Username')]]

| Type | Default |
|:----:|:-------:|
|text|None|

The user name of the authorized user. Empty if there is no authorized user.