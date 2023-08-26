function chooseTermToDisplay(term) {
   document.body.style.gridTemplateRows = `1fr ${TIMETABLES_HEIGHT_RATIO_TO_DAY_NAMES_CONTAINER_HEIGHT}fr`;
   for(const phase in setup) {
      setup[phase](term);
   }
   
   window.addEventListener("resize", () => {
      setup.hours();
      setup.termDays(term);
   });
}

const setup = {
   termTitle(term) {
      document.getElementById("term-name").innerText = term.name;
   },
   dayNames(term) {
      const dayNamesContainer = document.getElementById("day-names");
      dayNamesContainer.style.gridTemplateColumns = `repeat(${term.days}, 1fr)`;
      removeChildren(dayNamesContainer);
      for (let i = 0; i < term.days; i++) {
         const element = document.createElement("h2");
         element.innerText = DAY_NAMES[i];
         dayNamesContainer.append(element);
      }
   },
   oneDayName(dayNumber) {
      const dayNamesContainer = document.getElementById("day-names");
      dayNamesContainer.style.gridTemplateColumns = `1fr`;
      removeChildren(dayNamesContainer);
      const element = document.createElement("h2");
      element.innerText = DAY_NAMES[dayNumber - 1];
      dayNamesContainer.append(element);
   },
   hours() {
      const hoursContainer = document.getElementById("hours");
      removeChildren(hoursContainer);
      hoursContainer.style.gridTemplateRows = `repeat(${END_HOUR - STARTING_HOUR}, 1fr)`;
      hoursContainer.style.height = `${getHourHeight() * (END_HOUR - STARTING_HOUR)}px`;
      for (let i = STARTING_HOUR; i < END_HOUR; i++) {
         const element = document.createElement("h2");
         element.innerText = i;
         element.style.fontSize = `${getHourHeight() / 2}px`;
         hoursContainer.append(element);
      }
   },
   termDays(term) {
      const multiDayGridStyle = `repeat(${term.days}, 1fr)`;
      removeChildren(TIMETABLE_CONTAINER);
      TIMETABLE_CONTAINER.style.gridTemplateColumns = multiDayGridStyle;
      const elements = [];
      for (let i = 0; i < term.days; i++) {
         const element = document.createElement("term-day");
         element.addCourses(term.timetables[i]);
         TIMETABLE_CONTAINER.append(element);
         elements.push(element);
      }

      document.addEventListener("keydown", e => {
         if (e.key >= 1 && e.key <= term.days) {
            elements.forEach(element => element.style.display = "none");
            elements[e.key - 1].style.display = "block";
            TIMETABLE_CONTAINER.style.gridTemplateColumns = '1fr';
            setup.oneDayName(e.key);
         } else if (e.key == "p") {
            TermCourse.elementList
               .filter(element => !element.primary)
               .forEach(element => element.toggleVisibility());
         } else if (e.key[0] != "F") {
            elements.forEach(element => element.style.display = "block");
            TIMETABLE_CONTAINER.style.gridTemplateColumns = multiDayGridStyle;
            setup.dayNames(term);
         }
      });
   }
};
Object.defineProperty(setup, "oneDayName", {
   enumerable: false
});

function removeChildren(element) {
   while (element.firstChild) {
      element.removeChild(element.firstChild);
   }
}

chooseTermToDisplay(sem_23_24_1);
