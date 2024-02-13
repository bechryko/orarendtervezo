// CATEGORIES
const KRISTOF = new CourseCategory("Kristóf órái", "#228b22", { primary: true });
const K_TEMP = new CourseCategory("Kristófnak választani egyet", "#00ff00", { temporary: true });
const KOZOS = new CourseCategory("Levi és Kristóf órái", "#228b22", { primary: true });
const TEMP = new CourseCategory("választani egyet", "#6fe0e1", { temporary: true });
const TALAN = new CourseCategory("plusz lehetőségek", "#ff00ff", { temporary: true });
const KRISTOF_TEACHER = new CourseCategory("Kristóf tanári órái", "#ff0000");
const LEVI_TEACHER = new CourseCategory("Levi tanári órái", "#ffff00", { primary: true });
const KRISTOF_MUNKA = new CourseCategory("Kristóf dolgozik", "#ff8000", { primary: true });
const SZABADIDO = new CourseCategory("Szabadidős tevékenység", "#140cfa", { primary: true });

//SEMESTER
const sem_23_24_1 = new Term("2023-24. 1. félév");

// COURSES
sem_23_24_1.addCourse(new Course("LaTeX ea + gyak", new CourseTime(0, 14, 0), "IR-223", "Virágh János", KOZOS));
sem_23_24_1.addCourse(new Course("Köszi ea", new CourseTime(1, 8, 0), "TIK Kongresszusi", "Csendes Tibor", KRISTOF));
sem_23_24_1.addCourse(new Course("Bonya ea", new CourseTime(1, 10, 0), "Auditórium-Maximum", "Szabiván", KOZOS));
sem_23_24_1.addCourse(new Course("Dimat1 ea", new CourseTime(1, 12, 0), "TIK Kongresszusi", "Dormán Miklós", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Fuzzy ea + gyak", new CourseTime(1, 16, 0), "IR-001", "Dombi József", KRISTOF));
sem_23_24_1.addCourse(new Course("Előadói készségfejlesztés", new CourseTime(2, 9, 0), "IR-214", "Ata (CAS)", KRISTOF));
sem_23_24_1.addCourse(new Course("Döntési rendszerek ea", new CourseTime(3, 8, 0), "MO-001", "Pluhár András", KOZOS, { temporary: true }));
sem_23_24_1.addCourse(new Course("Intelligens UI - ötlettől a megvalósításig", new CourseTime(1, 18, 0), "IR-224", "Héger Gábor György (EPAM)", KRISTOF));

sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 14, 0, 45), "IR-219", "Csendes Tibor", KRISTOF));
//sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 15, 0, 45), "", "Homolya Viktor", K_TEMP));

// sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 12, 0, 45), "", "London András", TEMP, { disabled: true }));
// sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 13, 0, 45), "", "London András", TEMP, { disabled: true }));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 10, 0, 45), "IR-001", "Homolya Viktor", KOZOS, { temporary: true }));
// sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 11, 0, 45), "", "Homolya Viktor", TEMP));
// sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 14, 0, 45), "", "Homolya Viktor", TEMP));
// sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 15, 0, 45), "", "Homolya Viktor", TEMP, { disabled: true }));

//sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 16, 0, 45), "", "Horváth Krisztián", TEMP));
//sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 17, 0, 45), "", "Horváth Krisztián", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 18, 0, 45), "", "Szlúka András", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 19, 0, 45), "", "Szlúka András", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 18, 0, 45), "", "Kocsor Dániel", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 19, 0, 45), "", "Kocsor Dániel", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 10, 0, 45), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 11, 0, 45), "IR-212", "Horváth Krisztián", KOZOS));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 12, 0, 45), "", "Kocsor Dániel", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 13, 0, 45), "", "Kocsor Dániel", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 16, 0, 45), "", "Horváth Krisztián", TEMP));
// sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 17, 0, 45), "", "Horváth Krisztián", TEMP));

sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "BO-215", "Kulin Júlia", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "BO-211", "Ágoston Tamás", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "BO-211", "Nagy Fruzsina", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "BO-209", "Nemes Bernadett", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "BO-212", "Budai Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "BO-211", "Varga Kristóf", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 8, 0), "BO-210", "Dormán Miklós", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 8, 0), "BO-211", "Zádori László", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "BO-210", "Kulin Júlia", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "BO-212", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "BO-212", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "BO-210", "Nagy Kinga", KRISTOF_TEACHER));

// sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 16, 0, 45), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
// sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 17, 0, 45), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
// sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(1, 17, 0, 45), "", "Lengyel Levente, Isztin Martin", LEVI_TEACHER));

sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(0, 8, 0, 5*60+30), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(2, 11, 30, 5*60), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(3, 12, 30, 4*60), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(4, 8, 0, 8*60+30), "CAS", "", KRISTOF_MUNKA));
// sem_23_24_1.addCourse(new Course("Korrepetálás (Fanni)", new CourseTime(0, 16, 30, 4*60-30), "TIK", "Kozma Kristóf", KRISTOF_MUNKA));
// sem_23_24_1.addCourse(new Course("Korrepetálás", new CourseTime(2, 17, 0, 4*60), "TIK", "Kozma Kristóf", KRISTOF_MUNKA, { temporary: true, primary: false }));
sem_23_24_1.addCourse(new Course("Korrepetálás (Vivi)", new CourseTime(3, 17, 0, 3*60), "TIK", "Kozma Kristóf", KRISTOF_MUNKA));

sem_23_24_1.addCourse(new Course("TDK megbeszélés", new CourseTime(0, 15, 30, 60), "IR Számtud Tanszék folyosója", "Gazdag Zsolt", KRISTOF))

// sem_23_24_1.addCourse(new Course("AquaPolis", new CourseTime(4, 17, 0, 180), "Szegedi Napfényfürdő", "", SZABADIDO));
sem_23_24_1.addCourse(new Course("Edzés", new CourseTime(2, 7, 0, 60), "Fit World", "", SZABADIDO));
