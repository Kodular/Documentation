# How do I ensure GDPR compliance when using Google Ad Manager?

Kodular's new monetization components use Google's Funding Choices offering to gather data usage consent from users in
the EU/EEA/UK. Below is a quick guide on setting up Funding Choices for your app.

## Set up Funding Choices account

You will first need to register for a Google Funding Choices account if you do not have one already. To sign up, head
over to [https://fundingchoices.google.com/](https://fundingchoices.google.com/) and fill up the sign up form.

## Add consent gathering functionality to your app

Go to the "apps" section from your Funding Choices dashboard. You should see all your registered apps listed. If you
don't see your app, make sure you have registered it from your Google Ad Manager dashboard.

Click on your app and press "Create" in the Messages section. Pick "EU Consent" as the message type.

Give your message a name and select the default language you want it to be shown in to users. You may select additional
languages that will be automatically chosen based on the locale of the user's device.

Finally, select the type of consent you would like to show users. If you choose "Consent/Manage options", users will be
able to opt-in to data collection by your app. If you choose "Consent/Do not consent/Manage options", users will be able
to opt-out of data collection that is enabled by default.

## Customize your consent form

You can customize the form that is shown to users so that it fits in with the branding of your app. You can change
colors, fonts, and typography. Make sure to choose colors that have enough contrast and typography that clearly conveys
your intent to acquire consent. **Also ensure the text in the consent buttons are clear and concise. Vague or misleading
text may void any consent you have gathered from users. Once you are done customizing the form, save it.**

## Publishing your consent form

When you are ready to request consent in your app, head over to the apps section of Funding Choices and select your app.
Click on the more options button for the form you wish to activate and click on "Publish". Once successfully, your
form's status should update to "Active".

Your app will now start showing the consent form to relevant users. **You do NOT need to update your app for these
changes to take effect**.

## Testing consent

To test if your consent forms are working correctly, publish them from Funding Choices and enable "Test Mode" in your
advertising components. Once you rebuild your app, you should see a consent form pop up every time you open it,
regardless of whether you are in the EU/EEA/UK.

## Troubleshooting

Some common reasons why consent forms may not be showing in your apps are:

- Your app ID in Funding Choices does not match what you have input in your app's "Project Settings" in the Creator.
- You have not published your form in Funding Choices.
- If test mode is disabled and you are not seeing a consent form, it may be because you are not in the EU/EEA/UK.
- If test mode is disabled and you are not seeing a consent form, it may be because you have already provided/declined
  consent previously. Try clearing your app's data from settings to trigger a re-request.
