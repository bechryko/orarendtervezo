class Course {
    #listElement;

    constructor(name, time, place, teacher, category = {}, config = {
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
        this.#listElement = $("course-list").createChild("course-list-element");
        this.#listElement.title = this.name;
        this.#listElement.infos = this.getCourseInfos();
        this.#listElement.onclick = () => UIController.selectCourse(this);
        this.#listElement.style.display = "none";
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
    toggleListElementVisibility() {
        this.#listElement.style.display = this.#listElement.style.display == "none" ? "block" : "none";
    }
    getCourseInfos() {
        return `${DAY_NAMES[this.time?.day] ?? ""} ` + CourseTime.toString(this.time);
    }

    get width() {
        return 1 / this.locationInterval.split * this.locationInterval.size;
    }
}
