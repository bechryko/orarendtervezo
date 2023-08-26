class CourseCategory {
   constructor(name, color, config = {
      primary: false,
      temporary: false,
      disabled: false
   }) {
      this.name = name;
      this.color = color;
      this.config = config;
   }
}
