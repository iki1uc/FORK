// csv.axis.map.js — CSV → 12E ACHSEN MAPPING (ENTKOPLEXT)

// 1. Import Achsen & Buchstabenstationen
import { AXIS12E, AXIS_KEYS } from "./work.axis.js";

// 2. CSV-Zeile in Objekt umwandeln
export function parseCSVLine(line) {
  const parts = line.split(",");
  return parts.map(v => v.trim());
}

// 3. CSV → Achsenpunkt (ID, DEG, PCT)
export function mapCSVToAxis(csvRow) {
  const [idStr] = csvRow;
  const id = parseInt(idStr, 10);
  return AXIS12E.find(p => p.id === id) || null;
}

// 4. CSV → Buchstabenstation (W, A, S, D, Q, E, Y, C)
export function mapCSVToKey(csvRow) {
  const [, keyStr] = csvRow;
  const key = keyStr.trim().toUpperCase();
  return AXIS_KEYS[key] || null;
}

// 5. Komplettes Mapping einer CSV-Zeile
export function mapCSVRow(line) {
  const row = parseCSVLine(line);

  return {
    axisPoint: mapCSVToAxis(row),
    keyStation: mapCSVToKey(row)
  };
}

// 6. CSV-Datei (mehrere Zeilen) verarbeiten
export function mapCSVFile(csvText) {
  const lines = csvText.split("\n").filter(l => l.trim().length > 0);
  return lines.map(mapCSVRow);
}

