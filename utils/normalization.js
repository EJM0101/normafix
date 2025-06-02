export function normalizeTo1NF(table) {
  if (!table || table.length < 2) return table;
  const header = table[0];
  const rows = table.slice(1);
  let result = [];

  rows.forEach(row => {
    let explodedRows = [[]];
    row.forEach((cell) => {
      const values = cell.includes("-") ? cell.split("-") : [cell];
      const newRows = [];
      explodedRows.forEach(base => {
        values.forEach(value => {
          newRows.push([...base, value.trim()]);
        });
      });
      explodedRows = newRows;
    });
    result.push(...explodedRows);
  });

  return [header, ...result];
}

export function normalizeTo2NF(table) {
  if (!table || table.length < 2) return table;
  const [header, ...rows] = table;

  if (header.length <= 2) return table;

  const mainKey = header[0];
  const newHeader = [mainKey, ...header.slice(2)];
  const newRows = rows.map(row => [row[0], ...row.slice(2)]);

  return [newHeader, ...newRows];
}

export function normalizeTo3NF(table) {
  if (!table || table.length < 2) return table;
  const [header, ...rows] = table;

  if (header.length <= 2) return table;

  const newHeader = [header[0], header[2]];
  const newRows = rows.map(row => [row[0], row[2]]);

  return [newHeader, ...newRows];
}

export function normalizeToBCNF(table) {
  if (!table || table.length < 2) return table;
  const [header, ...rows] = table;

  const bcnfHeader = [header[0]];
  const bcnfRows = rows.map(row => [row[0]]);

  return [bcnfHeader, ...bcnfRows];
}