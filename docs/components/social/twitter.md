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

## Events

### Direct Messages Received

[[Event('Twitter', 'Direct Messages Received', 'messages')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |messages|`list`|


_This event is raised when the recent messages requested through <code>RequestDirectMessages</code> have been retrieved. A list of the messages can then be found in the <code>messages</code> parameter or the <code>Messages</code> property._

### Followers Received

[[Event('Twitter', 'Followers Received', 'followers2')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |followers 2|`list`|


_This event is raised when all of the followers of the logged-in user requested through <code>RequestFollowers</code> have been retrieved. A list of the followers can then be found in the <code>followers</code> parameter or the <code>Followers</code> property._

### Friend Timeline Received

[[Event('Twitter', 'Friend Timeline Received', 'timeline')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |timeline|`list`|


_This event is raised when the messages requested through <code>RequestFriendTimeline</code> have been retrieved. The <code>timeline</code> parameter and the <code>Timeline</code> property will contain a list of lists, where each sub-list contains a status update of the form (username message)_

### Is Authorized

[[Event('Twitter', 'Is Authorized')]]

_This event is raised after the program calls <code>Authorize</code> if the authorization was successful.  It is also called after a call to <code>CheckAuthorized</code> if we already have a valid access token. After this event has been raised, any other method for this component can be called._

### Mentions Received

[[Event('Twitter', 'Mentions Received', 'mentions')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |mentions|`list`|


_This event is raised when the mentions of the logged-in user requested through <code>RequestMentions</code> have been retrieved.  A list of the mentions can then be found in the <code>mentions</code> parameter or the <code>Mentions</code> property._

### Search Successful

[[Event('Twitter', 'Search Successful', 'searchResults')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |search Results|`list`|


_This event is raised when the results of the search requested through <code>SearchSuccessful</code> have been retrieved. A list of the results can then be found in the <code>results</code> parameter or the <code>Results</code> property._

## Methods

### Authorize

[[Method('Twitter', 'Authorize', false)]]

_Redirects user to login to Twitter via the Web browser using the OAuth protocol if we don't already have authorization._

### CheckAuthorized

[[Method('Twitter', 'CheckAuthorized', false)]]

_Checks whether we already have access, and if so, causes IsAuthorized event handler to be called._

### DeAuthorize

[[Method('Twitter', 'DeAuthorize', false)]]

_Removes Twitter authorization from this running app instance_

### DirectMessage

[[Method('Twitter', 'DirectMessage', false, 'user message')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user|`text`|
    |message|`text`|


_This sends a direct (private) message to the specified user.  The message will be trimmed if it exceeds 160characters. <p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

### Follow

[[Method('Twitter', 'Follow', false, 'user')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user|`text`|


_Starts following a user._

### Login

[[Method('Twitter', 'Login', false, 'username password')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |username|`text`|
    |password|`text`|


_Twitter's API no longer supports login via username and password. Use the Authorize call instead._

### RequestDirectMessages

[[Method('Twitter', 'RequestDirectMessages', false)]]

_Requests the 20 most recent direct messages sent to the logged-in user.  When the messages have been retrieved, the system will raise the <code>DirectMessagesReceived</code> event and set the <code>DirectMessages</code> property to the list of messages.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

### RequestFollowers

[[Method('Twitter', 'RequestFollowers', false)]]

_Gets who is following you._

### RequestFriendTimeline

[[Method('Twitter', 'RequestFriendTimeline', false)]]

_Gets the most recent 20 messages in the user's timeline._

### RequestMentions

[[Method('Twitter', 'RequestMentions', false)]]

_Requests the 20 most recent mentions of the logged-in user.  When the mentions have been retrieved, the system will raise the <code>MentionsReceived</code> event and set the <code>Mentions</code> property to the list of mentions.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

### SearchTwitter

[[Method('Twitter', 'SearchTwitter', false, 'query')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |query|`text`|


_This searches Twitter for the given String query.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

### StopFollowing

[[Method('Twitter', 'StopFollowing', false, 'user')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |user|`text`|


_Stops following a user._

### Tweet

[[Method('Twitter', 'Tweet', false, 'status')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |status|`text`|


_This sends a tweet as the logged-in user with the specified Text, which will be trimmed if it exceeds 160 characters. <p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

### TweetWithImage

[[Method('Twitter', 'TweetWithImage', false, 'status imagePath')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |status|`text`|
    |image Path|`text`|


_This sends a tweet as the logged-in user with the specified Text and a path to the image to be uploaded, which will be trimmed if it exceeds 160 characters. If an image is not found or invalid, only the text will be tweeted.<p><u>Requirements</u>: This should only be called after the <code>IsAuthorized</code> event has been raised, indicating that the user has successfully logged in to Twitter.</p>_

## Properties

### Consumer Key

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Key')]]

| Type |
|:----:|
|text|

_ConsumerKey property getter method._

### Consumer Secret

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'Consumer Secret')]]

| Type |
|:----:|
|text|

_ConsumerSecret property getter method._

### Direct Messages

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Direct Messages')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_This property contains a list of the most recent messages mentioning the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>Authorized</code> event.</li> <li> Call the <code>RequestDirectMessages</code> method.</li> <li> Wait for the <code>DirectMessagesReceived</code> event.</li></ol>
The value of this property will then be set to the list of direct messages retrieved (and maintain that value until any subsequent call to <code>RequestDirectMessages</code>)._

### Followers

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Followers')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_This property contains a list of the followers of the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Call the <code>RequestFollowers</code> method.</li> <li> Wait for the <code>FollowersReceived</code> event.</li></ol>
The value of this property will then be set to the list of followers (and maintain its value until any subsequent call to <code>RequestFollowers</code>)._

### Friend Time line

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Friend Time line')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_This property contains the 20 most recent messages of users being followed.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Specify users to follow with one or more calls to the <code>Follow</code> method.</li> <li> Call the <code>RequestFriendTimeline</code> method.</li> <li> Wait for the <code>FriendTimelineReceived</code> event.</li> </ol>
The value of this property will then be set to the list of messages (and maintain its value until any subsequent call to <code>RequestFriendTimeline</code>._

### Mentions

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Mentions')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_This property contains a list of mentions of the logged-in user.  Initially, the list is empty.  To set it, the program must: <ol> <li> Call the <code>Authorize</code> method.</li> <li> Wait for the <code>IsAuthorized</code> event.</li> <li> Call the <code>RequestMentions</code> method.</li> <li> Wait for the <code>MentionsReceived</code> event.</li></ol>
The value of this property will then be set to the list of mentions (and will maintain its value until any subsequent calls to <code>RequestMentions</code>)._

### Search Results

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Search Results')]]

| Type | Default |
|:----:|:-------:|
|list|None|

_This property, which is initially empty, is set to a list of search results after the program: <ol><li>Calls the <code>SearchTwitter</code> method.</li> <li>Waits for the <code>SearchSuccessful</code> event.</li></ol>
The value of the property will then be the same as the parameter to <code>SearchSuccessful</code>.  Note that it is not necessary to call the <code>Authorize</code> method before calling <code>SearchTwitter</code>._

### TwitPic_API_Key

:warning: ==**Deprecated**==

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Twitter', 'TwitPic_API_Key')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_TwitPicAPIkey property getter method._

### Username

:eyes: Read-Only property
[[PropertyBlockGetter('Twitter', 'Username')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_The user name of the authorized user. Empty if there is no authorized user._