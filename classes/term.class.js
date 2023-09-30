class Term {
    static list = [];

    timetables = [];
    _settings = {
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
        listElement.classList.add("button");
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
        this._settings[setting] = !!value;
        return this;
    }

    get days() {
        const minDays = this._settings.showAllWeekdays ? 5 : this._settings.showWeekend ? 7 : 1;
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

    stringify() {
        return JSON.stringify({name: this.name, courses: this.allCourses});
    }
    static createFromJSON(json) {
        if(!Term.checkTermJSONStructure(json)) {
            throw new Error("Invalid JSON structure");
        }
        const pojo = JSON.parse(json);
        const term = new Term(pojo.name);
        for(const course of pojo.courses) {
            term.addCourse(new Course(
                course.name, 
                new CourseTime(course.time.day, course.time.hour, course.time.min, course.time.length), 
                course.place, 
                course.teacher, 
                {name: "", color: course.color, config: {}}, 
                {primary: course.primary, temporary: course.temporary, disabled: course.disabled}
            ));
        }
        return term;
    }
    static checkTermJSONStructure(termJSON) {
        const termObject = JSON.parse(termJSON);
        if(!termObject) {
            console.error("not object")
            return false;
        }
        if(!this.#checkObjectStructure(termObject, {name: "string", courses: "object"})) {
            console.error("bad term structure")
            return false;
        }
        if(!Array.isArray(termObject.courses)) {
            console.error("bad courses structure")
            return false;
        }
        for(const course of termObject.courses) {
            if(!this.#checkObjectStructure(course, {name: "string", time: "object", place: "string", teacher: "string", color: "string", primary: "boolean", temporary: "boolean", disabled: "boolean"})) {
                console.error("bad course structure", course)
                return false;
            }
            if(!this.#checkObjectStructure(course.time, {day: "number", hour: "number", min: "number", length: "number"})) {
                console.error("bad time structure", course)
                return false;
            }
            // if(!this.#checkObjectStructure(course.config, {primary: "boolean", temporary: "boolean", disabled: "boolean"})) {
            //     console.error("bad config structure", course)
            //     return false;
            // }
        }
        return true;
    }
    static #checkObjectStructure(object, structure) {
        for(const key in structure) {
            if(typeof object[key] !== structure[key] || (structure[key] == "number" && isNaN(object[key]))) {
                return false;
            }
        }
        return true;
    }
}
