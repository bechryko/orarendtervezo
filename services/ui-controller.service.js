class UIController {
   static selectedTerm = null;
   static selectedCourse = null;

   static createTerm(name) {
      if((name = name.trim()) === '') {
         console.error(`Term name cannot be empty`);
         return;
      }
      if(Term.list.find(term => term.name == name)) {
         console.error(`Term '${name}' already exists`);
         return;
      }
      const term = new Term(name);
      this.selectTerm(term);
      return term;
   }

   static createCourse(name) {
      if((name = name.trim()) === '') {
         console.error(`Course name cannot be empty`);
         return;
      }
      if(!this.selectedTerm) {
         console.error(`No term selected`);
         return;
      }
      const course = new Course(name);
      this.selectedTerm.addCourse(course);
      return course;
   }

   static selectTerm(term) {
      if(this.selectedTerm) {
         this.selectedTerm.allCourses.forEach(course => course.toggleListElementVisibility());
         this.selectedCourse = null;
      }
      this.selectedTerm = term;
      this.selectedTerm.allCourses.forEach(course => course.toggleListElementVisibility());
   }

   static selectCourse(course) {
      this.selectedCourse = course;
   }
}
