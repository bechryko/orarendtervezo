// CATEGORIES
const KRISTOF_LEVI = new CourseCategory("Kristóf és Levi órái", "cyan");
const KOZOS = new CourseCategory("Klaudia, Kristóf és Levi órái", "#228b22");
const KRISTOF_TEACHER = new CourseCategory("Kristóf által tartott", "#c457f0");
const LEVI_TEACHER = new CourseCategory("Levi által tartott", "yellow");
const KL_TEMP_GYAK = new CourseCategory("gyakorlat Kristófnak és Levinek (választani egyet)", "cyan", true);
const KL_PLUS_GYAK = new CourseCategory("gyakorlat Kristófnak és Levinek (választani egyet)", "red", true);
const TEMP_GYAK = new CourseCategory("gyakorlat Klaudiának, Kristófnak és Levinek (választani egyet)", "lime", true);

//SEMESTER
const sem_22_23_2 = new Term("2022-23. 2. félév");

//COURSES
sem_22_23_2.addCourse(new Course("Alga2 ea", new CourseTime(0, 8, 0), "", "", KRISTOF_LEVI));
sem_22_23_2.addCourse(new Course("Assembly ea", new CourseTime(1, 13, 0, 45), "", "", KRISTOF_LEVI, false, true));
sem_22_23_2.addCourse(new Course("Fonya ea", new CourseTime(1, 10, 0), "", "", KRISTOF_LEVI));
sem_22_23_2.addCourse(new Course("Infóbiztonság ea", new CourseTime(1, 14, 0), "", "", KOZOS, false, true));
sem_22_23_2.addCourse(new Course("Oprendszerek ea", new CourseTime(1, 18, 0), "", "", KRISTOF_LEVI, false, true));
sem_22_23_2.addCourse(new Course("Prognyelvek ea", new CourseTime(0, 14, 0), "", "", KOZOS, false, true));
sem_22_23_2.addCourse(new Course("Digikép ea", new CourseTime(2, 12, 0), "", "", KOZOS));
sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek ea", new CourseTime(2, 16, 0), "", "", KRISTOF_LEVI, false, true));
sem_22_23_2.addCourse(new Course("Progresszív Webalkalmazás fejlesztés TypeScriptben gyak", new CourseTime(2, 16, 0), "", "Dr. Dombi József", KRISTOF_LEVI));

sem_22_23_2.addCourse(new Course("Scala ea", new CourseTime(3, 14, 0, 45), "", "Szabiván", KL_PLUS_GYAK));
sem_22_23_2.addCourse(new Course("Scala gyak", new CourseTime(3, 18, 0), "", "Szabiván", KL_PLUS_GYAK));

sem_22_23_2.addCourse(new Course("Logika gyak", new CourseTime(3, 15, 0, 45), "", "Kozma Kristóf", KRISTOF_TEACHER));
sem_22_23_2.addCourse(new Course("Logika gyak", new CourseTime(3, 16, 0, 45), "", "Kozma Kristóf", KRISTOF_TEACHER));
sem_22_23_2.addCourse(new Course("Progalap gyak", new CourseTime(4, 10, 0, 3*45), "", "Goldman Júlia, Kozma Kristóf", KRISTOF_TEACHER));
sem_22_23_2.addCourse(new Course("Prog1 gyak", new CourseTime(0, 11, 0), "", "Goldman Júlia, Jász Judit, Kozma Kristóf", KRISTOF_TEACHER));
sem_22_23_2.addCourse(new Course("Prog1 korrep", new CourseTime(1, 13, 0, 5*45), "TIK", "Kozma Kristóf", KRISTOF_TEACHER));

sem_22_23_2.addCourse(new Course("Web tervezés gyak", new CourseTime(3, 14, 0, 45), "", "Szabó Katalin, Lengyel Levente, Rácz Fanni", LEVI_TEACHER));
sem_22_23_2.addCourse(new Course("Web tervezés gyak", new CourseTime(4, 13, 0, 45), "", "Csuvik Viktor, Lengyel Levente, Rácz Fanni", LEVI_TEACHER));

/*sem_22_23_2.addCourse(new Course("Fonya gyak", new CourseTime(2, 10, 0, 1), "", "Oláh Tamás", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Fonya gyak", new CourseTime(2, 11, 0, 1), "", "Oláh Tamás", KL_TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Fonya gyak", new CourseTime(2, 14, 0, 45), "", "Oláh Tamás", KL_TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Fonya gyak", new CourseTime(2, 15, 0, 45), "", "Oláh Tamás", KL_TEMP_GYAK));

/*sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek gyak", new CourseTime(1, 14, 0), "", "Olasz Csaba", KL_TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek gyak", new CourseTime(3, 8, 0), "", "Olasz Csaba", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek gyak", new CourseTime(3, 10, 0), "", "Olasz Csaba", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek gyak", new CourseTime(3, 12, 0), "", "Olasz Csaba", KL_TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Adatb alapú rendszerek gyak", new CourseTime(1, 18, 0), "", "Olasz Csaba", KRISTOF_LEVI));

//sem_22_23_2.addCourse(new Course("Alga2 gyak", new CourseTime(2, 18, 0, 1), "", "Kiss-Vetráb Mercedes", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Alga2 gyak", new CourseTime(2, 19, 0, 45), "", "Kiss-Vetráb Mercedes", KRISTOF_LEVI));

/*sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(1, 14, 0, 1), "", "Kiss Ákos", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(1, 15, 0, 1), "", "Kiss Ákos", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(3, 10, 0, 1), "", "Kiss Ákos", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(0, 16, 0, 1), "", "Gál Péter", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(0, 17, 0, 1), "", "Gál Péter", KL_TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Assembly gyak", new CourseTime(3, 11, 0, 45), "", "Kiss Ákos", KRISTOF_LEVI));

/*sem_22_23_2.addCourse(new Course("Digikép gyak", new CourseTime(2, 16, 0, 1), "", "Kardos Péter", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Digikép gyak", new CourseTime(2, 17, 0, 1), "", "Kardos Péter", TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Digikép gyak", new CourseTime(3, 17, 0, 45), "", "Kardos Péter", KOZOS));

/*sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(0, 11, 0, 1), "", "Dombi József", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(0, 14, 0, 1), "", "Tóth László", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(0, 15, 0, 1), "", "Tóth László", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(1, 16, 0, 1), "", "Vidács László", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(2, 8, 0, 1), "", "Dombi József", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(2, 9, 0, 1), "", "Dombi József", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(2, 10, 0, 1), "", "Tóth László", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(2, 11, 0, 1), "", "Tóth László", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(3, 8, 0, 1), "", "Dombi József", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(3, 9, 0, 1), "", "Dombi József", TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(1, 17, 0, 1), "", "Pengő Edit", KOZOS));*/
sem_22_23_2.addCourse(new Course("Infóbiztonság gyak", new CourseTime(0, 10, 0, 45), "", "Dombi József", KOZOS));

/*sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(0, 18, 0, 1), "", "Karai Gábor, Márton István", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(0, 19, 0, 1), "", "Karai Gábor, Márton István", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(2, 19, 0, 1), "", "Nagy Dániel, Sötét Petra", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(3, 8, 0, 1), "", "Sárközi Gergő, Seres Ákos", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(3, 9, 0, 1), "", "Sárközi Gergő, Seres Ákos", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(3, 17, 0, 1), "", "Karai Gábor, -Demonstrátor-", KL_TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Oprendszerek gyak", new CourseTime(2, 18, 0, 45), "", "Nagy Dániel, Sötét Petra", KRISTOF_LEVI));

/*sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(0, 12, 0, 1), "", "Pflanzner Tamás", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(0, 13, 0, 1), "", "Pflanzner Tamás", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(1, 11, 0, 1), "", "Horváth Ferenc", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(1, 12, 0, 1), "", "Horváth Ferenc", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(1, 13, 0, 1), "", "Horváth Ferenc", TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(3, 12, 0, 1), "", "Horváth Ferenc", TEMP_GYAK));*/
sem_22_23_2.addCourse(new Course("Prognyelvek gyak", new CourseTime(3, 13, 0, 45), "", "Horváth Ferenc", KOZOS));

sem_22_23_2.addCourse(new Course("Alkalmazásfejlesztés 1 ea", new CourseTime(2, 15, 0, 45), "", "Dr. Siket István", KRISTOF_LEVI));
sem_22_23_2.addCourse(new Course("Alkalmazásfejlesztés 1 gyak", new CourseTime(0, 16, 0), "", "Horváth Dániel", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Alkalmazásfejlesztés 1 gyak", new CourseTime(0, 18, 0), "", "Horváth Dániel", KL_TEMP_GYAK));
sem_22_23_2.addCourse(new Course("Alkalmazásfejlesztés 1 gyak", new CourseTime(1, 16, 0), "", "Soha Péter", KL_TEMP_GYAK, true));
sem_22_23_2.addCourse(new Course("Alkalmazásfejlesztés 1 gyak", new CourseTime(3, 18, 0), "", "Ságodi Zoltán", KL_TEMP_GYAK, false, true));

sem_22_23_2.splitTimetables().draw();
