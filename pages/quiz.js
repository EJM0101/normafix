import { useState } from "react";

const questions = [
  {
    question: "Que garantit la 1FN ?",
    options: ["Clé primaire unique", "Valeurs atomiques", "Dépendances transitive"],
    answer: 1
  },
  {
    question: "Quand applique-t-on la 2FN ?",
    options: ["Clé composée + dépendances partielles", "Une seule colonne", "Relation circulaire"],
    answer: 0
  },
  {
    question: "La BCNF élimine...",
    options: ["Les super-clés", "Les dépendances sur non-clés", "Toutes les dépendances fonctionnelles non sur super-clé"],
    answer: 2
  }
];

export default function Quiz() {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (qIndex, optIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const sc = questions.reduce((acc, q, i) => acc + (q.answer === answers[i] ? 1 : 0), 0);
    setScore(sc);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz sur les Formes Normales</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{i + 1}. {q.question}</p>
          {q.options.map((opt, j) => (
            <label key={j} className="block">
              <input
                type="radio"
                name={`q${i}`}
                checked={answers[i] === j}
                onChange={() => handleSelect(i, j)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Soumettre
      </button>
      {score !== null && <p className="mt-4 font-semibold">Score : {score} / {questions.length}</p>}
    </div>
  );
}