-- students table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY ,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
-- Courses table
CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name TEXT NOT NULL,
    course_codemTEXT NOT NULL UNIQUE
);
-- ENROLMENTS JOIN TABLE
CREATE TABLE enrolments (
    enrolment_id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    grade TEXT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE (student_id, course_id)
);
-- Insert at least 3 students
INSERT INTO students (student_id, course_name, course_code) VALUES
(1, 'Alice Johnson', 'alice@example.com'),
(2, 'Bob Smith', 'bob@example.gmail.com'),
(3, 'Charlie Brown', 'charlie@example.gmail.com');
-- Insert at least 3 courses
INSERT INTO courses (course_id, course_name, course_code) VALUES
(1, 'Mathematics', 'MATH101'),
(2, 'Physics', 'PHYS101'),
(3, 'Chemistry', 'CHEM101');
-- Insert at least 3 enrolments
INSERT INTO enrolments (enrolment_id, student_id, course_id, grade) VALUES
(1, 1, 1, 'A'),
(2, 2, 2, 'B'),
(3, 3, 3, 'C');
-- QUERY 1: All courses for one student by name
SELECT
    students.name AS student_name,
    courses.course_name,
    enrolments.grade
FROM students
JOIN enrolments 
     ON students.student_id = enrolments.student_id
JOIN courses
        ON enrolments.course_id = courses.course_id
    WHERE students.name = 'Alice Johnson';
-- QUERY 2: All students for one course by course name
SELECT
    students.name AS student_name,
    courses.course_name
FROM students
JOIN enrolments 
     ON students.student_id = enrolments.student_id
JOIN courses
        ON enrolments.course_id = courses.course_id     
WHERE courses.course_name = 'Mathematics';

-- QUERY 3:  Number of students per course, including courses with non
SELECT
courses.course_name,
COUNT(enroments.student_id) AS student_count
FROM courses
LEFT JOIN enrolments
    ON courses.course_id = enrolments.course_id
GROUP BY courses.course_id, courses.course_name;

-- QUERY 4: Students who have no enrolments
SELECT
    students.student_id,
    students.name,
    students.email
FROM students
LEFT JOIN enrolments
    ON students.student_id = enrolments.student_id
WHERE enrolments.student_id IS NULL;

-- QUERY 5: Update one enrolment's grade
UPDATE enrolments
SET grade = 'A'
WHERE enrolment_id = 3;

-- Check the updated grade
SELECT *
FROM enrolments
WHERE enrolment_id = 3;

