class WebMonetizationAdHider extends HTMLElement {
  constructor() {
    super();
    this.hasPaid = false;
    this.adCodeTemplateSelector = this.getAttributeOrFallback(
      "ad-template",
      null
    );
    this.timeout = parseInt(this.getAttributeOrFallback("timeout", "3000"), 10);
  }

  connectedCallback() {
    if (this.adCodeTemplateSelector === null) {
      this.adCode = this.querySelector("template");
    } else {
      this.adCode = document.getElementById(this.adCodeTemplateSelector);
    }
    if (document.monetization && this.adCode) {
      this.hasPaid = document.monetization.state === "started";
      if (!this.hasPaid) {
        this.monetizationListener = () => {
          this.hasPaid = true;
          this.removeAds();
        };
        document.monetization.addEventListener(
          "monetizationstart",
          this.monetizationListener
        );
        window.setTimeout(() => {
          if (!this.hasPaid) {
            this.showAds();
          }
        }, this.timeout);
      }
    } else {
      this.showAds();
    }
  }

  disconnectedCallback() {
    if (document.monetization && this.monetizationListener) {
      document.monetization.removeEventListener(
        "monetizationstart",
        this.monetizationListener
      );
    }
  }

  showAds() {
    if (this.adCode && this.adCode.content) {
      const ads = this.adCode.content.cloneNode(true);
      this.appendChild(ads);
    }
  }

  removeAds() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
  }

  getAttributeOrFallback(attributeName, fallback) {
    if (this.hasAttribute(attributeName)) {
      return this.getAttribute(attributeName);
    }
    return fallback;
  }
}

if ("customElements" in window) {
  customElements.define("wm-ad-hider", WebMonetizationAdHider);
}

export default WebMonetizationAdHider;
