# Kodular Available Methods

Apart from available methods in MIT App Inventor 2 `Form.java`, you may also use some custom methods that we have
added. These methods were created to ease access to some features, like knowing both original and custom package
name of apps.

!!! bug "Compatibility"
    Keep in mind these methods are only available in Kodular. This means that your extension will only work with
    Kodular sources if you call them directly. Keep reading to learn how to make it fully compatible.

## Installation

<script src="https://gist.github.com/barreeeiroo/4fb8e76b525952c6b4695bd8ba774170.js"></script>

Modify your standard `Form.java` and include the methods above. Even though they look like static returns, they will
properly work in Kodular. You just need to declare them like that, so Java compiler understands that such methods
exist.

### Compatibility with MIT App Inventor 2

If you directly invoke those methods, your extension will not be compatible with other AI2 platforms, as they are
Kodular specific methods. To make them compatible, you must invoke those methods using Java reflection. If you get
an error, it is because the method is not available, meaning it is not running in Kodular.  
See [this StackOverflow answer](https://stackoverflow.com/a/161005/6626193) to learn how to do it.

## Available Methods

### getKodularPackageName

Returns the original package name, ignoring if custom package name was set. Format is `io.kodular.username.app_name`.

### isCustomPackage

Returns true when a custom package name was set; false when using default one (returned by `getKodularPackageName`).

### getInstalledFrom

Returns the store where the app was installed from. Available return strings are:

- _Google Play_
- _Amazon Appstore_
- _Samsung App Store_
- _Developer_ (installed from ADB)
- _Unknown_ (fallback from APK)

### isInstalledThruStore

Returns true when app was installed from a legitime app store; false otherwise.
