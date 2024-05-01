export default function CoursePage({ params }: { params: { semester_year: string, course_name: string } }) {

    return <div>Course Page: {params.semester_year} & {params.course_name} </div>
  }