import { useState } from 'react';

function Courses() {
  const [courses] = useState([
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'John Doe',
      duration: '8 weeks',
      level: 'Beginner',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      instructor: 'Jane Smith',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'React Mastery',
      instructor: 'Mike Johnson',
      duration: '12 weeks',
      level: 'Advanced',
      image: 'https://via.placeholder.com/300x200'
    }
  ]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Available Courses
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Instructor: {course.instructor}
            </p>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
            <button className="btn-primary w-full mt-4">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses