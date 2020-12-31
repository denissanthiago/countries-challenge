let templateModal = document.createElement("template");

templateModal.innerHTML = `
    <style>
        :host([open = "true"]) #modal-background, 
        :host([open = "true"]) #modal-container{
            opacity: 1;
            pointer-events: all;
        }
        #modal-background{
            height: 100vh;
            width: 100%;
            background-color: rgba(0,0,0, 0.5);
            position: fixed;
            z-index: 9999999999;
            left: 0;
            top: 0;
            opacity: 0;
            pointer-events: none;
        }

        #modal-container {
            width: 50%;
            background-color: #ffffff;
            position: fixed;
            z-index: 999999999;
            border-radius: 0.5rem;
            left: 25%;
            top: 20%;
            opacity: 0;
            pointer-events: none;
        }

        #closeModal {
            padding: 5px 20px;
            background-color: #845BB3;
            color: #fff;
            border-radius: 20px;
            margin: 0;
            font-size: 1rem;
            white-space: nowrap;
            border:none;
        }

        header * {
            margin: 0;
        }

        ::slotted (*) {
            margin: 0;
        }

        header {
            padding: 1rem;
        }

        .image-container {
            width: 50px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .modal-body {
            padding: 1rem;
            display: flex;
            justify-content: space-around;
        }

        .modal-footer {
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
        }
    </style>
    <section id="modal-background"></setion>
    <section id="modal-container">
        <header>
            <slot name="title"><h3>Title modal</h3></slot>  
        </header>
        <slot name="image">
            <img class="image-container"/>
        </slot>
        <div class="modal-body">
            <slot name="capital"><div>Capitall</div></slot>
            <slot name="people"><div>People</div></slot>
        </div>
        <div class="modal-footer">
            <button id="closeModal">Atras</button>
        </div>
    </setion>
`;

class ModalComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateModal.content.cloneNode(true));

    this.btnModal = this.shadowRoot.getElementById("closeModal");
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    let modal = document.querySelector("modal-component");
    modal.setAttribute("open", false);
  }

  connectedCallback() {
    this.btnModal.addEventListener("click", this.closeModal);
  }

  disconnectedCallback() {
    this.btnModal.removeEventListener("click", this.closeModal);
  }
}

window.customElements.define("modal-component", ModalComponent);
