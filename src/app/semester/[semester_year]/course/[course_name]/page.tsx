import CourseCard from "@/components/CourseCard";

async function getCoursesData(semester_year: string, course_name: string) {
  const res = await fetch(`https://api.smcgrades.com/semester/${semester_year}/courses/${course_name}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.error("Failed to fetch course data");
  }

  return res.json();
}

export default async function CoursesPage({ params }: { params: { semester_year: string; course_name: string } }) {
  const courses = await getCoursesData(params.semester_year, params.course_name);

  // console.log("Not organized: ", courses);
  // let organized_courses = organize_courses(courses);
  // console.log("Organized courses: ", organized_courses);

  let courseName = params.course_name.replaceAll('_', ' ');
  let courseYear = params.semester_year.replaceAll('_', ' ');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Course: {courseName}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 capitalize">
            Semester: {courseYear}
          </p>
        </div>
        {/* <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Highest Passing Rate"
          >
            <option>Highest Passing Rate</option>
            <option>Lowest Passing Rate</option>
          </select>
        </div> */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {courses.map((course: any) => {
            return (
              <div key={course._id}>
                <CourseCard course={course} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
