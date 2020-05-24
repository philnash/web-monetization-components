<div style="text-align:center" align="center">
  <h1>
    <code>&lt;💰&gt;</code>
    Web Monetization Components
    <code>&lt;/💰&gt;</code>
    <br><br>
    <code>&lt;wm-exclusive-content&gt;</code>
  </h1>

  <p><em>A web component to show exclusive content if it determines the user is sending payments via web monetization.</em></p>

  <p><a href="https://badge.fury.io/js/web-monetization-exclusive-content"><img src="https://badge.fury.io/js/web-monetization-exclusive-content.svg" alt="npm version" height="18"></a> <a href="https://www.webcomponents.org/element/web-monetization-exclusive-content"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="published on webcomponents.org"></a></p>
</div>

## Installation

### npm

You can install with npm.

```bash
npm install web-monetization-exclusive-content
```

Once installed, you can either use the minified version by referencing it from the `dist` directory.

```html
<script src="./node_modules/web-monetization-exclusive-content/dist/wm-exclusive-content.min.js"></script>
```

Or if you have a build step, you can require the module.

```javascript
const WebMonetizationExclusiveContent = require("web-monetization-exclusive-content");
```

### unpkg

If you want to use the component from the unpkg CDN then you can.

You can get the latest version using the bare URL. See more options on [https://unpkg.com/](https://unpkg.com/).

```html
<script src="https://unpkg.com/web-monetization-exclusive-content"></script>
```

## Usage

Wrap your ad code inside a `<template>` element then in the `<wm-exclusive-content>` component.

```html
<wm-exclusive-content>
  <template><p>Thank you for supporting this site!</p></template>
</wm-exclusive-content>
```

The `<template>` makes the exclusive content inert (it doesn't render or fetch any linked resources). If the browser doesn't support web monetization (because `document.monetization` is not present) the exclusive content will not be rendered at all.

If the browser does support Web Monetization the `<wm-exclusive-content>` will not show anything.

### Attributes

- `template`: A CSS selector that points to a `<template>` elsewhere on the page.

  If your ad code lives elsewhere on the page, you can point to it with the `ad-template` attribute.

  Example:

  ```html
  <wm-exclusive-content template="#exclusive-content"></wm-exclusive-content>

  <!-- later down the page -->

  <template id="exclusive-content">
    <!-- exclusive content -->
  </template>
  ```

## LICENSE

MIT (c) 2020 Phil Nash
