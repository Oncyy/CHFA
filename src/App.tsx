import { SetStateAction, useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

interface PhysicalProperties {
  molarMass: string;
  boilingPoint: string;
  meltingPoint: string;
  density: string;
}

interface EnvironmentalImpact {
  greenhousePotential: string;
  atmosphericLifetime: string;
}

interface Compound {
  id: number;
  name: string;
  formula: string;
  description: string;
  physicalProperties?: PhysicalProperties;
  usage: string[] | string;
  production: string[] | string;
  environmentalImpact?: EnvironmentalImpact;
  equation: string;
}

interface Category {
  category: string;
  compounds: Compound[];
}

const OrganickaChemie: Category[] = [
  {
    category: "Alkany",
    compounds: [
      {
        id: 1,
        name: "Methan",
        formula: "CH₄",
        description: "Nejjednodušší alkan s jedním uhlíkovým atomem.",
        physicalProperties: {
          molarMass: "16.04 g/mol",
          boilingPoint: "-161.5 °C",
          meltingPoint: "-182.5 °C",
          density: "0.656 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "Palivo pro vytápění",
          "Výroba vodíku",
          "Surovina pro syntézu organických sloučenin",
        ],
        production: ["Anaerobní rozklad biomasy", "Reakce uhlíku s vodíkem"],
        environmentalImpact: {
          greenhousePotential: "25x silnější než CO₂",
          atmosphericLifetime: "9-12 let",
        },
        equation: "C + 2H₂ → CH₄",
      },
      {
        id: 2,
        name: "Ethan",
        formula: "C₂H₆",
        description:
          "Druhý nejjednodušší alkan, bezbarvý plyn s mírně nasládlým zápachem. Používá se jako surovina pro výrobu ethylenu, který je základní látkou pro výrobu plastů a dalších chemikálií.",
        physicalProperties: {
          molarMass: "30.07 g/mol",
          meltingPoint: "-182.8 °C",
          boilingPoint: "-88.5 °C",
          density: "1.34 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "Výroba ethylenu",
          "Palivo pro topení a vaření",
          "Chladivo v kryogenních aplikacích (např. v kapalném stavu jako chladivo v elektrárnách)",
        ],
        production: ["Krakování ropy", "Zkapalněný zemní plyn (LNG)"],
        environmentalImpact: {
          greenhousePotential: "5.5x silnější než CO₂",
          atmosphericLifetime: "1.2 roků",
        },
        equation: "C₂H₄ + H₂ → C₂H₆",
      },
      {
        id: 3,
        name: "Propan",
        formula: "C₃H₈",
        description:
          "Bezbarvý plyn, který se používá jako palivo pro domácnosti, automobilové motory a v průmyslu.",
        physicalProperties: {
          molarMass: "44.10 g/mol",
          meltingPoint: "-187.7 °C",
          boilingPoint: "-42.1 °C",
          density: "2.01 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "Palivo pro domácnosti (LPG)",
          "Palivo pro automobilové motory",
          "Chladivo v některých chladicích systémech",
          "Výroba syntetických materiálů",
        ],
        production: [
          "Kraking ropy",
          "Zemní plyn",
          "Frakcionování ropného plynu",
        ],
        environmentalImpact: {
          greenhousePotential: "3.0x silnější než CO₂",
          atmosphericLifetime: "3 dny",
        },
        equation: "C₃H₆ + H₂ → C₃H₈",
      },
      {
        id: 4,
        name: "Butan",
        formula: "C₄H₁₀",
        description:
          "Bezbarvý plyn používaný jako palivo v kempingových vařičích, v lehkých topných systémech a jako složka zkapalněného ropného plynu.",
        physicalProperties: {
          molarMass: "58.12 g/mol",
          meltingPoint: "-0.5 °C",
          boilingPoint: "-138 °C",
          density: "2.48 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "LPG palivo pro domácnosti a průmysl",
          "Výroba isobutanu pro plastovou a chemickou syntézu",
          "Chladivo v chladicích systémech (např. v mobilních chladících zařízeních)",
        ],
        production: [
          "Kraking ropy",
          "Zemní plyn",
          "Frakcionování ropného plynu",
        ],
        environmentalImpact: {
          greenhousePotential: "1.8x silnější než CO₂",
          atmosphericLifetime: "4 dny",
        },
        equation: "C₄H₈ + H₂ → C₄H₁₀",
      },
      {
        id: 5,
        name: "Pentan",
        formula: "C₅H₁₂",
        description:
          "Bezbarvá kapalina používaná jako rozpouštědlo v chemickém průmyslu a v pohonných hmotách.",
        physicalProperties: {
          molarMass: "72.15 g/mol",
          meltingPoint: "36.1 °C",
          boilingPoint: "-129.7 °C",
          density: "0.626 g/cm³ (při 25 °C)",
        },
        usage: [
          "Rozpouštědlo pro výrobu chemikálií a léků",
          "Složka některých paliv a motorových olejů",
          "Výroba neoprenu a dalších polymerů",
        ],
        production: ["Kraking ropy", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "2.3x silnější než CO₂",
          atmosphericLifetime: "5 dní",
        },
        equation: "C₅H₁₀ + H₂ → C₅H₁₂",
      },
      {
        id: 6,
        name: "Hexan",
        formula: "C₆H₁₄",
        description:
          "Bezbarvá kapalina používaná jako rozpouštědlo v chemických procesech a v extrakčních technikách.",
        physicalProperties: {
          molarMass: "86.18 g/mol",
          meltingPoint: "68.7 °C",
          boilingPoint: "-95 °C",
          density: "0.654 g/cm³ (při 25 °C)",
        },
        usage: [
          "Rozpouštědlo v průmyslové výrobě (např. v textilním průmyslu)",
          "Surovina pro výrobu chemikálií",
          "Zpětné získávání ropných produktů v těžbě",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "3x silnější než CO₂",
          atmosphericLifetime: "3 dny",
        },
        equation: "C₆H₁₂ + H₂ → C₆H₁₄",
      },
      {
        id: 7,
        name: "Heptan",
        formula: "C₇H₁₆",
        description:
          "Bezbarvá kapalina používaná jako rozpouštědlo a v některých palivech.",
        physicalProperties: {
          molarMass: "100.2 g/mol",
          meltingPoint: "98.4 °C",
          boilingPoint: "-90.6 °C",
          density: "0.684 g/cm³ (při 25 °C)",
        },
        usage: [
          "Pohonná hmota pro motory",
          "Rozpouštědlo v průmyslu",
          "Výroba syntetických materiálů",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "3.5x silnější než CO₂",
          atmosphericLifetime: "6 dní",
        },
        equation: "C₇H₁₄ + H₂ → C₇H₁₆",
      },
      {
        id: 8,
        name: "Oktan",
        formula: "C₈H₁₈",
        description:
          "Bezbarvá kapalina používaná jako součást benzínu a jako aditivum pro zlepšení výkonu motorů.",
        physicalProperties: {
          molarMass: "114.2 g/mol",
          meltingPoint: "125.6 °C",
          boilingPoint: "-56.8 °C",
          density: "0.702 g/cm³ (při 25 °C)",
        },
        usage: [
          "Složka benzínu pro zlepšení oktanového čísla",
          "Pohonná hmota pro motory",
          "Palivo pro některé motory v automobilovém průmyslu",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "4x silnější než CO₂",
          atmosphericLifetime: "7 dní",
        },
        equation: "C₈H₁₆ + H₂ → C₈H₁₈",
      },
      {
        id: 9,
        name: "Nonan",
        formula: "C₉H₂₀",
        description:
          "Bezbarvá kapalina používaná v průmyslu jako rozpouštědlo a v některých pohonných hmotách.",
        physicalProperties: {
          molarMass: "128.2 g/mol",
          meltingPoint: "150.8 °C",
          boilingPoint: "-53.8 °C",
          density: "0.735 g/cm³ (při 25 °C)",
        },
        usage: [
          "Pohonná hmota",
          "Složka benzínu pro motory s nízkým obsahem uhlíku",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "4.5x silnější než CO₂",
          atmosphericLifetime: "10 dní",
        },
        equation: "C₉H₁₈ + H₂ → C₉H₂₀",
      },
      {
        id: 10,
        name: "Dekan",
        formula: "C₁₀H₂₂",
        description:
          "Bezbarvá kapalina používaná v průmyslových aplikacích a jako součást některých paliv.",
        physicalProperties: {
          molarMass: "142.3 g/mol",
          meltingPoint: "174.1 °C",
          boilingPoint: "-29.7 °C",
          density: "0.745 g/cm³ (při 25 °C)",
        },
        usage: [
          "Pohonná hmota",
          "Složka benzínu",
          "Rozpouštědlo pro chemický průmysl",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "5x silnější než CO₂",
          atmosphericLifetime: "12 dní",
        },
        equation: "C₁₀H₂₀ + H₂ → C₁₀H₂₂",
      },
      {
        id: 11,
        name: "Undekan",
        formula: "C₁₁H₂₄",
        description:
          "Bezbarvá kapalina používaná v některých palivech a jako rozpouštědlo v chemickém průmyslu.",
        physicalProperties: {
          molarMass: "156.3 g/mol",
          meltingPoint: "194.3 °C",
          boilingPoint: "-19.9 °C",
          density: "0.756 g/cm³ (při 25 °C)",
        },
        usage: [
          "Pohonná hmota",
          "Rozpouštědlo v organické chemii",
          "Složka některých motorových olejů",
        ],
        production: ["Kraking ropy,", "Zemní plyn"],
        environmentalImpact: {
          greenhousePotential: "6x silnější než CO₂",
          atmosphericLifetime: "cca 10 let",
        },
        equation: "C₁₁H₂₂ + H₂ → C₁₁H₂₄",
      },
    ],
  },
  {
    category: "Alkeny",
    compounds: [
      {
        id: 2,
        name: "Ethen (ethylen)",
        formula: "C₂H₄",
        description:
          "Nejjednodušší alken s jednou dvojnou vazbou mezi uhlíkovými atomy. Za standardních podmínek je to bezbarvý plyn, lehčí než vzduch. Používá se jako surovina v chemickém průmyslu, například při výrobě plastů.",
        physicalProperties: {
          molarMass: "28.05 g/mol",
          boilingPoint: "-103.7 °C",
          meltingPoint: "-169.2 °C",
          density: "1.161 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "Výroba polyethylenu (plastů)",
          "Syntéza ethylalkoholu (etanolu)",
          "Zrání ovoce (rostlinný hormon)",
        ],
        production: [
          "Krakování ropy nebo zemního plynu",
          "Dehydratace etanolu: C₂H₅OH → C₂H₄ + H₂O",
        ],
        environmentalImpact: {
          greenhousePotential: "Nízký ve srovnání s CO₂",
          atmosphericLifetime: "Krátká",
        },
        equation: "C₂H₅OH → C₂H₄ + H₂O",
      },

      {
        id: 2,
        name: "Propen (propylen)",
        formula: "C₃H₆",
        description:
          "Propen je bezbarvý plyn s mírným zápachem, obsahující jednu dvojnou vazbu mezi uhlíkovými atomy. Používá se jako klíčová surovina pro výrobu polymerů, jako je polypropylen.",
        physicalProperties: {
          molarMass: "42.08 g/mol",
          boilingPoint: "-47.7 °C",
          meltingPoint: "-185 °C",
          density: "1.81 kg/m³ (při 0 °C a 1 atm)",
        },
        usage: [
          "Výroba polypropylenu (plastů)",
          "Syntéza propylalkoholu",
          "Chemický průmysl",
        ],
        production: [
          "Krakování ropy nebo zemního plynu",
          "Dehydratace propanolu",
        ],
        environmentalImpact: {
          greenhousePotential: "Nízký ve srovnání s CO₂",
          atmosphericLifetime: "Krátká",
        },
        equation: "C₃H₇OH → C₃H₆ + H₂O",
      },
      {
        id: 3,
        name: "Buten",
        formula: "C₄H₈",
        description:
          "Buten existuje ve čtyřech izomerech (1-buten, 2-buten cis/trans, isobuten). Používá se jako surovina pro výrobu syntetického kaučuku a dalších polymerů.",
        physicalProperties: {
          molarMass: "56.11 g/mol",
          boilingPoint: "-6 °C",
          meltingPoint: "-185 °C",
          density: "-",
        },
        usage: ["Výroba polybutenu", "Syntéza butadienu pro kaučuky"],
        production: ["Pyrolýza ropy nebo zemního plynu"],
        environmentalImpact: {
          greenhousePotential: "Nízký ve srovnání s CO₂",
          atmosphericLifetime: "Krátká",
        },
        equation: "-",
      },
      {
        id: 4,
        name: "Penten",
        formula: "C₅H₁₀",
        description:
          "Penten je kapalný alken s jednou dvojnou vazbou. Používá se v organické syntéze a jako monomer pro výrobu plastů.",
        physicalProperties: {
          molarMass: "70.13 g/mol",
          boilingPoint: "-",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Organická syntéza", "Výroba plastů"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 5,
        name: "Hexen",
        formula: "C₆H₁₂",
        description:
          "Hexen je kapalný alken používaný jako přísada do polymerů a při výrobě chemických sloučenin.",
        physicalProperties: {
          molarMass: "-",
          boilingPoint: "-",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Výroba polymerů", "Chemická syntéza"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 5,
        name: "Hepten",
        formula: "C₇H₁₄",
        description:
          "Hepten je kapalný alken s jednou dvojnou vazbou. Používá se jako meziprodukt při výrobě chemických sloučenin a polymerů.",
        physicalProperties: {
          molarMass: "98.19 g/mol",
          boilingPoint: "94 °C",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Výroba polymerů", "Organická syntéza"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 6,
        name: "Octen",
        formula: "C₈H₁₆",
        description:
          "Octen je kapalný alken používaný jako monomer při výrobě plastů a jako přísada do chemických produktů.",
        physicalProperties: {
          molarMass: "112.21 g/mol",
          boilingPoint: "121 °C",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Výroba polyolefinů", "Přísada do chemických produktů"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 7,
        name: "Nonen",
        formula: "C₉H₁₈",
        description:
          "Nonen je kapalný alken s jednou dvojnou vazbou. Používá se v organické syntéze a při výrobě polymerů.",
        physicalProperties: {
          molarMass: "126.23 g/mol",
          boilingPoint: "151 °C",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Organická syntéza", "Výroba polymerů"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 8,
        name: "Dekalen",
        formula: "C₁₀H₂₀",
        description:
          "Dekalen je kapalný cyklický alken používaný jako rozpouštědlo a přísada do chemických produktů.",
        physicalProperties: {
          molarMass: "140.27 g/mol",
          boilingPoint: "-",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Rozpouštědlo v chemickém průmyslu", "Přísada do paliv"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
      {
        id: 9,
        name: "Unden",
        formula: "C₁₁H₂₂",
        description:
          "Unden je kapalný alken používaný jako surovina pro výrobu polymerů a dalších chemických sloučenin.",
        physicalProperties: {
          molarMass: "154.28 g/mol",
          boilingPoint: "-",
          meltingPoint: "-",
          density: "-",
        },
        usage: ["Výroba polymerů", "Organická syntéza"],
        production: ["Pyrolýza ropy"],
        environmentalImpact: {
          greenhousePotential: "-",
          atmosphericLifetime: "-",
        },
        equation: "-",
      },
    ],
  },
  {
    category: "Cykloalkany",
    compounds: [
      {
        id: 1,
        name: "Cyklopropan",
        formula: "C₃H₆",
        description:
          "Cyklopropan je trojúhelníkový cykloalkan s vysokým napětím kvůli malému úhlu mezi vazbami. Používá se jako anestetikum.",
        usage: "Anestetikum",
        production: "Výroba cyklických uhlovodíků.",
        equation: "C₃H₆ + H₂ → C₃H₆",
      },
      {
        id: 2,
        name: "Cyklobutan",
        formula: "C₄H₈",
        description:
          "Cyklobutan je čtyřčlenný cykloalkan, který je stabilnější než cyklopropan, ale stále má určité napětí kvůli svému pravoúhlému uspořádání.",
        usage: "Chemický průmysl",
        production: "Dehydrogenace butanu.",
        equation: "C₄H₁₀ → C₄H₈ + H₂",
      },
      {
        id: 3,
        name: "Cyklopentan",
        formula: "C₅H₁₀",
        description:
          "Cyklopentan je pětičlenný cykloalkan se stabilním uspořádáním. Používá se jako rozpouštědlo v chemickém průmyslu.",
        usage: "Rozpouštědlo",
        production: "Dehydrogenace pentanu.",
        equation: "C₅H₁₂ → C₅H₁₀ + H₂",
      },
      {
        id: 4,
        name: "Cyklobexan",
        formula: "C₆H₁₂",
        description:
          "Cyklobexan je šestičlenný cykloalkan, který má stabilní židličkovou konformaci. Je široce používán jako rozpouštědlo a ve výrobě nylonu.",
        usage: "Výroba nylonu",
        production: "Dehydrogenace cyklohexanu.",
        equation: "C₆H₁₄ → C₆H₁₂ + H₂",
      },
      {
        id: 5,
        name: "Cyklodekan",
        formula: "C₁₀H₂₀",
        description:
          "Cyklodekan je desetimocný cykloalkan s různými průmyslovými využitími.",
        usage: "Syntéza chemikálií",
        production: "Dehydrogenace dekánu.",
        equation: "C₁₀H₂₂ → C₁₀H₂₀ + H₂",
      },
    ],
  },
  {
    category: "Cykloalkeny",
    compounds: [
      {
        id: 1,
        name: "Cyklopropen",
        formula: "C₃H₄",
        description:
          "Cyklopropen je cyklický alken se třemi uhlíky. Je vysoce reaktivní a používá se v organických syntézách.",
        usage: "Syntéza",
        production: "Dehydrogenace cyklopropanu.",
        equation: "C₃H₆ → C₃H₄ + H₂",
      },
      {
        id: 2,
        name: "Cyklobuten",
        formula: "C₄H₆",
        description:
          "Cyklobuten je čtyřčlenný cyklický alken. Používá se při výzkumu reaktivity alkenů.",
        usage: "Výzkum organických reakcí",
        production: "Dehydrogenace cyklobutanu.",
        equation: "C₄H₈ → C₄H₆ + H₂",
      },
      {
        id: 3,
        name: "Cyklopenten",
        formula: "C₅H₈",
        description:
          "Cyklopenten je pětičlenný cyklický alken. Používá se v syntéze léků a dalších chemikálií.",
        usage: "Syntéza",
        production: "Dehydrogenace cyklopentanu.",
        equation: "C₅H₁₀ → C₅H₈ + H₂",
      },
      {
        id: 4,
        name: "Cyklohexen",
        formula: "C₆H₁₀",
        description:
          "Cyklohexen je šestičlenný cyklický alken. Využívá se v polymerních reakcích.",
        usage: "Polymerní výroba",
        production: "Dehydrogenace cyklohexanu.",
        equation: "C₆H₁₂ → C₆H₁₀ + H₂",
      },
      {
        id: 5,
        name: "Cyklohepten",
        formula: "C₇H₁₂",
        description:
          "Cyklohepten je sedmičlenný cyklický alken, který se využívá při syntéze organických sloučenin.",
        usage: "Syntéza",
        production: "Dehydrogenace cykloheptanu.",
        equation: "C₇H₁₄ → C₇H₁₂ + H₂",
      },
      {
        id: 6,
        name: "Cyklookten",
        formula: "C₈H₁₄",
        description:
          "Cyklookten je osmimocný cyklický alken, používá se v organických syntézách.",
        usage: "Syntéza",
        production: "Dehydrogenace cyklooktanu.",
        equation: "C₈H₁₆ → C₈H₁₄ + H₂",
      },
    ],
  },
  {
    category: "Alkyny",
    compounds: [
      {
        id: 1,
        name: "Ethyne",
        formula: "C₂H₂",
        description: "Nejjednodušší alkin, známý také jako acetylen.",
        usage: "Sváření, syntéza organických sloučenin.",
        production:
          "Termický rozklad metanu nebo reakce karbidu vápenatého s vodou.",
        equation: "CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂",
      },
      {
        id: 2,
        name: "Propyne",
        formula: "C₃H₄",
        description: "Tříuhlíkatý alkin, izomer allylacetylenu.",
        usage: "Syntéza chemických látek.",
        production: "Krakením uhlovodíků.",
        equation: "C₃H₈ → C₃H₄ + H₂",
      },
      {
        id: 3,
        name: "1-Butyne",
        formula: "C₄H₆",
        description: "Čtyřuhlíkatý alkin s trojnou vazbou na prvním uhlíku.",
        usage: "Výroba polymerů a organická syntéza.",
        production: "Krakením vyšších uhlovodíků.",
        equation: "C₄H₈ → C₄H₆ + H₂",
      },
      {
        id: 4,
        name: "2-Butyne",
        formula: "C₄H₆",
        description:
          "Izomer 1-butynu s trojnou vazbou mezi druhým a třetím uhlíkem.",
        usage: "Prekurzor pro organické syntézy.",
        production: "Dehydrogenace butanů.",
        equation: "C₄H₈ → C₄H₆ + H₂",
      },
      {
        id: 5,
        name: "1-Pentyne",
        formula: "C₅H₈",
        description: "Pětiuhlíkatý alkin s trojnou vazbou na prvním uhlíku.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace pentanů.",
        equation: "C₅H₁₀ → C₅H₈ + H₂",
      },
      {
        id: 6,
        name: "2-Pentyne",
        formula: "C₅H₈",
        description:
          "Izomer 1-pentynu s trojnou vazbou mezi druhým a třetím uhlíkem.",
        usage: "Prekurzor v chemických reakcích.",
        production: "Krakením ropy.",
        equation: "C₅H₁₀ → C₅H₈ + H₂",
      },
      {
        id: 7,
        name: "1-Hexyne",
        formula: "C₆H₁₀",
        description: "Šestiuhlíkatý alkin s trojnou vazbou na prvním uhlíku.",
        usage: "Výroba organických sloučenin.",
        production: "Dehydrogenace hexanů.",
        equation: "C₆H₁₂ → C₆H₁₀ + H₂",
      },
      {
        id: 8,
        name: "2-Hexyne",
        formula: "C₆H₁₀",
        description:
          "Izomer 1-hexyne s trojnou vazbou mezi druhým a třetím uhlíkem.",
        usage: "Syntéza speciálních chemikálií.",
        production: "Krakením vyšších uhlovodíků.",
        equation: "C₆H₁₂ → C₆H₁₀ + H₂",
      },
      {
        id: 9,
        name: "1-Heptyne",
        formula: "C₇H₁₂",
        description: "Sedmiuhlíkatý alkin s trojnou vazbou na prvním uhlíku.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace heptanů.",
        equation: "C₇H₁₄ → C₇H₁₂ + H₂",
      },
      {
        id: 10,
        name: "2-Heptyne",
        formula: "C₇H₁₂",
        description:
          "Izomer 1-heptynu s trojnou vazbou mezi druhým a třetím uhlíkem.",
        usage: "Výroba speciálních chemických sloučenin.",
        production: "Krakením ropy.",
        equation: "C₇H₁₄ → C₇H₁₂ + H₂",
      },
    ],
  },
  {
    category: "Cykloalkyny",
    compounds: [
      {
        id: 1,
        name: "Cyklopropyn",
        formula: "C₃H₄",
        description: "Nejmenší cykloalkyn, velmi nestabilní.",
        usage: "Teoretické studie.",
        production: "Laboratorní syntéza.",
        equation: "C₃H₆ → C₃H₄ + H₂",
      },
      {
        id: 2,
        name: "Cyklobutyn",
        formula: "C₄H₆",
        description: "Čtyřuhlíkový cykloalkyn, extrémně reaktivní.",
        usage: "Základní výzkum.",
        production: "Dehydrogenace cyklobutanu.",
        equation: "C₄H₈ → C₄H₆ + H₂",
      },
      {
        id: 3,
        name: "Cyklopentyn",
        formula: "C₅H₈",
        description: "Stabilnější než menší cykloalkyny.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace cyklopentanu.",
        equation: "C₅H₁₀ → C₅H₈ + H₂",
      },
      {
        id: 4,
        name: "Cyklohexyn",
        formula: "C₆H₁₀",
        description: "První relativně stabilní cykloalkyn.",
        usage: "Syntéza organických sloučenin.",
        production: "Dehydrogenace cyklohexanu.",
        equation: "C₆H₁₂ → C₆H₁₀ + H₂",
      },
      {
        id: 5,
        name: "Cykloheptyn",
        formula: "C₇H₁₂",
        description: "Sedmiuhlíkový cykloalkyn, využívaný v syntéze.",
        usage: "Organická chemie.",
        production: "Dehydrogenace cykloheptanu.",
        equation: "C₇H₁₄ → C₇H₁₂ + H₂",
      },
      {
        id: 6,
        name: "Cyklooktyn",
        formula: "C₈H₁₄",
        description: "Relativně stabilní osmiuhlíkatý cykloalkyn.",
        usage: "Syntéza.",
        production: "Dehydrogenace cyklooktanu.",
        equation: "C₈H₁₆ → C₈H₁₄ + H₂",
      },
      {
        id: 7,
        name: "Cyklononyn",
        formula: "C₉H₁₆",
        description:
          "Devítiuhlíkatý cykloalkyn s potenciálem v organické chemii.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace cyklononanu.",
        equation: "C₉H₁₈ → C₉H₁₆ + H₂",
      },
      {
        id: 8,
        name: "Cyklodekyn",
        formula: "C₁₀H₁₈",
        description: "Desetiuhlíkový cykloalkyn, běžně používaný v syntézách.",
        usage: "Organická chemie.",
        production: "Dehydrogenace cyklodekanu.",
        equation: "C₁₀H₂₀ → C₁₀H₁₈ + H₂",
      },
      {
        id: 9,
        name: "Cykloundekyn",
        formula: "C₁₁H₂₀",
        description:
          "Jedenáctiuhlíkový cykloalkyn používaný v pokročilé syntéze.",
        usage: "Syntéza léčiv.",
        production: "Dehydrogenace cykloundekanu.",
        equation: "C₁₁H₂₂ → C₁₁H₂₀ + H₂",
      },
      {
        id: 10,
        name: "Cyklododekyn",
        formula: "C₁₂H₂₂",
        description:
          "Dvanáctiuhlíkový cykloalkyn, stabilnější než kratší analogy.",
        usage: "Polymery.",
        production: "Dehydrogenace cyklododekanu.",
        equation: "C₁₂H₂₄ → C₁₂H₂₂ + H₂",
      },
      {
        id: 11,
        name: "Cyklotridekyn",
        formula: "C₁₃H₂₄",
        description: "Dlouhý cykloalkyn s menším pnutím.",
        usage: "Výzkum.",
        production: "Dehydrogenace cyklotridekanu.",
        equation: "C₁₃H₂₆ → C₁₃H₂₄ + H₂",
      },
      {
        id: 12,
        name: "Cyklotetradekyn",
        formula: "C₁₄H₂₆",
        description:
          "Cyklický alkin se čtrnácti uhlíky, stabilnější než kratší homology.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace cyklotetradekanu.",
        equation: "C₁₄H₂₈ → C₁₄H₂₆ + H₂",
      },
      {
        id: 13,
        name: "Cyklopentadekyn",
        formula: "C₁₅H₂₈",
        description: "Přirozeně stabilnější cykloalkyn.",
        usage: "Výzkum.",
        production: "Dehydrogenace cyklopentadekanu.",
        equation: "C₁₅H₃₀ → C₁₅H₂₈ + H₂",
      },
      {
        id: 14,
        name: "Cyklohexadekyn",
        formula: "C₁₆H₃₀",
        description: "Delší cykloalkyn s menším pnutím.",
        usage: "Organická syntéza.",
        production: "Dehydrogenace cyklohexadekanu.",
        equation: "C₁₆H₃₂ → C₁₆H₃₀ + H₂",
      },
      {
        id: 15,
        name: "Cykloheptadekyn",
        formula: "C₁₇H₃₂",
        description:
          "Sedmnáctiuhlíkatý cykloalkyn, stabilnější než menší analogy.",
        usage: "Polymery.",
        production: "Dehydrogenace cykloheptadekanu.",
        equation: "C₁₇H₃₄ → C₁₇H₃₂ + H₂",
      },
    ],
  },
];
export default function OrganickaChemieComponent() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredCompounds = OrganickaChemie.flatMap((category: Category) =>
    category.compounds.filter((compound: Compound) =>
      compound.name.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div>
      <h1>Organická Chemie</h1>
      <input
        type="text"
        placeholder="Hledat podle názvu..."
        value={searchInput}
        onChange={handleSearchChange}
        className="p-2 border rounded-md w-full mb-4"
      />

      {(searchInput === ""
        ? OrganickaChemie
        : [{ category: "Výsledek", compounds: filteredCompounds }]
      ).map((category: Category) => (
        <div key={category.category}>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            onClick={() => handleCategoryChange(category.category)}
            style={{ cursor: "pointer" }}
          >
            {category.category}
          </motion.h2>
          {selectedCategory === category.category && (
            <div>
              {category.compounds.map((compound: Compound) => (
                <div key={compound.id}>
                  <h3>
                    {compound.name} ({compound.formula})
                  </h3>
                  <p>{compound.description}</p>
                  <p>
                    <strong>Použití:</strong>{" "}
                    {Array.isArray(compound.usage)
                      ? compound.usage.join(", ")
                      : compound.usage}
                  </p>
                  <p>
                    <strong>Rovnice:</strong> {compound.equation}
                  </p>
                  {compound.physicalProperties && (
                    <div>
                      <h4>Fyzikální vlastnosti:</h4>
                      <p>
                        <strong>Molární hmotnost:</strong>{" "}
                        {compound.physicalProperties.molarMass}
                      </p>
                      <p>
                        <strong>Bod tání:</strong>{" "}
                        {compound.physicalProperties.meltingPoint}
                      </p>
                      <p>
                        <strong>Bod varu:</strong>{" "}
                        {compound.physicalProperties.boilingPoint}
                      </p>
                      <p>
                        <strong>Hustota:</strong>{" "}
                        {compound.physicalProperties.density}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
