# Twitter

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|4|API 19, Android 4.4 - 4.4.4 KitKat|

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

| Params | []() |
|--------|------|
|messages|List|


This event is raised when the recent messages requested through `` RequestDirectMessages `` have been retrieved. A list of the messages can then be found in the `` messages `` parameter or the `` Messages `` property.

### Followers Received

[[Event('Twitter', 'Followers Received', 'followers2')]]

| Params | []() |
|--------|------|
|followers 2|List|


This event is raised when all of the followers of the logged-in user requested through `` RequestFollowers `` have been retrieved. A list of the followers can then be found in the `` followers `` parameter or the `` Followers `` property.

### Friend Timeline Received

[[Event('Twitter', 'Friend Timeline Received', 'timeline')]]

| Params | []() |
|--------|------|
|timeline|List|


This event is raised when the messages requested through `` RequestFriendTimeline `` have been retrieved. The `` timeline `` parameter and the `` Timeline `` property will contain a list of lists, where each sub-list contains a status update of the form (username message)

### Is Authorized

[[Event('Twitter', 'Is Authorized')]]

This event is raised after the program calls `` Authorize `` if the authorization was successful. It is also called after a call to `` CheckAuthorized `` if we already have a valid access token. After this event has been raised, any other method for this component can be called.

### Mentions Received

[[Event('Twitter', 'Mentions Received', 'mentions')]]

| Params | []() |
|--------|------|
|mentions|List|


This event is raised when the mentions of the logged-in user requested through `` RequestMentions `` have been retrieved. A list of the mentions can then be found in the `` mentions `` parameter or the `` Mentions `` property.

### Search Successful

[[Event('Twitter', 'Search Successful', 'searchResults')]]

| Params | []() |
|--------|------|
|search Results|List|


This event is raised when the results of the search requested through `` SearchSuccessful `` have been retrieved. A list of the results can then be found in the `` results `` parameter or the `` Results `` property.

## Methods

### Authorize

[[Method('Twitter', 'Authorize', False)]]

Redirects user to login to Twitter via the Web browser using the OAuth protocol if we don't already have authorization.

### Check Authorized

[[Method('Twitter', 'Check Authorized', False)]]

Checks whether we already have access, and if so, causes IsAuthorized event handler to be called.

### De Authorize

[[Method('Twitter', 'De Authorize', False)]]

Removes Twitter authorization from this running app instance

### Direct Message

[[Method('Twitter', 'Direct Message', False, 'user', 'message')]]

| Params | []() |
|--------|------|
|user|Text|
|message|Text|


This sends a direct (private) message to the specified user. The message will be trimmed if it exceeds 160characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Follow

[[Method('Twitter', 'Follow', False, 'user')]]

| Params | []() |
|--------|------|
|user|Text|


Starts following a user.

### Login

[[Method('Twitter', 'Login', False, 'username', 'password')]]

| Params | []() |
|--------|------|
|username|Text|
|password|Text|


Twitter's API no longer supports login via username and password. Use the Authorize call instead.

### Request Direct Messages

[[Method('Twitter', 'Request Direct Messages', False)]]

Requests the 20 most recent direct messages sent to the logged-in user. When the messages have been retrieved, the system will raise the `` DirectMessagesReceived `` event and set the `` DirectMessages `` property to the list of messages.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Request Followers

[[Method('Twitter', 'Request Followers', False)]]

Gets who is following you.

### Request Friend Timeline

[[Method('Twitter', 'Request Friend Timeline', False)]]

Gets the most recent 20 messages in the user's timeline.

### Request Mentions

[[Method('Twitter', 'Request Mentions', False)]]

Requests the 20 most recent mentions of the logged-in user. When the mentions have been retrieved, the system will raise the `` MentionsReceived `` event and set the `` Mentions `` property to the list of mentions.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Search Twitter

[[Method('Twitter', 'Search Twitter', False, 'query')]]

| Params | []() |
|--------|------|
|query|Text|


This searches Twitter for the given String query.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Stop Following

[[Method('Twitter', 'Stop Following', False, 'user')]]

| Params | []() |
|--------|------|
|user|Text|


Stops following a user.

### Tweet

[[Method('Twitter', 'Tweet', False, 'status')]]

| Params | []() |
|--------|------|
|status|Text|


This sends a tweet as the logged-in user with the specified Text, which will be trimmed if it exceeds 160 characters. 

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

### Tweet With Image

[[Method('Twitter', 'Tweet With Image', False, 'status', 'imagePath')]]

| Params | []() |
|--------|------|
|status|Text|
|image Path|Text|


This sends a tweet as the logged-in user with the specified Text and a path to the image to be uploaded, which will be trimmed if it exceeds 160 characters. If an image is not found or invalid, only the text will be tweeted.

<u>Requirements</u>: This should only be called after the `` IsAuthorized `` event has been raised, indicating that the user has successfully logged in to Twitter.

## Properties

### Consumer Key

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

ConsumerKey property getter method.

[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Key')]]

### Consumer Secret

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

ConsumerSecret property getter method.

[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Secret')]]

### Direct Messages

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This property contains a list of the most recent messages mentioning the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` Authorized `` event.
 3.    Call the `` RequestDirectMessages `` method.
 4.    Wait for the `` DirectMessagesReceived `` event.

The value of this property will then be set to the list of direct messages retrieved (and maintain that value until any subsequent call to `` RequestDirectMessages ``).

[[PropertyBlockGetter('Twitter', 'Direct Messages')]]

### Followers

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This property contains a list of the followers of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestFollowers `` method.
 4.    Wait for the `` FollowersReceived `` event.

The value of this property will then be set to the list of followers (and maintain its value until any subsequent call to `` RequestFollowers ``).

[[PropertyBlockGetter('Twitter', 'Followers')]]

### Friend Time line

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This property contains the 20 most recent messages of users being followed. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Specify users to follow with one or more calls to the `` Follow `` method.
 4.    Call the `` RequestFriendTimeline `` method.
 5.    Wait for the `` FriendTimelineReceived `` event.
 

The value of this property will then be set to the list of messages (and maintain its value until any subsequent call to `` RequestFriendTimeline ``.

[[PropertyBlockGetter('Twitter', 'Friend Time line')]]

### Mentions

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This property contains a list of mentions of the logged-in user. Initially, the list is empty. To set it, the program must: 

 1.    Call the `` Authorize `` method.
 2.    Wait for the `` IsAuthorized `` event.
 3.    Call the `` RequestMentions `` method.
 4.    Wait for the `` MentionsReceived `` event.

The value of this property will then be set to the list of mentions (and will maintain its value until any subsequent calls to `` RequestMentions ``).

[[PropertyBlockGetter('Twitter', 'Mentions')]]

### Search Results

<span class="chip chip-list">List</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

This property, which is initially empty, is set to a list of search results after the program: 

1.   Calls the `` SearchTwitter `` method.
 2.   Waits for the `` SearchSuccessful `` event.

The value of the property will then be the same as the parameter to `` SearchSuccessful ``. Note that it is not necessary to call the `` Authorize `` method before calling `` SearchTwitter ``.

[[PropertyBlockGetter('Twitter', 'Search Results')]]

### TwitPic_API_Key

:warning: ==**Deprecated**==

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

TwitPicAPIkey property getter method.

[[PropertyBlockGetterAndSetter('Twitter', 'TwitPic_API_Key')]]

### Username

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The user name of the authorized user. Empty if there is no authorized user.

[[PropertyBlockGetter('Twitter', 'Username')]]