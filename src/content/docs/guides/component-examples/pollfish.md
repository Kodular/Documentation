---
title: Integrating Pollfish in your app
---

## Overview

In this guide, you will learn how to use Pollfish surveys in your apps. The Pollfish component is used to display native, targeted surveys that drive a high-quality audience to your app. Rewarding users for completing surveys is great for both you and your users as it increases engagement and retention.

## First steps

You will first have to sign up for a free Pollfish account and register your app. You will be given an API key which we will use later to communicate between Kodular and Pollfish. To get started, head over to [Pollfish](https://www.pollfish.com/signup/publisher)

![](@assets/images/guides/pollfish/ext_signup.jpg)

Once you've signed up successfully, you should be redirected to your Pollfish dashboard.

![](@assets/images/guides/pollfish/ext_dashboard.jpg)

Click on "Create App" and fill in details of your Android application. Submit the form once you've filled in all details accurately.

![](@assets/images/guides/pollfish/ext_create.jpg)
You will find your API key at the top of the page. Copy this key to your clipboard or save it temporarily. You will be pasting it later in your Kodular project.

## Designing the app

We'll be starting off with a new project. Drag and drop the `Pollfish` component from the Monetization > General category.

Select the Pollfish component and head over to the Properties panel. Set the `API Key` property to the key you copied from your Pollfish dashboard.


!!! note
    Make sure you've enabled `Test Mode` in the component's designer properties. Your surveys will not open if you've disabled `Test Mode` in an unverified app.


![](@assets/images/guides/pollfish/d_pollfish-1.jpg)

We will be showing a Single Survey to users in this guide. Head over to [Next steps](#next-steps) for information on implementing Offerwall surveys.

Also add a `Button` to the Screen. We will be using the Click event of the `Button` to open the survey.
Your designer should look like this:

![](@assets/images/guides/pollfish/d_pollfish-2.jpg)

## Coding the blocks

Before we can let the user open a survey, we have to ensure that it is loaded and ready. Use the `Survey Received` block to check if the survey has loaded. We will be storing the status of the survey in a global variable called `surveyReceived`.

![](@assets/images/guides/pollfish/v_survey-received.png)
![](@assets/images/guides/pollfish/e_survey-received.png)

We then listen to clicks on the `Button`. We show the survey only if it has loaded.

![](@assets/images/guides/pollfish/e_button-click.png)

It is sometimes possible that no survey is available to be shown to the user. We create a procedure called `SurveyNotAvailable` to handle cases when loading the survey fails.

![](@assets/images/guides/pollfish/p_survey-not-available.png)

The procedure will be called if no survey was available or if the user was ineligible or rejected.
![](@assets/images/guides/pollfish/e_survey-not-available.png)
![](@assets/images/guides/pollfish/e_user-not-eligible.png)
![](@assets/images/guides/pollfish/e_user-rejected.png)

Finally, we handle a successful survey result using the `Survey Completed` block. This is where you can reward your users with non-cash items (in-game coins, credits, etc.)
![](@assets/images/guides/pollfish/e_survey-completed.png)


## Conclusion

![](@assets/images/guides/pollfish/pr_survey.png){: .preview-img}

![](@assets/images/guides/pollfish/pr_reward.png){: .preview-img}

The finished project
{: .img-caption}

![](@assets/images/guides/pollfish/blocks.png)

All the blocks we've used
{: .img-caption}

Here is a summary of what you've learned in this guide.

 - How to set up a Pollfish publisher account.
 - How to find your Pollfish API key.
 - How to use the Pollfish component to show Single Surveys to users.

## Next steps

### Using Offerwall Surveys

Select "Offerwall Survey" in the `Survey Mode` designer property of the component. Your users will now be shown offerwalls instead of single surveys.

### Publishing

Before publishing your app to the Google Play Store, make sure to disable `Test Mode` from the component's designer properties. Next, you have to get your app approved by Pollfish.
Head over to your Pollfish dashboard and request an approval. You will need to submit a valid link that points to your app.

## Downloads

 Get the AIA file <a href="https://kodular-docs.s3-eu-west-1.amazonaws.com/aia/pollfish.aia">here</a>.
