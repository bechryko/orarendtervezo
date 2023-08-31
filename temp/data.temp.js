// CATEGORIES
const KRISTOF = new CourseCategory("Kristóf órái", "#228b22", { primary: true });
const K_TEMP = new CourseCategory("Kristófnak választani egyet", "#00ff00", { temporary: true });
const KOZOS = new CourseCategory("Levi és Kristóf órái", "#00ffff", { primary: true });
const TEMP = new CourseCategory("választani egyet", "#6fe0e1", { temporary: true });
const TALAN = new CourseCategory("plusz lehetőségek", "#ff00ff", { temporary: true });
const KRISTOF_TEACHER = new CourseCategory("Kristóf tanári órái", "#ff0000");
const LEVI_TEACHER = new CourseCategory("Levi tanári órái", "#ffff00", { primary: true });
const KRISTOF_MUNKA = new CourseCategory("Kristóf dolgozik", "#ff8000", { primary: true });

//SEMESTER
const sem_23_24_1 = new Term("2023-24. 1. félév");

// COURSES
sem_23_24_1.addCourse(new Course("LaTeX ea", new CourseTime(0, 14, 0, 45), "IR-223", "Virágh János", KOZOS));
sem_23_24_1.addCourse(new Course("LaTeX gyak", new CourseTime(0, 15, 0, 45), "IR-223", "Virágh János", KOZOS));
sem_23_24_1.addCourse(new Course("Köszi ea", new CourseTime(1, 8, 0), "TIK Kongresszusi", "Csendes Tibor", KRISTOF));
sem_23_24_1.addCourse(new Course("Bonya ea", new CourseTime(1, 10, 0), "Auditórium-Maximum", "Szabiván", KOZOS));
sem_23_24_1.addCourse(new Course("Dimat1 ea", new CourseTime(1, 12, 0), "TIK Kongresszusi", "Dormán Miklós", KRISTOF_TEACHER, { primary: true }));
sem_23_24_1.addCourse(new Course("Fuzzy ea", new CourseTime(1, 16, 0, 45), "IR-001", "Dombi József", KRISTOF));
sem_23_24_1.addCourse(new Course("Fuzzy gyak", new CourseTime(1, 17, 0, 45), "IR-001", "Dombi József", KRISTOF));
sem_23_24_1.addCourse(new Course("Előadói készségfejlesztés", undefined, "", "Ata (CAS)", KRISTOF));
sem_23_24_1.addCourse(new Course("Döntési rendszerek ea", new CourseTime(3, 8, 0), "", "Pluhár András", KOZOS));
sem_23_24_1.addCourse(new Course("Optimalizálási modellek", new CourseTime(3, 16, 0), "IR-216", "Dr. Gazdag-Tóth Boglárka", KOZOS, { temporary: true }));
sem_23_24_1.addCourse(new Course("Intelligens UI - ötlettől a megvalósításig", new CourseTime(1, 18, 0), "IR-224", "Győri Judit (EPAM)", KRISTOF));

sem_23_24_1.addCourse(new Course("Alkalmazásfejlesztés C# alapokon", new CourseTime(0, 10, 0), "", "Ruzsinszki Gábor", TALAN));
sem_23_24_1.addCourse(new Course("Magyar borvidékek geológiája és kultúrája", new CourseTime(3, 18, 0), "AD-114", "Kiss Attila, Mód László Balázs, Dr. Pál-Molnár Elemér, Simon András", TALAN));

sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 14, 0, 45), "", "Csendes Tibor", KRISTOF));
sem_23_24_1.addCourse(new Course("Köszi gyak", new CourseTime(1, 15, 0, 45), "", "Homolya Viktor", K_TEMP));

sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 12, 0, 45), "", "London András", TEMP, { disabled: true }));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(0, 13, 0, 45), "", "London András", TEMP, { disabled: true }));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 10, 0, 45), "", "Homolya Viktor", KOZOS));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 11, 0, 45), "", "Homolya Viktor", TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 14, 0, 45), "", "Homolya Viktor", TEMP));
sem_23_24_1.addCourse(new Course("Döntési rendszerek gyak", new CourseTime(3, 15, 0, 45), "", "Homolya Viktor", TEMP, { disabled: true }));

//sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 16, 0, 45), "", "Horváth Krisztián", TEMP));
//sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 17, 0, 45), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 18, 0, 45), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(0, 19, 0, 45), "", "Szlúka András", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 18, 0, 45), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(2, 19, 0, 45), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 10, 0, 45), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 11, 0, 45), "", "Horváth Krisztián", KOZOS));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 12, 0, 45), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 13, 0, 45), "", "Kocsor Dániel", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 16, 0, 45), "", "Horváth Krisztián", TEMP));
sem_23_24_1.addCourse(new Course("Bonya gyak", new CourseTime(3, 17, 0, 45), "", "Horváth Krisztián", TEMP));

//sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 10, 0), "BO-215", "Kátai-Urbán Kamilla", KRISTOF_TEACHER));
//sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 10, 0), "BO-216", "Tóth Endre", KRISTOF_TEACHER));
//sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 11, 0), "BO-212", "Bodor Bertalan", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "BO-215", "Kulin Júlia", KRISTOF_TEACHER, { primary: true }));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 12, 0), "BO-211", "Ágoston Tamás", KRISTOF_TEACHER, { primary: true }));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "BO-211", "Nagy Fruzsina", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(0, 18, 0), "BO-209", "Nemes Bernadett", KRISTOF_TEACHER));
// sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(1, 14, 0), "BO-211", "Kunos Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "BO-212", "Budai Ádám", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(2, 18, 0), "BO-211", "Varga Kristóf", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 8, 0), "BO-210", "Dormán Miklós", KRISTOF_TEACHER, { primary: true }));
// sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 10, 0), "BO-214", "Cserháti Réka", KRISTOF_TEACHER));
// sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 12, 0), "BO-211", "Kulin Júlia", KRISTOF_TEACHER));
// sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "BO-210", "Kulin Júlia", KRISTOF_TEACHER));
// sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 16, 0), "BO-212", "Tóth Endre", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "BO-212", "Tóth Endre", KRISTOF_TEACHER, { primary: true }));
sem_23_24_1.addCourse(new Course("Dimat1 gyak", new CourseTime(3, 18, 0), "BO-210", "Nagy Kinga", KRISTOF_TEACHER, { primary: true }));

sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 16, 0, 45), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(0, 17, 0, 45), "", "Lengyel Levente, Vass Levente", LEVI_TEACHER));
sem_23_24_1.addCourse(new Course("Számháló gyak", new CourseTime(1, 17, 0, 45), "", "Lengyel Levente, Isztin Martin", LEVI_TEACHER));

//sem_23_24_1.addCourse(new Course("Progalap gyak", new CourseTime(2, 8, 0, 150), "", "Goldman Júlia, Kozma Kristóf, Vad Avar", KRISTOF_TEACHER));
sem_23_24_1.addCourse(new Course("Progalap gyak", new CourseTime(3, 17, 0, 150), "", "Kozma Kristóf, ???", KRISTOF_TEACHER, { temporary: true, disabled: true }));

sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(0, 8, 0, 4*60), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(2, 8, 0, 8*60+30), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(3, 12, 0, 4*60), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("CAS szakmai gyak", new CourseTime(4, 8, 0, 8*60+30), "CAS", "", KRISTOF_MUNKA));
sem_23_24_1.addCourse(new Course("Korrepetálás", new CourseTime(0, 16, 0, 4*60), "TIK", "Kozma Kristóf", KRISTOF_MUNKA, { temporary: true }));
sem_23_24_1.addCourse(new Course("Korrepetálás", new CourseTime(2, 17, 0, 4*60), "TIK", "Kozma Kristóf", KRISTOF_MUNKA, { temporary: true }));
