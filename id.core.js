// id.core.js — MASTER-PI Kernmodul
// TRANS / WARB / KANAL — 6E → 6D Stabilität

export function ID_CORE(IX, XI, FRAME) {

    // ORT — Position
    const ORT = { X: IX, Y: XI };

    // HOME — Ursprung
    const HOME = { X: 0, Y: 0 };

    // WEG — Richtung
    const WEG = {
        DX: IX - HOME.X,
        DY: XI - HOME.Y
    };

    // STRECKE — Distanz
    const STRECKE = Math.sqrt(WEG.DX**2 + WEG.DY**2);

    // SLI — Beschleunigung (4 = Pipeline 4)
    const SLI = STRECKE * 4;

    // TRANS / WARB / KANAL — Essenz
    const TRANS = IX * 2;       // Bewegung
    const WARB  = XI * 3;       // Gegenhalt
    const KANAL = (IX + XI) / 2; // Verbindung

    // RAW — Kernwert (6E → 6D Übergang)
    const RAW = TRANS + WARB - KANAL;

    // 6E — Achsenstabilität
    const SIXE = {
        X: IX >= 0 ? +1 : -1,
        Y: XI >= 0 ? +1 : -1
    };

    // 6D — Stabilisierung (RAW als Dimensionsträger)
    const SIXD = {
        D1: RAW,
        D2: RAW * 2,
        D3: RAW / 2,
        D4: STRECKE,
        D5: SLI,
        D6: TRANS - WARB
    };

    return {
        ORT,
        HOME,
        WEG,
        STRECKE,
        SLI,
        TRANS,
        WARB,
        KANAL,
        RAW,
        SIXE,
        SIXD,
        FRAME
    };
}
