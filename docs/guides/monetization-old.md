# Getting started with Google Ad Manager

**Kodular has partnered with Google** to provide a **hight quality monetization** integration. This is done thanks to
**Google Ad Manager**, a Google's product that provides custom access to monetization tools. We have implemented their
features into a set of components that will allow you to monetize your apps with Google Ad Manager advertising.

!!! info
    If you are looking for Payments Support, please visit [this Kodular Support page](https://support.kodular.io/support/solutions/folders/204000115658).

## Registering for a Child Account

In order to start using Google Ad Manager, you have to apply for a child account to be part of Kodular's network.

Go to My Kodular, head to the [Payments](https://my.kodular.io/payments) page, and make sure your account is eligible.
Some of the reasons why your account may not be eligible are:

- You have no approved apps for monetization.
- You have way too many apps rejected for monetization.

![Eligible Account](/assets/images/guides/monetization/preinvite.png)

If your account is eligible, you may see a "Request Invite" button.

![Invite Email](/assets/images/guides/monetization/email.png)

Follow the setup instructions to create the Google Ad Manager Child Account, and wait until it gets approved by Google.
This process should take _around 2 business days_.

!!! warning
    Make sure you no longer hold a Google Ad Manager account. If so, ask to create a new one.

Once all the process has been completed, **your account will be ready to show ads**.

![Approved Account](/assets/images/guides/monetization/approved.png)

## Registering your app in Google Ad Manager

The next step is applying for a Google Ads App ID. To do so, head to
the [Google Ad Manager console](https://admanager.google.com), and go to Inventory>Apps section.

![Apps in Ad Manager](/assets/images/guides/monetization/admapp.png)

Click on "New App", input your desired app name and check Android as platform.

=== "Play Store"

    If your app is published in Google Play Store, just search for its name, and all data will automatically be linked.

=== "Not in Play Store"

    If your app is not published in Google Play Store, check the alternative store and manually type the package name.
    It is important that it matches the same one that you wrote in Kodular Creator.  
    Please note that **we do require apps to be published in any of those app stores**. If this is not your case, we
    recommend publishing it in Amazon Appstore, which is free and it takes just 5 minutes to upload an app.

Once finished, copy the **App ID** field that appears in the list (it will start with `ca-app-pub-`). We will need it
for later.

## Implementing ads in your app

This step is the easiest one. Go to Kodular Creator, and open the Monetization>Advertising section. You will find right
at the top 3 components: [**Kodular Banner**](../components/monetization/advertising/banner-ad.md),
[**Kodular Interstitial**](../components/monetization/advertising/interstitial-ad.md) and
[**Kodular Rewarded**](../components/monetization/advertising/rewarded-ad.md). Those three components are the ones that
will provide Google Ad Manager ads in your app.

Drag and drop them anywhere you want, and play with blocks to properly integrate them. **No Ad Units are needed**, as
all the integration happens automatically.

![Creator Components](/assets/images/guides/monetization/creator.png)

Finally, open the **App Settings** modal with the gear button next to the Designer/Blocks ones. Go to the Monetization
section, and input the previously copied **App ID** into the **Google Ads App ID** field.

### app-ads.txt

For a better ad delivery, **you should have deployed an `app-ads.txt` file**. You must include our Google Publisher ID
in it.

Check **[this page](../support/adm/app-ads-txt.md) to learn how to properly implement it**.

## Exporting your app

**Your app is now ready!** Just click the Export button and publish it anywhere.
