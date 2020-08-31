# Kodular Eagle

![Kodular Eagle](https://assets.kodular.io/images/creator/versions/eagle2.png)

## 1.4 Eagle   \|   _17 August 2019_

### Major Changes

* New **Ads Commission** system
*No more fixed commissions; you will now pay for what you use: few components means lower commission*

* **Web View** can now **upload files**
*You will now be able to upload files within a web viewer*

* [**Export and import blocks** via PNG files](https://github.com/mit-cml/appinventor-sources/commit/8b749ef118e201335bfb22fa11450950c5f619e6)
*You can now right-click on any block and pick "Download Blocks as PNG". And you can just drop that PNG file into the workspace, and the blocks will appear*

* Added **Android Support Libraries** for **SDK 28**
*It provides optimized compiled apps for Android 9*

* Now **Projects can be renamed**
*Just click on the projects name at the top left corner, type the new name and hit <kbd>Enter</kbd>*

* Loading projects now use a new **JIT (just-in-time) system**, removing the old AOT (ahead-of-time)
*This makes loading projects from **5 to 10 times faster***

* **Deleting** screens/projects now involves a **secondary confirmation**
*You have to type the project/screen name before deleting it*

* Bumped **Minimum SDK** from 16 to **19**
*We needed to add more features, and it could only be possible increasing the Min SDK to Android 4.4*

* New **default app icon** when none is set *for new projects*
*We replaced our logo icon with a fancier one*

* You can now **copy/cut and paste components** in the same screen, and **from one screen to another**
*Check the UI Changes, Point 3, for more information*

* Added two new languages: **Greek** and **Japanese**
*Their translation progress were enough to be implemented*


### UI Changes

* **Kodular Creator has been fully redesigned**
*Now the platform **sports a brand new design**, adapted for the modern times. It is based on **Material Design 2***
	* You can now **collapse panels** to provide a better experience
*You can now display only the Viewer and the Components Tree in demos, for example*
	* Selected **theme will now be saved** across sessions
	* Added ***My Account* button** at *Account* dropdown
	* Moved ***Language* dropdown and *Theme* switcher to** new *Settings* button in ***Account* dropdown**
*It will open a new Creator Settings dialog*
	º* **Palette now supports nested** categories to better organize components
*Check below where components have been moved*
	* Added **fancy illustrations** to dialogs
	* **Visibility** of components can now be toggled from a **button in the *Viewer* header**
*It depreactes the display hidden components button at the bottom*
	* Added **new phone's and tablet's mocks** to *Viewer*
*It deprecates the tablet preview button at the bottom*
	* **Components Tree and Properties have been splitted**
*We took back the App Inventor interface, with the ability to hide any of those*
	* **Removed *Non-Visible Components* panel** below phone's mock
*This has been deprecated in favour of the next feature*
	* You can now click on *All Components* to **switch to *Visible Components* or to *Non-Visible Components* **
	* **New Colour Picker**
*It has a bunch of default colors plus a HSV color selector*
	* **Added Project Colours**
*These are the colours which are being used in your project, so that you can easily select them across properties and screens*
	* **Height and Width selectors** now sport a **new layout**
*The dialog has been removed in favour of a textbox where you type a number and "px" or "%", plus two buttons to easily switch between Automatic and Fill Parent*
	* **Assets selectors** now support **previewing files**
*You can now preview the selected file in your Property*
	* **Redesigned all dialogs**
*Brand new "Create Project", "Baking your app" dialogs, and many more*
	* **File uploader** now accepts **only legal types**
*You won't be able to upload/select a not-supported format*
	* Added more **properties preview** to designer
*You will be able to preview more properties like Checked Switches, Sliders or so in the mock; and current ones have been updated*

* You can now use **shortcuts** to work on the Creator
*Check a complete list in the dialog available at the "Help" dropdown*

* Added new **right-click context menu** in *Designer*
*You can now copy, cut and paste components in your project, just by right-clicking on them; and much more like Paste Properties...*

* Added new **Settings Dialog** under *My Account* dropdown
*It will trigger themes, switch to compact layout, display experimental properties, change preferences, show keystore hashes...*


### Companion

* Companion will **show a dialog** when an **update is available**
*It makes usage of the In-App Updates component, and it will prevent errors for having an outdated version*

* Added new **Dark Theme** mode to Companion
*Code during nights in both Creator and Companion without harming your eyes; just press the button in the top bar*


### New Components

* Added new **JSON** component to _Storage_ category
*Useful to work with Web APIs, for example*
![image|239x142](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/0/5047d5465fcfbd9f841d0e4c7600967f18a8b547.png)

* Added new **Keyguard Manager** component to _Utilities_ category
*Require the app to be unlocked using phone's security lock*
![image|243x161](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/0/f0b4816737612d4dfd06bc71d686c7bd93a80ebe.png)

* Added new **Dynamic Card View** component to _Dynamic Components_ category
*Generate dynamically beautiful cards to place more dynamic components*
![image|252x144](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/e/de1762e9d6c1c4f2c05430e2a5031f3b4e5d84c1.png)

* Added new **Dynamic Image** component to _Dynamic Components_ category
*Create more images in your apps execution*
![image|249x141](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/8/28f7a9d840101fdc06179b79fe3e6d3d1ced5acc.png)

* Added new **Dynamic Space** component to _Dynamic Components_ category
*Use this component to increase the separation between components*
![image|248x140](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/f/4f80e2ad0f8c9708f0e5ae75223cd89aeb85b62d.png)

* Added new **Google Play Games** component to _Google_ category
*One of the most requested components will allow you to create awesome games integrated with Play*
![image|238x204](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/1/a/1a5ac1181a16027f0b9c1a9d3c5e628dfd5e1125.png)

* Added new **Kodular Donations** component to _Monetization>General_ category
*A new way to donate to Kodular: this component will make commission go to 100%, so all ads will be rewarded to our account*
![image|245x160](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/9/6968c8ca63a5eef8b8b271f106b18445866a21dc.png)

* Added new **AdColony Interstitial** component to _Monetization>Advertising_ category
*Insert AdColony ads in your apps*
![image|239x163](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/d/bd5fbf7cc8a35a24ac210907064edb2b4c564e13.png)

* Added new **AppLovin** component to _Monetization>Advertising_ category
*Display AppLovin interstitials in your app*
![image|235x141](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/0/d0df0fb0dbd47926bc471ce7a7b39589a516380a.png)

* Added new **Facebook Rewarded Video** component to _Monetization>Advertising_ category
*The missing Facebook Ads component allows you to reward your users by watching ads*
![image|241x183](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/3/f30b524cc5ff2040cd5eb763b2ee1325b3c514af.png)

* Added new **StartApp Interstitial** component to _Monetization>Advertising_ category
*Improving StartApp integration, this component allows you to display StartApp interstitial*
![image|243x158](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/c/0c608ecc4d87fab8ee18f10639c30ef37e31cbb8.png)

* Added new **In-App Update** component to _Experimental_ category
*Most people will find this component really useful, as it will automatically prompt users with a dialog when an update is available on Play Store*
![image|247x219](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/8/88734b80653501baec71d00ffd603254aa0d9929.png)

#### Moved Components

* Moved **Push Notifications** component to *Social* category
*We think it was time to move it away from Experimental*

* Moved **Shell** component to *Utilities* category
*This component has been working properly for months, so we placed it in its appropiate category*

* Moved **List View** component to new *Layout>Listviews* category

* Moved **List View Image and Text** component to new *Layout>Listviews* category

* Moved **Bottom Sheet** component to new *Layout>Views* category

* Moved **Chat View** component to new *Layout>Views* category

* Moved **View Flipper** component to new *Layout>Views* category

* Moved **Surface View** component to new *Layout>Views* category

* Moved **Web Viewer** component to new *Layout>Views* category

* Moved **Bottom Navigation** component to new *Layout>Navigation* category

* Moved **Side Menu Layout** component to new *Layout>Navigation* category

* Moved **Tab Layout** component to new *Layout>Navigation* category

* Moved **View Pager** component to new *Layout>Navigation* category

* Splitted **Lego Mindstorms category** into *Lego Mindstorms>Lego EV3* and *Lego Mindstorms>Levo NXT*

* Splitted **Monetization category** into *Monetization>General* and *Monetization>Advertising*


### New Events

#### Screen

* `Got Received Shared`: triggered when shared content is received
![image|313x104](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/e/0ee0c26f1e12baafdcd2fcc9b6c7ece3e244471c.png)

#### User Interface

* **Checkbox** component
	* `Click`: triggered only when an user interacts with a checkbox
![image|276x96](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/49c34a888d19fc5e453205bbc2af2bf42a4e4911.png)

* **Slider** component
	* `Touch Down`: triggered when an user touches the slider
![image|236x74](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/0/3025a764fbea97862ea37ffb8c70042033613187.png)
	* `Touch Up`: triggered when an user releases the slider
![image|221x78](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/c/fc966318a33907c32c46e924b4e1a94c1b5f038d.png)

#### Media

* **ExoPlayer** component
	* `Completed`: triggered when the track finishes reaches the end
![image|257x77](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/8/88b9e381ff100a465b823ce44e24be2771824712.png)

#### Social

* **Push Notifications** component
	* `Send Message Done`: triggered when the message has been successfully sent
![image|381x105](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/a/eaace06ee8d5ed623c326effa08fd700d156da3c.png)

#### Connectivity

* **Download** component
	* `On Download Progress Changed`: triggered when the progress of a download changes
![image|400x98](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/e/dea5285267bac7f7350ad1f6dbbb6a1cf543705e.png)

#### Google

* **Firebase Authentication** component
	* `Got Id Token`: triggered when Firebase gets the ID Token
![image|362x111](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/a/ea248c413753d58a6eedac2c8c3ecc70bc77d09f.png)
	* `Reset Password Email Done`: raised once the email to reset password has been sent
![image|476x103](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/4/34c44295b8c48eb41e6e45d4e4efeffa33f82d5d.png)

* **YouTube Player** component
	* `Initialized`: triggered when the component has been loaded and it's ready
![image|283x84](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/3/33bf103e48b1d08f31d9e51e9adc97f47742ca9e.png)


### New Methods

#### User Interface

* **Snackbar** component
	* `Is Shown`: returns true when the snackbar is on the Screen
![image|239x46](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/e/2ef2902f886423ed537c5342e2fde9ea39a5f462.png)

#### Layout>Navigation

* **View Pager** component
	* `Remove All Tabs`: deletes all created tabs
![image|296x45](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/d/cdcfd51a9206350bd027dc3c7a689f5bcccb509a.png)

#### Social

* **Push Notifications** component
	* `Send Message`: sends a push notification to the subscribed users
![image|340x121](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/c/0ce945e451270f07fe63f05e2accadc117d9cac7.png)

#### Utilities

* **Device Tools** component
	* `Is Adb Debugging Enabled`: returns true when the ADB debugging mode is active
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|378x47](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/7/8735c7c4fb3ef440abbc04aec7b20653b2623e87.png)
	* `Is Emulator`: returns true when the app is running in an emulator
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|278x44](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/c/9ca097c174fe69ad2a0f6c9802efbccc965ae672.png)
	* `Is Installed From Play Store`: returns true when the app was installed from Google Play Store
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|388x48](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/1/e1adccd438e87747df87536deef7fcb6a2480346.png)
	* `Has Dangerous Apk Installed`: returns true when the user has apps like *Lucky Pather* or *Xposed Installer*
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|388x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/1/b1b1e54d6bcb3a1fc0c341ee6ef29fa6d7b0b1d8.png)

#### Dynamic Components

* **Dynamic Button** component
	* `Delete Button`: deletes the given generated button
![image|297x68](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/9/29c02f1204a3058880d890c599dda66d1c708844.png)

* **Dynamic Label** component
	* `Delete Label`: deletes the given generated label
![image|294x70](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/f/3f4717a9d897b6568d12dc4d6f964fc90beeca50.png)

* **Dynamic Textbox** component
	* `Delete Textbox`: deletes the given generated textbox
![image|340x68](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/a/eab8adee3f8be3ba8e36e5c7994c9cc22ac16841.png)

### Google

* **Firebase Authentication** component
	* `Get Id Token`: retreives from Firebase the id for the current user
![image|347x45](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/3/938f0f62f7645ffecf397c3521a9c7692d9831db.png)
	* `Phone Number Sign In`: authenticates the user using the given phone number sending an OTP code
![image|421x70](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/0/609c961324f8a3534a231f7ca85799c2f4985d32.png)
	* `Send Reset Password Email`: sends an email to the user to change the password
![image|458x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/c/acd46b7de8dc7e16d6fb57292107d13f49c57f50.png)
	* `Update Phone Number`: changes the user's phone number
![image|421x74](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/b/db456bb6c4fb9d3c3bb2825399100dba3be00a2f.png)
	* `Verify Email`: sends a confirmation email to verify user's email address
![image|340x47](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/9/293c150c63128fadcb57afff6b98ff1b406aa476.png)
	* `Verify Phone Code`: checks if the given OTP code is valid
![image|394x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/0/805539c8b538f6620e829c0326ee0c383e4c6649.png)

* **Firebase Remote Config** component
	* `Get Boolean`: returns a boolean value from Firebase
![image|379x75](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/0/c0b82c619723c5151acbbb62218f91a02a79d6f0.png)

* **Google Maps** component
	* `Add Polyline`: inserts a polyline in the map and returns its id
![image|301x117](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/b/8b4de43aa1302be75652aed574a1d4ed0577ba30.png)
	* `Get All Polyline Ids`: returns all available polyline ids on the map
![image|328x45](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/c/6ce3efa66144184f75a64f255fd424c6f8ee700a.png)
	* `Get Points From Json`: returns an object containing all points in a JSON string, which can be used in polylines
![image|356x65](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/8/583115b83ae17d40eb254596ce142bedb9a3d92b.png)
	* `Remove Polyline`: deletes the given polyline from the map and returns true if it has been removed properly
![image|329x75](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/f/0f43a763951cd024e729c1ad82a5a945325a9503.png)
	* `Update Polyline`: updates the given parameter (*`property Name`*) to the given value (*`points`*) in a polyline, such as *points*, *width* and *color*
![image|306x122](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/c/bccee3f2400deb06110ea5f2c0c44f4f6dc01572.png)

#### Experimental

* **Shell** component
	* `Is System User`: returns true when phone has enabled system user permissions
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|244x40](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/3/6325bcc667cc57ffdfafa24bcc46ae960e9718bb.png)
	* `Has Super User Apk Installed`: returns true when phone has installed super user apps, even if it is not rooted
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|340x45](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/1/61746e4a96061e33040e2e9b2aa2eba6a815f84b.png)

### New Properties

#### Screen

* `Drawer Arrow Icon Color`: sets the color of the drawer's arrow
![image|375x47](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/f/0f6be8cbd4c13673bcd4b66ccbc90c2c5074e8a8.png)

* `Navigation Icon Color`: sets the color of the drawer's icon
![image|351x46](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/b/2b61ee8418ba5b56455386fe2f2cd77f19cc8766.png)

* `Options Menu Icon Color`: sets the color of the option's menu icon
![image|373x43](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/3/331f981cad592964adf69a1bd6caf500ca2f6d93.png)

* `Receive Shared Files`: allow receiving a type of files
*Enabling this feature, your app will appear in the "Share To" menu when sharing this kind of content*
![image|281x156](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/f/df1166a3b37c54987bac6f5b67b7f123701e9d19.png)

### User Interface

* **Floating Action Button** component
	* `Call Fab Click Event When Label Clicked`: enables triggering the click event when clicking on the message
![image|342x60](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/a/8a4343a0f703041efbc973c8a1f91b5723c46fa7.png)
	* `Call Fab Click Event When Label Long Clicked`: enables triggering the click event when long-clicking on the message
![image|331x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/6/a6c93e1390cf38c33c37d5dcfaab1374295424c0.png)
	* `Hide Label When Clicked`: enables hidding the message when clicking on it
![image|332x39](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/e/ce1e7cd22d040a9df0ee473297e53387c9e66a0f.png)
	* `Hide Label When Long Clicked`: enables hidding the message when long-clicking on it
![image|335x43](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/c/0c9d9c6869ad5dc266a5651c5ffcd608eacb06bf.png)
	* `Show Label On Left Side`: shows the text message to the left of the FAB
![image|345x41](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/3/83805cc5830879ae01336e316b035f8f8b369002.png)
	* `Label Background Color`: sets the background color of the text message
![image|347x79](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/2/02140967b5faf29aabf10fc6bcc8ebb7e5946252.png)
	* `Label Corner Radius`: sets the corner radius of the text message
![image|345x80](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/4/248d25a6325937e041aef7e2d535d39a0f31320e.png)
	* `Label Text`: enables and sets the text of the FAB's text message
![image|348x73](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/6/d6a716a5c07fb2664f5af0fd3a344d467d87cf39.png)
	* `Label Text Color`: sets the text color of the text message
![image|347x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/8/f8e224b3fd9ccd2743be2ef5688573a449937a95.png)

### Layout>General

* **Card View** component
	* `Stroke Color`: changes the stroke's color of the card
![image|272x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/6/d69b3e31d73895c0c3f6ce65ce16fe7f5ff671f2.png)
	* `Stroke Width`: changes the stroke's width of the card
![image|272x59](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/a/fa011b04b0b9ab6ae15e71c7f7179fd758f52f51.png)

### Utilities

* **Device Tools** component
	* `Get Device Id`: returns the Android ID of the device
*Thanks to [@Cian](https://community.kodular.io/u/cian) for this block*
![image|282x51](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3b9301cda115b42bc6aeb0b9a371d6157f9bf4c8.png)

### Monetization

* **Admob Interstitial** component
	* `Interstitial Commission`: specifies which ad network will be used to take the commission
![image|270x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/3/93f101177366c6e9ca7042b6038b189161fa64f7.png)

* **Amazon Interstitial** component
	* `Interstitial Commission`: specifies which ad network will be used to take the commission
![image|270x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/3/93f101177366c6e9ca7042b6038b189161fa64f7.png)

* **Facebook Interstitial** component
	* `Interstitial Commission`: specifies which ad network will be used to take the commission
![image|270x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/3/93f101177366c6e9ca7042b6038b189161fa64f7.png)

* **Leadbolt** component
	* `Interstitial Commission`: specifies which ad network will be used to take the commission
![image|270x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/3/93f101177366c6e9ca7042b6038b189161fa64f7.png)
	* `Rewarded Video Commission`: specifies which ad network will be used to take the commission
![image|272x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/8/38dfdab500eda09fa36c41059b8f7f0eb6d0504d.png)

### Deprecated Blocks

#### Monetization>General

* **In App Billing** component
	* `Initialize`: with the new library, it is no longer needed
![image|332x124](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/c/ecbd6dcff2347c628f500e66ecad005bf143bfe6.png)
	* `Update Subscription`: with the new library, there is no function associated to it
![image|428x81](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/3/b3e80bb1c51ba78759a81bc1ff7ea6c4c481f3c1.png)


### Bugs Fixed

* Fixed **security issue** with **extensions**
*Some malicious extensions were found by some users. These extensions were distributed as "remove commission from Kodular", when they actually took 100% to the extension's developer. **Apps containing this kind of extensions will fail to build.***

* Reduced by **0.2MB** the *APK Size*

* Only **Companion** should ask for write permission on start

* Improved **Crashlytics** performance

&nbsp;

* Updated **Play Services** *libraries*

* Updated **Cloudinary** *library*

* Updated **OneSignal** *library*

* Updated **Facebook Ads** *libraries*
_Currently using latest version (5.4.1)_

* Updated **StartApp** *library*

&nbsp;

* Fixed **Navigation Bar** show/hide *visibility* bug

* Fixed **In App Billing** component; *it was not working*

* Fixed **Notifer** component which had some *Null Pointer Exceptions*

* **ExoPlayer** component supports now *loading sources from external card*

* **ExoPlayer** component supports now *loading sources from internal app data folder*
`/storage/emulated/0/Android/data/YOUR_PACKAGE_NAME/cache/YOURFILE`

* Fixed **ExoPlayer** when playing something from *Audio Picker* selection

* Fixed **ExoPlayer** component which crashed with *Loop*

* Fixed **ExoPlayer** issue related to sound on start

* Fixed **Image** component which was not asking for *Read Storage permissions*

* Fixed **YouTube Player** issue which was not able to play videos instantly after loading them

* Removed *not needed libraries* for **Google Account Picker** component

* Lots of **minor bugs have been fixed**, improving performance

&nbsp;

## 1.4.1 Eagle   \|   _25 August 2019_

### Major Changes

* **Commissions have been lowered down** a lot for a better earning rate
*Use [this app](https://play.google.com/store/apps/details?id=io.kodular.commission) to check your current commission*

* **Reduced APK** size when using ad networks *without native commissions*
*We now use Unity Ads by default, so lots of libraries have been removed*

### New Methods

* **Dynamic Button** component
  * `Get Button By Id`: returns the view containing the generated dynamic button
![image|429x81](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/0/30ff7b109f4ded5b58c70879c2bcc50339767521.png)

* **Dynamic Card View** component
  * `Get Card View By Id`: returns the view containing the generated dynamic cardview
![image|498x80](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/1/017859d30508e65861f13318af91e27dca3ee7ae.png)

* **Dynamic Image** component
  * `Get Image By Id`: returns the view containing the generated dynamic image
![image|425x83](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/6/c6beeffb9428f5bea754feaea7b06fe9cb9760fb.png)

* **Dynamic Label** component
  * `Get Label By Id`: returns the view containing the generated dynamic label
![image|408x78](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/0/c09d2f56720123914b80b7cba7fbcbc2c2dade58.png)

* **Dynamic Space** component
  * `Get Space By Id`: returns the view containing the generated dynamic space
![image|426x81](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/2/a247b91b2aabe1c5a01fca268039b77da7a4e9f5.png)

* **Dynamic Text Box** component
  * `Get Text Box By Id`: returns the view containing the generated dynamic textbox
![image|448x81](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/5/b58d4d3f2a4bb984b8d1fc15d52194ce9af9487d.png)

### Bugs Fixed

* **Card View** *stroke* has been set to 0 by default

* **Share-to-own-app** should only *appear once* on share menu

* **ArchTaskExecutor** *not found* error has been solved

* **Facebook Rewarded Video** reports *getCommission on a null object reference* is now fixed

* **Unity Interstitial** *commission was wrongly set* to a higher value than real one

* *Bug* in the new **Commission System** has been solved

* Bug in **Admob Banner** which *prevented them from loading* is now solved

* **ExoPlayer** problems with *Status Changed event* and *status methods* have been mitigated

* **Apps crashing randomly** due to *java.lang.RuntimeException: Unable to start activity ComponentInfo* is now resolved

* **Surface View** error related with *face recognition reporting wrong results* is fixed

* **ExoPlayer** *ask for permission bug* has been solved

* **Player** *does not need permission to read internal files*, so we removed it

* **WebView** (*and **YouTube**, as it's a webview*) did *not work properly* on Android 9
*[Fix from MIT App Inventor Team](https://github.com/mit-cml/appinventor-sources/commit/e03ae81bc9f1b7a96e6d52a12d88b37d1f746f51)*

* Solved issue which *prevented* doing **right-click in inputs** to copy/paste text

* **File uploads** were *working incorrectly in Firefox*

* The **import template** option has been *temporarily removed*
*You will hear more about this soon*

* **Hungarian language** did *not have translated blocks*, even though they were translated

* The *Device Id block* in **Device Utilities** component was not returning any value

&nbsp;

## 1.4.2 Eagle   \|   _22 September 2019_

### Major Changes

* Improved **Blockly** performance
*We've tweaked the way Blockly compiles, so your blocks will now load and run faster*

* Treated `com.appybuilder.email.app_name` as **default package for commission**
*This keeps commission at 0% when using the equivalent AppyBuilder package name*

### New Blocks

* [Added **not-equal** to *compare texts* block](https://github.com/mit-cml/appinventor-sources/commit/7452a36fd0497a617b9b183d6dcac6b6ff322fc2)
![image|287x55](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/b/2b189aa0f88f1884956e1f7ba1c19d090b974b20.png)

### New Events

* Added **Got Value** event to *Push Notifications*
![image|380x116](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/8/384026e5b5f77c4afb8a6ecbc6a36bbfc5bc9225.png)

### New Events

* Added **Get Value** method to *Push Notifications*
![image|372x106](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/3/23d7c3ad91142e203c1a215589fcb4616b9cd7d5.png)

### Bug Fixes

* Fixed broken **help URLs** in the Blocks Editor

* Fixed **Facebook Ads** components (currently using `audience-network-5.5.0`)

* Fixed issue with **Billing** events which were not being triggered

* **Push Notifications** component was crashing in some projects
	* Fixed *GetAvailableTags* & *GotAvaliableTags* in **Push Notifications**
&nbsp;
	* Updated OneSignal library

* Fixed **Bluetooth Admin** bug which had previously broken the component

* [Fixed empty dropdown](https://github.com/mit-cml/appinventor-sources/commit/9e38309ffd5e4bb772edd56a471c77448347da45)

* [Add internationalization to component block tooltips in Blocks Editor](https://github.com/mit-cml/appinventor-sources/commit/4e08a869d89e81192697958947b43ecf6a221104)

* [Fix REPL bug when switching to freshly opened projects](https://github.com/mit-cml/appinventor-sources/commit/f1214cbe42289cba209cb1c3ebd8a837d70ca14a)

* [Fix missing tooltips in extension blocks](https://github.com/mit-cml/appinventor-sources/commit/aeaaea29a4f9aa32ba6ae061f422

&nbsp;

## 1.4B.0 Eagle   \|   _03 January 2020_

### Major Changes

* New authentication system -* **Kodular Auth**.
*[How to login into Kodular? * Kodular Support](https://support.kodular.io/help/en-us/3-my-account/25-how-to-login-into-kodular)*

* New account/projects management system -* **My Kodular**.
*[my.kodular.io](https://my.kodular.io)*

* **Thunkable package names** are now handled the same as Kodular **default package names**.
*Projects with package name `com.thunkable.<email>.<app_name>` will no longer incur extra commission for being custom package names.*

* Mentioning a project’s ID in the hash of the Creator’s URL will open it when the page loads.

* Added **new upgraded compilers**.
*We now have 5 high-end compilers, which will build and export your fast much faster!*

* **Commission** levied on advertisement components can now be **removed via purchase**.
*[Commission Removal * Kodular Support](https://support.kodular.io/help/en-us/4-billing-policies/7-commission-removal)*

* **Kodular branding** in the “About” section of projects can now be **removed via purchase**.
*[Branding Removal * Kodular Support](https://support.kodular.io/help/en-us/4-billing-policies/5-branding-removal)*

* Support for **Adaptive Icons** has been added.
*[Add adaptive icons (#1888) · mit-cml/appinventor-sources@653d8d2 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/653d8d27ec22b3456c7198338d42365276bb16ab)*

### UI Changes

* New **Performance Mode**.
*This mode enhances Kodular’s performance on devices with weak specifications. Tested to have improved performance by ~80% when working with very large projects. Enable it from the Settings Dialog > Appearance.*

* Product placement has been made more prominent.
*The Creator is now titled “Creator” instead of “Kodular”.*

* Closing the search palette will now also clear the textbox content.

* Blocks can now be expanded/collapsed on double click.
*[Make blocks collapse/expand on double click (#1809) · mit-cml/appinventor-sources@ad97f10 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/ad97f10985164c1ded8bfa75a9992ee0928aedca)*

* Deprecated blocks are now hidden in the toolbox.
*[Hide deprecated blocks · mit-cml/appinventor-sources@bbf9c58 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/bbf9c58cbd7bf9c618b5868f4ad3f8a5d0fb9a0f)*

### Companion Changes

* Companion now **occasionally shows ads** which can be **removed via purchase**.
*Removal is a one-time purchase which can be made from within the app.*

* Companion now **displays its full version**.
*The full version is now shown as opposed to only the first two digits being previously displayed.*

* Support for disabling events in the Companion has been added.
*[Support disabling events in the REPL (#1849) · mit-cml/appinventor-sources@43a74f9 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/43a74f926535a5ae4d0309b86ed72a216dc95af1)*

### New Components

#### Palette components

* New **Custom Progress** component in User Interface.
![Screen Shot 2019-12-24 at 00.07.54|250x148](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/d/edf4faa9c12bf420adbb4c5a9b0fecd089a79286.png)

* New **Grid View** component in Layout > General.
![Screen Shot 2019-12-24 at 00.12.05|250x148](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/8/48992b63273b384d8f90077b4a6c21d9556104e2.png)

* New **Gallery View** component in Layout > Views.
![Screen Shot 2019-12-24 at 00.09.56|250x148](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/b/8b57382d4bf253f6800c97319bcb7d3d1628a0a7.png)

* New **Hygrometer** component in Sensors.
*[Add environment sensors · mit-cml/appinventor-sources@f2554cf · GitHub](https://github.com/mit-cml/appinventor-sources/commit/f2554cf07d5816a1fd62d268492b316562c2c720)*
![Screen Shot 2019-12-24 at 00.15.16|250x168](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/3/e31c8a5de89030cff5f570bd68a2ca1e754be6f0.png)

* New **Battery Utilities** component in Utilities.
![Screen Shot 2019-12-24 at 00.13.48|250x148](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/7/d7a7b8aef5512b7cbde4683078f63ffc803b0b01.png)

* New **Decoration** component in Utilities.
![Screen Shot 2019-12-24 at 00.13.00|250x168](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/c/dc46fb58efae51296f4d0460f6e5eb377d0670e7.png)

* New **Firebase Storage** component in Google.
![Screen Shot 2019-12-24 at 00.15.44|250x128](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/9/793955644b9b93ca4e8ffed9be20eb5e91c675d1.png)

#### Parity components

Parity components will not be available in the Palette and are meant only to support projects imported from AppyBuilder.

* **Spacer** component.

* **Network Manager**  component.

* **Google Spreadsheet** component.

* **Memory Info** component.

### New Events

#### User Interface

*  Web Viewer
    * New parameter “**value**” in the **Web View String Change** event of the Web Viewer component.
*This parameter returns the new WebViewString value, a change of which originally invoked the event.*
![component_event|355x85](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/8/88d8fb2f978e464ddba28d821224b9304baff31b.png)

### New Methods

#### User Interface

* **Button**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|273x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/d/bd24f28affaae217fb940b19f889ea82006061c7.png)

* **Date Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|311x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/5/c5cfbb1e8d8456765ea8fd74390172f4855c3c90.png)

* **Label**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|265x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/a/0/a0e15263f22a6fccb92a1488c841c96b68c6d697.png)

* **List Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|302x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/5/257469eb41c96d095b4ee4e27977f1b5d84c6179.png)

* **Textbox**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|289x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/3/b3498741f1f580093071104450545bcf925931b5.png)

* **Time Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|311x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/7/7767358f410b0985880af844cda4c9518ed4c910.png)

#### Media

* **Audio Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|315x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/4/348207cf18c71cd66aa04f0b665961c583b8c52c.png)

* **Image Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|319x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/8/68b8e6fc6cd2aeb05f9f89526383296f80221ee0.png)

* **Video Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|315x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/c/bcdd23fe9e4cade1bec7e92bee1988b8a05ec506.png)

#### Drawing and Animation

* **Canvas**
    * New **Draw Polygon** method.
*Draws an n-sided polygon in the canvas.*
![component_method|245x204](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/1/918821e84b984321d3d73a06210c78e529934835.png)

#### Social

* **Contact Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|330x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/d/3d513e8177b137b118d923ad37e35bdbf2671ef1.png)

* **Email Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|316x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/5/75a94ce78899656a425f762cf923ce34a5edf4b4.png)

* **Phone Number Picker**
    * New **Set Animation Style** method.
*Inserts an animated image inside the component.*
![component_method|381x129](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/e/7ef585d38e2dd43775802405931cb58769c3b735.png)

#### Connectivity

* **Network**
    * New **Is Wifi Connection** method.
*Returns true if the device is currently connected to WiFi, false otherwise.*
![component_method|275x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/1/91623a36a4c2fffdd6ee5fae35d59793a05b7bba.png)

    * New **Is Mobile Connection** method.
*Returns true if the device is connected to a mobile network, false otherwise.*
![component_method|291x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/8/38cac48a84268e945501a58e59be427edcf26159.png)

    * New **Is Fast Connection** method.
*Returns true if the current connection speed is greater than 400kb/s.*
![component_method|279x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/7/77c80f6761e62910960037ca35746246985e30a1.png)

    * New **Is Roaming** method.
*Returns true if using roaming; false otherwise.*
![component_method|231x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/d/5d0ee8c792ef530604cce991a3eaa63fa19a4ae8.png)

### New Properties

#### User Interface

* **Notifier**
    * New **Linkify** property.
*Allows disabling auto-hyperlinking of URLs and phone numbers.*
![blocks|239x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/6/b6595805d571c967e6882fb10a115add83ec8f39.png)
![component_set_get|179x26, 100%](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/1/d/1d2a15d849d725d623afe713ca0378809e9e8dec.png)

#### Drawing and Animation

* **Ball**
    * New **Origin At Center** property.
*[Add OriginAtCenter property to Ball · mit-cml/appinventor-sources@d2083ab · GitHub](https://github.com/mit-cml/appinventor-sources/commit/d2083ab52a54decf7b6ee1a3d3fad95ba827352d)*
![Screen Shot 2019-12-23 at 23.56.37|287x32](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/8/f8f3485e857c2d58e8240a7b3662d5f9f62c745f.png)

*    **Canvas**
    * New **Extend Moves Outside Canvas** property.
*[Ignore any canvas move events that are outside of the canvas borders · mit-cml/appinventor-sources@4e7df34 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/4e7df342864c983858519cdc00348c8487cd2d2f)*
![blocks|404x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/d/9d40f9b3ec290a786cda51bd4105a39a83e2b8c3.png)
![component_set_get|344x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/4/4491f155b1636f42504a0087d12433eceaa53071.png)

#### Maps

* **Circle**
    * New **Fill Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![fill_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bae95c5941d6639d85fbe05a990da0402001ee8.png)
![blocks|264x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/c/9ca3ed8dd445dca2db7dbb675c32f736d9f9b131.png)
![component_set_get|204x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/c/9c803d3d81a9fb5503a4e51bac95cbc324097a8c.png)

    * New **Stroke Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![stroke_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/4959ba18d687fb4382dbd5ed9c1a1a3a9a3c92e5.png)
![blocks|288x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/5/f5c463144e34630d13155438b4b888619b608e6a.png)
![component_set_get|228x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/9/693f397ac7f7024ea9f42fae2efbefeb353d49b9.png)

* **Line String**
    * New **Fill Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![fill_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bae95c5941d6639d85fbe05a990da0402001ee8.png)
![blocks|264x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/c/9ca3ed8dd445dca2db7dbb675c32f736d9f9b131.png)
![component_set_get|204x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/c/9c803d3d81a9fb5503a4e51bac95cbc324097a8c.png)

    * New **Stroke Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![stroke_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/4959ba18d687fb4382dbd5ed9c1a1a3a9a3c92e5.png)
![blocks|323x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/7/3/73483023922511b9152282b50ff9b3e5adf6d967.png)
![component_set_get|263x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/7/37b536ad207708cbaef728b74206742d8d777afd.png)

* **Marker**
    * New **Fill Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![fill_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bae95c5941d6639d85fbe05a990da0402001ee8.png)
![blocks|270x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/9/f95a76a81de8a04cb4310155f8eddafebcaf4569.png)
![component_set_get|210x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/5/453ad5a7478f91be5badd19092301bcf520d8095.png)

    * New **Stroke Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![stroke_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/4959ba18d687fb4382dbd5ed9c1a1a3a9a3c92e5.png)
![blocks|294x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/d/a/dac4cdc8b6450285f427837467fed31ac66fd5ac.png)
![component_set_get|234x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/7/57ba320ea8b18837b13a90043add18fd2df92030.png)

* **Polygon**
    * New **Fill Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![fill_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bae95c5941d6639d85fbe05a990da0402001ee8.png)
![blocks|278x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/a/8a847168d7a0ab8c4e0c3a4e94730ac25c7ba607.png)
![component_set_get|218x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/8/98301a0f1dcbad4565a6725200990547eb5c4ef4.png)

    * New **Stroke Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![stroke_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/4959ba18d687fb4382dbd5ed9c1a1a3a9a3c92e5.png)
![blocks|302x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/5/c52402592d8cdf5ab98547c339d9220303ac63e4.png)
![component_set_get|242x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/e/8e034e83597b7f434f57c8959bf7f137edb20df9.png)

* **Rectangle**
    * New **Fill Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![fill_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bae95c5941d6639d85fbe05a990da0402001ee8.png)
![blocks|292x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/b/cb5e22c826fcf17fffe4a86cc9aeb3b72860097e.png)
![component_set_get|232x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/d/3d7d18fa8a5556d62bda076c6e96bdd36c7a6922.png)

    * New **Stroke Opacity** property.
*[Support fill-opacity/stroke-opacity for map features (#1859) · mit-cml/appinventor-sources@fca2c24 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fca2c244331c7f9cfc270d11937a039bba361fd5)*
![stroke_opacity|287x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/4/9/4959ba18d687fb4382dbd5ed9c1a1a3a9a3c92e5.png)
![blocks|316x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/a/8ad0571d235d0486ceaccfc4932285ae5a86593d.png)
![component_set_get|256x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/a/ba7d99b6573c14d3486954b0bfadbd79bc524733.png)

#### Connectivity

* **Web**
    * New **Timeout** property.
*[Add Timeout property to Web component · mit-cml/appinventor-sources@28e898d · GitHub](https://github.com/mit-cml/appinventor-sources/commit/28e898d9b2f9afa8b737527a5668b30d6f1ee5b2)*
![Screen Shot 2019-12-24 at 00.05.00|295x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/5/856f9888bcbb5de04932721394f4d9e94f6a6fb9.png)
![blocks|237x30](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/b/3bdd01b905602d1c93d38764e71e54bb6b792e46.png)
![component_set_get|177x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/9/c9154cdbb0b30ba3ae0c04d06ed358a7a958562b.png)

#### Monetization > Advertising

* **Unity Ads Interstitial**
    * New **Placement ID** property
*Allows for Rewarded Videos to be placed in Unity Ads.*
![Screen Shot 2019-12-24 at 00.06.20|295x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/f/d/fd4f3a7f5939eb753f62a96814288c60f8c431eb.png)

#### Sensors

* **Pedometer**
    * Deprecated **Pause** method.
*[Remove Redundant Pedometer Resume and Pause methods (#1907) · mit-cml/appinventor-sources@fbd7536 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fbd75360e1df2daca9076342aabdc463d4e7f359)*

    * Deprecated **Resume** method.
*[Remove Redundant Pedometer Resume and Pause methods (#1907) · mit-cml/appinventor-sources@fbd7536 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/fbd75360e1df2daca9076342aabdc463d4e7f359)*

### Bugs Fixed

* Issue with **Status and Navigation Bar dark icons**.
*Status Bar dark icons and Navigation Bar dark icons can now be set simultaneously.*

* Inability to enter **negative and decimal numbers**.
*The TextBox and Notifier components now accept negative and decimal numeric inputs.*

* Issue with **Background Color of Card Views**.
*Updates to backgrounds of Card View components now reflect correctly in the display.*

* Issue with **File Upload Cancel event** in the Web Viewer component.
*Apps no longer crash when this event is invoked.*

* **Lottie animations** do not load.
*The Lottie library has been updated and animations now load as expected.*

* Issue with **AES 128** and **AES 256** algorithms in the Cryptography component.
*The algorithms now return the correct encodings regardless of the length of keys used.*

* Issue with **MD5 algorithm** in the Cryptography component.
*The MD5 algorithm has been updated and now reports the correct encoding.*

* Issue with **Arduino icon** in Knight and Bliss themes.
*The icon has been updated and now better reflects the original Arduino logo.*

* Failure to invoke the **Download Progress event** in the Download component.
*The Download component now correctly reports the progress of the download.*

* **AdColony library** version.
*The component’s library has been updated to its latest version.*

* Issue with **Facebook ads and Monetization approval**.
*All apps using Facebook ads now require approval before they can be monetized.*

* Issue with **exposed API keys**.
*The exposed API keys concerned have been removed, and the Google Play Store should no longer show API key warnings on apps made with Kodular.*

* Fabric deprecation.
*Fabric libraries have been removed from Kodular apps. Kodular apps are now smaller in size.*

* MIT Security vulnerability.
*A security hole in the MIT App Inventor system has been patched up; more details will be published soon.*

* Issue with **Android Oreo Web Viewer** layout size.
*The Web Viewer now loads with the correct sizing even after the first refresh.*

## 1.4B.1 Eagle | 04 January 2020

### Major Changes

* Changed some links pointing to old Kodular Account
*They now point to [My Kodular](https://my.kodular.io)*

### Companion Changes

* Added **new launcher icon**
*It now sports a fancier icon in your mobile desktop*

* Fixed ads removal purchase which were not flagged as one-time
*We have refunded all purchases; you can buy them again*

### New Events

* **Firebase Storage** component
    * `Upload Success`: added new *download Url* parameter

### New Methods

* **Cryptography** component
    * `Generate AES 128 Key`: creates a random secure key to use with AES-128
&nbsp;
    * `Generate AES 256 Key`: creates a random secure key to use with AES-256

### Bugs Fixed

* Fixed **naming components** on their creation

* Fixed issue with **Performance mode** and *Blocks editor*

* Fixed *adaptative icons* crashing using the **Task Description** block

* Fixed *animation issue* in **Button-based** components and **Progress Bar** component

* Fixed *NullPointerException* in **Card View** component

* Fixed **In-App Purchases** component which was not making one-time purchases


## 1.4C.0 Eagle | 22 March 2020

### Major Changes

* Added new **Dictionary** data type.  
*[Implement dictionaries for the blocks language · mit-cml/appinventor-sources@f1e1863](https://github.com/mit-cml/appinventor-sources/commit/f1e1863ff151b95e55819715941c641555ed28b6)*

### Companion Changes

* Added new **Refresh companion** menu item.  
[Add refresh companion item to connect menu · mit-cml/appinventor-sources@ae9e02d](https://github.com/mit-cml/appinventor-sources/commit/ae9e02dd11c64f311e5e08b86d27412555f5ed62)

### New Components

* New **Pollfish** component in Monetization.  
*[Read more here...](https://medium.com/the-kodular-korner/kodular-pollfish-component-a79916d3813e)*  
![image|310x300, 75%](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/5/954ee5e215ae7f3ae29d867597574476ae2dcbbc.png)

### New Methods

#### Storage

* **SQLite** component
	* New **Display Tables** method.  
*Retrieves the list of tables' names in the database.*  
![component_method|243x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/9/59136ef57d4f7dc5777d9a597693ca36b45d5fb7.png)

	* New **Drop Table** method.  
*Removes the given table from the database.*  
![component_method (1)|227x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/6/5/653e8497e2f03c115243abe71bce1cd8b677269c.png)

	* New **SQL Query** method.  
*Executes the given raw SQL query and returns result synchronously (same block).*  
![component_method (2)|229x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/e/ee5991a085ec41e97887d1065bb015a2f8ca4364.png)

### New Properties

#### Storage

* **SQLite** component
	* New **Rows Affected** property.  
*Returns the number of rows affected by the most recent operation.*  
![component_set_get|232x26](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/d/9d6f58b4ab76aa9b47f0e8d2c6cc1e803e830254.png)

### Bugs Fixed

* Added missing clearCanvas parameter to Draw Polygon method in **Canvas**.

* Only .aia files should be allowed when **importing a project**.

* Fixed **Help URLs** in components description.

* Fixed Notifier properties not working properly when using multiple **Notifier** components.

* Fixed shrinking issue of **Custom Progress**.

* Add missing CubeGrid animation message to **Custom Progress**.

* Fixed dynamic switching of animation of **Custom Progress**.

* Fixed **Gallery Viewer** Height issue.

* Fixed **Package** component permission bug.

* Performance and stability improvements to **WebRTC** (the companion connection mechanism). Companion connection should be faster and more reliable now.  
[mit-cml/appinventor-sources@6740799](https://github.com/mit-cml/appinventor-sources/commit/674079910d0e15e0e2340fe79586950c1583770d), [mit-cml/appinventor-sources@42112f1](https://github.com/mit-cml/appinventor-sources/commit/42112f1e560d92a0fd09d3ebc2bb1449c2c13022), [mit-cml/appinventor-sources@f0a4c72](https://github.com/mit-cml/appinventor-sources/commit/f0a4c723f667ed775ff9ece57ef276d68be4fe2a)

* Fixed **Camera** failure on Android 10.  
[Fix camera failure on Android 10 (#1957) · mit-cml/appinventor-sources@cb5e005](https://github.com/mit-cml/appinventor-sources/commit/cb5e005afd3fd1402d1add0e7c4d1523f118c8b0)

* Improved app sizing on Chromebooks.  
[Improve app resizing on Chromebooks · mit-cml/appinventor-sources@4da346e](https://github.com/mit-cml/appinventor-sources/commit/4da346ef3bdc26d610c274a3a4c41f04ea414776)


## 1.4C.1 Eagle | 05 April 2020

### Bugs Fixed

* Fixed **Image picture loading** issue related with a delay of some seconds

* Fixed **Dynamic Image picture loading** issue related with a delay of some seconds

* Fixed **Camera** component causing some errors

* Fixed **Pollfish** test mode in Companion

* Fixed **Firebase Auth** login problem

* Fixed **Sound Recorder** path option

* Fixed some issues related to **custom package names**

* Updated **AdColony** library to latest version


## 1.4C.2 Eagle | 15 May 2020

* Added **Font Awesome 5** to all Font Typeface properties

* Renamed in **Dynamic Textbox** GetButtonById method to GetTextBoxById

* Updated **Facebook Audience Network** library to version `5.9.0`

* Updated **OneSignal** library to version `3.13.2`

* Updated **Play Core SDK** library to version `1.7.2`

* Updated **Play Billing** library to version `2.2.0`

* Fixed issue with **Activity Starter** when using a custom package name

* Fixed issue with **Sound Recorder** in pause events

* Fixed missing permission in **Wifi Admin** component

* Fixed issue with **Card Viewer** in long-click events

* Fixed problem with **Package** component in permission-related blocks

* Fixed bug in **View Pager** that made page start from 0

* Fixed issue in **Notifier** when switching screens

* Fixed missing permissions in **File** component

* Fixed issue with SurveyReceived event block in **Pollfish** component

* [Fix number block displaying non-number values](https://github.com/mit-cml/appinventor-sources/commit/5c19832)

* [Add ability to provide an Extra value which is a list](https://github.com/mit-cml/appinventor-sources/commit/d3ccdcb)

* [Fix accelerometer crashing emulator if UseLegacy is off](https://github.com/mit-cml/appinventor-sources/commit/e9ff8d0)

* [Fix empty project export by non-admin users](https://github.com/mit-cml/appinventor-sources/commit/e418205)

* [Fix dictionary to list coercion](https://github.com/mit-cml/appinventor-sources/commit/db9d213)

* [Add automatic conversion for other number bases](https://github.com/mit-cml/appinventor-sources/commit/fe7b75e)

* [Handle special cases of trigonometric functions](https://github.com/mit-cml/appinventor-sources/commit/ca85dc2)

* [Make collapsed dictionary constructor look like JSON](https://github.com/mit-cml/appinventor-sources/commit/ca580d0)

* [Fix recursive procedures breaking on mutation](https://github.com/mit-cml/appinventor-sources/commit/45b948f)

* [Fix not being able to modify collapsed blocks](https://github.com/mit-cml/appinventor-sources/commit/451643f)

* [Reorg context menu opts. Add yail opt to events](https://github.com/mit-cml/appinventor-sources/commit/7f60404)

* [Fix collapse event not being fired](https://github.com/mit-cml/appinventor-sources/commit/46cdb19)

* [Init polygon title/Description to that in Designer](https://github.com/mit-cml/appinventor-sources/commit/bb50f60)

* [Fix new blocks getting added to backpack on click](https://github.com/mit-cml/appinventor-sources/commit/8667a9e)

* [Make WebRTC Connections more robust](https://github.com/mit-cml/appinventor-sources/commit/8e081b1)

* [Another fix for WebRTC](https://github.com/mit-cml/appinventor-sources/commit/fbcfa69)

* [Fix disabled blocks not working with backpack](https://github.com/mit-cml/appinventor-sources/commit/f9730ff)

* [Fix blockly context menu not hiding itself](https://github.com/mit-cml/appinventor-sources/commit/94894de)

* [Fix focusing on collapsed warnings/errors](https://github.com/mit-cml/appinventor-sources/commit/d17d504)

* [Fix blockly comment text color](https://github.com/mit-cml/appinventor-sources/commit/a356ac7)

* [Fix project loading with bad text-number connections](https://github.com/mit-cml/appinventor-sources/commit/85b06a5)

* [Add Reverse Text Block](https://github.com/mit-cml/appinventor-sources/commit/ad696ee)

* [Add radix number block](https://github.com/mit-cml/appinventor-sources/commit/2c87697)

* [Implement a Replace All Mappings block](https://github.com/mit-cml/appinventor-sources/commit/d5a7977)

* [Add text bumping when number is replaced w/ text](https://github.com/mit-cml/appinventor-sources/commit/2b2ff38)

* [Remove duplicate code in bump](https://github.com/mit-cml/appinventor-sources/commit/af93f72)


## 1.4C.3 Eagle | 22 May 2020

### Bugs Fixed

* Upgrade **Pollfish** library

* Moved **JSON Utils** to Internal category

* Fixed some **Blockly issues**

* Fixed **Card View** component

* Fixed **extension import dialog** bugs with Knight theme


## 1.4C.4 Eagle | 24 May 2020

### apps.new

* [Introducing **apps.new**](https://community.kodular.io/t/introducing-apps-new/65022)


## 1.4C.5 Eagle | 03 August 2020

### Major Changes

* Added **Target SDK 29** Android 10

* Updated **QR Scanner** layout

### New Components

* Added **Unity Ads Banner** component

### New Methods

* New **`Get Entries`** method to **TinyDB**  
![component_method|232x25](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/0/b02a615d47eb20d7abc1e76cbe327ef2c66b91ea.png)

### Bugs fixed

* Fixed some minor bugs

## 1.4D.0 Eagle | 31 August 2020

### Major Changes

* Introducing Android App Bundles. 
You can now export your Kodular projects as AAB files to distribute them through Play Store.

* Introducing kodular.app 29 links. :kodular:
When you export an app, you will get a kodular.app/ABC-XYZ link which you can use to download your built project.

* Added App Center integration. :appcenter:
We have integrated the App Center library that collects fully anonymized analytics to better understand apps usage. It will also collect crashes to report them into our system, so we can fix them.
You don’t need to add any extra section to your privacy policy. It fully complies with GDPR by not collecting any personal data.

### New Components

* New Navigation component in Maps.
![component_method|232x25](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/e/3/e30f30baefcc59da6dd65139bbfea94ff8c7da78.png)

### Bugs fixed

* Improved extensions security.
We have implemented a system to protect your apps from malicious extensions.

* Fixed Admob App ID security bug.

* Accept only valid custom package names.

* [Make and/or blocks mutable.](https://github.com/mit-cml/appinventor-sources/commit/36db0c4b7da912a487b152a68fabb508369537df)

 
* [Fix components not being accepted as keys.](https://github.com/mit-cml/appinventor-sources/commit/36db0c4b7da912a487b152a68fabb508369537df)

* [Allow and/or blocks to have 0 or 1 inputs. ](https://github.com/mit-cml/appinventor-sources/commit/36db0c4b7da912a487b152a68fabb508369537df)


* [Fix ghost dropdown when switching logic blocks to external inputs.](https://github.com/mit-cml/appinventor-sources/commit/36db0c4b7da912a487b152a68fabb508369537df) 

* [Fix flyout interaction breaking edits on mobile. ](https://github.com/mit-cml/appinventor-sources/commit/36db0c4b7da912a487b152a68fabb508369537df) 


