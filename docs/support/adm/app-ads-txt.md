# How can I configure my app-ads.txt file?

For a better ad delivery, **your app must have deployed a `app-ads.txt` file**. If you don't know what this file is,
you may want to check [this support page](https://support.google.com/admanager/answer/7544382) to learn about it.

!!! quote
    Full article available at [_Create ads.txt/app-ads.txt in Ad Manager_](https://support.google.com/admanager/answer/7544382)

_If you already have an `app-ads.txt` file, you may skip to the latest section of this page to directly include our
Google Publisher ID._

## Linking your website

Add the website URL in the contact information of your app listing:

1. Sign in to your [Play Console](https://play.google.com/apps/publish/signup/).
2. Select an app.
3. On the left menu, click **Store presence** and then **Store listing**.
4. Scroll to **Contact Details**.
5. Add your developer website URL.

### Publish your app-ads.txt

You now have to **create a blank file from your webmaster in the root of the domain** named `app-ads.txt`. A valid scheme
is, for example, `https://example.com/app-ads.txt` if your developer website URL was set to `https://example.com`.

### Include Kodular publisher ID

Now you have to **include our Google publisher ID in your file**. Open your `app-ads.txt` file, and append the
following lines (replacing `CHILD_NETWORK` with your specific child network code):

```txt
junnovate.com, kcn-CHILD_NETWORK, DIRECT
google.com, pub-7724198591595211, RESELLER, f08c47fec0942fa0
```

Once you have done this last step, wait 24 hours and **ads will start serving in your app**.
