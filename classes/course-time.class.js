class CourseTime {
   constructor(day, hour, min, length = 90) {
      this.day = day;
      this.hour = hour;
      this.min = min;
      this.length = length;
   }

   static isEarlier(ct1, ct2) {
      return ct1.hour < ct2.hour || (ct1.hour == ct2.hour && ct1.min < ct2.min);
   }
}
