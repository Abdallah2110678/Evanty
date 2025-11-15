// src/data/assessments.js

export const assessments = [
  {
    id: "basic-anxiety-check",
    title: "مقياس القلق الأساسي",
    therapistName: "د. سارة عبد الله",
    price: "Free",
    shortDescription:
      "تقييم مبسط يساعدك على ملاحظة مستوى القلق اليومي لديك خلال الأسبوع الماضي.",
    estimatedTime: "5–7 دقائق",
    questions: [
      {
        id: "q1",
        text: "كم مرة شعرت بتوتر أو قلق خلال الأيام السبعة الماضية؟",
        options: [
          { id: "q1o1", text: "تقريبًا أبدًا", score: 0 },
          { id: "q1o2", text: "أحيانًا", score: 2 },
          { id: "q1o3", text: "غالبًا", score: 4 },
          { id: "q1o4", text: "طوال اليوم تقريبًا", score: 6 },
        ],
      },
      {
        id: "q2",
        text: "إلى أي درجة أثّر القلق على نومك أو راحتك؟",
        options: [
          { id: "q2o1", text: "لم يؤثر تقريبًا", score: 0 },
          { id: "q2o2", text: "تأثير بسيط", score: 2 },
          { id: "q2o3", text: "تأثير متوسط", score: 4 },
          { id: "q2o4", text: "تأثير كبير جدًا", score: 6 },
        ],
      },
      {
        id: "q3",
        text: "إلى أي درجة شعرت بصعوبة في التركيز بسبب القلق؟",
        options: [
          { id: "q3o1", text: "لم أشعر بصعوبة", score: 0 },
          { id: "q3o2", text: "أحيانًا بسيطة", score: 2 },
          { id: "q3o3", text: "صعوبة متكررة", score: 4 },
          { id: "q3o4", text: "صعوبة شديدة معظم الوقت", score: 6 },
        ],
      },
    ],
  },

  // يمكنك إضافة مقاييس أخرى هنا بنفس الشكل لاحقًا
];

export function getAssessmentById(id) {
  return assessments.find((a) => a.id === id);
}
