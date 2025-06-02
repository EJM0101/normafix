import { useState } from "react";

export default function InputTable() {
  const [input, setInput] = useState("");
  const [rows, setRows] = useState([]);

  const handleProcess = () => {
    const lines = input.trim().split("\n").map(line => line.split(","));
    setRows(lines);
    localStorage.setItem("userTable", JSON.stringify(lines));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Saisir une Table</h2>
      <textarea
        rows={6}
        className="w-full border rounded p-2 mb-4"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Ex: ID,Nom,Matières\n1,Alice,Math-Physique"
      />
      <button onClick={handleProcess} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Valider
      </button>

      {rows.length > 0 && (
        <table className="mt-6 w-full table-auto border-collapse">
          <thead>
            <tr>{rows[0].map((col, i) => <th key={i} className="border p-2 bg-gray-100">{col}</th>)}</tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j} className="border p-2">{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}