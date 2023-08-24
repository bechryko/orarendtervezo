const STARTING_HOUR = 8;
const END_HOUR = 20;

const COURSE_ELEMENT = {
   TEMPORARY_OPACITY: 0.6
};

const TIMETABLE_CONTAINER = document.getElementById("timetables");
const TIMETABLES_HEIGHT_RATIO_TO_DAY_NAMES_CONTAINER_HEIGHT = 12;

const DAY_NAMES = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];

const getHourHeight = () => {
   const shortName = TIMETABLES_HEIGHT_RATIO_TO_DAY_NAMES_CONTAINER_HEIGHT;
   return (window.innerHeight / (shortName + 1) * shortName) / (END_HOUR - STARTING_HOUR);
};
