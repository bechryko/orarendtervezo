const getHourHeight = () => {
   const shortName = TIMETABLES_HEIGHT_RATIO_TO_DAY_NAMES_CONTAINER_HEIGHT;
   return (window.innerHeight / (shortName + 1) * shortName) / (END_HOUR - STARTING_HOUR);
};
