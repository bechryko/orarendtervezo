class TermListElement extends HTMLElement {
   #title;

   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.#title = this.shadowRoot.createChild('div').createChild('h2');
      this.shadowRoot.createChild('style').innerText = `
         div {
            border: 1px solid black;
            border-radius: 2vh;
            text-align: center;
            user-select: none;
            background-color: inherit;
         }
      `;
   }

   attributeChangedCallback(name, _, newValue) {
      switch (name) {
         case 'title':
            this.#title.innerText = newValue;
            break;
      }
   }

   static get observedAttributes() {
      return ['title'];
   }

   get title() {
      return this.getAttribute('title');
   }
   set title(value) {
      this.setAttribute('title', value);
   }
}

customElements.define('term-list-element', TermListElement);
