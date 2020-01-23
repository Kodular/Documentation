# Texting

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Social|API 19, Android 4.4 - 4.4.4 KitKat|3|

:mag: {>>Non-visible component<<}

## Overview

A component that will, when the `` SendMessage `` method is called, send the text message specified in the `` Message `` property to the phone number specified in the `` PhoneNumber `` property.

 

If the `` ReceivingEnabled `` property is set to 1 messages will __not__ be received. If `` ReceivingEnabled `` is set to 2 messages will be received only when the application is running. Finally if `` ReceivingEnabled `` is set to 3, messages will be received when the application is running __and__ when the application is not running they will be queued and a notification displayed to the user.

 

When a message arrives, the `` MessageReceived `` event is raised and provides the sending number and message.

 

 An app that includes this component will receive messages even when it is in the background (i.e. when it's not visible on the screen) and, moreso, even if the app is not running, so long as it's installed on the phone. If the phone receives a text message when the app is not in the foreground, the phone will show a notification in the notification bar. Selecting the notification will bring up the app. As an app developer, you'll probably want to give your users the ability to control ReceivingEnabled so that they can make the phone ignore text messages.

 

If the GoogleVoiceEnabled property is true, messages can be sent over Wifi using Google Voice. This option requires that the user have a Google Voice account and that the mobile Voice app is installed on the phone. The Google Voice option works only on phones that support Android 2.0 (Eclair) or higher.

 

To specify the phone number (e.g., 650-555-1212), set the `` PhoneNumber `` property to a Text string with the specified digits (e.g., 6505551212). Dashes, dots, and parentheses may be included (e.g., (650)-555-1212) but will be ignored; spaces may not be included.

 

Another way for an app to specify a phone number would be to include a `` PhoneNumberPicker `` component, which lets the users select a phone numbers from the ones stored in the the phone's contacts.

## Events

### Message Received

[[Event('Texting', 'Message Received', 'number', 'messageText')]]

| Params | []() |
|--------|------|
|number|Text|
|message Text|Text|


Event that's raised when a text message is received by the phone.

## Methods

### Send Message

[[Method('Texting', 'Send Message', False)]]

Send a text message

## Properties

### Google Voice Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, then SendMessage will attempt to send messages over Wifi using Google Voice. This requires that the Google Voice app must be installed and set up on the phone or tablet, with a Google Voice account. If GoogleVoiceEnabled is false, the device must have phone and texting service in order to send or receive messages with this component.

[[PropertyBlockGetterAndSetter('Texting', 'Google Voice Enabled')]]

### Message

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The message that will be sent when the SendMessage method is called.

[[PropertyBlockGetterAndSetter('Texting', 'Message')]]

### Phone Number

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the phone number to send the text message to when the SendMessage function is called.

[[PropertyBlockGetterAndSetter('Texting', 'Phone Number')]]

### Receiving Enabled

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If set to 1 (OFF) no messages will be received. If set to 2 (FOREGROUND) or3 (ALWAYS) the component will respond to messages if it is running. If the app is not running then the message will be discarded if set to 2 (FOREGROUND). If set to 3 (ALWAYS) and the app is not running the phone will show a notification. Selecting the notification will bring up the app and signal the MessageReceived event. Messages received when the app is dormant will be queued, and so several MessageReceived events might appear when the app awakens. As an app developer, it would be a good idea to give your users control over this property, so they can make their phones ignore text messages when your app is installed.

[[PropertyBlockGetterAndSetter('Texting', 'Receiving Enabled')]]