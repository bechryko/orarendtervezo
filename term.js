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
        
        document.addEventListener("keydown", e => {
            if(e.key >= '1' && e.key <= '7') {
                this.drawDay(e.key - 1);
            } else if(e.key == "p") {
                this.draw(true);
            } else if(e.key[0] != "F") {
                this.draw();
            }
        });
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
    draw(onlyPrimary = false) {
        let dayCount = this.#settings.showWeekend ? 7 : this.#settings.showAllWeekdays ? 5 : this.days;
        C.clear();
        C.drawTermFrame(this.name, dayCount);
        for(const day of this.timetables) {
            for(const course of day) {
                if(!onlyPrimary || course.primary || !course.temp) {
                    C.drawCourse(course, dayCount);
                }
            }
        }
        C.latestDraw = () => this.draw();
        return this;
    }
    drawDay(day) {
        C.clear();
        C.drawDayFrame(this, day);
        for(const course of this.timetables[day]) {
            C.drawCourse(course, 1);
        }
        C.latestDraw = () => this.drawDay(day);
        return this;
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
