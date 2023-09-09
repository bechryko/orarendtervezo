class LocationInterval {
   constructor(split, startPlace, size) {
      this.split = split;
      this.startPlace = startPlace;
      this.size = size;
   }

   get occupiedPlaces() {
      const places = new Set();
      for(let i = this.startPlace; i < this.startPlace + this.size; i++) {
         places.add(i);
      }
      return places;
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

   static isIntervalConflict(course, ...courses) {
      if(course.locationInterval.startPlace + course.locationInterval.size > course.locationInterval.split) {
         return true;
      }
      const courseOccupiedPlaces = course.locationInterval.occupiedPlaces;
      for(const c of courses) {
         if(c === course) {
            continue;
         }
         for(const place of c.locationInterval.occupiedPlaces) {
            if(courseOccupiedPlaces.has(place)) {
               return true;
            }
         }
      }
      return false;
   }
}
