// ============================================================
// MATRIZ DE TARIFAS — ESTADO DE QUERÉTARO
// Boletero Inteligente · Sierra Gorda
// 75 localidades · Distancias verificadas SCT/INEGI 2024-2025
// Coordenadas GPS agregadas para detección automática de origen
// ============================================================

const localidadesObj = {
    1: "Central Camionera Querétaro",
    2: "El Pueblito / Corregidora",
    3: "El Marqués (cabecera)",
    4: "Santa Rosa Jáuregui",
    5: "Amazcala / La Griega",
    6: "La Cañada (crucero)",
    7: "Chichimequillas / El Colorado",
    8: "Pedro Escobedo",
    9: "Huimilpan",
    10: "San Juan del Río",
    11: "Libramiento San Juan del Río",
    12: "Crucero Tequisquiapan",
    13: "Tequisquiapan",
    14: "El Lobo (Tequisquiapan)",
    15: "Ezequiel Montes",
    16: "Crucero de Bernal",
    17: "Bernal (Pueblo Mágico)",
    18: "Ajuchitlán (crucero Colón)",
    19: "Colón",
    20: "Presa Colón",
    21: "Soriano",
    22: "Tolimán",
    23: "San Miguel Tolimán",
    24: "San Pablo Tolimán",
    25: "Panales",
    26: "Nogales (Tolimán)",
    27: "Cadereyta de Montes",
    28: "El Palmar (Cadereyta)",
    29: "Boyé (Cadereyta)",
    30: "La Esperanza (Cadereyta)",
    31: "Los Herrera — Grutas",
    32: "Crucero de Maconí",
    33: "Maconí",
    34: "El Doctor (Cadereyta)",
    35: "Vizarrón de Montes",
    36: "Higuerillas",
    37: "El Colorado (ramal QRO-004)",
    38: "Crucero Peñamiller",
    39: "Peña Blanca",
    40: "Peñamiller",
    41: "La Culata (crucero San Joaquín)",
    42: "Crucero San Joaquín (MEX-120)",
    43: "San Joaquín",
    44: "Agua Zarca (terminal San Joaquín)",
    45: "Ahuacatlán de Guadalupe",
    46: "Campamento",
    47: "El Llano",
    48: "Maguey Verde",
    49: "Pinal de Amoles",
    50: "Cuatro Palos — Mirador",
    51: "El Chuveje",
    52: "Escanelilla (Bucareli)",
    53: "El Paraíso",
    54: "Jalpan de Serra",
    55: "Concá (misión)",
    56: "Bucareli (Jalpan)",
    57: "Tancama (zona arqueológica)",
    58: "La Lagunita (crucero Tilaco/Landa)",
    59: "Tilaco (misión)",
    60: "El Madroño (de paso)",
    61: "Landa de Matamoros",
    62: "Agua Zarca Landa",
    63: "Valle de Guadalupe (Landa)",
    64: "Acatitlán de Zaragoza",
    65: "Encino Solo",
    66: "Tancoyol (misión)",
    67: "Soledad de Guadalupe (ramal)",
    68: "El Lobo (Landa, MEX-120)",
    69: "Límite Qro/SLP (MEX-120)",
    70: "Crucero Concá / Ayutla (MEX-069)",
    71: "Arroyo Seco",
    72: "Límite Qro/SLP (MEX-069)",
    73: "Amealco de Bonfil",
    74: "La Estancia (crucero vitivinícola)",
    75: "Pilón (ramal)"
};

// Coordenadas GPS por localidad (lat, lng)
const coordenadasLocalidades = {
    1:  { lat: 20.5765, lng: -100.3586 }, // Central Camionera Querétaro
    2:  { lat: 20.5167, lng: -100.4383 }, // El Pueblito / Corregidora
    3:  { lat: 20.6167, lng: -100.2833 }, // El Marqués (cabecera)
    4:  { lat: 20.7000, lng: -100.4167 }, // Santa Rosa Jáuregui
    5:  { lat: 20.6667, lng: -100.2333 }, // Amazcala / La Griega
    6:  { lat: 20.5833, lng: -100.1667 }, // La Cañada (crucero)
    7:  { lat: 20.5500, lng: -100.1333 }, // Chichimequillas / El Colorado
    8:  { lat: 20.5167, lng: -100.1333 }, // Pedro Escobedo
    9:  { lat: 20.3833, lng: -100.3000 }, // Huimilpan
    10: { lat: 20.3833, lng: -100.0000 }, // San Juan del Río
    11: { lat: 20.3667, lng: -100.0333 }, // Libramiento San Juan del Río
    12: { lat: 20.4833, lng: -99.9000 },  // Crucero Tequisquiapan
    13: { lat: 20.5167, lng: -99.8833 },  // Tequisquiapan
    14: { lat: 20.5500, lng: -99.8333 },  // El Lobo (Tequisquiapan)
    15: { lat: 20.6500, lng: -99.9000 },  // Ezequiel Montes
    16: { lat: 20.7167, lng: -99.8667 },  // Crucero de Bernal
    17: { lat: 20.7500, lng: -99.9333 },  // Bernal (Pueblo Mágico)
    18: { lat: 20.6667, lng: -99.7333 },  // Ajuchitlán (crucero Colón)
    19: { lat: 20.7167, lng: -99.7000 },  // Colón
    20: { lat: 20.7500, lng: -99.6500 },  // Presa Colón
    21: { lat: 20.7833, lng: -99.6000 },  // Soriano
    22: { lat: 20.9000, lng: -99.6667 },  // Tolimán
    23: { lat: 20.9333, lng: -99.6333 },  // San Miguel Tolimán
    24: { lat: 20.9667, lng: -99.6000 },  // San Pablo Tolimán
    25: { lat: 20.9833, lng: -99.5833 },  // Panales
    26: { lat: 21.0000, lng: -99.5667 },  // Nogales (Tolimán)
    27: { lat: 20.7004, lng: -99.8129 },  // Cadereyta de Montes
    28: { lat: 20.6667, lng: -99.5833 },  // El Palmar (Cadereyta)
    29: { lat: 20.6500, lng: -99.5500 },  // Boyé (Cadereyta)
    30: { lat: 20.6333, lng: -99.5333 },  // La Esperanza (Cadereyta)
    31: { lat: 20.6167, lng: -99.5167 },  // Los Herrera — Grutas
    32: { lat: 20.6000, lng: -99.5000 },  // Crucero de Maconí
    33: { lat: 20.5667, lng: -99.4667 },  // Maconí
    34: { lat: 20.5500, lng: -99.4500 },  // El Doctor (Cadereyta)
    35: { lat: 20.7833, lng: -99.5167 },  // Vizarrón de Montes
    36: { lat: 20.8500, lng: -99.4667 },  // Higuerillas
    37: { lat: 20.8667, lng: -99.4333 },  // El Colorado (ramal QRO-004)
    38: { lat: 20.9000, lng: -99.4000 },  // Crucero Peñamiller
    39: { lat: 20.9333, lng: -99.4333 },  // Peña Blanca
    40: { lat: 20.9833, lng: -99.4333 },  // Peñamiller
    41: { lat: 21.0167, lng: -99.4667 },  // La Culata (crucero San Joaquín)
    42: { lat: 20.8167, lng: -99.4833 },  // Crucero San Joaquín (MEX-120)
    43: { lat: 21.0500, lng: -99.5500 },  // San Joaquín
    44: { lat: 21.0667, lng: -99.5667 },  // Agua Zarca (terminal San Joaquín)
    45: { lat: 21.0167, lng: -99.3667 },  // Ahuacatlán de Guadalupe
    46: { lat: 21.0333, lng: -99.3500 },  // Campamento
    47: { lat: 21.0500, lng: -99.3333 },  // El Llano
    48: { lat: 21.0667, lng: -99.3167 },  // Maguey Verde
    49: { lat: 21.1000, lng: -99.3000 },  // Pinal de Amoles
    50: { lat: 21.1167, lng: -99.2833 },  // Cuatro Palos — Mirador
    51: { lat: 21.1500, lng: -99.2667 },  // El Chuveje
    52: { lat: 21.1833, lng: -99.2333 },  // Escanelilla (Bucareli)
    53: { lat: 21.2000, lng: -99.2167 },  // El Paraíso
    54: { lat: 21.2167, lng: -99.4667 },  // Jalpan de Serra
    55: { lat: 21.1667, lng: -99.6167 },  // Concá (misión)
    56: { lat: 21.2000, lng: -99.4333 },  // Bucareli (Jalpan)
    57: { lat: 21.2500, lng: -99.4000 },  // Tancama (zona arqueológica)
    58: { lat: 21.2833, lng: -99.3833 },  // La Lagunita (crucero Tilaco/Landa)
    59: { lat: 21.3167, lng: -99.3500 },  // Tilaco (misión)
    60: { lat: 21.2667, lng: -99.4333 },  // El Madroño (de paso)
    61: { lat: 21.1833, lng: -99.3167 },  // Landa de Matamoros
    62: { lat: 21.2000, lng: -99.3000 },  // Agua Zarca Landa
    63: { lat: 21.2167, lng: -99.2833 },  // Valle de Guadalupe (Landa)
    64: { lat: 21.2333, lng: -99.2667 },  // Acatitlán de Zaragoza
    65: { lat: 21.2500, lng: -99.2500 },  // Encino Solo
    66: { lat: 21.2833, lng: -99.2167 },  // Tancoyol (misión)
    67: { lat: 21.3000, lng: -99.2000 },  // Soledad de Guadalupe (ramal)
    68: { lat: 21.2167, lng: -99.3833 },  // El Lobo (Landa, MEX-120)
    69: { lat: 21.2333, lng: -99.3667 },  // Límite Qro/SLP (MEX-120)
    70: { lat: 21.1833, lng: -99.5833 },  // Crucero Concá / Ayutla (MEX-069)
    71: { lat: 21.3333, lng: -99.6500 },  // Arroyo Seco
    72: { lat: 21.3500, lng: -99.6667 },  // Límite Qro/SLP (MEX-069)
    73: { lat: 20.1833, lng: -100.1500 }, // Amealco de Bonfil
    74: { lat: 20.7333, lng: -99.8000 },  // La Estancia (crucero vitivinícola)
    75: { lat: 20.7167, lng: -99.7667 }   // Pilón (ramal)
};

const MATRIZ_QUERETARO = {
    "1-2":   { km: 12, tarifa: 0 },
    "1-3":   { km: 14, tarifa: 0 },
    "1-4":   { km: 18, tarifa: 0 },
    "1-5":   { km: 22, tarifa: 0 },
    "1-6":   { km: 25, tarifa: 0 },
    "1-7":   { km: 28, tarifa: 0 },
    "1-8":   { km: 31, tarifa: 0 },
    "1-9":   { km: 38, tarifa: 0 },
    "1-10":  { km: 55, tarifa: 0 },
    "1-18":  { km: 57, tarifa: 0 },
    "1-19":  { km: 68, tarifa: 0 },
    "1-22":  { km: 99, tarifa: 0 },
    "1-27":  { km: 103, tarifa: 0 },
    "1-35":  { km: 129, tarifa: 0 },
    "1-42":  { km: 135, tarifa: 0 },
    "1-36":  { km: 144, tarifa: 0 },
    "1-38":  { km: 158, tarifa: 0 },
    "1-43":  { km: 167, tarifa: 0 },
    "1-49":  { km: 195, tarifa: 0 },
    "1-54":  { km: 234, tarifa: 0 },
    "1-61":  { km: 257, tarifa: 0 },
    "1-68":  { km: 291, tarifa: 0 },
    "1-71":  { km: 283, tarifa: 0 },
    "1-73":  { km: 78, tarifa: 0 },
    "2-3":   { km: 5, tarifa: 0 },
    "2-6":   { km: 14, tarifa: 0 },
    "2-8":   { km: 20, tarifa: 0 },
    "2-10":  { km: 44, tarifa: 0 },
    "2-19":  { km: 57, tarifa: 0 },
    "2-27":  { km: 92, tarifa: 0 },
    "3-6":   { km: 9, tarifa: 0 },
    "3-8":   { km: 18, tarifa: 0 },
    "3-10":  { km: 42, tarifa: 0 },
    "6-7":   { km: 4, tarifa: 0 },
    "6-8":   { km: 8, tarifa: 0 },
    "6-10":  { km: 31, tarifa: 0 },
    "7-8":   { km: 5, tarifa: 0 },
    "8-9":   { km: 20, tarifa: 0 },
    "8-10":  { km: 24, tarifa: 0 },
    "9-73":  { km: 42, tarifa: 0 },
    "10-11": { km: 5, tarifa: 0 },
    "10-12": { km: 20, tarifa: 0 },
    "10-13": { km: 29, tarifa: 0 },
    "10-15": { km: 37, tarifa: 0 },
    "10-16": { km: 47, tarifa: 0 },
    "10-17": { km: 52, tarifa: 0 },
    "10-18": { km: 44, tarifa: 0 },
    "10-19": { km: 52, tarifa: 0 },
    "10-22": { km: 68, tarifa: 0 },
    "10-27": { km: 48, tarifa: 0 },
    "10-35": { km: 74, tarifa: 0 },
    "10-36": { km: 89, tarifa: 0 },
    "10-38": { km: 103, tarifa: 0 },
    "10-42": { km: 80, tarifa: 0 },
    "10-49": { km: 140, tarifa: 0 },
    "10-54": { km: 179, tarifa: 0 },
    "10-61": { km: 202, tarifa: 0 },
    "10-68": { km: 236, tarifa: 0 },
    "10-73": { km: 55, tarifa: 0 },
    "12-13": { km: 9, tarifa: 0 },
    "12-15": { km: 17, tarifa: 0 },
    "13-14": { km: 12, tarifa: 0 },
    "13-15": { km: 10, tarifa: 0 },
    "13-16": { km: 21, tarifa: 0 },
    "13-17": { km: 26, tarifa: 0 },
    "13-19": { km: 28, tarifa: 0 },
    "13-27": { km: 29, tarifa: 0 },
    "15-16": { km: 11, tarifa: 0 },
    "15-17": { km: 16, tarifa: 0 },
    "15-19": { km: 20, tarifa: 0 },
    "15-27": { km: 11, tarifa: 0 },
    "15-35": { km: 37, tarifa: 0 },
    "15-49": { km: 103, tarifa: 0 },
    "15-54": { km: 143, tarifa: 0 },
    "16-17": { km: 5, tarifa: 0 },
    "16-19": { km: 15, tarifa: 0 },
    "16-27": { km: 7, tarifa: 0 },
    "17-19": { km: 18, tarifa: 0 },
    "17-27": { km: 12, tarifa: 0 },
    "18-19": { km: 12, tarifa: 0 },
    "18-27": { km: 20, tarifa: 0 },
    "19-20": { km: 8, tarifa: 0 },
    "19-21": { km: 18, tarifa: 0 },
    "19-22": { km: 31, tarifa: 0 },
    "19-23": { km: 38, tarifa: 0 },
    "19-24": { km: 44, tarifa: 0 },
    "19-27": { km: 23, tarifa: 0 },
    "19-40": { km: 70, tarifa: 0 },
    "20-21": { km: 10, tarifa: 0 },
    "20-22": { km: 22, tarifa: 0 },
    "21-22": { km: 13, tarifa: 0 },
    "22-23": { km: 8, tarifa: 0 },
    "22-40": { km: 45, tarifa: 0 },
    "23-24": { km: 6, tarifa: 0 },
    "24-25": { km: 5, tarifa: 0 },
    "25-26": { km: 6, tarifa: 0 },
    "27-28": { km: 4, tarifa: 0 },
    "27-29": { km: 9, tarifa: 0 },
    "27-30": { km: 13, tarifa: 0 },
    "27-31": { km: 17, tarifa: 0 },
    "27-32": { km: 21, tarifa: 0 },
    "27-33": { km: 29, tarifa: 0 },
    "27-34": { km: 34, tarifa: 0 },
    "27-35": { km: 26, tarifa: 0 },
    "27-36": { km: 41, tarifa: 0 },
    "27-38": { km: 55, tarifa: 0 },
    "27-40": { km: 60, tarifa: 0 },
    "27-42": { km: 32, tarifa: 0 },
    "27-49": { km: 92, tarifa: 0 },
    "27-54": { km: 131, tarifa: 0 },
    "27-61": { km: 154, tarifa: 0 },
    "28-29": { km: 5, tarifa: 0 },
    "28-35": { km: 22, tarifa: 0 },
    "29-30": { km: 5, tarifa: 0 },
    "29-35": { km: 18, tarifa: 0 },
    "30-31": { km: 4, tarifa: 0 },
    "31-32": { km: 5, tarifa: 0 },
    "32-33": { km: 8, tarifa: 0 },
    "32-34": { km: 13, tarifa: 0 },
    "33-34": { km: 5, tarifa: 0 },
    "35-36": { km: 16, tarifa: 0 },
    "35-38": { km: 30, tarifa: 0 },
    "35-39": { km: 37, tarifa: 0 },
    "35-40": { km: 48, tarifa: 0 },
    "35-42": { km: 6, tarifa: 0 },
    "35-45": { km: 55, tarifa: 0 },
    "35-49": { km: 48, tarifa: 0 },
    "35-54": { km: 105, tarifa: 0 },
    "36-37": { km: 6, tarifa: 0 },
    "36-38": { km: 14, tarifa: 0 },
    "36-42": { km: 9, tarifa: 0 },
    "36-45": { km: 44, tarifa: 0 },
    "36-49": { km: 51, tarifa: 0 },
    "38-39": { km: 8, tarifa: 0 },
    "38-40": { km: 19, tarifa: 0 },
    "38-41": { km: 24, tarifa: 0 },
    "38-45": { km: 30, tarifa: 0 },
    "38-49": { km: 37, tarifa: 0 },
    "39-40": { km: 10, tarifa: 0 },
    "39-41": { km: 16, tarifa: 0 },
    "39-45": { km: 24, tarifa: 0 },
    "39-49": { km: 30, tarifa: 0 },
    "40-41": { km: 7, tarifa: 0 },
    "40-43": { km: 39, tarifa: 0 },
    "40-49": { km: 22, tarifa: 0 },
    "41-43": { km: 32, tarifa: 0 },
    "42-43": { km: 38, tarifa: 0 },
    "43-44": { km: 5, tarifa: 0 },
    "43-49": { km: 28, tarifa: 0 },
    "43-54": { km: 40, tarifa: 0 },
    "43-61": { km: 65, tarifa: 0 },
    "43-71": { km: 115, tarifa: 0 },
    "45-46": { km: 6, tarifa: 0 },
    "45-47": { km: 9, tarifa: 0 },
    "45-48": { km: 11, tarifa: 0 },
    "45-49": { km: 8, tarifa: 0 },
    "45-51": { km: 19, tarifa: 0 },
    "45-52": { km: 25, tarifa: 0 },
    "46-47": { km: 4, tarifa: 0 },
    "46-49": { km: 5, tarifa: 0 },
    "47-48": { km: 3, tarifa: 0 },
    "47-49": { km: 4, tarifa: 0 },
    "48-49": { km: 3, tarifa: 0 },
    "49-50": { km: 6, tarifa: 0 },
    "49-51": { km: 14, tarifa: 0 },
    "49-52": { km: 19, tarifa: 0 },
    "49-54": { km: 39, tarifa: 0 },
    "51-52": { km: 7, tarifa: 0 },
    "51-54": { km: 27, tarifa: 0 },
    "52-54": { km: 21, tarifa: 0 },
    "53-54": { km: 15, tarifa: 0 },
    "54-55": { km: 12, tarifa: 0 },
    "54-56": { km: 8, tarifa: 0 },
    "54-57": { km: 18, tarifa: 0 },
    "54-58": { km: 22, tarifa: 0 },
    "54-61": { km: 22, tarifa: 0 },
    "54-60": { km: 15, tarifa: 0 },
    "54-66": { km: 58, tarifa: 0 },
    "54-70": { km: 35, tarifa: 0 },
    "54-71": { km: 49, tarifa: 0 },
    "57-58": { km: 6, tarifa: 0 },
    "58-59": { km: 11, tarifa: 0 },
    "58-61": { km: 12, tarifa: 0 },
    "59-61": { km: 15, tarifa: 0 },
    "60-61": { km: 7, tarifa: 0 },
    "61-62": { km: 10, tarifa: 0 },
    "61-63": { km: 14, tarifa: 0 },
    "61-64": { km: 19, tarifa: 0 },
    "61-65": { km: 24, tarifa: 0 },
    "61-66": { km: 38, tarifa: 0 },
    "61-68": { km: 35, tarifa: 0 },
    "61-69": { km: 37, tarifa: 0 },
    "61-71": { km: 55, tarifa: 0 },
    "62-63": { km: 5, tarifa: 0 },
    "63-64": { km: 6, tarifa: 0 },
    "64-65": { km: 6, tarifa: 0 },
    "65-66": { km: 18, tarifa: 0 },
    "66-67": { km: 5, tarifa: 0 },
    "68-69": { km: 2, tarifa: 0 },
    "55-70": { km: 23, tarifa: 0 },
    "70-71": { km: 14, tarifa: 0 },
    "71-72": { km: 4, tarifa: 0 }
};
