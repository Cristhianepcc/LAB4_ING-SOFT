// test/domain/entities/Course.test.ts
import { Course, CourseType } from '../../../src/domain/entities/Course';

describe('Course Entity', () => {
  let validCourseData: any;

  beforeEach(() => {
    validCourseData = {
      code: 'CS101',
      name: 'Introduction to Programming',
      description: 'Basic programming course',
      credits: 4,
      theoryProfessorId: 'prof-001',
      semester: '2025-1',
      courseType: CourseType.THEORY_LAB,
      theoryHoursPerWeek: 3,
      labHoursPerWeek: 2,
      theoryWeightPercentage: 60,
      labWeightPercentage: 40,
      syllabusUrl: 'https://example.com/syllabus.pdf',
      schedule: 'Mon-Wed 10:00-12:00'
    };
  });

  test('should create a valid course', () => {
    const course = new Course(...Object.values(validCourseData));
    expect(course).toBeInstanceOf(Course);
    expect(course.code).toBe('CS101');
    expect(course.credits).toBe(4);
  });

  test('should throw error for negative credits', () => {
    expect(() => {
      new Course(
        'CS102', 'Advanced Programming', 'Course description',
        -3, 'prof-002', '2025-1', CourseType.THEORY, 3, 0
      );
    }).toThrow();
  });

  test('should allow optional parameters to be undefined', () => {
    const course = new Course(
      'CS103', 'Database Systems', 'Intro to databases',
      3, 'prof-003', '2025-1', CourseType.THEORY, 3, 0
    );
    expect(course.syllabusUrl).toBeUndefined();
    expect(course.schedule).toBeUndefined();
  });

  afterEach(() => {
    validCourseData = null;
  });
});
