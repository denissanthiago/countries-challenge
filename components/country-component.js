const templateCountry = document.createElement("template");

templateCountry.innerHTML = `
    <style>
      .country-content {
        grid-column-end: span 4;
        display: flex;
        flex-direction: column;
        background-color: #39393b;
        cursor: pointer;
        transition: all 0.3s ease 0s;
      }

      .country-content:hover{
        transform: translateY(-7px);
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
        margin-bottom: 20px;
      }
      
      .card__info {
        display: flex;
        align-self: end;
        align-items: center;
      }
      
      .card__price {
        margin-left: auto;
        padding: 5px 20px;
        background-color: #303032;
        border-radius: 20px;
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
    <div class="country-content">
        <div class="card__image-container">
            <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
            alt=""
            />
        </div>
        <div class="card__content">
            <p class="card__title text--medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque quam sit amet neque posuere, in iaculis erat molestie. 
            </p>
            <div class="card__info">
                <p class="text--medium">30 Min</p>
                <p class="card__price text--medium">lorem</p>
            </div>
        </div>
    </div>
`;

class CountryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(templateCountry.content.cloneNode(true));
  }
}

window.customElements.define("country-component", CountryComponent);
