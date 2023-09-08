class Term {
    static list = [];

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
        const listElement = $("term-list").createChild("term-list-element")
        listElement.title = name;
        listElement.onclick = () => UIController.selectTerm(this);
        Term.list.push(this);
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
        this.#splitTimetable(course.time.day);
        return this;
    }
    #splitTimetable(day) {
        const daySorted = this.timetables[day].slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => b.time.length - a.time.length);
        for(const course of daySorted) {
            course.locationInterval = null;
        }
        for(const course of daySorted) {
            this.#calculateSplit(course);
        }
        for(const course of daySorted) {
            const crossingCourses = course.getCrossingCourses(this);
            course.locationInterval.startPlace = LocationInterval.getFirstAvailablePlace(course, ...crossingCourses);
            course.locationInterval.size = 1;
        }
        for(const course of daySorted) {
            for(; !LocationInterval.isIntervalConflict(course, ...course.getCrossingCourses(this)); course.locationInterval.size++);
            course.locationInterval.size--;
        }
        return this;
    }
    #calculateSplit(course) {
        if(course.locationInterval) {
            return course.locationInterval.split;
        }
        const crossing = course.getCrossingCourses(this);
        course.locationInterval = new LocationInterval(course.getCoursesWhenThisStarts(this).length, 0, 0);
        const childCrosses = [];
        for(const cross of crossing) {
            childCrosses.push(this.#calculateSplit(cross));
        }
        course.locationInterval.split = Math.max(course.locationInterval.split, ...childCrosses);
        for(const cross of crossing) {
            this.#suggestSplitValue(cross, course.locationInterval.split);
        }
        return course.locationInterval.split;
    }
    #suggestSplitValue(course, value) {
        if(course.locationInterval.split === value) {
            return;
        }
        if(course.locationInterval.split > value) {
            console.error(`Course '${course.name}' has a split value of ${course.locationInterval.split} but ${value} was suggested`);
            return;
        }
        course.locationInterval.split = value;
        const crossing = course.getCrossingCourses(this);
        crossing.forEach(cross => this.#suggestSplitValue(cross, value));
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
        this.allCourses.forEach(course => list.add(course.name));
        list = Array.from(list);
        list.sort();
        return list;
    }
    get allCourses() {
        const list = [];
        for(const day of this.timetables) {
            for(const course of day) {
                list.push(course);
            }
        }
        return list;
    }
}
