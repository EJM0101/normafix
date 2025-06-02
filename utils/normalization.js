export function normalizeTo1NF(table) {
  if (!table || table.length < 2) return table;
  const header = table[0];
  const rows = table.slice(1);
  let result = [];

  rows.forEach(row => {
    let explodedRows = [[]];
    row.forEach((cell, colIndex) => {
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