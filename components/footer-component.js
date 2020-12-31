let templateFooter = document.createElement("template");

templateFooter.innerHTML = `
    <style>
        .container-footer {
            background-color: #494D5F;
            padding: 20px;
            text-align: center;
            margin-top: 20px;
        }

        .container-footer h2 {
            color: #E5EAF5;
            font-size: .8rem;
            font-weight: 400;
        }
    </style>
    <footer class="container-footer">
        <h2>&copy; All rights reserved - Countries</h2>
    </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateFooter.content.cloneNode(true));
  }
}

window.customElements.define("footer-component", FooterComponent);
