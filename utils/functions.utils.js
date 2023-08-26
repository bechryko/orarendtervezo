const getHourHeight = () => {
   const shortName = TIMETABLES_HEIGHT_RATIO_TO_DAY_NAMES_CONTAINER_HEIGHT;
   return (window.innerHeight / (shortName + 1) * shortName) / (END_HOUR - STARTING_HOUR);
};

const isColorDark = (hex) => {
   const red = parseInt(hex.slice(1, 3), 16);
   const green = parseInt(hex.slice(3, 5), 16);
   const blue = parseInt(hex.slice(5, 7), 16);
   const brightness = Math.round(((red * 299) + (green * 587) + (blue * 114)) / 1000);
   return brightness < DARK_COLOR_THRESHOLD;
}
