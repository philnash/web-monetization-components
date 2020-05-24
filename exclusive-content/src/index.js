class WebMonetizationExclusiveContent extends HTMLElement {
  constructor() {
    super();
    this.hasPaid = false;
    this.templateSelector = this.getAttributeOrFallback(
      "exclusive-content-template",
      null
    );
  }

  connectedCallback() {
    if (this.templateSelector === null) {
      this.exclusiveContent = this.querySelector("template");
    } else {
      this.exclusiveContent = document.querySelector(this.templateSelector);
    }
    if (document.monetization && this.exclusiveContent) {
      this.hasPaid = document.monetization.state === "started";
      if (this.hasPaid) {
        this.showContent();
      } else {
        this.monetizationListener = () => {
          this.hasPaid = true;
          this.showContent();
        };
        document.monetization.addEventListener(
          "monetizationstart",
          this.monetizationListener
        );
      }
    }
  }

  disconnectedCallback() {
    this.removeEventListener();
  }

  removeEventListener() {
    if (document.monetization && this.monetizationListener) {
      document.monetization.removeEventListener(
        "monetizationstart",
        this.monetizationListener
      );
      this.monetizationListener = null;
    }
  }

  showContent() {
    if (this.exclusiveContent && this.exclusiveContent.content) {
      this.appendChild(this.exclusiveContent.content.cloneNode(true));
      this.removeEventListener();
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
  customElements.define(
    "wm-exclusive-content",
    WebMonetizationExclusiveContent
  );
}

export default WebMonetizationExclusiveContent;
