class TermCourse extends HTMLElement {
   constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const container = document.createElement('div');
      container.classList.add('course');
      const name = document.createElement('h2');
      const time = document.createElement('p');
      const place = document.createElement('p');
      const teacher = document.createElement('p');
      container.appendChild(name);
      container.appendChild(time);
      container.appendChild(place);
      container.appendChild(teacher);
      shadowRoot.appendChild(container);
      const style = document.createElement('style');
      style.textContent = `
         div {
               padding: 0;
               border-radius: 1vh;
               border: 1px solid black;
               position: absolute;
               box-sizing: border-box;
         }
         h2, p {
               text-align: center;
               margin: 0;
               font-weight: bold;
         }
         h2 {
               font-size: 2vh;
         }
         p {
               font-size: 1.25vh;
         }
         `;
      shadowRoot.appendChild(style);
   }

   attributeChangedCallback(name, _, newValue) {
      switch (name) {
         case 'name':
            this.shadowRoot.querySelector('h2').innerText = newValue;
            break;
         case 'time':
            this.shadowRoot.querySelector('p:nth-child(2)').innerText = this.#getFormattedTime();
            const time = JSON.parse(newValue);
            this.shadowRoot.querySelector('div').style.height = getHourHeight() * time.length / 60 + "px";
            this.shadowRoot.querySelector('div').style.top = getHourHeight() * (time.hour - STARTING_HOUR + time.min / 60) + "px";
            break;
         case 'place':
            this.shadowRoot.querySelector('p:nth-child(3)').innerText = newValue;
            break;
         case 'teacher':
            this.shadowRoot.querySelector('p:nth-child(4)').innerText = newValue;
            break;
         case 'color':
            this.shadowRoot.querySelector('div').style.backgroundColor = newValue;
            break;
         case 'temporary':
            this.shadowRoot.querySelector('div').style.opacity = COURSE_ELEMENT.TEMPORARY_OPACITY;
            break;
         case 'excluded':
            //TODO
            break;
         case 'split':
            const split = JSON.parse(newValue);
            this.shadowRoot.querySelector('div').style.width = 100 / split.split + "%";
            this.shadowRoot.querySelector('div').style.right = 100 / split.split * split.splitPlace + "%";
      }
   }

   syncWithCourseObject(courseObject) {
      this.name = courseObject.name;
      this.time = JSON.stringify(courseObject.time);
      this.place = courseObject.place;
      this.teacher = courseObject.teacher;
      this.color = courseObject.category.color;
      this.excluded = courseObject.disabled;
      this.temporary = courseObject.temp;
      this.split = JSON.stringify({
         split: courseObject.split,
         splitPlace: courseObject.splitPlace
      });
   }

   static get observedAttributes() {
      return [
         'name', 'time', 'place', 'teacher',
         'color', 'excluded', 'temporary', 'split'
      ];
   }

   get name() {
      return this.getAttribute('name');
   }
   set name(value) {
      this.setAttribute('name', value);
   }

   get time() {
      return this.getAttribute('time');
   }
   set time(value) {
      this.setAttribute('time', value);
   }

   get place() {
      return this.getAttribute('place');
   }
   set place(value) {
      this.setAttribute('place', value);
   }

   get teacher() {
      return this.getAttribute('teacher');
   }
   set teacher(value) {
      this.setAttribute('teacher', value);
   }

   get color() {
      return this.getAttribute('color');
   }
   set color(value) {
      this.setAttribute('color', value);
   }

   get excluded() {
      return this.hasAttribute('excluded');
   }
   set excluded(value) {
      if (value) {
         this.setAttribute('excluded', '');
      } else {
         this.removeAttribute('excluded');
      }
   }

   get temporary() {
      return this.hasAttribute('temporary');
   }
   set temporary(value) {
      if (value) {
         this.setAttribute('temporary', '');
      } else {
         this.removeAttribute('temporary');
      }
   }

   get split() {
      return this.getAttribute('split');
   }
   set split(value) {
      this.setAttribute('split', value);
   }

   #getFormattedTime() {
      const courseTimeObject = JSON.parse(this.time);
      const start = {
         hour: courseTimeObject.hour,
         min: courseTimeObject.min
      };
      const end = { ...start };
      end.min += courseTimeObject.length;
      for (; end.min >= 60; end.min -= 60, end.hour++);
      return `${start.hour}:${start.min < 10 ? '0' : ''}${start.min} - ${end.hour}:${end.min < 10 ? '0' : ''}${end.min}`;
   }
}

customElements.define('term-course', TermCourse);
