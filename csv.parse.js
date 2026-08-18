// csv.parse.js — CSV PARSER (ENTKOPLEXT + DETERMINISTISCH)

// 1. Eine einzelne CSV-Zeile in Array umwandeln
export function parseCSVLine(line) {
  if (!line || typeof line !== "string") return [];
  return line.split(",").map(v => v.trim());
}

// 2. Mehrere CSV-Zeilen in Array von Arrays umwandeln
export function parseCSV(text) {
  if (!text || typeof text !== "string") return [];

  const lines = text
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0);

  return lines.map(parseCSVLine);
}

// 3. CSV → Objekt (Header → Werte)
export function parseCSVObject(text) {
  const rows = parseCSV(text);
  if (rows.length < 2) return [];

  const header = rows[0];

  return rows.slice(1).map(row => {
    const obj = {};
    for (let i = 0; i < header.length; i++) {
      obj[header[i]] = row[i] ?? "";
    }
    return obj;
  });
}

// 4. CSV → Key-Value Map (erste Spalte = Schlüssel)
export function parseCSVMap(text) {
  const rows = parseCSV(text);
  const map = {};

  rows.forEach(row => {
    if (row.length >= 2) {
      const key = row[0];
      const value = row.slice(1);
      map[key] = value;
    }
  });

  return map;
}

// 5. CSV → JSON (neutral)
export function parseCSVtoJSON(text) {
  return JSON.stringify(parseCSVObject(text), null, 2);
}

