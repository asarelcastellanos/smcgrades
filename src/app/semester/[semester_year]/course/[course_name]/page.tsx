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


  return (
    <div>
      <p>
        Course Page: {params.semester_year} & {params.course_name}
      </p>
        {courses.map((course: any) => (
          <div key={course._id}>
            <CourseCard {...course} />
          </div>
        ))}
    </div>
  );
}
