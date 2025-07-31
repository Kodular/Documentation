# Getting started with Kodular Monetize

**Kodular Monetize** is a new system to allow you to monetize your apps with ease. It provides a simple way to 
integrate ads and manage your advertising networks directly from Kodular Creator, without intermediaries.

!!! tip "Public Preview"
    This feature is currently in public review. If you wish to try it out, you can fill the following form: [kodul.ar/monetize-join](https://kodul.ar/monetize-join).
    You will receive a link to activate it if selected.  
    Please report any issues you encounter in [Kodular Community](https://community.kodular.io/t/introducing-kodular-monetize-public-preview/298115).

This new system aims to replace the existing commission-based monetization system, which had some limitations. With
Kodular Monetize, you will have **lower charges**, and a post-usage based pricing model. It will result in a lower
"effective" commission for you.

## Enabling Kodular Monetize

_You do **not** need a Kodular Premium subscription to use Kodular Monetize._

1. Buy a **Kodular Monetize** activation license in [my.kodular.io/monetize](https://my.kodular.io/monetize).
    * This is a **one-time payment**: once bought, you own it for life, for all components.
    * During Public Preview, buying an activation license is restricted to a limited number of users. You can fill the
      [kodul.ar/monetize-join](https://kodul.ar/monetize-join) form to join the waiting list, and you will receive a
      link to buy it if selected.

3. Complete an identity verification process in [my.kodular.io/monetize](https://my.kodular.io/monetize).
    * _This page is still under development._

And done, you are ready to use Kodular Monetize components!

## Adding Kodular Monetize to your app

Kodular Monetize is not a single component, but a set of components that you can use to monetize your app. As of now,
two ad networks are supported:

* **Google AdMob**
* **Google Ad Manager**

If you use any of those ad networks' components, you will be using Kodular Monetize underneath.

### Build Errors

* **`NOT_ACTIVATED`**: this error means that the Kodular Monetize license has not been purchased yet.
    * During Public Preview, buying a license is based in a waiting list. If you have not filled the
      [kodul.ar/monetize-join](https://kodul.ar/monetize-join) form, please do so to join the waiting list.

* **`NOT_VERIFIED`**: this error means that the identity verification process has not been completed yet.
    * Please go to [my.kodular.io/monetize](https://my.kodular.io/monetize) and complete the verification process.

* **`OVERDUE_INVOICES`**: this error means that you have unpaid overdue invoices.
    * Please go to [my.kodular.io/monetize](https://my.kodular.io/monetize), and make sure you have all your invoices are paid.

## FAQ

### How does it work?

Kodular Monetize **tracks events**: whenever a billable "event" occurs in your app, it gets recorded and charged in the
next month invoice. An event may be an ad impression, a click, or any other action that can be monetized.

For example, ads displayed in the month of June will be charged in an invoice issued in the first week of July. The
invoice is due within 30 days, to allow you to **pay for it after the ad network distributes the earnings to you**.

### How does it differ from the commission-based monetization system?

In the commission-based monetization system, you were charged a percentage of your earnings. This however required
complex integrations with ad networks, and was not flexible enough to allow you to use any ad network you wanted. It
was also limiting the number of users that could use it.

This new system however allows unlimited users to monetize their apps, and provides a more transparent usage-based
pricing model, on top of being ad-network agnostic.

### What is the cost associated with Kodular Monetize?

1. **Kodular Monetize Activation License**: this is a one-time activation payment, granting access forever to all
  components.
    * For Public Preview users, the fee is 5 EUR.
    * For anyone else acquiring it in 2025, the fee is 10 EUR.
    * On or after 1st January 2026, the fee is 15 EUR.
2. **Kodular Monetize Usage**: on the following month after events are recorded, you will receive an invoice with the
   total amount of events that occurred in your app.

### How is the usage-based pricing calculated?

There are three variables to take into account when calculating the usage-based pricing:

* **Country where the event occurred**: there are 3 tiers, or groups of countries. These tiers have been determined
  based on purchase power parity (PPP) and average revenue per user (ARPU) in each country.
    * For example, an ad served in the United States will be charged at a higher rate than an event occurring in India.
* **Event type**: there are different types of events, such as ad impressions, clicks, etc. Each event type has a
  different price.
    * For example, an ad click is more expensive than a normal not-clicked ad impression.
* **Number of events**: the total number of events that occurred in your app during the month.
    * For example, showing 2M ads in a month will have a lower "per ad" charge than showing just 1M ads. The higher the
      usage, the cheaper it is.

There is a **free allowance** to allow for testing and new apps to get started. If you serve ads within the free
allowance, an empty invoice will be generated.
You can see the full list of prices in [kodul.ar/monetize-rates](https://kodul.ar/monetize-rates).

### How can I view my usage?

Daily and monthly usage reports will be made available at [my.kodular.io/monetize](https://my.kodular.io/monetize). You
will receive breakdowns of event types and countries, along with their tier.

### In the free tier, what happens if I have events in different country tiers?

Free tier allowance is per country tier, per event type. This means that if you serve one ad in each tier, the free
allowance count will still be at "1" in each tier (and not at 3 globally).

For example, if the first 1,000 ad clicks are free in each tier, this means you can serve up to 3,000 ad clicks free
of charge, as long as they are evenly distributed across the tiers.

### What happens if have an unpaid Kodular Monetize invoice?

If you did not pay within 30 days a Kodular Monetize invoice, ad serving will stop in your apps until it gets resolved.
If you have any questions, you can contact us at [support@kodular.io](mailto:support@kodular.io).

After your account becomes compliant again, note it may take up to 4 hours for all the apps to restore their ad serving
status.
