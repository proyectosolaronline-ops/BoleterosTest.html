// ============================================================
// MATRIZ DE TARIFAS — MÉXICO
// ============================================================

// ===== TARIFAS POR ESTADO =====
const bKm_EST1 = 1.5;

const localidadesObj = {
    1: "Santiago de QuerÃ©taro (Centro)",
    2: "El Pueblito (Corregidora)",
    3: "La CaÃ±ada (El MarquÃ©s)",
    4: "San Juan del RÃ­o",
    5: "Huimilpan",
    6: "Pedro Escobedo",
    7: "Tequisquiapan",
    8: "Ezequiel Montes",
    802: "San Martin",
    9: "Central Cadereyta",
    10: "ColÃ³n",
    1004: "Urecho crucero",
    1005: "Salitrera colon",
    1006: "Poleo colon",
    11: "Amealco de Bonfil",
    12: "TolimÃ¡n",
    1201: "Gudiño colon",
    1202: "La puerta, nogales",
    1203: "Panales",
    1204: "Lindero san Miguel",
    1205: "Diez meros peña blanca",
    1206: "San Pablo Tolimán",
    1207: "Crucero a sierra gorda",
    1208: "San Antonio de la cal",
    13: "San JoaquÃ­n terminal",
    14: "Jalpan de Serra",
    15: "Landa de Matamoros",
    16: "Arroyo Seco",
    17: "Pinal de Amoles",
    18: "PeÃ±amiller",
    101: "Parque Bernardo Quintana",
    301: "Gsleras",
    302: "El colorado",
    303: "El paraÃ­so",
    304: "la esperanza ",
    801: "Crucero bernal",
    1001: "Crucero ajuchitlan",
    1002: "tierra dura ",
    1003: "el gallo",
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
    802: { lat: 20.7135139, lng: -99.9723958 },
    9: { lat: 20.7003, lng: -99.8129 },
    10: { lat: 20.7833, lng: -100.05 },
    1004: { lat: 20.6662841, lng: -100.0736207 },
    1005: { lat: 20.8601418, lng: -100.0569407 },
    1006: { lat: 20.8667519, lng: -100.0500997 },
    11: { lat: 20.1833, lng: -100.15 },
    12: { lat: 20.9167, lng: -99.9333 },
    1201: { lat: 20.8819624, lng: -100.0174914 },
    1202: { lat: 20.8846379, lng: -100.011604 },
    1203: { lat: 20.8771564, lng: -99.9969776 },
    1204: { lat: 20.868729, lng: -99.9668077 },
    1205: { lat: 20.8787446, lng: -99.94644 },
    1206: { lat: 20.8621904, lng: -99.8960477 },
    1207: { lat: 20.855022, lng: -99.8923121 },
    1208: { lat: 20.7633453, lng: -99.9324144 },
    13: { lat: 20.9139, lng: -99.5653 },
    14: { lat: 21.2167, lng: -99.4736 },
    15: { lat: 21.1833, lng: -99.3167 },
    16: { lat: 21.5333, lng: -99.6833 },
    17: { lat: 21.1333, lng: -99.625 },
    18: { lat: 21.05, lng: -99.7833 },
    101: { lat: 20.5711, lng: -100.2814 },
    301: { lat: 20.614217, lng: -100.1555927 },
    302: { lat: 20.5649507, lng: -100.245162 },
    303: { lat: 20.5628962, lng: -100.220773 },
    304: { lat: 20.638607726216776, lng: -100.10910630226137 },
    801: { lat: 20.7067544, lng: -99.9845023 },
    1001: { lat: 20.6905551, lng: -100.0144176 },
    1002: { lat: 20.666169309866103, lng: -100.08732676506042 },
    1003: { lat: 20.672419437250404, lng: -100.04715800285341 },
};

const MATRIZ_QUERETARO = {
    "1-10":{km:95, tarifa: 95 * bKm_EST1},
    "1-11":{km:80, tarifa: 80 * bKm_EST1},
    "1-12":{km:110, tarifa: 110 * bKm_EST1},
    "1-13":{km:165, tarifa: 165 * bKm_EST1},
    "1-14":{km:175, tarifa: 175 * bKm_EST1},
    "1-15":{km:185, tarifa: 185 * bKm_EST1},
    "1-16":{km:210, tarifa: 210 * bKm_EST1},
    "1-17":{km:155, tarifa: 155 * bKm_EST1},
    "1-18":{km:145, tarifa: 145 * bKm_EST1},
    "1-2":{km:12, tarifa: 12 * bKm_EST1},
    "1-3":{km:18, tarifa: 18 * bKm_EST1},
    "1-4":{km:55, tarifa: 55 * bKm_EST1},
    "1-5":{km:35, tarifa: 35 * bKm_EST1},
    "1-6":{km:32, tarifa: 32 * bKm_EST1},
    "1-7":{km:70, tarifa: 70 * bKm_EST1},
    "1-8":{km:75, tarifa: 75 * bKm_EST1},
    "1-9":{km:80, tarifa: 80 * bKm_EST1},
    "10-1001":{km:0, tarifa: 0 * bKm_EST1},
    "10-1002":{km:0, tarifa: 0 * bKm_EST1},
    "10-1003":{km:0, tarifa: 0 * bKm_EST1},
    "3-301":{km:0, tarifa: 0 * bKm_EST1},
    "3-302":{km:0, tarifa: 0 * bKm_EST1},
    "3-303":{km:0, tarifa: 0 * bKm_EST1},
    "3-304":{km:0, tarifa: 0 * bKm_EST1},
    "8-801":{km:0, tarifa: 0 * bKm_EST1},

    // --- Ezequiel Montes ---
    "8-802":{km:0, tarifa: 0 * bKm_EST1},  // San Martin

    // --- ColÃ³n ---
    "10-1004":{km:0, tarifa: 0 * bKm_EST1},  // Urecho crucero
    "10-1005":{km:0, tarifa: 0 * bKm_EST1},  // Salitrera colon
    "10-1006":{km:0, tarifa: 0 * bKm_EST1},  // Poleo colon

    // --- TolimÃ¡n ---
    "12-1201":{km:0, tarifa: 0 * bKm_EST1},  // Gudiño colon
    "12-1202":{km:0, tarifa: 0 * bKm_EST1},  // La puerta, nogales
    "12-1203":{km:0, tarifa: 0 * bKm_EST1},  // Panales
    "12-1204":{km:0, tarifa: 0 * bKm_EST1},  // Lindero san Miguel
    "12-1205":{km:0, tarifa: 0 * bKm_EST1},  // Diez meros peña blanca
    "12-1206":{km:0, tarifa: 0 * bKm_EST1},  // San Pablo Tolimán
    "12-1207":{km:0, tarifa: 0 * bKm_EST1},  // Crucero a sierra gorda
    "12-1208":{km:0, tarifa: 0 * bKm_EST1},  // San Antonio de la cal
};
