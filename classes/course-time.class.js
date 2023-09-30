class CourseTime {
   constructor(day, hour, min, length) {
      this.day = defaultNumberValue(day % 7, 0);
      this.hour = defaultNumberValue(Math.max(STARTING_HOUR, Math.min(END_HOUR, hour)), STARTING_HOUR);
      this.min = defaultNumberValue(min, 0);
      while(this.min >= 60) {
         this.min -= 60;
         this.hour++;
      }
      while(this.min < 0) {
         this.min += 60;
         this.hour--;
      }
      this.length = defaultNumberValue(length, 90);
   }

   toMin() {
      return this.hour * 60 + this.min;
   }

   static toString(timeObject) {
      if(!timeObject) {
         return "";
      }
      const start = {
         hour: timeObject.hour,
         min: timeObject.min
      };
      const end = { ...start };
      end.min += timeObject.length;
      for (; end.min >= 60; end.min -= 60, end.hour++);
      return `${start.hour}:${start.min < 10 ? '0' : ''}${start.min} - ${end.hour}:${end.min < 10 ? '0' : ''}${end.min}`;
   }

   static isEarlier(ct1, ct2) {
      return ct1.hour < ct2.hour || (ct1.hour == ct2.hour && ct1.min < ct2.min);
   }
}
