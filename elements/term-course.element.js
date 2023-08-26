class TermCourse extends HTMLElement {
   static TEMPORARY_OPACITY = 0.5;

   static elementList = [];

   #container;
   #courseName;
   #courseTime;
   #coursePlace;
   #courseTeacher;

   constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      this.#container = shadowRoot.createChild('div');
      this.#container.classList.add('course');
      this.#courseName = this.#container.createChild('h2');
      this.#courseTime = this.#container.createChild('p');
      this.#coursePlace = this.#container.createChild('p');
      this.#courseTeacher = this.#container.createChild('p');
      shadowRoot.createChild('style').textContent = `
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
               margin-bottom: 0.5vh;
         }
         p {
               font-size: 1.25vh;
         }
         `;
      TermCourse.elementList.push(this);
   }

   toggleVisibility() {
      this.style.visibility = this.style.visibility == "hidden" ? "visible" : "hidden";
   }

   attributeChangedCallback(name, _, newValue) {
      switch (name) {
         case 'name':
            this.#courseName.innerText = newValue;
            break;
         case 'time':
            this.#courseTime.innerText = this.#getFormattedTime();
            const time = JSON.parse(newValue);
            this.#container.style.height = getHourHeight() * time.length / 60 + "px";
            this.#container.style.top = getHourHeight() * (time.hour - STARTING_HOUR + time.min / 60) + "px";
            break;
         case 'place':
            this.#coursePlace.innerText = newValue;
            break;
         case 'teacher':
            this.#courseTeacher.innerText = newValue;
            break;
         case 'color':
            this.#container.style.backgroundColor = newValue;
            this.#container.style.color = isColorDark(newValue) ? 'white' : 'black';
            break;
         case 'temporary':
            this.#container.style.opacity = TermCourse.TEMPORARY_OPACITY;
            break;
         case 'excluded':
            //TODO
            break;
         case 'split':
            const split = JSON.parse(newValue);
            this.#container.style.width = 100 / split.split + "%";
            this.#container.style.right = 100 / split.split * split.splitPlace + "%";
      }
   }

   syncWithCourseObject(courseObject) {
      this.name = courseObject.name;
      this.time = JSON.stringify(courseObject.time);
      this.place = courseObject.place;
      this.teacher = courseObject.teacher;
      this.color = courseObject.color;
      this.primary = courseObject.primary;
      this.excluded = courseObject.disabled;
      this.temporary = courseObject.temporary;
      this.split = JSON.stringify({
         split: courseObject.split,
         splitPlace: courseObject.splitPlace
      });
   }

   static get observedAttributes() {
      return [
         'name', 'time', 'place', 'teacher',
         'color', 'primary', 'excluded', 'temporary', 'split'
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

   get primary() {
      return this.hasAttribute('primary');
   }
   set primary(value) {
      if (value) {
         this.setAttribute('primary', '');
      } else {
         this.removeAttribute('primary');
      }
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
