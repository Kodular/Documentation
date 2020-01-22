# Twitter

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Social|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A non-visible component that enables communication with <a href="http://www.twitter.com" target="_blank">Twitter</a>. Once a user has logged into their Twitter account (and the authorization has been confirmed successful by the <code>IsAuthorized</code> event), many more operations are available:<ul><li> Searching Twitter for tweets or labels (<code>SearchTwitter</code>)</li>
<li> Sending a Tweet (<code>Tweet</code>)     </li>
<li> Sending a Tweet with an Image (<code>TweetWithImage</code>)     </li>
<li> Directing a message to a specific user      (<code>DirectMessage</code>)</li>
 <li> Receiving the most recent messages directed to the logged-in user      (<code>RequestDirectMessages</code>)</li>
 <li> Following a specific user (<code>Follow</code>)</li>
<li> Ceasing to follow a specific user (<code>StopFollowing</code>)</li>
<li> Getting a list of users following the logged-in user      (<code>RequestFollowers</code>)</li>
 <li> Getting the most recent messages of users followed by the      logged-in user (<code>RequestFriendTimeline</code>)</li>
 <li> Getting the most recent mentions of the logged-in user      (<code>RequestMentions</code>)</li></ul></p>
 <p>You must obtain a Consumer Key and Consumer Secret for Twitter authorization  specific to your app from http://twitter.com/oauth_clients/new_

## Properties

### Consumer Key

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Key')]]

| Type |
|:----:|
|text|

ConsumerKey property getter method.

### Consumer Secret

<small>Available as Common Property</small>

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

This property contains a list of the most recent messages mentioning the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>Authorized</code> event.</li> <li> Call the <code>RequestDirectMessages</code> method.</li> <li> Wait for the <code>DirectMessagesReceived</code> event.</li></ol>
The value of this property will then be set to the list of direct messages retrieved (and maintain that value until any subsequent call to <code>RequestDirectMessages</code>).

### Followers



:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Followers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains a list of the followers of the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Call the <code>RequestFollowers</code> method.</li> <li> Wait for the <code>FollowersReceived</code> event.</li></ol>
The value of this property will then be set to the list of followers (and maintain its value until any subsequent call to <code>RequestFollowers</code>).

### Friend Time line



:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Friend Time line')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains the 20 most recent messages of users being followed.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Specify users to follow with one or more calls to the <code>Follow</code> method.</li> <li> Call the <code>RequestFriendTimeline</code> method.</li> <li> Wait for the <code>FriendTimelineReceived</code> event.</li> </ol>
The value of this property will then be set to the list of messages (and maintain its value until any subsequent call to <code>RequestFriendTimeline</code>.

### Mentions



:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Mentions')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property contains a list of mentions of the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Call the <code>RequestMentions</code> method.</li> <li> Wait for the <code>MentionsReceived</code> event.</li></ol>
The value of this property will then be set to the list of mentions (and will maintain its value until any subsequent calls to <code>RequestMentions</code>).

### Search Results



:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Search Results')]]

| Type | Default |
|:----:|:-------:|
|list|None|

This property, which is initially empty, is set to a list of search results after the program: <ol><li>Calls the <code>SearchTwitter</code> method.</li> <li>Waits for the <code>SearchSuccessful</code> event.</li></ol>
The value of the property will then be the same as the parameter to <code>SearchSuccessful</code>.  Note that it is not necessary to call the <code>Authorize</code> method before calling <code>SearchTwitter</code>.

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

## Methods

### Authorize



[[Method('Twitter', 'Authorize', false)]]

Redirects user to login to Twitter via the Web browser using the OAuth protocol if we don't already have authorization.

### CheckAuthorized



[[Method('Twitter', 'CheckAuthorized', false)]]

Checks whether we already have access, and if so, causes IsAuthorized event handler to be called.

### DeAuthorize



[[Method('Twitter', 'DeAuthorize', false)]]

Removes Twitter authorization from this running app instance

### DirectMessage



[[Method('Twitter', 'DirectMessage', false, 'user message')]]

**Parameters**

| Name | Type |
|------|------|
|user|`text`|
|message|`text`|


This sends a direct (private) message to the specified user.  The message will be trimmed if it exceeds 160characters. <p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>

### Follow



[[Method('Twitter', 'Follow', false, 'user')]]

**Parameters**

| Name | Type |
|------|------|
|user|`text`|


Starts following a user.

### Login



[[Method('Twitter', 'Login', false, 'username password')]]

**Parameters**

| Name | Type |
|------|------|
|username|`text`|
|password|`text`|


Twitter's API no longer supports login via username and password. Use the Authorize call instead.

### RequestDirectMessages



[[Method('Twitter', 'RequestDirectMessages', false)]]

Requests the 20 most recent direct messages sent to the logged-in user.  When the messages have been retrieved, the system will raise the <code>DirectMessagesReceived</code> event and set the <code>DirectMessages</code> property to the list of messages.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>

### RequestFollowers



[[Method('Twitter', 'RequestFollowers', false)]]

Gets who is following you.

### RequestFriendTimeline



[[Method('Twitter', 'RequestFriendTimeline', false)]]

Gets the most recent 20 messages in the user's timeline.

### RequestMentions



[[Method('Twitter', 'RequestMentions', false)]]

Requests the 20 most recent mentions of the logged-in user.  When the mentions have been retrieved, the system will raise the <code>MentionsReceived</code> event and set the <code>Mentions</code> property to the list of mentions.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>

### SearchTwitter



[[Method('Twitter', 'SearchTwitter', false, 'query')]]

**Parameters**

| Name | Type |
|------|------|
|query|`text`|


This searches Twitter for the given String query.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>

### StopFollowing



[[Method('Twitter', 'StopFollowing', false, 'user')]]

**Parameters**

| Name | Type |
|------|------|
|user|`text`|


Stops following a user.

### Tweet



[[Method('Twitter', 'Tweet', false, 'status')]]

**Parameters**

| Name | Type |
|------|------|
|status|`text`|


This sends a tweet as the logged-in user with the specified Text, which will be trimmed if it exceeds 160 characters. <p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>

### TweetWithImage



[[Method('Twitter', 'TweetWithImage', false, 'status imagePath')]]

**Parameters**

| Name | Type |
|------|------|
|status|`text`|
|image Path|`text`|


This sends a tweet as the logged-in user with the specified Text and a path to the image to be uploaded, which will be trimmed if it exceeds 160 characters. If an image is not found or invalid, only the text will be tweeted.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>