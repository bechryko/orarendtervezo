class TermDay extends HTMLElement {
   courses = [];

   #container;

   constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      this.#container = shadowRoot.createChild("div");
      shadowRoot.createChild("style").textContent = `
         div {
               position: relative;
               width: 100%;
         }
         term-course {
               position: absolute;
               width: 100%;
         }
         `;
   }

   addCourses(courses) {
      if (!Array.isArray(courses)) {
         courses = [courses];
      }
      this.courses.push(courses.map(course => {
         const retVal = {
            courseObject: course,
            courseElement: document.createElement("term-course")
         };
         retVal.courseElement.syncWithCourseObject(course);
         this.#container.append(retVal.courseElement);
         return retVal;
      }));
   }
}

customElements.define("term-day", TermDay);
