// nc.system.js — NEUTRAL SYSTEMLAYER FÜR FORK

// 1. Imports
import { Vec, Mat3 } from "./nc.matrix.js";
import { TMP } from "./nc.tmp.js";
import { forkResolve } from "./fork.core.js";
import { ncPacket } from "./fork.nc.js";

// ---------------------------------------------------------
// 2. Systemkern (neutral)
// ---------------------------------------------------------

export const NC_SYSTEM = {

    // Mathematik
    vec: Vec,
    mat: Mat3,

    // Zeit
    tmp: TMP,

    // Auflösung eines Keys (W A S D Q E Y C)
    resolve(key) {
        return forkResolve(key);
    },

    // NC-Paket (Impuls + Vektor + Achsen)
    packet(key) {
        return ncPacket(key);
    },

    // Neutraler Bewegungsstep
    step(body, key, dt = 1) {
        const p = ncPacket(key);
        const move = Vec.mul(p.vector, p.impulse.t * dt);
        body.pos = Vec.add(body.pos, move);
        return body;
    },

    // Systemstatus
    info() {
        return {
            math: "Vec/Mat3 aktiv",
            tmp: "TMP aktiv",
            axis: "6E/12E aktiv",
            nc: "NC-Pakete aktiv",
            stable: true
        };
    }
};

