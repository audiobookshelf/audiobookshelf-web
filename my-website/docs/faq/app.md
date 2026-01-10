---
id: app
sidebar_label: App
title: App
sidebar_position: 1.3
---

This section aims to answer common questions related to the app.

## Why can't I do X in the app?

Features are still being added and bugs are still being worked out.

The apps are designed to allow you to use the server, not manage the server.
Some management functionality may eventually be added, but if you want to manage the server from your phone you will need to use the web browser.
Note that some buttons may not show up in the mobile view due to the small screen and you will need to either switch to landscape mode or the Desktop view if a button is missing.

## Something stopped working after an app update

Sometimes things behave weirdly after the app or server updates.

First, try clearing the app's cache, or uninstalling and reinstalling the app.
This will require you to sign in to all servers again.

If your issue persists, feel free to ask in Discord or look for an existing GH issue.

## When will the apps be out of beta?

There is not an exact date as to when the apps will be out of beta.
The apps will likely leave beta before all originally planned features are realized to allow more users to use the app.

Android has more features than iOS, but all of these features are planned for iOS (with no estimate on when any given feature is implemented).

A checklist tracking the main remaining bugs for the iOS app is located [here](https://github.com/advplyr/audiobookshelf-app/issues/541).
_Please do not_ leave additional comments on this issue that are just requests to release the app, this has already been communicated in various GitHub and Discord discussions (see [General FAQ](/faq#i-have-a-feature-request-how-should-i-bring-this-up)).

## When will spots be cleared in Testflight to make room for new users?

Due to changes on Apple's side, we can no longer clear spots early from users who are not keeping the app up to date.
Users who do not update their app are removed from TestFlight 90 days after every app release.
It usually takes a few days for the Testflight to fill up after spots are cleared.

The following table includes approximate release and clear dates for each app version.
Note that the exact release and clear time may vary by a few days depending on how long it took the app to complete review on Apple's side.

| App Version  | Release Date | Clear Date   |
| ------------ | ------------ | ------------ |
| v0.9.77-beta | Nov 6, 2024  | Feb 4, 2025  |
| v0.9.78-beta | Jan 19, 2025 | Apr 19, 2025 |
| v0.9.79-beta | Jan 26, 2025 | Apr 26, 2025 |
| v0.9.81-beta | Apr 26, 2025 | Jul 25, 2025 |
| v0.10.0-beta | Jul 21, 2025 | Oct 19, 2025 |

## How do I get an invite to Testflight?

If the Testflight is not full (see 90 days after release table), you can attempt to join the Testflight.
To do this, [follow the instructions found on the official Testflight site](https://testflight.apple.com/join/wiic7QIW).
This link is the same one embedded in the "Download on the app store" image located on this website.
If you click on the link and see "This beta is full", you will need to wait until the next time spots are cleared.

## Will I lose access when the Testflight build expires or a new build is published?

As long as you keep the ABS app up to date in Testflight, you will not be removed from the Testflight.
A new build will be published before the current version expires.

## What are my options while the Testflight is full?

There are several options for Apple users in the meantime:

- Use the web client or save as a Progressive Web App (PWA). Note that this does not support offline use.
- Sideload the official app. You can use something like AltStore or [SideStore](https://sidestore.io/) to sideload the IPA of the [most recent app release](https://github.com/advplyr/audiobookshelf-app/releases). You will need to manually update sideloaded apps.
- Use a 3rd party app which integrates with ABS.
- Download the media files from the web client and use a dedicated audiobook or ebook app. These will not sync your progress with the ABS server.

## Are there any 3rd-party apps?

We encourage the creation of 3rd-party apps by providing the [Audiobookshelf API](https://api.audiobookshelf.org/).
Users are advised to exercise caution and discretion when using third-party apps, as their quality and security may vary.

This list serves as a means of discovering third-party apps. These apps are not affiliated with or supported by Audiobookshelf.
Any issues with the apps should be directed to the app maintainers through appropriate channels.

## I want to build a client app. What are the rules?

You are welcome to build a 3rd-party client for Auidobookshelf or add Audiobookshelf client integration to an existing app.
Third-party clients are not required to be open source or provided for free.

Please adhere to the following:

- Avoid using the Audiobookshelf name or logo in a manner that might suggest affiliation with the Audiobookshelf organization to users without permission from ABS maintainers.
- The name Audiobookshelf should be written in one of the following ways: all lowercase `audiobookshelf`, first letter capitalized `Audiobookshelf`, or abbreviated all capitalized `ABS`.
- Do not use the Audiobookshelf name or logo in any context that promotes or encourages piracy.

## Why do the e-reader settings not apply to my ebook?

ABS support for ebooks still needs work. Additionally, many epub files do not fully conform to spec, so some e-reader settings will not work (such as font size adjustments or font thickness) due to how the epub was created. To fix this, you can perform an epub to epub conversion, and this should fix most render issues. Some good options for this are Calibre or Sigil.
