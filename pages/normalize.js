import { useEffect, useState } from "react";
import {
  normalizeTo1NF,
  normalizeTo2NF,
  normalizeTo3NF,
  normalizeToBCNF,
} from "@/utils/normalization";

export default function Normalize() {
  const [original, setOriginal] = useState([]);
  const [nf1, setNf1] = useState([]);
  const [nf2, setNf2] = useState([]);
  const [nf3, setNf3] = useState([]);
  const [bcnf, setBcnf] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userTable") || "[]");
    setOriginal(data);

    if (data.length > 0) {
      const nf1Result = normalizeTo1NF(data);
      const nf2Result = normalizeTo2NF(nf1Result);
      const nf3Result = normalizeTo3NF(nf2Result);
      const bcnfResult = normalizeToBCNF(nf3Result);

      setNf1(nf1Result);
      setNf2(nf2Result);
      setNf3(nf3Result);
      setBcnf(bcnfResult);
    }
  }, []);

  const renderTable = (title, table) => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              {table[0]?.map((col, i) => (
                <th key={i} className="border p-2 bg-gray-100">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🔁 Étapes de Normalisation</h2>
      {original.length > 0 && renderTable("Table d'origine", original)}
      {nf1.length > 0 && renderTable("1FN - Forme Atomique", nf1)}
      {nf2.length > 0 && renderTable("2FN - Suppression dépendances partielles", nf2)}
      {nf3.length > 0 && renderTable("3FN - Suppression dépendances transitives", nf3)}
      {bcnf.length > 0 && renderTable("BCNF - Super-clés uniquement", bcnf)}
    </div>
  );
}