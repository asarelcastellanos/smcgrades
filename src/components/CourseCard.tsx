import CourseGraph from './CourseGraph'

export default function CourseCard({ course }: any) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <CourseGraph {...course} />
      <div className="flex items-center gap-x-4 text-xs">
        <p
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {course.Department}
        </p>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute inset-0" />
          {course.Course}
        </h3>
        <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {course.Instructor}
          </p>
      </div>
    </article>
  );
}
