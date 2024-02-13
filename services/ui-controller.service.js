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
      const defaultTime = new CourseTime(0, 8, 0);
      const course = new Course(name, defaultTime);
      this.selectedTerm.addCourse(course);
      course.toggleListElementVisibility();
      return course;
   }

   static selectTerm(term) {
      if(term === this.selectedTerm) {
         return;
      }
      if(this.selectedTerm) {
         this.selectedTerm.allCourses.forEach(course => course.toggleListElementVisibility());
      }
      this.selectedTerm = term;
      this.selectedTerm.allCourses.forEach(course => course.toggleListElementVisibility());
      this.selectCourse(null);
      this.chooseTermToDisplay(term);
   }

   static selectCourse(course) {
      if(course && course !== this.selectedCourse) {
         $("course-settings").style.visibility = "visible";
         $("course-name-input").value = course.name ?? "";
         $("course-time-day-input").value = course.time?.day ?? 0;
         $("course-time-hour-input").value = course.time?.hour ?? STARTING_HOUR;
         $("course-time-min-input").value = course.time?.min ?? 0;
         $("course-time-length-input").value = course.time?.length ?? 90;
         $("course-teacher-input").value = course.teacher;
         $("course-place-input").value = course.place;
         this.selectedCourse = course;
      } else {
         $("course-settings").style.visibility = "hidden";
         this.selectedCourse = null;
      }
   }

   static saveCourseChanges() {
      if(!this.selectedCourse) {
         console.error(`No course selected`);
         return;
      }
      this.selectedCourse.name = $("course-name-input").value;
      this.selectedCourse.time = new CourseTime(
         $("course-time-day-input").value,
         $("course-time-hour-input").value,
         $("course-time-min-input").value,
         $("course-time-length-input").value
      );
      this.selectedCourse.teacher = $("course-teacher-input").value;
      this.selectedCourse.place = $("course-place-input").value;
      this.selectedCourse.update();
   }
}
