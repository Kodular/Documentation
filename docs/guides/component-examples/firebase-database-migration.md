# Migrating from Firebase Database to Firebase Realtime Database

## Overview

The legacy **Firebase Database** component was built on a Firebase Java SDK from 2015 that has since been deprecated by Google. As of Kodular Creator 2026.05.1, that component is marked deprecated and a new **Firebase Realtime Database** component takes its place.

!!! danger "You must migrate to build APKs"
    Projects that still contain the deprecated **Firebase Database** component **fail to build**. Existing projects keep loading in the Designer so you can migrate, but you will not be able to produce an APK or AAB until every screen has been switched over to **Firebase Realtime Database** and the legacy component has been removed from the project.

## Why migrate

* **New Firebase projects don't expose database secrets.** Firebase projects created after Google's legacy auth cutoff cannot mint the legacy HS256 tokens that the old component relies on. The new component uses Firebase Authentication instead, which works on every Firebase project regardless of age.
* **Active maintenance.** The new component is built on the modern `firebase-database` SDK, which Google still ships updates for.
* **Stability.** A long-standing crash inside the old SDK (a `NullPointerException` thrown when the WebSocket handshake comes back malformed) does not affect the new component.

## Before you migrate

You will need:

1. A Firebase project with Realtime Database enabled in the [Firebase Console](https://console.firebase.google.com/){:target="_blank"}.
2. The `google-services.json` file for that project, downloaded from **Project settings → General → Your apps → Android app**.
3. The **Firebase Authentication** component already added to your project, if your database rules require authenticated reads/writes.

!!! info "Where do I put `google-services.json`?"
    Upload it as a regular project asset from the **Media** section of the Designer. The build server reads it at compile time and wires it into the APK automatically.

## Block mapping

The new component keeps the same block names for everything you actually use to read and write data, so most of your block tree migrates verbatim.

| Old (`Firebase Database`) | New (`Firebase Realtime Database`) | Notes |
|---|---|---|
| `Store Value` | `Store Value` | Identical |
| `Get Value` | `Get Value` | Identical |
| `Clear Tag` | `Clear Tag` | Identical |
| `Append Value` | `Append Value` | Identical |
| `Remove First` | `Remove First` | Identical |
| `Get Tag List` | `Get Tag List` | Identical |
| `Go Online` / `Go Offline` | `Go Online` / `Go Offline` | Identical |
| `Data Changed` event | `Data Changed` event | Identical |
| `Got Value` event | `Got Value` event | Identical |
| `Firebase Error` event | `Firebase Error` event | Identical |
| `Tag List` event | `Tag List` event | Identical |
| `First Removed` event | `First Removed` event | Identical |
| `Persist` property | `Persist` property | Designer-only on the new component; runtime changes via blocks are not supported |
| `Firebase URL` | _removed_ | The URL comes from `google-services.json` |
| `Default URL` | _removed_ | Same |
| `Developer Bucket` | _removed_ | Replaced by `Project Path` |
| `Project Bucket` | _removed_ | Replaced by `Project Path` |
| `Firebase Token` | _removed_ | Authenticate via the **Firebase Authentication** component |
| `Unauthenticate` | _removed_ | Sign users out from **Firebase Authentication** instead |
| _new_ | `Project Path` property | Optional root prefix prepended to every `tag` argument |

If your old project relied on `Project Bucket = "users"` and called `Store Value tag = "alice"`, the new equivalent is `Project Path = "users"` and `Store Value tag = "alice"`.

## Authentication

The old component embedded a Firebase auth token directly in the project. The new component delegates authentication to **Firebase Authentication**, which means you authenticate once with whichever sign-in flow you prefer (email/password, Google, phone, etc.) and the database component picks up the signed-in user automatically.

Typical pattern:

1. Add **Firebase Authentication** alongside **Firebase Realtime Database**.
2. On `Screen.Initialize`, check if a user is already signed in via `Get Current User`.
3. If not, run your sign-in flow (`Login With Email`, `Sign In With Google`, etc.).
4. After `Login Success`, perform your **Firebase Realtime Database** reads and writes — the database respects the authenticated user.

!!! caution "Update your security rules"
    If you switched from the legacy custom-token auth to Firebase Authentication, your database rules need to expect `auth.uid` rather than custom claims minted by Kodular. See the [Firebase Rules guide](firebase-rules.md) for example rules.

## Migrating an existing project

A safe, incremental approach:

1. **Add the new component to a single screen first.** Keep the old component on every other screen so the rest of the app keeps working while you experiment.
2. **Re-create the blocks** on that screen using the new component. The block names are the same, so this is mostly drag-and-drop.
3. **Map the old `Project Bucket`** value to the new `Project Path` property, and remove `Firebase URL` / `Firebase Token` references — those properties don't exist on the new component.
4. **Test by building an APK and installing it on a device.** The Companion cannot fully exercise **Firebase Realtime Database** — see the warning below — so live-testing via the Companion will not give you a reliable signal. Build an APK, install it, and confirm reads, writes, and `Data Changed` events all work as expected.
5. **Repeat for the remaining screens.** When all screens are migrated, you can delete the old **Firebase Database** component from your project.

!!! warning "Don't test the new component via the Companion"
    **Firebase Realtime Database** initialises from your project's `google-services.json` and the package name and SHA-1 signature registered in your Firebase project. The Companion runs under its own package name and signature and does not bundle your `google-services.json`, so the SDK cannot authenticate against your Firebase project from there. Reads and writes will fail with errors like `Can not call 'Get Value' if the firebase object is NULL`. Always test the new component on a built APK installed on a real device.

!!! warning "APK build with `Firebase Realtime Database` requires `google-services.json`"
    As soon as **Firebase Realtime Database** is in the project, the build server requires a `google-services.json` asset. If it's missing, the build fails with `google-services.json file not found in assets directory`. Upload it before building.

## Rolling back

If you hit a problem with the new component during migration, you can revert the affected screen to use the old component again — but remember that as long as **Firebase Database** is still in the project, you will not be able to build an APK or AAB. Build APKs (not Companion sessions) to validate behaviour while you sort it out, then complete the migration before shipping.

## When to remove the old component

The old **Firebase Database** component is deprecated. It still loads in the Designer and runs in the Companion so you can migrate without losing block context, but **APK and AAB builds will fail while it is present**. Remove it from your project as soon as every screen has been migrated.

## FAQ

### `FirebaseError: Can not call 'Get Value' if the firebase object is NULL`

The new component could not initialise, so every block call hits a null SDK instance. In order of likelihood, the cause is one of:

1. **You're testing through the Companion.** The Companion does not run under your project's package name or signature and does not load your `google-services.json`, so the new component cannot connect to your Firebase project from there. Build an APK and test on a device instead.
2. **`google-services.json` is missing or incomplete.** Re-download it from **Firebase Console → Project settings → Your apps → Android app** and upload it via the Designer's **Media** section. Open the file in a text editor and confirm it contains a `firebase_url` entry under `project_info` — if it doesn't, your Firebase project doesn't have Realtime Database enabled yet, so enable it in the Firebase Console and download a fresh copy.
3. **Package name mismatch.** The `package_name` inside `google-services.json` must exactly match the package name configured in **Project Properties → Package Name**. If you changed the package name after registering the Android app in Firebase, register a new app under the new name and download the new `google-services.json`.
4. **SHA-1 signature mismatch.** If your database rules or Firebase Authentication require a registered SHA-1, the certificate Kodular signs your APK with must be added to the Android app in the Firebase Console under **Project settings → Your apps → SHA certificate fingerprints**. Use the SHA-1 of your keystore (or the Kodular default debug keystore for unsigned test builds).

### Where did the `Firebase URL` and `Firebase Token` properties go?

Both were removed on purpose. The database URL is now read from `google-services.json` at build time, so there is no field to fill in. Authentication is delegated to the **Firebase Authentication** component — sign the user in there and **Firebase Realtime Database** automatically uses that identity. See [Authentication](#authentication) above.

### My old app crashes with `NullPointerException` in `WebSocketHandshake.verifyServerHandshakeHeaders`

This is a known crash inside the legacy SDK that ships with the deprecated **Firebase Database** component. It is triggered when the WebSocket handshake response contains a header the old SDK cannot parse, and there is no fix on the old component — the SDK has been unmaintained by Google for years. Migrating to **Firebase Realtime Database** resolves it because the new component uses a current SDK that does not have this bug.

### Build fails with `google-services.json file not found in assets directory`

As soon as **Firebase Realtime Database** is in the project, the build server requires a `google-services.json` asset. Upload it from the Designer's **Media** section and rebuild.

### Reads and writes return nothing (or get permission-denied) on a built APK

Your security rules likely still expect custom claims minted by the old component's token-based auth. The new component authenticates as a normal Firebase user, so rules need to check `auth.uid` (or `auth != null`) instead. Update the rules in the Firebase Console — see the [Firebase Rules guide](firebase-rules.md) for examples.

### Why can't I test the new component in the Companion?

The Companion is a separate APK that ships with its own package name and its own signing certificate, and it does not load your project's `google-services.json` at runtime. **Firebase Realtime Database** authenticates against your Firebase project using exactly those three things — package name, signature, and `google-services.json` — so from inside the Companion the SDK has nothing valid to connect with. This is a hard limitation of how Firebase verifies clients, not a Kodular bug. Build an APK and install it on a real device to test.

### Can I keep both `Firebase Database` and `Firebase Realtime Database` on the same screen during migration?

In the Designer, yes — that's how you re-create blocks side by side. At runtime, the new component will not work in the Companion (see above) and APK/AAB builds are blocked entirely while the deprecated component is present. The practical migration path is: rebuild the blocks alongside the old ones in the Designer, delete the old component, then build an APK to test the new one.

### How do I map `Project Bucket` to `Project Path`?

Use the same string. If the old component had `Developer Bucket = "myapp"` and `Project Bucket = "users"`, set `Project Path = "users"` on the new component. The `Developer Bucket` concept does not exist on the new component — every project has its own database, so there is no shared bucket to namespace under.
