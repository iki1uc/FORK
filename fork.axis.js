// fork.axis.js — 6E / 12E / TMP LOGIKAL (ENTKOPLEXT)

// ---------------------------
// 1. 6E Achsen (Basis)
// ---------------------------
export const AXIS6E = {
  X_NEG: { axis: "X", dir: -1, id: 1 },
  X_POS: { axis: "X", dir: +1, id: 2 },

  Y_NEG: { axis: "Y", dir: -1, id: 3 },
  Y_POS: { axis: "Y", dir: +1, id: 4 },

  Z_NEG: { axis: "Z", dir: -1, id: 5 },
  Z_POS: { axis: "Z", dir: +1, id: 6 }
};

// ---------------------------
// 2. 12E Achsen (Layer)
// ---------------------------
export const AXIS12E = [
  { id:1,  axis:"X", layer:1, deg:0,   pct:0 },
  { id:2,  axis:"X", layer:2, deg:30,  pct:8.33 },
  { id:3,  axis:"X", layer:3, deg:60,  pct:16.66 },
  { id:4,  axis:"X", layer:4, deg:90,  pct:25 },

  { id:5,  axis:"Y", layer:1, deg:120, pct:33.33 },
  { id:6,  axis:"Y", layer:2, deg:150, pct:41.66 },
  { id:7,  axis:"Y", layer:3, deg:180, pct:50 },
  { id:8,  axis:"Y", layer:4, deg:210, pct:58.33 },

  { id:9,  axis:"Z", layer:1, deg:240, pct:66.66 },
  { id:10, axis:"Z", layer:2, deg:270, pct:75 },
  { id:11, axis:"Z", layer:3, deg:300, pct:83.33 },
  { id:12, axis:"Z", layer:4, deg:330, pct:91.66 },

  { id:13, axis:"Ω", layer:5, deg:360, pct:100 }
];

// ---------------------------
// 3. TMP Buchstabenführung
// ---------------------------
export const TMP_KEYS = {
  W: { axis:"Z", dir:+1, six: AXIS6E.Z_POS, twelve: [9,10,11,12] },
  S: { axis:"Z", dir:-1, six: AXIS6E.Z_NEG, twelve: [9,10,11,12] },

  A: { axis:"X", dir:-1, six: AXIS6E.X_NEG, twelve: [1,2,3,4] },
  D: { axis:"X", dir:+1, six: AXIS6E.X_POS, twelve: [1,2,3,4] },

  Q: { axis:"Y", dir:-1, six: AXIS6E.Y_NEG, twelve: [5,6,7,8] },
  E: { axis:"Y", dir:+1, six: AXIS6E.Y_POS, twelve: [5,6,7,8] },

  Y: { axis:"XZ", dir:+1, six: [AXIS6E.X_POS, AXIS6E.Z_POS], twelve: [1,2,3,4, 9,10,11,12] },
  C: { axis:"XZ", dir:-1, six: [AXIS6E.X_NEG, AXIS6E.Z_NEG], twelve: [1,2,3,4, 9,10,11,12] }
};

// ---------------------------
// 4. Getter
// ---------------------------
export function get6E(key) {
  return TMP_KEYS[key]?.six || null;
}

export function get12E(key) {
  return TMP_KEYS[key]?.twelve || null;
}

export function getAxisKey(key) {
  return TMP_KEYS[key] || null;
}

