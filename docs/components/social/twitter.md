# Twitter

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Social**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">4</span>|

:mag: {>>Non-Visible component<<}

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

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)

## Events

### Direct Messages Received

This event is raised when the recent messages requested through `` RequestDirectMessages `` have been retrieved. A list of the messages can then be found in the `` messages `` parameter or the `` Messages `` property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Direct%20Messages%20Received%22,%20%22param%22:%20%5B%22messages%22%5D%7D"></div>

| Params | []() |
|--------|------|
|messages|<span class="chip chip-list">List</span>|

### Followers Received

This event is raised when all of the followers of the logged-in user requested through `` RequestFollowers `` have been retrieved. A list of the followers can then be found in the `` followers `` parameter or the `` Followers `` property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Followers%20Received%22,%20%22param%22:%20%5B%22followers%202%22%5D%7D"></div>

| Params | []() |
|--------|------|
|followers 2|<span class="chip chip-list">List</span>|

### Friend Timeline Received

This event is raised when the messages requested through `` RequestFriendTimeline `` have been retrieved. The `` timeline `` parameter and the `` Timeline `` property will contain a list of lists, where each sub-list contains a status update of the form (username message)

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Friend%20Timeline%20Received%22,%20%22param%22:%20%5B%22timeline%22%5D%7D"></div>

| Params | []() |
|--------|------|
|timeline|<span class="chip chip-list">List</span>|

### Is Authorized

This event is raised after the program calls `` Authorize `` if the authorization was successful. It is also called after a call to `` CheckAuthorized `` if we already have a valid access token. After this event has been raised, any other method for this component can be called.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Is%20Authorized%22,%20%22param%22:%20%5B%5D%7D"></div>

### Mentions Received

This event is raised when the mentions of the logged-in user requested through `` RequestMentions `` have been retrieved. A list of the mentions can then be found in the `` mentions `` parameter or the `` Mentions `` property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Mentions%20Received%22,%20%22param%22:%20%5B%22mentions%22%5D%7D"></div>

| Params | []() |
|--------|------|
|mentions|<span class="chip chip-list">List</span>|

### Search Successful

This event is raised when the results of the search requested through `` SearchSuccessful `` have been retrieved. A list of the results can then be found in the `` results `` parameter or the `` Results `` property.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Search%20Successful%22,%20%22param%22:%20%5B%22search%20Results%22%5D%7D"></div>

| Params | []() |
|--------|------|
|search Results|<span class="chip chip-list">List</span>|

## Methods

### Authorize

Redirects user to login to Twitter via the Web browser using the OAuth protocol if we don't already have authorization.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Authorize%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Check Authorized

Checks whether we already have access, and if so, causes IsAuthorized event handler to be called.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Check%20Authorized%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### De Authorize

Removes Twitter authorization from this running app instance

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22De%20Authorize%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Direct Message

This sends a direct (private) message to the specified user. The message will be trimmed if it exceeds 160characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Direct%20Message%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%22,%20%22message%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user|<span class="chip chip-text">Text</span>|
|message|<span class="chip chip-text">Text</span>|

### Follow

Starts following a user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Follow%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user|<span class="chip chip-text">Text</span>|

### Login

Twitter's API no longer supports login via username and password. Use the Authorize call instead.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Login%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22username%22,%20%22password%22%5D%7D"></div>

| Params | []() |
|--------|------|
|username|<span class="chip chip-text">Text</span>|
|password|<span class="chip chip-text">Text</span>|

### Request Direct Messages

Requests the 20 most recent direct messages sent to the logged-in user. When the messages have been retrieved, the system will raise the `` DirectMessagesReceived `` event and set the `` DirectMessages `` property to the list of messages.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Request%20Direct%20Messages%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Request Followers

Gets who is following you.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Request%20Followers%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Request Friend Timeline

Gets the most recent 20 messages in the user's timeline.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Request%20Friend%20Timeline%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Request Mentions

Requests the 20 most recent mentions of the logged-in user. When the mentions have been retrieved, the system will raise the `` MentionsReceived `` event and set the `` Mentions `` property to the list of mentions.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Request%20Mentions%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Search Twitter

This searches Twitter for the given String query.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Search%20Twitter%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22query%22%5D%7D"></div>

| Params | []() |
|--------|------|
|query|<span class="chip chip-text">Text</span>|

### Stop Following

Stops following a user.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Stop%20Following%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22user%22%5D%7D"></div>

| Params | []() |
|--------|------|
|user|<span class="chip chip-text">Text</span>|

### Tweet

This sends a tweet as the logged-in user with the specified Text, which will be trimmed if it exceeds 160 characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Tweet%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22status%22%5D%7D"></div>

| Params | []() |
|--------|------|
|status|<span class="chip chip-text">Text</span>|

### Tweet With Image

This sends a tweet as the logged-in user with the specified Text and a path to the image to be uploaded, which will be trimmed if it exceeds 160 characters. If an image is not found or invalid, only the text will be tweeted.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Tweet%20With%20Image%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22status%22,%20%22image%20Path%22%5D%7D"></div>

| Params | []() |
|--------|------|
|status|<span class="chip chip-text">Text</span>|
|image Path|<span class="chip chip-text">Text</span>|

## Properties

### Consumer Key

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

ConsumerKey property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Consumer%20Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Consumer%20Key%22,%20%22getter%22:%20false%7D"></div>

### Consumer Secret

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

ConsumerSecret property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Consumer%20Secret%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Consumer%20Secret%22,%20%22getter%22:%20false%7D"></div>

### Direct Messages

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

This property contains a list of the most recent messages mentioning the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` Authorized `` event.
 3.    Call the `` RequestDirectMessages `` method.
 4.    Wait for the `` DirectMessagesReceived `` event.

The value of this property will then be set to the list of direct messages retrieved (and maintain that value until any subsequent call to `` RequestDirectMessages ``).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Direct%20Messages%22,%20%22getter%22:%20true%7D"></div>

### Followers

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

This property contains a list of the followers of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestFollowers `` method.
 4.    Wait for the `` FollowersReceived `` event.

The value of this property will then be set to the list of followers (and maintain its value until any subsequent call to `` RequestFollowers ``).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Followers%22,%20%22getter%22:%20true%7D"></div>

### Friend Time line

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

This property contains the 20 most recent messages of users being followed. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Specify users to follow with one or more calls to the `` Follow `` method.
 4.    Call the `` RequestFriendTimeline `` method.
 5.    Wait for the `` FriendTimelineReceived `` event.
 

The value of this property will then be set to the list of messages (and maintain its value until any subsequent call to `` RequestFriendTimeline ``.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Friend%20Time%20line%22,%20%22getter%22:%20true%7D"></div>

### Mentions

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

This property contains a list of mentions of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestMentions `` method.
 4.    Wait for the `` MentionsReceived `` event.

The value of this property will then be set to the list of mentions (and will maintain its value until any subsequent calls to `` RequestMentions ``).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Mentions%22,%20%22getter%22:%20true%7D"></div>

### Search Results

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-list">List</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

This property, which is initially empty, is set to a list of search results after the program: 

1.   Calls the `` SearchTwitter `` method.
 2.   Waits for the `` SearchSuccessful `` event.

The value of the property will then be the same as the parameter to `` SearchSuccessful ``. Note that it is not necessary to call the `` Authorize `` method before calling `` SearchTwitter ``.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Search%20Results%22,%20%22getter%22:%20true%7D"></div>

### TwitPic_API_Key

:warning: ==**Deprecated**==

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

TwitPicAPIkey property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22TwitPic_API_Key%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22TwitPic_API_Key%22,%20%22getter%22:%20false%7D"></div>

### Username

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span></span>

The user name of the authorized user. Empty if there is no authorized user.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Twitter%22,%20%22name%22:%20%22Username%22,%20%22getter%22:%20true%7D"></div>
