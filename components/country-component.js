const templateCountry = document.createElement("template");

templateCountry.innerHTML = `
    <style>
      .country-content {
        grid-column-end: span 4;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.3s ease 0s;
      }

      .card__image-container {
        width: 100%;
        padding-top: 56.25%;
        overflow: hidden;
        position: relative;
      }
      
      .card__image-container img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .card__content {
        padding: 20px;
      }
      
      .card__title {
        margin:0;
      }
      
      .card__info {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        align-items: center;
      }
      
      .card__info-people {
        padding: 5px 20px;
        background-color: #845BB3;
        color: #fff;
        border-radius: 20px;
        margin: 0;
        font-size: 1rem;
        white-space: nowrap;
      }

      .card__info-capital {
        margin: 0;
        font-size: 1rem;
      }

      @media only screen and (max-width: 1000px) {
        .country-content {
          grid-column-end: span 6;
        }
      }

      @media only screen and (max-width: 700px) {
        .country-content {
          grid-column-end: span 12;
        }
      }
      
      @media only screen and (max-width: 500px) {
        .country-content {
          grid-column-end: span 6;
        }
      }
    </style>
    <div class="country-content" id="country">
        <div class="card__image-container">
            <img
            />
        </div>
        <div class="card__content">
            <h3 class="card__title">
            </h3>
            <div class="card__info">
                <p class="card__info-capital">Lima</p>
                <span class="card__info-people">3 millones</span>
            </div>
        </div>
    </div>
`;

class CountryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateCountry.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("image");
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("span").innerText = this.getAttribute(
      "people"
    );
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("capital");

    this.selectCountry = this.shadowRoot.getElementById("country");
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    let modal = document.querySelector("modal-component");

    let name = this.getAttribute("name");
    let capital = this.getAttribute("capital");
    let country = this.getAttribute("people");

    modal.getElementsByClassName("name")[0].innerText = name;
    modal.getElementsByClassName("capital")[0].innerHTML = capital;
    modal.getElementsByClassName("people")[0].innerHTML = country;

    modal.setAttribute("open", true);
  }

  connectedCallback() {
    this.selectCountry.addEventListener("click", this.openModal);
  }

  disconnectedCallback() {
    this.selectCountry.removeEventListener("click", this.openModal);
  }
}

window.customElements.define("country-component", CountryComponent);
