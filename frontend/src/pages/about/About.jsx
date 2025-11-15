// src/pages/about/About.jsx

const ACCENT_STYLES = {
  blue: {
    container: "bg-blue-50 p-4 rounded-xl border border-blue-100",
    heading: "text-blue-800",
  },
  green: {
    container: "bg-green-50 p-4 rounded-xl border border-green-100",
    heading: "text-green-800",
  },
  purple: {
    container: "bg-purple-50 p-4 rounded-xl border border-purple-100",
    heading: "text-purple-800",
  },
  yellow: {
    container: "bg-yellow-50 p-4 rounded-xl border border-yellow-100",
    heading: "text-yellow-800",
  },
};

const FALLBACK_CONTENT = {
  title: "About Eventy",
  mission: {
    title: "Our Vision & Mission",
    paragraphs: [
      "Eventy is an Arabic training platform specialized in psychology and life skills development. We help individuals, parents, and professionals build a balanced psychological awareness and practical tools to manage their lives more effectively.",
      "Our content is based on trusted scientific references and studies, combined with practical training, exercises, and real-life applications in areas such as personality building, thinking skills, relationships, parenting, and emotional regulation.",
      "We aim to make psychological knowledge accessible, reliable, and easy to apply, so that users can grow personally and professionally through structured programs, courses, and interactive tools.",
    ],
    projectsTitle: "What You’ll Find on Eventy",
    projects: [
      {
        title: "Recorded Psychology Courses",
        description:
          "Structured video courses in developmental psychology, positive psychology, parenting, and skills training, with certificates upon completion.",
      },
      {
        title: "Psychological Assessments & Tests",
        description:
          "Digital tests that help you explore personality traits, skills, and behavioral patterns, with downloadable reports.",
      },
      {
        title: "Scientific Library",
        description:
          "Simplified research, short books, and recommended readings in different branches of psychology.",
      },
      {
        title: "Training & Development Programs",
        description:
          "Integrated programs for children, teens, parents, and professionals that combine videos, exercises, and evaluations.",
      },
      {
        title: "Awareness & Media Content",
        description:
          "Short videos and materials on mental health, parenting, relationships, and human behavior.",
      },
      {
        title: "Interactive Tools & Activities",
        description:
          "Practical worksheets, exercises, and interactive tools to support real-life application and habit-building.",
      },
      {
        title: "Live Interactive Courses",
        description:
          "Online live sessions with trainers, including Q&A, discussions, and group activities.",
      },
    ],
  },
  offers: {
    title: "What We Offer",
    items: [
      {
        title: "Structured Learning Paths 🎓",
        description:
          "Recorded and live courses designed by experts in psychology and skills development, with clear learning outcomes.",
        accent: "blue",
      },
      {
        title: "Trusted Scientific Content 📚",
        description:
          "Content built on recognized psychological theories and research, simplified into practical steps.",
        accent: "green",
      },
      {
        title: "Practical Tools & Assessments 🧠",
        description:
          "Digital tests, worksheets, and training programs that help you apply what you learn in real life.",
        accent: "purple",
      },
      {
        title: "Supportive Arabic Community 👥",
        description:
          "A space to learn, reflect, and grow in your own language, with guidance from specialists and trainers.",
        accent: "yellow",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    text: "Have questions or partnership ideas? Reach out to us at support@eventy-platform.com or contact us via WhatsApp / phone at +20-000-000-0000.",
  },
  faq: {
    badge: "FAQs",
    items: [
      {
        question: "How do I enroll in a course on Eventy?",
        answer:
          "Browse the courses, open the course page, and click the enroll or purchase button. After completing the payment, the course will appear in your account dashboard.",
      },
      {
        question: "Do I receive a certificate after finishing a course?",
        answer:
          "Yes. For eligible courses and programs, you can download a digital certificate after completing all required lessons and assessments.",
      },
      {
        question: "Are the courses recorded or live?",
        answer:
          "Eventy offers both recorded courses that you can watch anytime, and live interactive courses. Each course page clearly shows whether it is recorded, live, or blended.",
      },
      {
        question: "How long do I have access to the course content?",
        answer:
          "Access duration depends on the specific course or program. You can find the access period mentioned on the course details page before enrollment.",
      },
      {
        question: "Are the psychological tests considered medical or clinical diagnoses?",
        answer:
          "No. The tests and assessments on Eventy are designed for educational and developmental purposes only and do not replace professional clinical diagnosis or therapy.",
      },
    ],
  },
  knowledge: {
    badge: "Understand your mind better",
    items: [
      {
        question: "What is positive psychology?",
        answer:
          "Positive psychology focuses on strengths, resilience, well-being, and what helps people flourish — not just on disorders or problems.",
      },
      {
        question: "What does developmental psychology study?",
        answer:
          "Developmental psychology studies how humans grow and change across the lifespan, including thinking, emotions, behavior, and social relationships.",
      },
      {
        question: "What is mindfulness practice?",
        answer:
          "Mindfulness is the practice of paying attention to the present moment with acceptance and without judgment, using breathing, awareness, and reflection exercises.",
      },
      {
        question: "What is the difference between counseling and psychotherapy?",
        answer:
          "Counseling often focuses on specific issues and skills in the short term, while psychotherapy tends to go deeper into patterns, past experiences, and long-term change.",
      },
      {
        question: "How can I support a child with learning difficulties?",
        answer:
          "Start with proper assessment, collaborate with specialists and teachers, use tailored learning strategies, and provide emotional support and encouragement at home.",
      },
    ],
  },
};

const About = () => {
  const content = FALLBACK_CONTENT;

  const mission = content.mission;
  const missionParagraphs = mission.paragraphs;
  const projectsTitle = mission.projectsTitle;
  const projects = mission.projects;

  const offers = content.offers;
  const offersTitle = offers.title;
  const offerItems = offers.items;

  const contact = content.contact;
  const contactTitle = contact.title;
  const contactText = contact.text;

  const faq = content.faq;
  const faqBadge = faq.badge;
  const faqItems = faq.items;

  const knowledge = content.knowledge;
  const knowledgeBadge = knowledge.badge;
  const knowledgeItems = knowledge.items;

  const title = content.title;
  const missionTitle = mission.title;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">
          {title}
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {missionTitle}
          </h2>
          {missionParagraphs.map((paragraph, idx) => (
            <p
              key={`mission-paragraph-${idx}`}
              className="text-gray-600 mb-4"
            >
              {paragraph}
            </p>
          ))}

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {projectsTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {projects.map((project, idx) => (
                <li key={`project-${project.title}-${idx}`}>
                  <span className="font-medium">{project.title}</span>{" "}
                  <span className="text-slate-600">
                    — {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {offersTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {offerItems.map((offer, idx) => {
              const accentKey =
                offer.accent && ACCENT_STYLES[offer.accent]
                  ? offer.accent
                  : "blue";
              const accentClasses =
                ACCENT_STYLES[accentKey] || ACCENT_STYLES.blue;
              return (
                <div
                  key={`offer-${offer.title}-${idx}`}
                  className={accentClasses.container}
                >
                  <h3
                    className={`text-lg font-semibold ${accentClasses.heading} mb-2`}
                  >
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {contactTitle}
          </h2>
          <p className="text-gray-600">{contactText}</p>
        </div>

        {/* FAQ */}
        <section className="relative mb-10">
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <span>{faqBadge}</span>
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow border border-slate-100 p-4 md:p-6">
            <div className="space-y-2">
              {faqItems.map((item, idx) => (
                <details
                  key={`faq-${idx}`}
                  className="group rounded-xl hover:bg-slate-50 transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-3 rounded-xl">
                    <span className="text-slate-800 font-medium">
                      {item.question}
                    </span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-slate-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge */}
        <section className="relative mb-10">
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center gap-2 bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <span>{knowledgeBadge}</span>
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow border border-slate-100 p-4 md:p-6">
            <div className="space-y-2">
              {knowledgeItems.map((item, idx) => (
                <details
                  key={`knowledge-${idx}`}
                  className="group rounded-xl hover:bg-slate-50 transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-3 rounded-xl">
                    <span className="text-slate-800 font-medium">
                      {item.question}
                    </span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-slate-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
