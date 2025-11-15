// src/pages/courses/Courses.jsx
import CourseCard from "../../components/CourseCard";
import heroBg from "../../assets/hero.jpeg"; // or replace with a better psychology-related banner

const courses = [
  {
    id: 1,
    title: "دورة الصحة النفسية للعائلة",
    instructor: "د. سارة عبد الله",
    price: "1200 EGP",
    image: "/course1.jpg",
  },
  {
    id: 2,
    title: "الكوتشنج وبناء الشخصية الإيجابية",
    instructor: "أ. محمد ناصر",
    price: "950 EGP",
    image: "/course2.jpg",
  },
  {
    id: 3,
    title: "تنمية مهارات التواصل والعلاقات",
    instructor: "د. رانيا شريف",
    price: "800 EGP",
    image: "/course3.jpg",
  },
  {
    id: 4,
    title: "علم النفس الإيجابي وتطوير الذات",
    instructor: "د. كريم هلال",
    price: "1100 EGP",
    image: "/course4.jpg",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#fef7ef]">

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-100 via-amber-50 to-rose-100 py-20">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Expand your mind through{" "}
            <span className="text-emerald-600">scientific learning</span>.
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Explore carefully designed psychology & life-skills courses built by
            certified trainers and experts. Learn at your own pace with
            structured lessons, assessments, and practical tools.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#course-list"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:opacity-90 transition"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section id="course-list" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Our Upcoming Courses
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

    </div>
  );
}
