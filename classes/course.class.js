class Course {
    constructor(name, time, place, teacher, category, config = {}) {
        this.name = name;
        this.time = time;
        this.place = place;
        this.teacher = teacher;
        this.color = category.color;
        this.categoryName = category.name;
        this.primary = config.primary ?? category.config.primary;
        this.temporary = config.temporary ?? category.config.temporary;
        this.disabled = config.disabled ?? category.config.disabled;
    }

    #isTimeDuringThis(time) {
        if(!this.time || !time) {
            return false;
        }
        const startOfThis = this.time.toMin();
        const endOfThis = startOfThis + this.time.length;
        time = time.toMin();
        return startOfThis <= time && time < endOfThis;
    }
    getCrossingCourses(term) {
        const crossing = [];
        for(const course of term.timetables[this.time.day]) {
            if(course.#isTimeDuringThis(this.time) || this.#isTimeDuringThis(course.time)) {
                crossing.push(course);
            }
        }
        return crossing;
    }
    getCoursesWhenThisStarts(term) {
        const c = [];
        if(!this.time) {
            return c;
        }
        for(const course of term.timetables[this.time.day]) {
            if(course.#isTimeDuringThis(this.time)) {
                c.push(course);
            }
        }
        return c;
    }

    get width() {
        return 1 / this.locationInterval.split * this.locationInterval.size;
    }
}
