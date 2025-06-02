import { useState } from "react";

export default function InputTable() {
  const [rows, setRows] = useState([]);
  const [filename, setFilename] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file || !file.name.endsWith(".csv")) {
      alert("Veuillez téléverser un fichier CSV valide.");
      return;
    }

    setFilename(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.trim().split("\n").map(line => line.split(","));
      setRows(lines);
      localStorage.setItem("userTable", JSON.stringify(lines));
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📁 Téléverser une table CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 block"
      />

      {filename && <p className="mb-4 text-sm text-gray-600">Fichier sélectionné : <strong>{filename}</strong></p>}

      {rows.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-4 text-sm">
            <thead>
              <tr>
                {rows[0].map((col, i) => (
                  <th key={i} className="border p-2 bg-gray-100">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}