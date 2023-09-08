class CourseListElement extends HTMLElement {
   #title;
   #infos;

   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const container = this.shadowRoot.createChild('div');
      this.#title = container.createChild('h2');
      this.#infos = container.createChild('p');
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
         case 'infos':
            this.#infos.innerText = newValue;
            break;
      }
   }

   static get observedAttributes() {
      return ['title', 'infos'];
   }

   get title() {
      return this.getAttribute('title');
   }
   set title(value) {
      this.setAttribute('title', value);
   }

   get infos() {
      return this.getAttribute('infos');
   }
   set infos(value) {
      this.setAttribute('infos', value);
   }
}

customElements.define('course-list-element', CourseListElement);
