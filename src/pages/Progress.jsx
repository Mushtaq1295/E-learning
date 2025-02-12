function Progress() {
  const progress = [
    { course: 'Web Development Fundamentals', completed: 75 },
    { course: 'Advanced JavaScript', completed: 45 },
    { course: 'React Mastery', completed: 20 }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Your Learning Progress
      </h2>

      <div className="space-y-6">
        {progress.map((item, index) => (
          <div key={index} className="course-card">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.course}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                {item.completed}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${item.completed}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 course-card">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Overall Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Courses Enrolled</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Hours Spent</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">Certificates</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress