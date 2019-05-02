# Kodular Draco

![Kodular Draco](//assets.kodular.io/images/creator/versions/draco.png)

## 1.3 Draco   \|   _13 January 2019_

### Major Changes

- Full **HTTPS** Support  
_Big thanks to MIT App Inventor, specially to Jeffrey Schiller_

- **Integrated Kodular Account**, making _login & signup_ easier  
_In order to login, you will be redirected to Kodular Account, where you can just use your Google account or any other social provider to access to Creator_  
_You will not lose any project data with this change_

- **Compressed images** making _loading_ faster

- Added Target **SDK 28** (_Android 9_) for all apps

- Added **New Languages**
	- **Arabic** Language  
	- **Romanian**  Language

- Updated **runtime permission system**  
_It will now prompt for permissions when required, and not on start_  
[Add blocks to assist in permission workflow · mit-cml/appinventor-sources@2d19558 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/2d19558acd16f2a3bbe1920215e3bfe4bca05675)

### Companion

- Companion can be _exited_ by **pressing back button**

- Companion now works **without being connected to the same WiFi network**  
_You can even use it with your phone connected to mobile network_

### UI Changes

- Added **apps' icons** at Projects Dashboard

- Added **Show & Hide All Comments** to menu in _Blocks Editor_

- Added **Social Networks** to _Splash Screen_

- Fix **erroneously shown**  _edit and delete icons_ on Screen Properties panel

### New Components

- Added new **Bottom Navigation** component to _User Interface_ category  
![image|243x119](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f2ce9deff1d09fe463611de0e4b4e42278b037ad.png)

- Added new **State Progress Bar** component to _User Interface_ category  
![image|244x121](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/7/7b43ffeafc01245a105942f8825f2bbb4526f511.png)

- Added new **Firebase Authentication** component to _Google_ category  
![image|243x125](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/a/aa7f51685c526c1b3a8bc9bbe95e7e2ad92646f1.png)

- Added new **Firebase Remote Config** component to _Google_ category  
![download|236x125](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e649a29a7bff946c5749eeac2f6d8f068befe621.png)

- Moved **Fiebase DB** component to _Google_ category and renamed to **Firebase Database**

- Added new **Chameleon Ads** component to _Monetization_ category  
_Find more about this [HERE](https://community.kodular.io/t/chameleon-ads-what-is-it/15802)_  
![image|250x142](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/62f917c42e423bccad07ec2db06bf1a521310b18.png)

### New Blocks

- Add new **bitwise** operator blocks to _Math_ category  
![image|519x80](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/dc29a2e0ba91e3ede8a89ac51800e9345dcaef32.png)

### New Events

- **Screen**
	- `Keyboard Visiblity Changed`: triggered after _keyboard_ becomes visible or hidden  
![image|355x103](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f665c291e364f25092c9481e0e44555010c191f1.png)  
&nbsp;  
	- `Permission Denied`: triggered after a _permission has been denied_  
![image|396x98](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/19625edacc44c48ca5f0c7b62b6d42711f7ec329.png)  
&nbsp;  
	- `Permission Granted`: triggered after a _permission has been granted_  
![image|299x106](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d2cf8b2562baab82f754dc0d0988d6fed3a3002d.png)

- **Chat View** component  
	- `Double Tap Click`: triggered after a message is _double clicked_  
![image|690x73](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/a/aab1c0e6476516542aa476c40f8415f78d570fc5.png)

- **Device** component  
	- `Got IMEI`: triggered after the _Get IMEI_ method  
![image|279x109](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/2e9bb34641ffc34d0d9907980c2b874246b98899.png)

### New Functions

- **Screen**  
	- `Ask For Permission`: prompts user asking a permission using the native Android method  
![image|283x70](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/20fe65dca5894d6c759f04330ca694d82abc308d.png)

- **Chat View** component  
	- `Clear Chat View`: deletes all messages from layout  
![image|287x50](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/da0401831c5a279805a2eb0073b236f85ee6ec6a.png)

- **ExoPlayer** component
	- `Resume`: resumes the paused track  
![image|233x55](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/8ca2a74adb301ecf9fee1c07c5e07116393e5199.png)

- **Device** component  
	- `Get IMEI`: attempts to get device's IMEI code  
![image|247x39](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0e7859c7c6a3649bc3e8e2c31714e7854e3f5326.png)

### New Properties

- **Chat View** component  
	- `Double Tap`: enables double clicking messages  
![image|297x65](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/236daa119bedc24670cb94459d3a1dfd588ba9c2.png)

- **Label** component  
  - `Marquee`: adds a marquee effect to the label  
![image|292x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/02a47796177cc5b92e7434a9ed3894a2e252b601.png)  
&nbsp;  
  - Support for _inline clickable links_

- **Lottie** component  
	- `Clickable`: enables Lottie layout to be clickable by the user  
![image|297x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f6651b844d00bc255f8371dda6ffcae33dec4777.png)

- **Map** component  
	- `ScaleBar`: adds a scale bar to generated map  
![image|282x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/9c2c0410e6b49a873a2811e529f7a152cbc742b1.png)  
&nbsp;  
	- `ScaleUnits`: changes unit system of the scale bar  
![image|288x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/95bd7d691ae2b44f7a2b50b1736aa69d16229b25.png)

### Bugs Fixed

- _Too many extensions_ resulted on **compilation error**

- **Backpack icon** state was bugged with _multiple screens_

- **Screen**
	- **HighQuality** is now by default _false_

- **User Interface**
	- **Button** _border shadow_ fixed
	- **Chat View** messages now have _dynamic width_
	- **Chat View** _swipe on message_ fixed

- **Layout**
	- **Arrangements** _borders' color_ with _IsCard_ property  
[Changing programmatically the background color of arrangements defined as "iscard" doesn't change borders color](https://community.kodular.io/t/changing-programmatically-the-background-color-of-arrangements-defined-as-iscard-doesnt-change-borders-color/13996)  
	- **CardView** _elevation_ property wasn't working properly  
[CardView ELEVATION property does't work correctly](https://community.kodular.io/t/cardview-elevation-property-doest-work-correctly/12583)

- **Drawing and Animation**
	- **Lottie** Component fixed as it was causing an _unexpected error_

- **Connectivity**
	- **ActivityStarter** Component fixed when _opening files_

- **Monetization**
	- **AdMob** Components loading bug fixed
	- **Facebook Ads** Components fixed by upgrading libraries  

- [Set webViewString directly to bypass event from blocks (#1320) · mit-cml/appinventor-sources@2869a13 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/2869a13e01c1fbcfdf5e27640c15ca36e7cde912)

- [Fix null pointer when logging before user info available · mit-cml/appinventor-sources@b99cfc4 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/b99cfc47eea0d514da2340c99f2a8fa84d6cf863)

- [Fix GeoJSON parsing in MockFeatureCollection · mit-cml/appinventor-sources@517360b · GitHub](https://github.com/mit-cml/appinventor-sources/commit/517360b2b19f2e5b1c797f88619f0e49f2af0f9f)

- [Make Backpack open in Firefox · mit-cml/appinventor-sources@3372a19 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/3372a195e0829556267bfb7811d7c7eafc7e7544)

- [Ensure connections added to ConnectionDB on load · mit-cml/appinventor-sources@55b5834 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/55b5834229e56c018cc9eddb95a5b233ac81a296)

- [Fix connection DB bug when workspace contains blocks with errors · mit-cml/appinventor-sources@f6f0160 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/f6f0160297b6a50e72bccd880e7ef063235fa13d)

- [Stop resetting list of connections when errors occur · mit-cml/appinventor-sources@ac7c0e4 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/ac7c0e4c74009b064e617ab2387caa43fb60f9fa)

- [Fix handling of Map.ZoomLevel when animating changes · mit-cml/appinventor-sources@6f14488 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/6f144887abd7be4bb78714720d8df343726890fa)

&nbsp;

## 1.3.1 Draco   \|   _19 January 2019_

### UI Changes

- Added **_Carbon Ads_** in _Creator_ dialogs

- Fixed **_Docs URL_** when using _non-English language_

### Companion

- Fixed **_Error 1103_** on Companion using _Android 9_ (`when attempting to connect it was raising this error`)
 
- Fixed **_Lottie_**  component in Companion (`it was crashing when trying to load it`)

### New Features

- Added missing **_Keep Screen On_** property for **Screen**

- Added missing **_Text Color_** property for **Snackbar** component

- Added missing **_Sign Up Success_** event for **Firebase Authentication** component

- Added missing **_URL_** and **_Token_** blocks for **Firebase Database** component

- **Chameleon Ads**
	- Ads can now be **loaded with any device orientation**
	- Ads can be **closed with backpress button**
	- Ads can be **rotated**
	- Ads are now **displayed in fullscreen**

- Added missing **_error Code_** parameter to _Error Events_ for **Chameleon Ads** component

### Bugs Fixed

- Fixed **importing AIAs** from other servers which had set _Classic theme_

- **Button** component made _app crash_ on devices with Android <5 (`when launching Screen, app was stopped`)

- **Label** component was not working properly with _Inline Links_ (`temporall removed clickable links from it`)  
[How to disable inline clickable links](https://community.kodular.io/t/how-to-disable-inline-clickable-links/15808)

- **List View Image and Text** component was _crashing_ on devices with Android <5 (`when launching Screen, app was stopped`)

- **WebView** component bug when _requesting location_ (`was not working properly`)  
[WebViewer Bug with Maps](https://community.kodular.io/t/webviewer-bug-with-maps/7352)

- **Lottie** component was crashing when no _Source_ was found (`now it will no longer crash`)

- **Cloudinary** component was _sometimes crashing_ (`some internal bugs have been fixed`)

- **Device Tools** component was requesting _too many permission_ (`on app start, some unused permissions were asked`)

- **AdMob** components were _not working_ (`sometimes ad requests were unsuccessful`)

&nbsp;

## 1.3B.0 Draco   \|   _03 February 2019_

### Major Changes

- Added full **RTL support** (_right-to-left_) for apps

- Added ability to use **strings.xml files**

- Added a **connection progress bar** to Companion

### Companion

- Fixed using **Companion in Safari**

### UI Changes

- Added **Google Pixel 3** phone's mock to preview

- Added **Kodular Draco** version image

### New Components

- Added new **Color Utilities** component to _Experimental_ category  
![image|250x124](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e91876494e13887e8120398da4f1648e2c5a0015.png)

-  Added new **Image Utilities** component to _Experimental_ category  
![image|248x140](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/9e3d9c344c733a3629bd859d0446bfabb87ba22a.png)

- Added new **Resources Utilities** component to _Experimental_ category  
_This permits the usage of `strings.xml` files_  
![image|248x139](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/fb88786243ca239ca2cf3df20ab2c40e134f5350.png)

### New Events

- **Push Notifications** component
	- `Got Available Tags`: triggered after the _Get Available Tags_ method  
![image|369x108](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d997900396767745035371eb99ae674ccd770335.png)  
&nbsp;  
	- `Notification Opened`: triggered after opening a sent notification  
![image|377x110](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/2c5f420328504d12c2d2b83677abf7d2d1ee096b.png)  
&nbsp;  
	- `Notification Received`: triggered after receiving a notification  
![image|377x110](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e419741a4d9faf52bad71dd00441a785fe079e08.png)

### New Methods

- **Wallpaper** component
	- `Clear Wallpaper`: resets the custom wallpaper to system's default one  
![image|274x49](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d64bf23e59fb113dac739c4085132b6797d03712.png)  
&nbsp;  
	- `Set Lockscreen Wallpaper`: changes lockscreen's wallpaper to given image  
![image|274x49](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/23f39e1f01605fa09c69097f08859e4ee9ddd81b.png)

- **Push Notifications** component
	- `Send Tag`: identifies an user based on given _key_ to later segment them with the set _value_  
![image|298x100](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/551b16da58367a0c3eb69316dcb0ed01622b5d90.png)  
&nbsp;  
	- `Delete Tag`: removes the given tag for the user  
![image|303x73](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/375950952507949f2c24c3c8b593869916639765.png)  
&nbsp;  
	- `Get Available Tags`: returns a list of available tags  
![image|349x48](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/41d1550fa6a763e1d3bcb1169c460de8e7162b4e.png)

### New Properties

- **Screen**
	- `Navigation Bar Light Icons`: declares if Navigation Bar should use light or dark icons  
![image|344x85](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d8f91c5a379cd99e8aca14bc1bcfc414529bd675.png)

- **Chat View** component
	- `Messages Border Radius`: sets a radius for messages' borders  
![image|273x67](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b565680043762a613871ce48eedfcbf1432bef5d.png)  
&nbsp;  
	- `Messages Font Size`: changes the font size of the text message  
![image|281x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b1ae500e4d63ed82d1f0ae336ebd45049b4f28b9.png)  
&nbsp;  
	- `Receivers Typeface Message`: changes the font type for received messages  
![image|290x63](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d677725e1c2e21172a10ae4fbec55ebad6263ec9.png)  
&nbsp;  
	- `Receivers Typeface Message Import (.ttf)`: imports a custom font type for received messages  
![image|287x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f2a07007979eb33e3fb11952c6c12e6fe2f3df36.png)  
&nbsp;  
	- `Receivers Typeface Title`: changes the font type for receiver's title  
![image|283x62](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/330f8f81eaa7dd936189bd203b92c1a8a4a63b7b.png)  
&nbsp;  
	- `Receivers Typeface Message Import (.ttf)`: imports a custom font type for receiver's title  
![image|288x69](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/9dd91a7ff214e64dea6b9399482cb8cb5b7df8e0.png)  
&nbsp;  
	- `Senders Typeface Message`: changes the font type for received messages  
![image|279x60](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/840b4ca2a1aaec2b6b3991dee1508f381caf46b5.png)  
&nbsp;  
	- `Senders Typeface Message Import (.ttf)`: imports a custom font type for received messages  
![image|287x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/122021120214e2b29eee867f28ac82af3a436b69.png)  
&nbsp;  
	- `Senders Typeface Title`: changes the font type for receiver's title  
![image|280x59](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/5c69ce976face9a2e3921dd6732ef2ae04e08913.png)  
&nbsp;  
	- `Senders Typeface Message Import (.ttf)`: imports a custom font type for receiver's title  
![image|284x71](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/144e5f3c728c70968e62648253510dc23f96a1de.png)  
&nbsp;  
	- `Timestamp Border Radius`: sets a radius for timestamp's boxes  
![image|285x70](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/dec4c2377bae93dfa13962c0d725453a574fd95b.png)  
&nbsp;  
	- `Timestamp Font Size`: changes the font size of the timestamp's text  
![image|282x75](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/246ceb5b685f77bc52ea1ea3c96edc15e29295a8.png)  
&nbsp;  
	- `Title Font Size`: changes the font size of the title  
![image|279x68](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/dd9b34adfdbec22aa0e89ef3caf2cf1095d67634.png)

- **Wallpaper** component
	- `Is Set Wallpaper Allowed`: returns true when changing wallpaper is allowed  
![image|331x45](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0b8ba2e2b6722784c0a9a2d07869321b1e20b7ce.png)  
&nbsp;  
	- `Is Wallpaper Supported`: returns true when changing wallpaper from apps is allowed  
![image|322x48](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/9794a0de35fa8fe647e53afbb5abde01f9482e7c.png)  

- **Google Maps** component
	- `Camera Angle`: sets map view angle (in _degrees_)  
![image|274x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/6b172f0c8c54c4204a9df28720a8e3b7418ff496.png)  
&nbsp;  
	- `Camera Rotation`: sets map rotation (in _degrees_)  
![image|284x63](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/3e6f0af17bf9e7c93bc91a0f7b80550bc180beb7.png)  
&nbsp;  
	- `Camera Zoom Level`: sets the altitude from where map should initialize  
![image|293x65](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b1dd21c3e28fb40aa52c180ae39f51460b2947af.png)  
&nbsp;  
	- `Style`: sets a custom theme from a JSON string for the map  
![image|290x51](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4468e0ed70dbccae7db854c41ecd6f0be1cc3332.png)  
&nbsp;  
	- `Theme`: sets a pre-defined theme for the map  
_Big thanks to @Peter for Kodular one_  
![image|292x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4c3cee8119eccdef10efce58777f60bc2fd66205.png)  

- **Push Notifications** component
	- `Get Email Subscription Email Address`: Returns the email address of the email subscription  
![image|472x52](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/7/7a78bcbd2ea12233c3c32c5146937d77b33e4ae2.png)  
&nbsp;  
	- `Get Email Subscription User ID`: Returns the user ID of the email subscription  
![image|423x49](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/2b0cc0f68c96c602b38a9044bb7ee1650c866f09.png)

### Bugs Fixed

- **User Interface** category
	- **Bottom Navigation** when using _too many items_  
[New Bugs("Maximum number of items supported by BottomNavigationView is 5. Limit can be checked with BottomNavigationView#getMaxItemCount()")](https://community.kodular.io/t/new-bugs-maximum-number-of-items-supported-by-bottomnavigationview-is-5-limit-can-be-checked-with-bottomnavigationview-getmaxitemcount/16608)
	- **Tab Layout** raised _Null Pointer Exception_
	- **Textbox** crashing when using _Copy/Paste feature_
	- **View Pager** raised _Null Pointer Exception_

- **Media** category
	- **Camera** had no permission to enable flash, _now it asks for the it_
	- **Metadata** was raising _Null Pointer Exception_  
[Null Metadata instead of Empty String](https://community.kodular.io/t/null-metadata-instead-of-empty-string/11377)
	- **OCR** works now too with Companion by _removing deprecated libs and added runtime permission system_

- **Drawing and Animation** category
	- **Lottie** component was _not working properly on Companion_

- **Storage** category
	- **Cloudinary** had one _permission missing_
	- **Spreadsheet** was raising _Null Pointer Exception_ on set cell method

- **Device** category
	- **Device Tools** component was _not working properly_

- **Google** category
	- **Google Maps** component was _broken_

- **Monetization** category
	- **Admob** components were crashing sometimes

_Other minor bugs which were not listed here have been fixed too, improving code performance_

&nbsp;

## 1.3B.1 Draco   \|   _12 February 2019_

### Major Changes

- Added ability to use **strings.json files**

### UI Changes

- Redesigned **Import Extension** dialog

- Renamed _Device_ category to **Utilities** category

- Moved _Animation Util_, _Color Util_, _Image Util_ and _Resource Util_ components to new **Utilities** category

### New Events

- **Audio** component  
	- `Error Occurred`: triggered after an unexpected error happens  
![image|268x105](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f0dc8857821f6b990a75d6079c01eea05699259b.png)

- **Admob Banner** component  
	- `Ad Failed To Load` (_added `Error Code` and `Error Message` variables_)  
![image|346x101](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/1f895026fbb5c5f9c1e5eb307eea5a85e7e1ddd2.png)

- **Admob Interstitial** component  
	- `Ad Opened`: triggered after the user clicks an Interstitial  
![image|316x84](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e319347cd358328bf956da91e404aafbcc0bd226.png)

- **Admob Rewarded Video** component  
	- `Ad Video Completed`: triggered ending the video ad  
![image|421x80](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f08179ea1e57e9b71bb410aeab20709d5381df38.png)  
&nbsp;  
	- `Ad Video Started`: triggered after the ad starts playing  
![image|394x79](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/a/a45560b565c2403abf89967e074aac6ee3011091.png)

### New Methods

- **Resource Utilities** component  
	- `Get String From Asset`: returns a string from the inputted key if _Resource File from Asset_ is set  
![image|396x103](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f285bc507063afdd37b585232cbe9722dae3aabe.png)  
&nbsp;  
	- `Get String From Path`: returns a string from the inputted key if _Resource File from Path_ is set  
![image|383x99](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4496aaa26f5f34ed7f13dc1442d4d42d848c4507.png)  
	&nbsp;  
	- `Get String Content By Name` _will be removed in future releases_  
![image|442x94](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/365820044e18fabb4725715aa25111049b1dc338.png)

- **FTP** component  
	- `Delete Dir`: deletes the given directory if exists  
![image|208x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/073fea81e8b4ef3238bcdb5f622b6960da78f3f6.png)  
&nbsp;  
	- `Get List of Files`: returns a list of files in given directory if exists  
![image|266x74](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b284d870b9b1f296b2246d41b82117135a00aa6b.png)

### New Properties

- **Screen**  
	- `RTL Support`: enables or disables the RTL interface  
![image|292x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4a3a52a91396ecf2c48f2273543ab18156d875e6.png)

- **Resource Utilities** component  
	- `Resource File From Asset`: sets the file to work with  
![image|284x72](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/9ba6ae02d7725e3ad3c5016487f58ccfb9a2c6bc.png)  
&nbsp;  
	- `Resource File From Path`: loads the file to work with from the given path  
![image|288x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/827a14dd570c68b91e21aa4f108c38a215172bdd.png)

### Bugs Fixed

- **Screen**

	- **Title Bar Back Button** was _not handled_ when locking Side MenuLayout

- **User Interface** category

	- **List View Image and Text** was _not loading images_ on Android below 5.0

	- **Notifier** was sometimes returning a _Null Pointer Exception_

	- **Textbox** was buggy when using _Copy/Paste feature_

- **Layout** category

	- **Surface View** was raising sometimes a _Null Pointer Exception_

- **Social** category

	- **Sharing** component was not working when using _share file with a custom package name_

- **Monetization** category

	- **Admob** components were not working properly when publishing to Play Store

	- **Amazon Ad** component was sometimes returning a _Null Pointer Exception_

_Other minor bugs which were not listed here have been fixed too, improving code performance_

&nbsp;

## 1.3B.2 Draco   \|   _27 March 2019_

### Major Changes

- Added new [**Admob Validation System**](https://community.kodular.io/t/admob-approval-system/22210)

- [Added **generic events** for component](https://github.com/mit-cml/appinventor-sources/commit/4ddd02dbb020dbcbf99483c1edeeb784e0d4f895)  
![image|297x104](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/46160dfca8e851838fb6768338932c4e93bd6a7e.png)

- [Allowed component blocks and property **getters in global declarations**](https://github.com/mit-cml/appinventor-sources/commit/0341af0cee4fd46df2f800e7e9cc41257dd54cab)  
![image|477x68](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/40b06a1f2f1c4571b818eaed83c7d756678d55c3.png)

- [**Improved Blockly** controls](https://github.com/mit-cml/appinventor-sources/commit/f5a769a4b0e84d6064e1a115d6664063b6338672)  
![image|72x229](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/3f0673a311dfbf728e0f1b13b31df5359e79ac04.png)

- [**Cycle through warning and error** blocks](https://github.com/mit-cml/appinventor-sources/commit/648cdbf3ade1359f93c0930de24f6716f32b6474)  
![image|138x93](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f185a092cef638898ffd26e3d21b2e723a39a50e.png)

### UI Changes

- **Fixed "No Show Again" issue** in Splash Screen

- [**Moved copy before paste** in workspace menu](https://github.com/mit-cml/appinventor-sources/commit/545bd082eb95790bb67c2364d9d0322c0cbe557c)

- [**Moved "Empty Backpack"** menu item to Backpack menu](https://github.com/mit-cml/appinventor-sources/commit/4cfd02b1a6f0e739d96320824486f194c9e8108d)

- [Added menu option to **hide workspace controls**](https://github.com/mit-cml/appinventor-sources/commit/50a1371fa64493dfcce8c1f39dad8daa73c16c7e)

- [**Fixed palette not showing** when removing screen from blocks editor](https://github.com/mit-cml/appinventor-sources/commit/4241d37cbf10012a4c8c73a06a9efd81aa92d730)

- [Implemented menu option to **make component blocks generic**](https://github.com/mit-cml/appinventor-sources/commit/4ccbeea4e44534102abd1f628fb2a9fdc6efe10b)

### Companion

- **Improved connection** between Companion and WebRTC Server

### New Blocks

- [Implemented join-with-separator block](https://github.com/mit-cml/appinventor-sources/commit/ceb27bf233d93e61ef741e9255149e1bb3e8ff8c)  
![image|284x76](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d2136f8350a13c219dd88cc601db30c6db73b54c.png)

- [Implemented list reverse block](https://github.com/mit-cml/appinventor-sources/commit/b3ce6b5878e592b5e0fd93379eb6e9445ad227c9)  
![image|158x47](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/bdcf9f2c0c8cd7410dbf28b6e3c164c624675b9c.png)

### New Methods

- **Notifier** component  
	- [`Show Password Dialog`](https://github.com/mit-cml/appinventor-sources/commit/d75ffca771a0198b9c7118174901f7a6be9298d4): displays a new password dialog  
![image|317x120](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/457b1188c005bbe8c5bf33be630039dfdeddc137.png)

- **Video Player** component  
	- [`Stop`](https://github.com/mit-cml/appinventor-sources/commit/b2d4a63c3db4a652c173a381ab52191eaa88f5d3): stops the currently playing video  
![image|224x52](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/54f1af41e066f820fae0e117a76e48818100b93a.png)

- **Clock** component  
	- [`Make Date`](https://github.com/mit-cml/appinventor-sources/commit/294905feb31ce8f2bd29b5950ac2b328646da35a): returns a formatted date from the given inputs  
![image|239x110](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/39166d72bf94b19759f9e7053d69f9cf7754ade5.png)
&nbsp;
	- [`Make Time`](https://github.com/mit-cml/appinventor-sources/commit/294905feb31ce8f2bd29b5950ac2b328646da35a): returns a formatted time from the given inputs  
![image|243x116](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/51a84089f15ea81b8d14ccff05f72b721b888f60.png)
&nbsp;
	- [`Make Instant from Parts`](https://github.com/mit-cml/appinventor-sources/commit/294905feb31ce8f2bd29b5950ac2b328646da35a): returns an instant from the given inputs  
![image|330x196](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/449cda4f821a89cbd9fb261f3a6c0dafc457a3fe.png)

### New Properties

- **Button** component  
	- `HTML Format | Advanced`: enables the HTML formatting of Buttons' text  
![image|277x66](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e79406b2d2c6414fee47d155db53edf7472eee65.png)

### Bugs Fixed

- **User Interface** category

	- **Notifier** dialogs button text now use *accent color*

- **Maps** category

	- [Ensured **Polygon Points** and **Hole Points** *invalidate map view*](https://github.com/mit-cml/appinventor-sources/commit/5395a8340112b42e168bf8442a5e1a06a0a57984)

	- [Fixed *mapview invalidation* when **Marker** visibility changed](https://github.com/mit-cml/appinventor-sources/commit/0e3f0ac5492892012525f997ec87c114a08688bf)

- **Storage** category

	- **Firebase DB** was raising some *null pointer exceptions*

- **Monetization** category

	- **Admob** now make usage of the new [Admob Validation System](https://community.kodular.io/t/admob-approval-system/22210), which improves load time when app is not installed from Google Play Store

	- **Amazon Ads** *publisher id* problem is fixed

	- **Chameleon Ads** component is now *hidden*

	- **Facebook Ads** components did *not load the ad* sometimes

	- **Whitemobi** component is now *hidden*

_Other minor bugs which were not listed here have been fixed too, improving code performance_

&nbsp;

## 1.3B.3 Draco   \|   _01 May 2019_

### Major Changes

- **Locale is now preserved when you leave Kodular**  
_If you change the locale and leave Kodular, next time you visit, your language selection will be saved_

### UI Changes

- Added **Get Keystore SHA-1** to Keystore menu

### New Events

- **Maps** component
	- `On Point Of Interest Click`: triggered when an user clicks on a point of interest like shops or monuments  
[Google Maps component show only certain points of interest?](https://community.kodular.io/t/google-maps-component-show-only-certain-points-of-interest/24602)  
![image|376x101](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/1/215b11a705d10908fa53a907c0713660f83810fe.png)  

### New Methods

- **Package** component
	- `Version Code From`: returns the version code of an app  
[\*\*Package Component In Kodular Creator\*\*](https://community.kodular.io/t/package-component-in-kodular-component/23065)  
![image|305x63](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/5/8/58e574a460548d2307facc4227a5dd6f340fd38c.png)
&nbsp;
	- `Version Name From`: returns the version name of an app  
[\*\*Package Component In Kodular Creator\*\*](https://community.kodular.io/t/package-component-in-kodular-component/23065)  
![image|311x63](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/0/1/011e6399a1bb103444950067b021d8644a7693f0.png)

- **Custom Tabs** component
	- `Add Menu Item Open App`: adds a menu item to open an app  
![image|377x97](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/8/981b2e1c60dfba4368a23ff8847de70fa43a501e.png)  
&nbsp;  
	- `Add Menu Item Open Page`: adds a menu item to open a new page  
![image|381x95](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/3/33690b53b920aa25d6d7e7f8af268b2b41c8a53b.png)

### New Properties

- **Arrangement** components
	- `Full Clickable`: sets the whole layout to handle clicks  
[Full clickable option in normal arrangements?](https://community.kodular.io/t/full-clickable-option-in-normal-arrangements/22426)  
![image|289x69](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/2/4/247507e876ec5f34e314b18ad64710a6f95e78a0.png)

- **Listview image and Text** component
	- `Subtitle Font Typeface Import`: sets a custom typeface for subtitles  
[How to add different ttf in list view image and text in title](https://community.kodular.io/t/how-to-add-different-ttf-in-list-view-image-and-text-in-title/17097)  
![image|289x71](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/9/d/9d094e284470a9008b58c58840d77eb9cd29905a.png)
&nbsp;
	- `Title Font Typeface Import`: sets a custom typeface for titles  
[How to add different ttf in list view image and text in title](https://community.kodular.io/t/how-to-add-different-ttf-in-list-view-image-and-text-in-title/17097)  
![image|281x73](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/e/8e06e82655b265a364d213494b3f44657c159b88.png)

- **FTP** component
	- `Port`: sets the port to use on the connection  
[How to connect to ftp?](https://community.kodular.io/t/how-to-connect-to-ftp/21870)  
![image|291x69](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/3/2/329f953662d407395ce43ff5efba0ae7c5313783.png)

- **Custom Tabs** component
	- `Default Share Menu Item`: uses the default share menu item of Chrome  
![image|295x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/9/b99df00998ae7c78db890df12209957234c1b64c.png)  
&nbsp;  
	- `Instant Apps Enabled`: allows the usage of Instant Apps  
![image|278x63](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/1/b/1bb8c3668afb911a1e9ad0a1d867c747e0f83fbb.png)  
&nbsp;  
	- `Url Bar Hiding On Scroll`: hides the URL bar when scrolling  
![image|295x64](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/b/9/b99df00998ae7c78db890df12209957234c1b64c.png)

### Bugs Fixed

- **Media** category

  - **Picker** components had missing permission  
[Ask Permission Block NOT WORKING](https://community.kodular.io/t/ask-permission-block-not-working/22857)

- **Connectivity** category

  - **Activity Starter** was having problems with custom package names  
[Problems with Activity Starter](https://community.kodular.io/t/problems-with-activity-starter/14039)

- **Experimental** category

  - **Custom Tabs** now handles more tabs in the Chrome version  
[Chrome custom tabs problem](https://community.kodular.io/t/chrome-custom-tabs-problem/9663)

_Other minor bugs which were not listed here have been fixed too, improving code performance_

&nbsp;

## 1.3B.4 Draco   \|   _02 May 2019_

### Major Changes

- Added **Hungarian** language

### New Methods

- **Dynamic Button** component
	- `Delete Button`: deletes the given button from the layout  
![image|312x97](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/3X/8/0/807109c6a095891d7b683fd828689ef0a30d5ccc.png)

### Bugs Fixed

- **Layout** category

	- Temporarily disabled *Full Clickable* property in **Arrangement** components

- **Device** category

	- Fixed *Version Code* and *Version Name* in **Package** component

- **Monetization** category

	- Fixed **Billing** component which was not working properly