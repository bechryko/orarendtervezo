class CourseCategory {
   constructor(name, color = "white", config = {
      primary: false,
      temporary: false,
      disabled: false
   }) {
      this.name = name;
      this.color = color;
      this.config = config;
   }
}
