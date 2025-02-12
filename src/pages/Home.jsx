function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to EduLearn
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover a world of knowledge with our comprehensive online courses.
          Learn at your own pace and achieve your goals.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="course-card">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Latest Courses
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our newest additions to start learning today.
          </p>
        </div>

        <div className="course-card">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Track Progress
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor your learning journey and achievements.
          </p>
        </div>

        <div className="course-card">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Expert Instructors
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Learn from industry professionals and experts.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home