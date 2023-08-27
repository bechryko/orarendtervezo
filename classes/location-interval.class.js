class LocationInterval {
   constructor(split, startPlace, size) {
      this.split = split;
      this.startPlace = startPlace;
      this.size = size;
   }

   static getFirstAvailablePlace(...courses) {
      const places = new Set();
      for(const course of courses.filter(course => course.locationInterval?.size)) {
         places.add(course.locationInterval.startPlace);
      }
      for(let i = 0; i < courses.length; i++) {
         if(!places.has(i)) {
            return i;
         }
      }
      console.error("No available place found for course", courses);
      return 0;
   }
}
