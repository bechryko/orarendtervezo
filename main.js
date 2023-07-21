// CATEGORIES
const KRISTOF = new CourseCategory("Kristóf órái", "forestgreen");
const K_TEMP = new CourseCategory("Kristófnak választani egyet", "lime", true);
const KOZOS = new CourseCategory("Levi és Kristóf órái", "cyan");
const TEMP = new CourseCategory("választani egyet", "#6fe0e1", true);
const KRISTOF_TEACHER = new CourseCategory("Kristóf tanári órái", "red");
const LEVI_TEACHER = new CourseCategory("Levi tanári órái", "yellow");

//SEMESTER
const sem_23_24_1 = new Term("2023-24. 1. félév");
sem_23_24_1.updateSettings("dayZeroIndex", true);
sem_23_24_1.updateSettings("showAllWeekdays", true);

// COURSES
sem_23_24_1.addCourse(new Course("Gazdinfó ea", new CourseTime(0, 10, 0), "", "Bánhelyi Balázs", KRISTOF));
sem_23_24_1.addCourse(new Course("LaTeX ea", new CourseTime(0, 14, 0, 1), "", "Virágh János", KRISTOF));
sem_23_24_1.addCourse(new Course("LaTeX gyak", new CourseTime(0, 15, 0, 1), "", "Virágh János", KRISTOF));
sem_23_24_1.addCourse(new Course("Köszi ea", new CourseTime(1, 8, 0), "", "Csendes Tibor", KRISTOF));
sem_23_24_1.addCourse(new Course("Bonya ea", new CourseTime(1, 10, 0), "", "Szabiván", KOZOS));
sem_23_24_1.addCourse(new Course("Dimat1 ea", new CourseTime(1, 12, 0), "", "Dormán Miklós", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Fuzzy ea", new CourseTime(1, 16, 0, 1), "", "Dombi József", KRISTOF));
sem_23_24_1.addCourse(new Course("Fuzzy gyak", new CourseTime(1, 17, 0, 1), "", "Dombi József", KRISTOF));
sem_23_24_1.addCourse(new Course("Döntési rendszerek ea", new CourseTime(3, 8, 0), "", "Pluhár András", KRISTOF));

//sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 13, 0, 1), "", "Csendes Tibor", K_TEMP));
sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 14, 0, 1), "", "Csendes Tibor", K_TEMP));
sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 15, 0, 1), "", "Homolya Viktor", K_TEMP));
//sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 16, 0, 1), "", "Homolya Viktor", K_TEMP));

sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 12, 0, 1), "", "London András", K_TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 13, 0, 1), "", "London András", K_TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 10, 0, 1), "", "Homolya Viktor", K_TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 11, 0, 1), "", "Homolya Viktor", K_TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 14, 0, 1), "", "Homolya Viktor", K_TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 15, 0, 1), "", "Homolya Viktor", K_TEMP));

//sem_23_24_1.addCourse(new Course("Gazdinfó gyak", new CourseTime(1, 16, 0, 1), "", "London András", K_TEMP));
sem_23_24_1.addCourse(new Course("Gazdinfó gyak", new CourseTime(3, 8, 0, 1), "", "Szász Attila", K_TEMP));
sem_23_24_1.addCourse(new Course("Gazdinfó gyak", new CourseTime(3, 9, 0, 1), "", "Szász Attila", K_TEMP));
sem_23_24_1.addCourse(new Course("Gazdinfó gyak", new CourseTime(3, 10, 0, 1), "", "Szász Attila", K_TEMP));

sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 8, 0, 1), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 9, 0, 1), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 10, 0, 1), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 11, 0, 1), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 16, 0, 1), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 17, 0, 1), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 16, 0, 1), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 17, 0, 1), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 18, 0, 1), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 19, 0, 1), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 12, 0, 1), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 13, 0, 1), "", "Kocsor Dániel", TEMP));

sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 10, 0), "", "Cserháti Réka", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 8, 0), "", "Dormán Miklós", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 10, 0), "", "Kátai-Urbán Kamilla", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "", "Kulin Júlia", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 14, 0), "", "Kulin Júlia", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "", "Kulin Júlia", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "", "Ágoston Tamás", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "", "Budai Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "", "Budai Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "", "Nagy Fruzsina", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "", "Bodor Bertalan", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(1, 14, 0), "", "Kunos Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 8, 0), "", "Kunos Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "", "Nagy Kinga", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "", "Nemes Bernadett", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "", "Varga Kristóf", KRISTOF_TEACHER));

sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 16, 0, 1), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 17, 0, 1), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(1, 17, 0, 1), "", "Lengyel Levente, Isztin Martin", LEVI_TEACHER));

sem_23_24_1.splitTimetables().draw();