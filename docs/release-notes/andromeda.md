# Kodular Andromeda

![Kodular Andromeda](https://assets.kodular.io/images/creator/versions/andromeda.png)

## 1.0 Andromeda   \|   _22 June 2018_

### Major Changes

* **Upgraded Minimum API** from 14 \(_Android 4.0_\) **to 16** \(_Android 4.1_\)
* Added _**Copy Screen**_ **feature**
	* Added _Import Screen \(.AIS\)_ and _Export Screen \(.AIS\)_
* Added **British English** and **Portuguese** languages
* Added a nice **Welcome Email**  for new users
* Upgraded **Google Login system**
	* _Say bye to that ugly Google Login, and say hello to OAuth2_
* Implemented **Email & Password login** system
	* _Welcome China users! You can now use_ [_Kodular_](https://www.kodular.io/) _without a VPN_
* Implemented **Runtime Permission** system
	* Watch [this video](https://youtu.be/dTJe8o9vhR4) to see what is this
*  Upgraded **Target SDK to API 27** \(_Android 8.1_\)
	* _This warning will **NOT** appear again_:
	![image](https://cdn.community.kodular.io/optimized/2X/e/eddcf2e4c40b6f227d8d6277bf5c757a953b447c_1_690x151.png)
	* [_Kodular_](https://www.kodular.io/) _is the first_ [_builder_](http://creator.kodular.io/) _on implementing a **real** Target SDK 27, as it’s required to have runtime permissions as we use now_
* **Improved server perfomance**
	* _See “Servers” section_
* Added **fancy error pages** when 5xx error appears
* **Changed Default Package Name**
	* Changed from `com.makeroid.email.app` to **`io.makeroid.email.app`**
	* _This only applies to new apps. Old created apps will still have the old format_
* **Removed 10MB app limit**
	* Testing showed that now the limit is on 20MB
* **Removed** [**black SplashScreen**](https://community.kodular.io/t/splashscreen-when-loading-app/1062?u=barreeeiroo)
	* You can now even set _your own image_!
* **Added new blocks**
	* _“**Break**” block_ will allow you to stop loops
	* _“**Wait for milliseconds**” block_ will allow you to stop the execution of your code X milliseconds
* You can now **delete a single** _**block**_**/**_**group of blocks**_ from the _Backpack_
* Added abilty to **move blocks with arrow keys** on _Blocks Editor_
* **General Data Protection Regulation**:
	* Added to _AdMob components new dialog asking for consent_ for EU users to show customized ads
	* Added _warning when dropping AdMob components_ to phone

### New Services

* [**Kodular Account**](https://community.kodular.io/t/makeroid-account/5035?u=barreeeiroo) Centralized login system for all Kodular Services and control panel for your data
* [**Kodular IDE**](https://community.kodular.io/t/makeroid-extensions-ide/5033?u=barreeeiroo) Build Kodular Extensions online without installing any external software
* [**Kodular Store**](https://community.kodular.io/t/makeroid-store/5034?u=barreeeiroo) New online Store developed by Kodular to share Apps, AIAs, Screens and Extensions

### Servers

* **AppEngine instance uses now better servers** so lag should have been reduced
* **Three compilers will now be processing app builds**:
	* Dedicated VPS Cloud servers with _2 CPUs_ up to _3.1GHz_, _4GB of RAM_ and _100MB/s of minimum bandwidth_
	* In front of all of them there is a dedicated _load balancer_ in ArubaCloud redirecting requests to reduce their loads
		* _This allows us to create new compilers without having to stop our service or build requests_
		* _It will also automatically stop forwarding traffic to compilers that are down until they are fixed_
	* Thanks to [**our partner ArubaCloud**](https://community.kodular.io/t/makeroid-arubacloud/4653?u=barreeeiroo)**,** [Kodular](https://www.kodular.io/) Servers are much powerful now

### Companion

* Changed **Companio**n **design**
	* _Now it’s much more simple, clean and useful_
* Changed **Companion Package Name** to **`io.makeroid.companion`**
	* _Previously `com.makeroid.companion`_
* Companion is now only compatible with **Android 5.0 or higher**
* Implemented _some_ **translations** on Companion

### UI Changes

* **Mock-Phone Preview**: _This means that these settings, when changed, will be now updated on the phone preview_
	* Show/Hide _Navigation Bar_
	* Show/Hide _Status Bar_
	* Show/Hide _Title Bar_
	* Show/Hide _3 Dots_
	* Color of _Navigation Bar_
	* Color of _TitleBar Text_
	* Text of _TitleBar Subtitle_
	* Properties of _Radio Button_
	* Clickable property of _any Layout_
* **COMPLETLY REDESIGNED** [**MAKEROID**](https://www.kodular.io/) **UI**
	* [Kodular](https://www.kodular.io/) wants to be unique, _so our amazing designer_ [_@Vishwas_](https://community.kodular.io/u/vishwas) _implemented the official Material Design into_ [_Kodular_](https://www.kodular.io/) _Builder_
	* Now it is much clean and simple:
		* **Added a SearchBox** in Palette
		* **Moved properties to hidden panel**, so if you want to show them just click on the name of a Component
		* **Added categories to properties** for a better sorting
	* _And, yeah, you are right._ [_All SneakPeeks_](https://community.kodular.io/t/makeroid-release-sneakpeeks/5470?u=barreeeiroo) _were “fake”_ _We’ve used the old design in the SneakPeeks because we didn’t want to leak anything releated with it_
* **Redesigned** _**Building Project**_ dialog
	* Added _Hide Dialog_ button
* **Non-Visible components names are now visible** below Mock-Phone
* Increased **SplashScreen height**
* **Added country flags next to their respective languages** on Language Selector
* **Fixed Dark Theme**

### Bugs Fixed

* **Fixed Layouts** issues
	* _Layouts were always clickable_
	* _Extensions that were depending on Layouts weren’t working properly_
* **Fixed TitleBar Tabs** issue _which made them to have the previous color when TitleBar Color was changed_
* **Fixed ListView** _NullPointerException on some devices_
* **Fixed Show/Hide Navigation Bar** not working _in some devices_
* **Fixed “reset” Screen** bug _on Orientation Change_
* **Fixed Logout** issue _which was logging out from ALL Google Accounts_
* **Fixed Color for StatusBar and TitleBar** issue
* **Fixed TopBar buttons** issue _which was overriding the created tab_
* **Fixed blocks** getting stacked _on top of eachother_
* **Fixed Blockly Translations** issue
* **Fixed Custom Package Name**
	* Now [_this Tutorial_](https://community.kodular.io/t/how-to-use-the-custom-packagename/1547?u=barreeeiroo) is no longer required!
* **Fixed Tablet-Mode bug** causing _strange behaiours on refreshing_



### New Components

*  Added new **Bottom Sheet** component to _User Interface category_
* Added new **Circular Progress** component to _User Interface category_
*  Added new **Linear Progress** component to _User Interface category_
*  Added new **Snack Bar** component to _User Interface category_
* Added new **View Flipper** component to _User Interface category_
*  Added new **Card View** component to _Layout category_
* Added new **ExoPlayer** component to _Media category_
* Added new **Maps** components to **new** _Maps category_
	* Thanks to _MIT App Inventor Team_
*  Added new **Dynamic Button** component to **new** _Dynamic category_
*  Added new **Dynamic Label** component to **new** _Dynamic category_
*  Added new **Dynamic TextBox** component to **new** _Dynamic category_
*  Added new **Amazon Ads** components to _Monetization category_
	* Thanks to _AppyBuilder Team_
		* **Amazon Banner**
		* **Amazon Interstitial**
*  Added new **Facebook Ads** components to _Monetization category_
	* **Facebook Banner**
	* **Facebook Interstitial**
* Added new **Shell** component to _Experimental category_
* _Renamed_ Google Map _to_ **Google Maps**
* _Moved_ Surface View _to_ **Layout Category**

### App Features

* **Side Menu** _This new feature allows you to create professional side menus from blocks. You will just need to design inside a Vertical Layout what you want, and then call it from blocks_ Download [this APK](https://cdn.community.kodular.io/original/2X/a/a114acf6b450effadda6dfda45740c99f7a419eb.apk) for a demo, or read [this tutorial](https://community.kodular.io/t/side-menu-tutorial/5613?u=barreeeiroo) to see how to create one
	* Functions:
		* `SideMenu` - _Creates a Side Menu with the give Layout_
		![image](https://cdn.community.kodular.io/original/2X/0/03a9d1fd4020c6b3f87423307d5d8859faa10fdc.png)
		* `Side Menu Open` - _Opens the Side Menu_
		![image](https://cdn.community.kodular.io/original/2X/c/c78b53aabe7a3dadd0c0760d23293a814aa2aa8e.png)
		* `Side Menu Close` - _Closes the Side Menu_
		![image](https://cdn.community.kodular.io/original/2X/a/a7ee47678b5ac3b3020c4340428592370fecc66d.png)
	* Properties:
		* `Is Side Menu Open` - _Returns true if the Side Menu is open_
		![image](https://cdn.community.kodular.io/original/2X/6/6c27dae8b5b4fc6daecaf5036114b793e414fe99.png)
	* Events:
		* `Side Menu Opened` - _Triggered when the Side Menu is opened_
		![image](https://cdn.community.kodular.io/original/2X/8/8df738dbf82e4feb0d0cde30357230d157cbc8a3.png)
		* `Side Menu Closed` - _Triggered when the Side Menu is closed_
		![image](https://cdn.community.kodular.io/original/2X/c/cbe0978f6f15add302c89f5361c856f47cf99536.png)
	* _This feature is not fully compatible with the **Companion** and it can make it to crash_
* **Splash Screen** _Based from_ [_this suggestion_](https://community.kodular.io/t/splashscreen-when-loading-app/1062?u=barreeeiroo)_,_ [_Kodular_](https://www.kodular.io/) _has removed the black screen that appeard when app is loading_ _Also, we have added some options for it if users wants to customize it more_
	* `Splash Enabled`: If selected, the app will remove the black screen
	![image](https://cdn.community.kodular.io/original/2X/4/43cf4bea0a99a3f6a711078b5023dd9535573524.png)
	* `Splash Image` \(_Available when Splash Enabled checked_\): If set, the app will show this image instead of the black image
	![image](https://cdn.community.kodular.io/original/2X/6/602dba94ab80d68fb6f17ae57696bae9ee011d2d.png)
* **New Functions:**
	* `Add Menu Item with Icon`: Adds an item to the menu but with an image
	![image](https://cdn.community.kodular.io/original/2X/d/d347151f96c406d85491fac77a4de154bcd20608.png)
* **New Properties:**
	* `About Screen Background Color`: Sets the background color of the About Screen
	![image](https://cdn.community.kodular.io/original/2X/b/b85dbe2c406e920d0d6da72b3d3719d077a77053.png)
	* `Accent Color`: Sets the Accent Color of the App
	![image](https://cdn.community.kodular.io/original/2X/8/8e19fa18482fce36ab6fb17c579eeb4655b581fa.png)
	* `Primary Color / Title Bar Color`: Sets the Primary Color of the App, _which is the Title Bar Color if not set_
	![image](https://cdn.community.kodular.io/original/2X/4/4d5f36289c014897e6c44204b4c0886deea66261.png)
	* `Primary Color Dark / Status Bar Color`: Sets the Primary Dark Color of the app, _which is the Status Bar Color if not set_
	![image](https://cdn.community.kodular.io/original/2X/7/74326a875f317c711b54dac4a5c54bdd78a68b38.png)
	* `Screen Orientation`: Added _Behind_, _Full Sensor_, _No Sensor_, _Reverse_, _Landscape_, _Reverse Portrait_, _Sensor Landscape_ and _Sensor Portrait_
	![image](https://cdn.community.kodular.io/original/2X/b/b450680acf5c66503f217002d21a2b37e162739e.png)
	* `Theme`: Sets the theme for the app between _Default_, _Light Theme_ or _Dark Theme_
	![image](https://cdn.community.kodular.io/original/2X/8/8727043351b6deb51af3afee99daa5320b9a5fed.png)

### New Events

* **Notifier** component
	* `Custom Dialog Selection`: triggered after selecting a _Custom Dialog_
	![image](https://cdn.community.kodular.io/original/2X/f/f7fb8f341cd6faba1f4e7b3f96ce4d25c8753ef0.png)
* **Web Viewer** component
	* `Web View String Change`: triggered after the _WebViewerString changes_
	![image](https://cdn.community.kodular.io/original/2X/2/2561438d7ce482fc05f37fc531e078fe86c8de57.png)
* **File** component
	* `After Zip`: triggered after successful _Zip_
	![image](https://cdn.community.kodular.io/original/2X/2/219f98ebf612379e9f214620eb0c38a47a65c647.png)
	* `After Unzip`: triggered after successful _Unzip_
	![image](https://cdn.community.kodular.io/original/2X/5/5110028128128b71fcebbeb5196ee10f141d6444.png)
	* `On Zip Failure`: triggered when an error occurrs in _Zip_ or _Unzip_
	![image](https://cdn.community.kodular.io/original/2X/b/b6673c2fbd3816ad44d78be324f6afb4cfe39c9c.png)

### New Functions

* **Button** component
	* `Set Shadow`: sets a shadow for the _Button_ Thanks to _AppyBuilder Team_
	![image](https://cdn.community.kodular.io/original/2X/9/980f99e223cdbcbf1cb723d208efd9377b3d542f.png)
* **Checkbox** component
	* `Set Shadow`: sets a shadow for the _Checkbox_ Thanks to _AppyBuilder Team_
	![image](https://cdn.community.kodular.io/original/2X/b/b86d9b8b36146f1bb93f7b340a25de3789cd9601.png)
* **Image** component
	* `Clear Image Tint Color`: cleans the Tint Color set for the _Image_
	![image](https://cdn.community.kodular.io/original/2X/1/17d490594a98ae02cab155ee1c19cf3c12ce766a.png)
* **Notifier** component
	* `Create Custom Dialog`: creates a _Custom Dialog_ from the given component \(removes it from the Screen and places in the _Custom Dialog_\)
	![image](https://cdn.community.kodular.io/original/2X/0/09958b624d337089ba3468ee229eae20b1f20728.png)
  * `Show Custom Dialog`: shows a _Custom Dialog_
	![image](https://cdn.community.kodular.io/original/2X/7/7feed68d54148fa556f80ae85b13c3ec58e6bffa.png)
* **Textbox** component
	* `Set Shadow`: sets a shadow for the _Textbox_ Thanks to _AppyBuilder Team_
	![image](https://cdn.community.kodular.io/original/2X/7/719398e4f67d5ebed736bac0de1686d8f5aa1115.png)
* **Canvas** component
	* `DrawArc`: generates an _Arc_ with the given params
	![image](https://cdn.community.kodular.io/original/2X/a/a01399cbd6c26a7157ab29e9b56ebca3e46d1043.png)
	* `DrawShape`: generates a _Shape_ with the given points from a list
	![image](https://cdn.community.kodular.io/original/2X/e/ecbe3f8cc5df1a83f244d363f24f7015161a1e72.png)
* **File** component
	* `Zip`: zips a given folder in the given path, with an _optional password_
	![image](https://cdn.community.kodular.io/original/2X/5/591464829b7e6bd31ad2a751154b24f11e9d8d30.png)
	* `Unzip`: unzips a given file in the given folder, with an _optioanl password if set_
	![image](https://cdn.community.kodular.io/original/2X/5/5582f80ef1a54b678e1273cf55aea8596aad786a.png)
* **Device Tools** component
	* `Copy`: copies the given text to the _clipboard_
	![image](https://cdn.community.kodular.io/original/2X/1/1644eddb206c43edac933f214768023ab8509ff4.png)
	* `Parse`: parsers the given string with _between a start and an end
	![image](https://cdn.community.kodular.io/original/2X/e/e99f7a72effb6319826537c9ef1a9eed8f08a780.png)
	* `Paste`: pastes the _copied text_
	![image](https://cdn.community.kodular.io/original/2X/1/122b0312df4865525da6dc6d0c6262f487cbe6fa.png)
* **Web** component
	* `URI Decode`: decodes the given _URI Encoded text_
	![image](https://cdn.community.kodular.io/original/2X/6/6f8f9fab95f6a4ea2c722f39a9e63694b59ef69f.png)
* **WiFi** component
	* `Mac Address`: returns the _MAC Address_ of the device
	![image](https://cdn.community.kodular.io/original/2X/b/b55056cab95c899a500db54c8c6c310f08064eae.png)

### New Properties

* **Button** component
	* `Rotation Angle`
	![image](https://cdn.community.kodular.io/original/2X/0/02cefc26ad79fe12dad9bde2191d76494bea9dcf.png)
* **Image** component
	* `Clickable`
	![image](https://cdn.community.kodular.io/original/2X/f/fd03ea8191bc60553dbd7292bcf904f57dac001e.png)
	* `Image Tint Color` _Customizable from Blocks_
	![image](https://cdn.community.kodular.io/original/2X/c/cd95867255eb573c93684d6312f2bd2c7b4c1d77.png)
* **ListPicker** component
	* `Title Visible`
	![image](https://cdn.community.kodular.io/original/2X/c/c05e8e75a10326b16149889ddfbe4e16975a9c44.png)
* **Notifier** component
	* `Dim Amount`
	![image](https://cdn.community.kodular.io/original/2X/d/da471c2efd29d824da6786fa097bb18399e247ec.png)
	* `Use Background Color`
	![image](https://cdn.community.kodular.io/original/2X/0/0a1ec81dd4ad8eb4add11c462ced680a5d5318be.png)
* **Slider** component
	* `Rotation Angle`
	![image](https://cdn.community.kodular.io/original/2X/0/02cefc26ad79fe12dad9bde2191d76494bea9dcf.png)
* **TextBox** component
	* `Rotation Angle`
	![image](https://cdn.community.kodular.io/original/2X/0/02cefc26ad79fe12dad9bde2191d76494bea9dcf.png)
* **Layout** components
	* `Clickable`
	![image](https://cdn.community.kodular.io/original/2X/f/fd03ea8191bc60553dbd7292bcf904f57dac001e.png)
	* `Use Round Card`
	![image](https://cdn.community.kodular.io/original/2X/8/86c1efd75a970b14fe878ce37aad6476065f548e.png)
* **OCR** component
	* `Language`
	![image](https://cdn.community.kodular.io/original/2X/a/a88191021f8048613dc1f213147586e1b46af798.png)
* **EmailPicker** component
	* `Cursor Color`
	![image](https://cdn.community.kodular.io/original/2X/6/6291d6b5123b7ef9c0c82a6f04e1ceceb06ee50c.png)
	* `Line Color`
	![image](https://cdn.community.kodular.io/original/2X/3/361c9a65a19a3bdabfed5062efabde1ffb73699b.png)
* **FusionTables** component
	* `Loading Dialog Message`
	![image](https://cdn.community.kodular.io/original/2X/5/5b2e274b0d2556497076f397abc0fad89eb18be9.png)
	* `Show Loading Dialog`
	![image](https://cdn.community.kodular.io/original/2X/a/a19cbbab89ad1903ec4b17afb2ba068088360a04.png)
* **TinyDB** component
	* `Namespace`
	![image](https://cdn.community.kodular.io/original/2X/4/40d140d2259b55d855b77b0d491dafc0949df237.png)
* **Screenshot** component
	* `Dim Amount`
	![image](https://cdn.community.kodular.io/original/2X/3/382f0abd46582a9b9ad175414c89821148124604.png)
	* `Notification Share Button`
	![image](https://cdn.community.kodular.io/original/2X/a/a6498b81560b53c504615e45d96ec4616bfff153.png)
	* `are Permissions Granted` _Available at Blocks_
	![image](https://cdn.community.kodular.io/original/2X/3/39dada6c12892f578c2daf70dd40e8415fa31d38.png)
	* `is Read Permission Granted` _Available at Blocks_
	![image](https://cdn.community.kodular.io/original/2X/6/6503a474f0b3afadbb60023efb1b332354e55572.png)
	* `is Write Permission Granted` _Available at Blocks_
	![image](https://cdn.community.kodular.io/original/2X/6/690d859eb88925fef7bfcaa5502b65738417408c.png)
* **Download** component
	* `Requires Charging` _Customizable from Blocks_
	![image](https://cdn.community.kodular.io/original/2X/b/b0d7185d2cbfdd833d7aa7c6a8ca61737c809dae.png)
	* `Requires Device Idle` _Customizable from Blocks_
	![image](https://cdn.community.kodular.io/original/2X/f/f22c7dc033713aa8362b3521f40a4290ac1d094b.png)

## 1.0.1 Andromeda   \|   _23 June 2018_

### Bugs Fixed

* Fixed: Download app scannign QR Code \(_missing GPlay update, probably tomorrow it will be live\)_
* Fixed: “Create” block from “FAB” was crashing companion if there was no image added
* Fixed: ListViews
* Fixed: Random crashes using some components

## 1.0.2 Andromeda   \|   _28 June 2018_

### New Blocks

* Added **RemoveSideMenu** block to _Screen_

### Bugs Fixed

* Temporarily removed Import/Export screen feature
* Removed “wait for milliseconds” block
* Fixed: Server error that sometimes happened when copying screens
* Fixed: Copied screens couldn’t be opened
* Fixed: Errors with extensions
* Fixed: Some issues with Leadbolt component
* Fixed: Sizing issues with CardView component
* Fixed: TitleBar Subtitle not updating on the companion when subtitle removed
* Fixed: Some issues with ListViewImageText



## 1.0.3 Andromeda   \|   _19 July 2018_

### UI Changes

* Added “_Import Project_” button on Projects Panel
* Added “_Loading Project_” dialog
* Imported _Turkish Translation_ to Blockly
* Fixed some Descriptions for some components which had a larger font
* Made ScrollBar of Palette thicker

### Companion

* Added missing “:” to IP Address Label

### New Features

* Added “Show Ad” block for _Facebook Interstitial Ad_ component
* _CloudDB_ component now handles images

### Bugs Fixed

* _NullPointer Exception_ on some Alerts
* _NullPointer Exception_ on GetUserId of PushNotifications
* _Button_ Size wasn’t affected if Shape was set
* _Facebook Interstitial Ad_ should be working now



## 1.0.4 Andromeda   \|   _28 July 2018_

### UI Changes

- Fixed "_Loading Project_" dialog shown even when project loaded
- Fixed "_Blockly Panel_" as it was overlapping with _Components Scrollbar_
- Increased _Scrollbar Width_ on Components panel
- Added _confirmation dialog_ when removing Screen
- Added _confirmation dialog_ when removing Project
- Redesigned how "_Component Help_" is shown

### Improvements

- Improved "_Search Component_" speed
- _Minimized CSS files_ to improve load time
- Improved _Blocks Editor_ performance

### Bugs Fixed

- _Facebook Ads_ were not declared on Manifest
- _Sharing Component_ was not working
- Removed some _unused libraries_ (APKs should be a little bit lighter now)



## 1.0.5 Andromeda   \|   _14 August 2018_

### UI Changes

- Brought back _AppInventor Color Picker_
- Added clickable links to "_Learn more at_" in components info

### Improvements

- Improved _Loading Project_ time
- Added warning when using _Builder over HTTPS_
- Removed some _unused libraries_ from APKs
- Integrated **_Fabric_** into Kodular Apps
	- _Now we will get detailed crash info thanks to Crashlitics, which will help us to fix bugs_
	- _You can check the bugs that are being tracked in [this repository](https://github.com/Kodular/BugsTracker)_

### Bugs Fixed

- Fixed **_AdMob Rewarded Video_** (_Sometimes ad weren't showing_)
- Fixed **_Assets Manager_** (_Internal Error appeard sometimes_)
- Fixed **_OCR Component_** (_NoPeer Certificate when making request_)
- Fixed **_AdMob Consent_** (_Title was shown instead of Message_)
- Fixed **_Search Components_** (_Search was performed using Component Class instead of Component Name_)
