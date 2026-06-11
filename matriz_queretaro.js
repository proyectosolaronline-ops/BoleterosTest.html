// ============================================================
// MATRIZ DE TARIFAS — ESTADO DE QUERÉTARO
// Solo cabeceras municipales (18 municipios)
// ============================================================

const localidadesObj = {
    1: "Santiago de Querétaro (Centro)",
    2: "El Pueblito (Corregidora)",
    3: "La Cañada (El Marqués)",
    4: "San Juan del Río",
    5: "Huimilpan",
    6: "Pedro Escobedo",
    7: "Tequisquiapan",
    8: "Ezequiel Montes",
    9: "Central Cadereyta",
    10: "Colón",
    11: "Amealco de Bonfil",
    12: "Tolimán",
    13: "San Joaquín",
    14: "Jalpan de Serra",
    15: "Landa de Matamoros",
    16: "Arroyo Seco",
    17: "Pinal de Amoles",
    18: "Peñamiller"
};

const coordenadasLocalidades = {
    1:  { lat: 20.5881, lng: -100.3899 },
    2:  { lat: 20.5403, lng: -100.4415 },
    3:  { lat: 20.5833, lng: -100.2417 },
    4:  { lat: 20.3879, lng: -99.9962 },
    5:  { lat: 20.3667, lng: -100.2833 },
    6:  { lat: 20.5000, lng: -100.1333 },
    7:  { lat: 20.5217, lng: -99.8953 },
    8:  { lat: 20.6667, lng: -99.9000 },
    9:  { lat: 20.7003, lng: -99.8129 },
    10: { lat: 20.7833, lng: -100.0500 },
    11: { lat: 20.1833, lng: -100.1500 },
    12: { lat: 20.9167, lng: -99.9333 },
    13: { lat: 20.9139, lng: -99.5653 },
    14: { lat: 21.2167, lng: -99.4736 },
    15: { lat: 21.1833, lng: -99.3167 },
    16: { lat: 21.5333, lng: -99.6833 },
    17: { lat: 21.1333, lng: -99.6250 },
    18: { lat: 21.0500, lng: -99.7833 }
};

const MATRIZ_QUERETARO = {
    "1-2":{km:12,tarifa:0},
    "1-3":{km:18,tarifa:0},
    "1-4":{km:55,tarifa:0},
    "1-5":{km:35,tarifa:0},
    "1-6":{km:32,tarifa:0},
    "1-7":{km:70,tarifa:0},
    "1-8":{km:75,tarifa:0},
    "1-9":{km:80,tarifa:0},
    "1-10":{km:95,tarifa:0},
    "1-11":{km:80,tarifa:0},
    "1-12":{km:110,tarifa:0},
    "1-13":{km:165,tarifa:0},
    "1-14":{km:175,tarifa:0},
    "1-15":{km:185,tarifa:0},
    "1-16":{km:210,tarifa:0},
    "1-17":{km:155,tarifa:0},
    "1-18":{km:145,tarifa:0}
};
