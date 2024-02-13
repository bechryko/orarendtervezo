// CATEGORIES
const UNI = new CourseCategory("egyetemi órák", "#228b22", { primary: true });
const TEMP = new CourseCategory("választani egyet", "#228b22", { temporary: true });
const TEACHING = new CourseCategory("egyetemi óratartás", "#ca488f", { primary: true });
const WORK = new CourseCategory("munka", "#26edc6", { primary: true });
const SZABADIDO = new CourseCategory("Szabadidős tevékenység", "#140cfa", { primary: true });

//SEMESTER
const sem_23_24_2 = new Term("2023-24. 2. félév", "#ceff9f");

//ÓRÁK
sem_23_24_2.addCourse(new Course("UI/UX Design A-tól Z-ig", new CourseTime(2, 9, 0, 3*45), "IR-105", "Vas András (CAS)", UNI));
sem_23_24_2.addCourse(new Course("Játékfejlesztés Unity-ben", new CourseTime(4, 14, 0), "IR-012", "Dr. Varga László", UNI));

//TEACHING
sem_23_24_2.addCourse(new Course("Logika ea.", new CourseTime(0, 18, 0), "TIK Kongresszusi", "Dr. Gazdag Zsolt Zoltán", TEACHING, { temporary: true }));
sem_23_24_2.addCourse(new Course("Logika és informatikai alkalmazásai gyak.", new CourseTime(2, 18, 0, 45), "IR-213", "Kozma Kristóf", TEACHING));
sem_23_24_2.addCourse(new Course("Logika és informatikai alkalmazásai gyak.", new CourseTime(2, 19, 0, 45), "IR-213", "Kozma Kristóf", TEACHING));
sem_23_24_2.addCourse(new Course("Logika és informatikai alkalmazásai gyak.", new CourseTime(3, 18, 0, 45), "IR-213", "Kozma Kristóf", TEACHING));
sem_23_24_2.addCourse(new Course("Logikai következtetési rendszerek gyak.", new CourseTime(4, 12, 0, 45), "IR-214", "Kozma Kristóf", TEACHING));
sem_23_24_2.addCourse(new Course("Logikai következtetési rendszerek gyak.", new CourseTime(4, 13, 0, 45), "IR-214", "Kozma Kristóf", TEACHING));
sem_23_24_2.addCourse(new Course("Programozás alapjai gyak.", new CourseTime(0, 8, 15, 3*45 + 15), "IR-224", "Goldman Júlia, Kozma Kristóf", TEACHING));

sem_23_24_2.addCourse(new Course("Kedvenc tanítványom ❤", new CourseTime(0, 15, 30, 2*60+30), "TIK", "", TEACHING));
sem_23_24_2.addCourse(new Course("Kedvenc tanítványom ❤", new CourseTime(1, 17, 0, 3*60), "TIK", "", TEACHING));

//WORK
sem_23_24_2.addCourse(new Course("Munka", new CourseTime(1, 8, 0, 8*60 + 30), "CAS", "", WORK));
sem_23_24_2.addCourse(new Course("Munka", new CourseTime(2, 12, 0, 5*60), "CAS", "", WORK));
sem_23_24_2.addCourse(new Course("Munka", new CourseTime(3, 8, 0, 8*60 + 30), "CAS", "", WORK));

//FREETIME
sem_23_24_2.addCourse(new Course("Edzés", new CourseTime(2, 6, 45, 90), "FitWorld", "", SZABADIDO));
sem_23_24_2.addCourse(new Course("Edzés", new CourseTime(4, 8, 30, 120), "FitWorld", "", SZABADIDO));
sem_23_24_2.addCourse(new Course("Edzés", new CourseTime(6, 9, 0, 120), "FitWorld", "", SZABADIDO));

// sem_23_24_2.addCourse(new Course("Minden héten Ágival reggeli Aldiban? 👉👈", new CourseTime(2, 8, 15, 45), "", "", SZABADIDO));
