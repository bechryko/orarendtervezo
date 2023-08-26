class Course {
    constructor(name, time, place, teacher, category, config = {
        primary: false,
        temporary: false,
        disabled: false
    }) {
        this.name = name;
        this.time = time;
        this.place = place;
        this.teacher = teacher;
        this.color = category.color;
        this.categoryName = category.name;
        this.primary = category.config.primary || config.primary;
        this.temporary = category.config.temporary || config.temporary;
        this.disabled = category.config.disabled || config.disabled;
    }

    #isTimeDuringThis(time) {
        const startOfThis = this.time.hour * 60 + this.time.min;
        const endOfThis = startOfThis + this.time.length;
        time = time.hour * 60 + time.min;
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
        for(const course of term.timetables[this.time.day]) {
            if(course.#isTimeDuringThis(this.time)) {
                c.push(course);
            }
        }
        return c;
    }

    get width() {
        return 1 / this.split;
    }
}
