# Shopify Bundle Section

A lightweight, dependency‑free **"Frequently bought together" / fixed bundle** section for Shopify Online Store 2.0 themes. Drop it into any section‑enabled template, pick a few products in the theme editor, and shoppers can add the whole set to cart in one click.

No app required. No external scripts. Just Liquid, a little CSS, and ~50 lines of vanilla JS.

## Features

- 🧩 **OS 2.0 section** — add it from the theme editor, no code edits needed
- 🛒 **One‑click add‑all** — uses Shopify's native `/cart/add.js`
- ☑️ **Shoppers can deselect** items they don't want before adding
- 💰 **Live running total** as items are toggled
- ⚡ **Zero dependencies** — no jQuery, no framework, defer‑loaded JS
- ♿ **Accessible** — real checkboxes and labels, keyboard friendly

## Installation

1. In your theme, copy the files into the matching folders:
   - `sections/product-bundle.liquid`
   - `assets/product-bundle.js`
   - `assets/product-bundle.css`
2. Open **Online Store → Themes → Customize**.
3. On any product or home template, choose **Add section → Product bundle**.
4. Add product blocks and pick the products you want in the bundle.

That's it — save and preview.

## Customization

Everything is exposed through the theme editor:

| Setting | What it does |
| --- | --- |
| Heading | Title shown above the bundle |
| Note | Small helper line under the items |
| Button label | Text on the add‑to‑cart button |
| Product blocks | Up to 6 products per bundle |

Styling lives in `assets/product-bundle.css` and uses plain class names (`.bundle`, `.bundle__item`, …) so it inherits your theme's typography and adapts easily.

## How it works

The section renders each selected product's first available variant with a checkbox. When the shopper clicks the button, the script collects the checked variant IDs and posts them to `/cart/add.js` in a single request, then sends them to the cart. Prices are read from `data-price` (in cents) to keep the running total in sync.

## Limitations (PRs welcome!)

- The running total formats as USD (`$`) by default. If your store uses another currency, adjust `formatMoney()` in `product-bundle.js`.
- It adds the **first available variant** of each product. Multi‑variant pickers are intentionally out of scope to keep this a clean starter.
- No bundle discount is applied — this section groups products, it doesn't reprice them.

## Need discounts, tiers, analytics, or upsells?

This starter is deliberately simple: it bundles products, nothing more. If you need the next level —

- automatic **bundle discounts** and tiered pricing,
- **"add‑on" and upsell** offers at cart and checkout,
- conversion **analytics** on every bundle,

— that's exactly what our Shopify app **Sleek Bundles** handles, without touching theme code. Learn more: _[Sleek Bundles on the Shopify App Store](#)_ <!-- TODO: confirm live App Store URL -->.

Using this free section is 100% fine on its own — the app is just there when you outgrow it.

## Contributing

Issues and pull requests are welcome. This is meant to be a solid, readable starting point for the Shopify community.

## License

[MIT](LICENSE) © Ecom Swift LLC — an award winning Shopify partner company.
