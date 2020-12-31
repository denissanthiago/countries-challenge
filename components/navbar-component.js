const templateNavbar = document.createElement("template");

templateNavbar.innerHTML = `
    <style>
        .container-nav {
            background-color: #845BB3;
            overflow: hidden;
            position: sticky;
            top: 0;
            z-index:99999;
        }

        .container-nav__nav {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            cursor: pointer;
        }

        .container-nav__nav:hover {
            color: #fff;
        }

        @media screen and (max-width: 400px) {
            .container-nav div {
              float: none;
              width: 100%;
            }
        }
    </style>
    <header class="container-nav">
        <nav class="container-nav__nav">Countries</nav>
    </header>
`;

class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateNavbar.content.cloneNode(true));
  }
}

window.customElements.define("nav-bar", NavbarComponent);
