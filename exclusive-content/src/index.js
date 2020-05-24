class WebMonetizationExclusiveContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
}

if ("customElements" in window) {
  customElements.define(
    "wm-exclusive-content",
    WebMonetizationExclusiveContent
  );
}

export default WebMonetizationExclusiveContent;
