// src/components/CourseCard.jsx

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition overflow-hidden">

      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900 min-h-[52px]">
          {course.title}
        </h3>

        <p className="text-sm text-slate-500 mt-2">
          Instructor: <span className="text-slate-700">{course.instructor}</span>
        </p>

        <p className="text-lg font-bold text-emerald-600 mt-3">{course.price}</p>

        <div className="mt-4">
          <a
            href={`/courses/${course.id}`}
            className="block text-center rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white py-2 font-medium transition"
          >
            View Course
          </a>
        </div>
      </div>
    </div>
  );
}
