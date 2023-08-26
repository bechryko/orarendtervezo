class Term {
    timetables = [];
    #settings = {
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
        if(!course.time) {
            console.warn(`Course '${course.name}' has no time specified`);
            return this;
        }
        if(course.time.day < 0 || course.time.day > 6) {
            console.warn(`Course '${course.name}' is not in the week`);
            return this;
        }
        let index = 0;
        while(this.timetables[course.time.day].length > index && CourseTime.isEarlier(this.timetables[course.time.day][index].time, course.time)) {
            index++;
        }
        this.timetables[course.time.day].splice(index, 0, course);
        this.#splitTimetables();
        return this;
    }
    #splitTimetables() {
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
                const startingC = course.getCoursesWhenThisStarts(this).filter(c => c.splitPlace !== undefined);
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
        const crossing = course.getCrossingCourses(this);
        course.split = course.getCoursesWhenThisStarts(this).length;
        const childCrosses = [];
        for(const cross of crossing) {
            childCrosses.push(this.#calculateSplit(cross));
        }
        return course.split = Math.max(...childCrosses);
    }
    updateSettings(setting, value) {
        this.#settings[setting] = !!value;
        return this;
    }

    get days() {
        const minDays = this.#settings.showAllWeekdays ? 5 : this.#settings.showWeekend ? 7 : 1;
        for(let i = this.timetables.length - 1; i >= 0; i--) {
            if(this.timetables[i].length) {
                return Math.max(minDays, i + 1);
            }
        }
        return minDays;
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
