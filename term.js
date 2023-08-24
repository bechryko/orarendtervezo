class Term {
    timetables = [];
    #settings = {
        dayZeroIndex: false,
        showAllWeekdays: false,
        showWeekend: false,
    };

    constructor(name) {
        this.name = name;
        for(let i = 0; i < 7; i++) {
            this.timetables[i] = [];
        }
    }

    addCourse(course) {
        if(!this.#settings.dayZeroIndex) {
            course.time.day--;
        }
        if(course.time.day < 0 || course.time.day > 6) {
            console.warn(`Course ${course.name} is not in the week`);
            return this;
        }
        let index = 0;
        while(this.timetables[course.time.day].length > index && CourseTime.isEarlier(this.timetables[course.time.day][index].time, course.time)) {
            index++;
        }
        this.timetables[course.time.day].splice(index, 0, course);
        this.splitTimetables();
        return this;
    }
    splitTimetables() {
        for(const day of this.timetables) {
            for(const course of day) {
                course.split = 0;
            }
        }
        for(const day of this.timetables) {
            for(const course of day) {
                this.#calculateSplit(course);
            }
        }
        for(const day of this.timetables) {
            for(const course of day) {
                course.splitPlace = 0;
                let startingC = course.getCoursesWhenThisStarts(this).filter(c => c.splitPlace !== undefined);
                outer:
                for(let sp = 0; sp < course.split; sp++) {
                    for(const c of startingC) {
                        if(c.splitPlace == sp) {
                            continue outer;
                        }
                    }
                    course.splitPlace = sp;
                    break;
                }
            }
        }
        return this;
    }
    #calculateSplit(course) {
        if(course.split) {
            return course.split;
        }
        let crossing = course.getCrossingCourses(this);
        course.split = course.getCoursesWhenThisStarts(this).length;
        let childCrosses = [];
        for(const cross of crossing) {
            childCrosses.push(this.#calculateSplit(cross));
        }
        return course.split = Math.max(...childCrosses);
    }
    updateSettings(setting, value) {
        this.#settings[setting] = value;
        return this;
    }

    get days() {
        for(let i = this.timetables.length - 1; i >= 0; i--) {
            if(this.timetables[i].length) {
                return i + 1;
            }
        }
        return 0;
    }
    get courseList() {
        let list = new Set();
        for(const day of this.timetables) {
            for(const course of day) {
                list.add(course.name);
            }
        }
        list = Array.from(list);
        list.sort();
        return list;
    }
}

class TermDay extends HTMLElement {
    courses = [];
    #container;

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.#container = document.createElement("div");
        shadowRoot.append(this.#container);
        const style = document.createElement("style");
        style.textContent = `
            div {
                position: relative;
                width: 100%;
            }
            term-course {
                position: absolute;
                width: 100%;
            }
            `;
        shadowRoot.append(style);
    }

    addCourses(courses) {
        if(!Array.isArray(courses)) {
            courses = [courses];
        }
        this.courses.push(courses.map(course => {
            const retVal = {
                courseObject: course,
                courseElement: document.createElement("term-course")
            };
            retVal.courseElement.syncWithCourseObject(course);
            this.#container.append(retVal.courseElement);
            return retVal;
        }));
    }
}
customElements.define("term-day", TermDay);
