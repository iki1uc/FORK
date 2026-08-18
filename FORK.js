// FORK.js — dunkler Beschleuniger (2-4-8)

import { SLI2 } from "./zug.js";
import { SCHACH } from "./SCHACH.js";

export function FORK(v, tmp) {

    const axis = [2, 4, 8];
    if (!axis.includes(v)) return { active: false, reason: "Nicht FORK-Achse" };

    const roles = SCHACH.tmpRole(tmp);
    const sli = SLI2(v, tmp, tmp, 243);

    return {
        type: "FORK",
        alpha: roles.alpha,
        beta: roles.beta,
        gamma: roles.gamma,
        sli
    };
}
