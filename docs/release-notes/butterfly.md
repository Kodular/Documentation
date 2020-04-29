# Kodular Butterfly

![Kodular Butterfly](https://assets.kodular.io/images/creator/versions/butterfly.png)

## 1.1 Butterfly   \|   _19 August 2018_

### Major Changes

- Improved **Dialog** of _Fingerprint Component_
- Now _About Screen_ (_and all dialogs_) can have **clickable links**
    _The "major changes" of this update are the bunch of new components_

### Companion

- Added a **Welcome Guide** using the new _Spotlight Component_
- Little **bugs fixed** on _Companion behaviour_

### UI Changes

- _Dialogs_ can now be **Accepted** pressing the <kbd>Enter</kbd> key
- Added **Download Link** when _Exporting APK using QR Code_

### Bugs Fixed

- **User Interface**
	- Textbox: _Background color was not working properly_
	- ListView: _[TextView.java line 8448 · Issue #89 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/89)_
	- Notifier: _[Notifier - bug · Issue #37 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/37)_
- **Layout**
    - Surface View: _Little bug which was freezing the screen_
- **Media**
    - Audio Picker: _Not working on some devices_
    - Image Picker: _Minor Try/Catch Bug_
    - OCR: _API Error (component was not working since some changes on the server)_
- **Drawing and Animation**
    - Canvas: _[Canvas bug · Issue #78 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/78)_
- **Sensors**
    - Sound Sensor: _[PrimProcedure.java line 285 · Issue #26 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/26)_
- **Storage**
    - Firebase: _[FirebaseDB.java line 509 · Issue #79 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/79)_
- **Connectivity**
    - Download: _[Download.java line 317 · Issue #40 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/40)_
    - Network: _[Network component · Issue #114 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/114)_

### New Components

- Added new **Floating Action Button** component to _User interface_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b3983e6e2ff07b977fcf561e9b70d84d92b2a63c.png)
    - This is a complete new component
    _Projects using the old FAB won't be broken. However, if you want to use this new FAB, you will need to delete the old one and use the new one_
- Added new **Spotlight** component to _User interface_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/88d7bb43412d683ebf96089e385bf8a47cd478a3.png)
- Added new **Tab Layout** component to _User interface_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4d029f627af21054f1339fc303173ed0a0bc543c.png)
    - Now the Tabs blocks of Screen are _Deprecated_
- Added new **View Pager** component to _User interface_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/4abf3c65e905c3aa7e1c66f624c6d57f534404da.png)
- Added new **SideMenu Layout** component to _Layout_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/eb78236843269d5cf948c8ac1b3a42398a4fc71f.png)
    - This component is an alternative way to generate a SideMenu
  _You should use it if you want a simple way to create a SideMenu. However, if you want a complex and designed from scratch SideMenu, you can still use the old block_
- Added new **SwipeRefresh Layout** component to _Layout_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/4/49aab8ff8ea2257b1eca7b471d4c686027db1916.png)
- Added new **YouTube Player** component to _Media_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0370f4d2399d12dc13bc90134c66969600230a61.png)
- Added new **Animation Utilities** component _Drawing and Animation_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0a910e6041c15609b8ac21442b14c698ade0d67f.png)
- Added new **Cloudinary** component to _Storage_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/b94c53de71062b2e610387bcf5505a87b5ba001a.png)
- Added new **Spreadsheet** component to _Storage_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/efb69cb04ef50d0b93f80f86bfc6676a88ad260d.png)
    - Powered by [Airtable](https://www.airtable.com)
    _Thanks to [@Jerin_Jacob](https://community.kodular.io/u/Jerin_Jacob)_
- Added new **Arduino** component to _Connectivity_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/849776630fde2532293cb953f15a5af6cd2e1bc5.png)
- Added new **FTP** component to _Connectivity_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/38decec58d4a62c8e92729ec79a98137649f43d4.png)
- Added new **WhiteMobi** component to _Monetization_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/2731603c79855992a053228863d97a4730634de1.png)
- Added new **Chrome Custom Tabs** component to _Experimental_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/ef9a5fcbdbbc8fd743cf16ddbef9c3b4d4e161bf.png)
- Added new **Shortcut Badge** component to _Experimental_ category
![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/5/5c17a82ac379769c1d4d3b80f85b2d60b3631e5b.png)


### New Events

- **Notifier** component
    - `Linear Progress Dismissed`: triggered when the _Linear Progress_ is dismissed by the user
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/df85f75c1e29cac23d681af36fc717b4efc81d5a.png)
- **Switch** component
    - `Clicked`: added _is Checked_ variable
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0307fcbe0945f485fb12bf0996e8da5bd7d35b82.png)
- **Exoplayer** component
    - `Other Player Started`: triggered when _another player_ starts playing sound
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/3e69a9845e8fce77db0fe7b8ba5bcd6c68ed5d8c.png)
    - `Other Player Stopped`: triggered when _another player_ stops playing sound
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/a/aa96e63e20f6b3253ddc12828d17b715583fde6c.png)


### New Functions

- **Screen**
    - `Lock Side Menu`: blocks the SideMenu from being opened or closed
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/6/6a58410ce1be92cc85680b2e137836c446c74657.png)
    - `Unlock Side Menu`: unblocks the SideMenu
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/a/a826e61e44edeb79d82f555fb723bd445bada9f9.png)
- **Button** component
    - `With Icon`: adds an icon to the _Button_
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/12ae158608b40100ce0563d4ba1e9ede98058a42.png) ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/b/bbe5e9f4d1bdf281f1b36649a69e18470bbd59f8.png) ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/c/c8cb2187b0ffa7f7ba8b4361e876c96ac524a985.png)
- **Notifier** component
    - `Dismiss Custom Dialog`: dismisses the created _Custom Dialog_
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/f/f528229e92473ebba9854127e975e07814e67b9c.png)
- **Switch** component
    - `Thumb Image`: changes the _Image_ of the Switch
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e71d1e1cce403606203a03f6a53430b816024679.png) ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/c/ceae21594938d8de465bd38b8ece8acf262013c8.png)
- **Sound Recorder** component
    - `Pause`: pauses the _started recording_
    :warning: _Requires Minimum SDK 24_
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/1/1f395d0e3994db93d19902484c8641526ee7f005.png)
- **Audio** component
    - `Sound Effects Enabled`: enables or disables the _sound_ on a component
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/3/3d2466a887111536b9de9a9c5d483a16b5459d8d.png)
    - `Is Sound Effects Enabled`: returns _true_ if the sound of a component is enabled
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/9/961cfe6dc693b504b91cc7d77b6c8f199917ccf6.png)
- **Package** component
    - `Is Package Installed`: returns _true_ if the package is installed
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/d/d4d0e1ad507221b7d7007fd06efed10ca3224e54.png)


### New Properties

- **Screen**
    - `Min SDK` (_added SDK 28 - Android 9_)
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/e/e749c7a32909a6b2e5afada33cb766254a91d993.png)
    - `Title Bar Font Typeface`
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/01aeb02d144cd448c792318434acbdd81f6a38e3.png)
    - `Title Bar Typeface Import`
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/0/0dee1685196186298bb30f536faa69bce53134cb.png)
- **Textbox** component
    - `Enable Copy & Paste`
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/2/2536da0df3f2485fc8471ac3e5f3a92d015f3259.png)
- **Snackbar** component
    - `Background Color`
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/8/8f5352af9de33afd355d3a5a0dcd9780d249f879.png)
- **Textbox** component
    - `Cursor Visible`
    ![image](https://kodular-community.s3.dualstack.eu-west-1.amazonaws.com/original/2X/7/7482940888ab2ab79ac65ecc3b336e27a741c304.png)

## 1.1.1 Butterfly   \|   _23 August 2018_

### **UI Changes**

- Fixed **_Ads Position_** after _Build Error_
- Switched "**_Show Navigation Bar_**" to _Experimental Properties_

### **Improvements**

- _Performance_ on **_App Loading_**
- When receiving a **_PushNotification_** when _app is open_, a **_Dialog_** with the notification appears

### **New Features**

- Added "**_Background Color_**" property for _Side Menu Layout_ component
- Added "**_Show Tabs_**" property for _View Pager_ component
- Added "**_Get Icon_**" properties for _Floating Action Button_ component

### **Bugs Fixed**

- **_Push Notifications_** on _Android 8 Oreo_ (`were not working`)
- **_Open Side Menu_** from _Hamburguer Icon_ (`was not opening`)
- **_Screen Title Visible_** if Screen is _Scrollable_ (`was not working properly`)
- **_Spreadsheet_** if request had _more than 100 rows_ (`was returning error`)
- **_Security Issue_** on _Login Page_ (`critical bug could cause system failure`)
- **_Internal Error_** when using an _AdBlocker_ (`Ode did not process properly`)
- **_Dim Amount_** on _Notifier_ (`was missing a defualt value`)
- **_Date Picker_** not _properly upgraded_ (`projects could be broken`)
- **_Time Picker_** not _properly upgraded_ (`projects could be broken`)
- **_Consent Dialog_**  not _properly executed_ (`sometimes was not showing`)
- **_View Pager_** visibility _Shadow Bug_ (`was not rendering properly`)
- **_Orientation Change_** Bug on _Tab Layout_ (`was broking screen`)
- **_Orientation Change_** Bug on _View Pager_ (`was broking screen`)
- **_Fixed Mode_** in Screen was _broken_ (`app design was broken`)
- **_Some Links_** to Documentation in Blocks (`were pointing to wrong path`)
- **_Other Minor Bugs_**
- [Update AcitivityStarter for file permissions · mit-cml/appinventor-sources@f6f05ca · GitHub](https://github.com/mit-cml/appinventor-sources/commit/f6f05ca0f8a2a14a708557314c9d290b1cda8c56)
- [Sound.java line 277 · Issue #462 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/462)
- [ViewGroup.java line 4404 · Issue #511 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/511)

## 1.1.2 Butterfly   \|   _15 September 2018_

### UI Changes

- Fixed **_Taiwan Flag_** on _Language Picker_
- Fixed link to **_Release Notes_** in Splash Screen
- Re-Added **_Import / Export Screen_** (.ais) files
- Added context menu items to **_Enable / Disable All Blocks_**

### Improvements

- Removed [**_TitleBar Tabs Blocks_**](https://community.kodular.io/t/removing-blocks/9382?u=barreeeiroo)
- Fixed **_handling <kbd>Enter</kbd>_** key on _Dialogs_
- **_Side Menu Layout_** and **_Side Menu block_** are now **_compatible with Companion_**
_It will no longer crash_
- Changed **_Text of Button_** from CANCEL to **_OK_** in _About this application_ Dialog

### New Features

- Re-Added **_High Quality Images_** property for _Screen1_
- Added missing **_Is Companion_** return property for _Screen_
- Added missing **_Is Side Menu Added_** return property for _Screen_
- Added missing **_Visible_** property for _Tab Layout_ component
- Added missing **_Visible_** property for _View Pager_ component
- Added missing **_Align_** properties for _Card View_ component
- Added missing **_Align_** properties for _Surface View_ component
&nbsp;
- Added missing **_Open System Write Settings_** function for _Screen_
- Added missing **_Are System Write Settings Granted_** function for _Screen_
&nbsp;
- Added missing **_Selection_** variable in event _After Picking_ for all Pickers

### Bugs Fixed

- **_Several Errors_** on _Companion_ (`some properties were not properly rendered`)
- **_TitleBar Back Button_** was not working (`it didn't handle user actions`)
- **_Leadbolt_** component was broken (`it was not showing ads`)
- **_Are Permissions Granted_** block was not working properly (`sometimes it was returning false even when granted`)
- **_Screen Title_** was visible after rotation (`Screen was generated again after changing orientation`)
- **_Screenshot_** component was crashing in some devices (`wrong procedures were called`)
- **_Notifier_** component was throwing some NullPointerExceptions (`missing try/catch code`)
- **_ListView_** scrolling speed (`it was too slow`)
- **_Notification_** component was not working (`it was broken`)
_Make sure you remove all OLD components. We have developed a new one, so you will need to add it again to your projects, as the one you are using is deprecated_
- **_AirTable_** component with OffSet (`+100 values were not returned`)
- **_None Color_** with _Is Card_ property in Arrangement (`Is Card was not active with that`)
- **_Got Text_** Event of _Web Component_ (`Out of Memory Exception was raised`)
- **_Tab Layout_** issue on selection (`Null Pointer Exception throwed sometimes`)
- **_Is Card_** property in Arrangements (`Fill Parent was not working`)
_[Is card" property sizing BUG](https://community.kodular.io/t/is-card-property-sizing-bug/9460)_
- **_SwipeRefreshLayout_** with Scrollable Arrangements (`it was conflicting`)
_[Can't Scroll Vertical Scroll Arrangement Up in Swipe Refresh Layout](https://community.kodular.io/t/cant-scroll-vertical-scroll-arrangement-up-in-swipe-refresh-layout/9765)_
- **_TitleBar Icon Selected_** return values (`was returning image name`)
_[Error in Title Bar Back Button & Title Bar Icon Selected](https://community.kodular.io/t/error-in-title-bar-back-button-title-bar-icon-selected/10093)_
- **_Firebase_** with wrong URL (`it was crashing apps`)
_[Utilities.java line 39 · Issue #282 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/282)_
- **_ExoPlayer_** sending _Null Error Message_
_[Log.java · Issue #594 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/594)_
- **_Notifier_** component (`was throwing some errors`)
_[TextView.java line 672 · Issue #717 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/717)_
- **_Wallpaper_** component (`it was missing a permission`)
_[Missing wallpaper permission · Issue #723 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/723)_
- **_Notifier_** component (`Set Dialog Helper was not being triggered`)
_[Notifier.java line 1179 · Issue #966 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/966)_
- **_FillParent_** property with Scrollable parameter (`it was not working`)
_[Fill Parent does not work in Scrollable on Android 7+ with target SDK 26 · Issue #1344 · mit-cml/appinventor-sources · GitHub](https://github.com/mit-cml/appinventor-sources/issues/1344)_
- **_Got Value_** event of Firebase (`it was not working as it should`)
_[register.yail line 10098 · Issue #1174 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1174)_
- **_Internal Error Reporting_** was crashing sometimes in apps (`NullPointerException`)
_[Formatter.java line 2522 · Issue #28 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/28)_
- **_500 Internal Error_** on URLs (`accessing to /b`)
_[Fix a 500 Error · mit-cml/appinventor-sources@49c25e7 · GitHub](https://github.com/mit-cml/appinventor-sources/commit/49c25e75987380cd47eed11bdab55b908860b052)_

## 1.1.3 Butterfly   \|   _04 October 2018_

### Improvements

- Added **_Subscribe to Notifications_** button in _Builder_

### Companion

- Fixed **_PushNotifications_** on _Companion_
- **_SideMenu_** and **_SideMenuLayout_** are now _fully compatible_ in Companion

### New Features

- Added missing **_HTML Format_** property for _List View_ component
[_Disable Html in Listview_](https://community.kodular.io/t/disable-html-in-listview/10377)
- Added missing **_Statusbar Visible_** property for _List Picker_ component
- Added missing **_CreateDirectory_** function for _File_ component
- Added missing **_DirectoryCreated_** event for _File_ component

### Bugs Fixed

- **_Notifier_** component returning a strange error (`Fatal Exception: android.view.WindowManager$BadTokenException: Unable to add window -- token android.os.BinderProxy@20a73ee is not valid; is your activity running?`)
- **_GetPackageIcon_** uses now PackageName as File Name (`before it was appIconMAK.png`)
- **_Spotlight_** component was not working with FAB (`it was incompatible`)
- **_ChromeCustomTabs_** were throwing NullPointerExceptions (`missing try/catch block`)
- **_ImageTintColor_** was missing a description (`it had a copy-pasted one`)
- **_ImageTintColor_** was crashing sometimes (`NPE were raised due to missing try/catch code`)
- **_AirTable_** component had a security issue (`it was exposing API key in logs`)
- **_Button_** crashing when editing multiple at once (`Concurrent Modification Exception`)
- **_CloudDB_** was not working properly (`StringIndexOutOfBoundsException`)
- **_PushNotifications_** were missing some permissions (`manifest was incomplete`)
- **_Typo_** on Sprite component (`missign T`)
- **_Typo_** on YouTube component (`stage has to be state`)
- **_ActivityStarter_** was not opening PDFs (`missing permission`)
[_Getting error while accessing pdf from directory. Kindly help_](https://community.kodular.io/t/getting-error-while-accessing-pdf-from-directory-kindly-help/10116)
- **_Transparency Bug_** on _Button_ (`it was returning an opaque button`)
[Transparency not working with default shape button](https://community.kodular.io/t/transparency-not-working-with-default-shape-button/10275)
- **_Download_** component was not working sometimes (`it was crashing`)
[Download.java line 299 · Issue #1522 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1522)
- **_Clock_** component throwing NPE (`app was unresponsive`)
[HashMap.java line 471 · Issue #1525 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1525)
- **_FTP_** component crashing (`returning NPE`)
[KodularFtp.java line 233 · Issue #992 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/992)
- **_YouTube_** component causing NPE (`wrong variable reporting error`)
[ActivityThread.java line 3133 · Issue #1737 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1737)
- **_VideoPlayer_** component causing NPE (`missing if check`)
[VideoView.java line 260 · Issue #1736 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1736)
- **_FusionTables_** component causing the same issue as Notifier (`is your activity running?`)
[WindowManagerGlobal.java line 552 · Issue #1694 · Kodular/BugsTracker · GitHub](https://github.com/Kodular/BugsTracker/issues/1694)

## 1.1.4 Butterfly   \|   _05 October 2018_

### Bugs Fixed

- **_ListView_** component causing a critical error (`Null Pointer Exception`)
