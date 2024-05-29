import CoursePage from "@/app/course/[_id]/page";
import CourseCard from "@/components/CourseCard";
import CourseGraph from "@/components/CourseGraph";
import organize_courses from "@/utils/organize_courses";

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

  console.log("Not organized: ", courses);
  // let organized_courses = organize_courses(courses);
  // console.log("Organized courses: ", organized_courses);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{params.course_name}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {params.semester_year}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
