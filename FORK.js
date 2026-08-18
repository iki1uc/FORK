// FORK.js — 2-4-8 Realraum-Lauf

import { CUBE_MIND } from "./CUBE_MIND.js";
import { SLI2 } from "./zug.js";

export function FORK(x, y, tmp) {

    const { real, raum } = CUBE_MIND(x, y);

    if (!real) return { active: false, reason: "Nicht realisiert" };

    const axis = [2, 4, 8];
    if (!axis.includes(x)) return { active: false, reason: "Nicht FORK-Achse" };

    const sli = SLI2(real.y, tmp, tmp, raum);

    return { type: "FORK", real, sli };
}
