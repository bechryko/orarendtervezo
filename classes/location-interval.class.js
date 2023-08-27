class LocationInterval {
   constructor(split, startPlace, size) {
      this.split = split;
      this.startPlace = startPlace;
      this.size = size;
   }

   static getFirstAvailablePlace(...courses) {
      const places = [];
      for(const course of courses.filter(course => course.locationInterval.size)) {
         places.push(course.locationInterval.startPlace);
      }
      places.sort((a, b) => a - b);
      let i = 0;
      while(places[i] === i) {
         i++;
      }
      return i;
   }
}
