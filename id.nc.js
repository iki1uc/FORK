// id.nc.js — NEUTRAL NC SCHICHT (6E → 12E → TMP)
// KEINE 6D-MIND-SCHALTUNG
// KEIN BEAM-SWITCH
// NUR MATHEMATIK

export function ID_NC(IX, XI, MODE) {

    // MODE — neutraler Modus (kein Mind-Switch)
    const MODE_STATE = MODE === "leave" ? "OUT" : "IN";

    // NEUTRALER BEAM — mathematisch, nicht mental
    const BEAM = {
        X: IX * (MODE_STATE === "OUT" ? 1.5 : 1.0),
        Y: XI * (MODE_STATE === "OUT" ? 1.0 : 1.5)
    };

    // KANAL — Verbindung (neutral)
    const KANAL = (BEAM.X + BEAM.Y) / 2;

    // SLI — Beschleunigung (neutral)
    const SLI = Math.sqrt(BEAM.X**2 + BEAM.Y**2) * 4;

    return {
        MODE,
        STATE: MODE_STATE,
        BEAM,
        KANAL,
        SLI
    };
}
