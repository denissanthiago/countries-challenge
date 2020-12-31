const templateContent = document.createElement("template");

templateContent.innerHTML = `
    <style>
        .container {
          
          background-color: #E5EAF5;
        }

        @media screen and (max-width: 760px){
          .container {
            padding: 2rem 3rem;
          }
        }
    </style>
    <div class="container">
    
    </div>
`;

class ContentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateContent.content.cloneNode(true));
  }
}

window.customElements.define("content-component", ContentComponent);
