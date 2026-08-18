// csv.read.js — CSV READER (ENTKOPLEXT + DETERMINISTISCH)

import { parseCSV, parseCSVObject, parseCSVMap } from "./csv.parse.js";

// 1. CSV aus Text lesen (neutral)
export function readCSVText(text) {
  if (!text || typeof text !== "string") return [];
  return parseCSV(text);
}

// 2. CSV aus File-Objekt lesen (Browser FileReader)
export function readCSVFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file provided");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result;
      resolve(parseCSV(text));
    };

    reader.onerror = () => reject(reader.error);

    reader.readAsText(file);
  });
}

// 3. CSV → Objektliste (Header → Werte)
export function readCSVObjects(text) {
  return parseCSVObject(text);
}

// 4. CSV → Key-Value Map (erste Spalte = Schlüssel)
export function readCSVMap(text) {
  return parseCSVMap(text);
}

// 5. CSV → JSON (neutral)
export function readCSVJSON(text) {
  return JSON.stringify(parseCSVObject(text), null, 2);
}

