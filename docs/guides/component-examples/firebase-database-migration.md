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
4. **Test on a device.** Confirm reads, writes, and `Data Changed` events all work as expected.
5. **Repeat for the remaining screens.** When all screens are migrated, you can delete the old **Firebase Database** component from your project.

!!! tip "Live-test both components side by side via the Companion"
    During the migration you can drop both **Firebase Database** and **Firebase Realtime Database** onto the same screen and exercise them via the Companion. The Companion live-testing path runs both happily — only the APK/AAB build is blocked while the deprecated component is still present.

!!! warning "APK build with `Firebase Realtime Database` requires `google-services.json`"
    As soon as **Firebase Realtime Database** is in the project, the build server requires a `google-services.json` asset. If it's missing, the build fails with `google-services.json file not found in assets directory`. Upload it before building.

## Rolling back

If you hit a problem with the new component during migration, you can revert the affected screen to use the old component again — but remember that as long as **Firebase Database** is still in the project, you will not be able to build an APK or AAB. Use the Companion for live testing while you sort it out, then complete the migration before shipping.

## When to remove the old component

The old **Firebase Database** component is deprecated. It still loads in the Designer and runs in the Companion so you can migrate without losing block context, but **APK and AAB builds will fail while it is present**. Remove it from your project as soon as every screen has been migrated.
