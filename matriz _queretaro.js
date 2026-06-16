// ============================================================
// MATRIZ DE TARIFAS — MÉXICO
// ============================================================

// ===== TARIFAS POR ESTADO =====
const bKm_EST1 = 1.5;

const localidadesObj = {
    1: "Santiago de Querétaro (Centro)",
    2: "El Pueblito (Corregidora)",
    3: "La Cañada (El Marqués)",
    4: "San Juan del Río",
    5: "Huimilpan",
    6: "Pedro Escobedo",
    7: "Tequisquiapan",
    8: "Ezequiel Montes",
    801: "Crucero bernal",
    9: "Central Cadereyta",
    10: "Colón",
    1001: "Crucero ajuchitlan",
    11: "Amealco de Bonfil",
    12: "Tolimán",
    13: "San Joaquín terminal",
    14: "Jalpan de Serra",
    15: "Landa de Matamoros",
    16: "Arroyo Seco",
    17: "Pinal de Amoles",
    18: "Peñamiller",
    101: "Parque Bernardo Quintana",
    301: "Gsleras",
};

const coordenadasLocalidades = {
    1: { lat: 20.5881, lng: -100.3899 },
    2: { lat: 20.5403, lng: -100.4415 },
    3: { lat: 20.5833, lng: -100.2417 },
    4: { lat: 20.3879, lng: -99.9962 },
    5: { lat: 20.3667, lng: -100.2833 },
    6: { lat: 20.5, lng: -100.1333 },
    7: { lat: 20.5217, lng: -99.8953 },
    8: { lat: 20.6667, lng: -99.9 },
    801: { lat: 20.7067544, lng: -99.9845023 },
    9: { lat: 20.7003, lng: -99.8129 },
    10: { lat: 20.7833, lng: -100.05 },
    1001: { lat: 20.6905551, lng: -100.0144176 },
    11: { lat: 20.1833, lng: -100.15 },
    12: { lat: 20.9167, lng: -99.9333 },
    13: { lat: 20.9139, lng: -99.5653 },
    14: { lat: 21.2167, lng: -99.4736 },
    15: { lat: 21.1833, lng: -99.3167 },
    16: { lat: 21.5333, lng: -99.6833 },
    17: { lat: 21.1333, lng: -99.625 },
    18: { lat: 21.05, lng: -99.7833 },
    101: { lat: 20.5711, lng: -100.2814 },
    301: { lat: 20.614217, lng: -100.1555927 },
};

const MATRIZ_QUERETARO = {
    "1-2":{km:12, tarifa: 12 * bKm_EST1},
    "1-3":{km:18, tarifa: 18 * bKm_EST1},
    "1-4":{km:55, tarifa: 55 * bKm_EST1},
    "1-5":{km:35, tarifa: 35 * bKm_EST1},
    "1-6":{km:32, tarifa: 32 * bKm_EST1},
    "1-7":{km:70, tarifa: 70 * bKm_EST1},
    "1-8":{km:75, tarifa: 75 * bKm_EST1},
    "1-9":{km:80, tarifa: 80 * bKm_EST1},
    "1-10":{km:95, tarifa: 95 * bKm_EST1},
    "1-11":{km:80, tarifa: 80 * bKm_EST1},
    "1-12":{km:110, tarifa: 110 * bKm_EST1},
    "1-13":{km:165, tarifa: 165 * bKm_EST1},
    "1-14":{km:175, tarifa: 175 * bKm_EST1},
    "1-15":{km:185, tarifa: 185 * bKm_EST1},
    "1-16":{km:210, tarifa: 210 * bKm_EST1},
    "1-17":{km:155, tarifa: 155 * bKm_EST1},
    "1-18":{km:145, tarifa: 145 * bKm_EST1},
    "3-301":{km:0, tarifa: 0 * bKm_EST1},

    // --- Ezequiel Montes ---
    "8-801":{km:0, tarifa: 0 * bKm_EST1},  // Crucero bernal

    // --- Colón ---
    "10-1001":{km:0, tarifa: 0 * bKm_EST1},  // Crucero ajuchitlan
};
