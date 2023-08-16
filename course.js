class Course {
    constructor(name, time, place, teacher, category, primary = false, disabled = false, temp = false) {
        this.name = name;
        this.time = time;
        this.place = place;
        this.teacher = teacher;
        this.category = category;
        this.primary = primary;
        this.temp = category.temp ?? temp;
        this.disabled = category.disabled ?? disabled;
    }

    isTimeDuringThis(time) {
        let startOfThis = this.time.hour * 60 + this.time.min;
        let endOfThis = startOfThis + this.time.length * 45;
        time = time.hour * 60 + time.min;
        return startOfThis <= time && time < endOfThis;
    }
    getCrossingCourses(term) {
        let crossing = [];
        for(const course of term.timetables[this.time.day]) {
            if(course.isTimeDuringThis(this.time) || this.isTimeDuringThis(course.time)) {
                crossing.push(course);
            }
        }
        return crossing;
    }
    getCoursesWhenThisStarts(term) {
        let c = [];
        for(const course of term.timetables[this.time.day]) {
            if(course.isTimeDuringThis(this.time)) {
                c.push(course);
            }
        }
        return c;
    }
    draw() {
        C.drawCourse(this);
    }

    get width() {
        return 1 / this.split;
    }
}

class CourseCategory {
    constructor(name, color, temp, disabled) {
        this.name = name;
        this.color = color;
        this.temp = temp;
        this.disabled = disabled;
    }
}

class CourseTime {
    constructor(day, hour, min, length = 2) {
        this.day = day;
        this.hour = hour;
        this.min = min;
        this.length = length;
    }

    static isEarlier(ct1, ct2) {
        return ct1.hour < ct2.hour || (ct1.hour == ct2.hour && ct1.min < ct2.min);
    }
}

class TermCourse extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const container = document.createElement('div');
        container.classList.add('course');
    }
}