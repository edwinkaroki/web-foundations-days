
# School Database Design

## Students Table

The students table stores information about each student, including their student ID, name and email address. The student ID is the primary key, and the email is required and unique so that two students cannot use the same email address.

## Courses Table

The courses table stores information about courses offered by the school. It contains a course ID, course name and unique course code. The course ID is the primary key.

## Enrolments Table

The enrolments table connects students to courses. It contains its own primary key, foreign keys referencing students and courses, and a grade for each enrolment. A unique constraint on student ID and course ID prevents a student from enrolling in the same course twice.

## Relationships

There is a one-to-many relationship between students and enrolments because one student can have multiple enrolment records. There is also a one-to-many relationship between courses and enrolments because one course can have multiple enrolment records.

Students and courses have a many-to-many relationship: a student can take several courses, and each course can have several students. The enrolments table is necessary as a join table to represent this relationship and store additional information, such as the student's grade.

## Index

I would add an index on `enrolments(course_id)` to help the database find enrolments for a particular course more efficiently. This would improve queries that list students on a course or count students per course. The primary keys and unique constraints already create indexes for their respective columns.

## SQL or NoSQL?

I would choose a relational SQL database for this school system. Students, courses and enrolments have clear relationships, and foreign keys and unique constraints help maintain data integrity. SQL joins make it straightforward to retrieve courses for a student, list students in a course, and calculate enrolment totals. A relational database is therefore a good fit for this structured data.
