import { useState } from "react";
import { PlanetContext } from "./PlanetContext.context";

export function PlanetProvider({ children }) {
  const planets = [
    {
      id: 1,
      name: "Nyxara Prime",
      status: "Habitable",
      distance: 400,
      coordinates: {
        x: "X:-400.6",
        y: "Y:-230.7",
        z: "Z:+190.8",
      },
      image: "/ExoQuest/imgPG.jpg",
      Ximg: ["/ExoQuest/XenFiles/1-1.jpg", "/ExoQuest/XenFiles/1-2.jpg"],
      culturalLog:
        "Local flora emit bioluminescent patterns at night—recent studies suggest these patterns form a rudimentary language system used for cross-species communication.",
      artifacts: [
        "https://via.placeholder.com/100/00b7ff/000000?text=Artifact+1",
        "https://via.placeholder.com/100/8a2be2/000000?text=Artifact+2",
        "https://via.placeholder.com/100/ff00ff/000000?text=Artifact+3",
      ],
      coreComposition: [
        { name: "Ferrum", symbol: "Fe", percentage: 45, color: "#8c8c8c" },
        { name: "Silica", symbol: "Si", percentage: 30, color: "#8c8c8c" },
        { name: "Platinum", symbol: "Pt", percentage: 15, color: "#8c8c8c" },
        { name: "Xenon", symbol: "Xe", percentage: 10, color: "#8c8c8c" },
      ],

      temperature: {
        min: -120,
        max: 45,
        current: 28,
      },
      expeditionPackages: [
        {
          tier: "Explorer",
          price: "₵25,000",
          description: "Basic habitat pod + 3 surface excursions",
        },
        {
          tier: "Pioneer",
          price: "₵45,000",
          description: "Atmospheric shuttle + 7 excursions",
        },
        {
          tier: "Visionary",
          price: "₵75,000",
          description: "Full orbital access + VIP amenities",
        },
      ],
      stats: [
        { label: "Gravity", value: "0.1.26G", icon: "🌌", id: 1 },
        { label: "Atmosphere", value: "78% N₂, 21% O₂", icon: "🌀", id: 2 },
        { label: "Temperature", value: "-120°C to 45°C", icon: "❄️", id: 3 },
        { label: "Radius", value: "6371 km", icon: "🌐", id: 4 },
      ],
      laws: [
        {
          title: "Void Accord",
          description:
            "A law forbidding unauthorized travel into Nyxara's dark zones.",
        },
        {
          title: "Whisperkin Trials",
          description:
            "A brutal rite where only the silent may judge the guilty.",
        },
      ],
      visitFrequency: [1500, 2300, 3100, 2800, 4000, 3200, 3500],
      startTimer: Date.now() + 10 * 60 * 60 * 1000,
    },
    {
      id: 2,
      name: "Okeanos-7",
      status: "Aquatic World",
      distance: 800,
      coordinates: {
        x: "X:+098.3",
        y: "Y:+543.2",
        z: "Z:-076.9",
      },
      image: "/ExoQuest/imgPW.jpg",
      Ximg: ["/ExoQuest/XenFiles/2-1.jpg", "/ExoQuest/XenFiles/2-2.jpg"],
      culturalLog:
        "Okeanos-7's vast, liquid landscapes have inspired legends of aquatic deities and mysterious underwater cities. Its seas sparkle with an ethereal glow.",
      artifacts: [
        "https://via.placeholder.com/100/00f7ff/000000?text=Artifact+1",
        "https://via.placeholder.com/100/8a2be2/000000?text=Artifact+2",
        "https://via.placeholder.com/100/ff00ff/000000?text=Artifact+3",
      ],
      coreComposition: [
        { name: "Hydrogen", symbol: "H", percentage: 55, color: "#8c8c8c" },
        { name: "Oxygen", symbol: "O", percentage: 30, color: "#8c8c8c" },
        { name: "Argon", symbol: "Ar", percentage: 10, color: "#8c8c8c" },
        { name: "Neon", symbol: "Ne", percentage: 5, color: "#8c8c8c" },
      ],
      temperature: {
        min: -80,
        max: 60,
        current: 15,
      },
      expeditionPackages: [
        {
          tier: "Explorer",
          price: "₵30,000",
          description: "Basic watercraft and submersible tour",
        },
        {
          tier: "Pioneer",
          price: "₵50,000",
          description: "Luxury submarine ride and coastal exploration",
        },
        {
          tier: "Visionary",
          price: "₵80,000",
          description: "Exclusive oceanic research facility access",
        },
      ],
      stats: [
        { label: "Gravity", value: "0.96G", icon: "🌌", id: 1 },
        {
          label: "Atmosphere",
          value: "65% N₂, 30% O₂, 5% Ar",
          icon: "🌀",
          id: 2,
        },
        { label: "Temperature", value: "-80°C to 60°C", icon: "❄️", id: 3 },
        { label: "Radius", value: "7000 km", icon: "🌐", id: 4 },
      ],
      laws: [
        {
          title: "Leviathan Treaty",
          description:
            "No ships may disturb the Abyss Lords without consequence.",
        },
        {
          title: "Abyssal Silence",
          description: "Speaking above a whisper at sea is a punishable crime.",
        },
      ],
      visitFrequency: [1200, 2000, 2800, 2600, 3400, 3100, 2900],
      startTimer: Date.now() + 48 * 60 * 60 * 1000,
    },
    {
      id: 3,
      name: "Drakarus-9",
      status: "Volcanic Inferno",
      distance: 1200,
      coordinates: {
        x: "X:-250.1",
        y: "Y:+067.8",
        z: "Z:+012.4",
      },
      image: "/ExoQuest/imgPF.jpg",
      Ximg: ["/ExoQuest/XenFiles/3-1.jpg", "/ExoQuest/XenFiles/3-2.jpg"],
      culturalLog:
        "Drakarus-9 is a drought-stricken world of cracked earth and dry winds. Ruins of a once water-wise civilization still scatter the barren landscape.",
      artifacts: [
        "https://via.placeholder.com/100/ff0000/000000?text=Artifact+1",
        "https://via.placeholder.com/100/ff7f00/000000?text=Artifact+2",
        "https://via.placeholder.com/100/ffff00/000000?text=Artifact+3",
      ],
      coreComposition: [
        { name: "Iron", symbol: "Fe", percentage: 60, color: "#8c8c8c" },
        { name: "Sulfur", symbol: "S", percentage: 25, color: "#8c8c8c" },
        { name: "Magnesium", symbol: "Mg", percentage: 10, color: "#8c8c8c" },
        { name: "Silicon", symbol: "Si", percentage: 5, color: "#8c8c8c" },
      ],
      temperature: {
        min: 100,
        max: 400,
        current: 250,
      },
      expeditionPackages: [
        {
          tier: "Explorer",
          price: "₵35,000",
          description: "Guided lava flow observation tour",
        },
        {
          tier: "Pioneer",
          price: "₵55,000",
          description: "Helicopter ride over volcanic zones",
        },
        {
          tier: "Visionary",
          price: "₵90,000",
          description: "Private volcano base camp with safety gear",
        },
      ],
      stats: [
        { label: "Gravity", value: "1.8G", icon: "🌌", id: 1 },
        {
          label: "Atmosphere",
          value: "90% CO₂, 5% N₂, 5% Ar",
          icon: "🌀",
          id: 2,
        },
        { label: "Temperature", value: "100°C to 400°C", icon: "❄️", id: 3 },
        { label: "Radius", value: "5500 km", icon: "🌐", id: 4 },
      ],
      laws: [
        {
          title: "Gladiator's Law",
          description: "All disputes must be settled in the Combat Arenas.",
        },
        {
          title: "Heart of the Inferno",
          description:
            "A warrior's death must occur in fire, or it is dishonor.",
        },
      ],
      visitFrequency: [1800, 2500, 3200, 3000, 3700, 3300, 3100],
      startTimer: Date.now() + 30 * 60 * 60 * 1000,
    },
    {
      id: 4,
      name: "Xyphor",
      status: "Frozen Mystery",
      distance: 500,
      coordinates: {
        x: "X:+034.7",
        y: "Y:-012.3",
        z: "Z:+089.5",
      },
      image: "/ExoQuest/imgPLi.jpg",
      Ximg: ["/ExoQuest/XenFiles/4-1.jpg", "/ExoQuest/XenFiles/4-2.jpg"],
      culturalLog:
        "Xyphor, with its ethereal glow and silver landscapes, is shrouded in mystery. Lunar legends speak of hidden temples beneath its surface, lost to time.",
      artifacts: [
        "https://via.placeholder.com/100/cccccc/000000?text=Artifact+1",
        "https://via.placeholder.com/100/aaaaaa/000000?text=Artifact+2",
        "https://via.placeholder.com/100/888888/000000?text=Artifact+3",
      ],
      coreComposition: [
        { name: "Helium", symbol: "He", percentage: 40, color: "#8c8c8c" },
        { name: "Silicon", symbol: "Si", percentage: 35, color: "#8c8c8c" },
        { name: "Iron", symbol: "Fe", percentage: 20, color: "#8c8c8c" },
        { name: "Carbon", symbol: "C", percentage: 5, color: "#8c8c8c" },
      ],

      temperature: {
        min: -200,
        max: 0,
        current: -100,
      },
      expeditionPackages: [
        {
          tier: "Explorer",
          price: "₵20,000",
          description: "Surface walk with lunar rover",
        },
        {
          tier: "Pioneer",
          price: "₵40,000",
          description: "Guided tour of lunar craters and valleys",
        },
        {
          tier: "Visionary",
          price: "₵70,000",
          description: "Exclusive access to lunar research centers",
        },
      ],
      stats: [
        { label: "Gravity", value: "0.4G", icon: "🌌", id: 1 },
        {
          label: "Atmosphere",
          value: "Thin, mostly helium",
          icon: "🌀",
          id: 2,
        },
        { label: "Temperature", value: "-200°C to 0°C", icon: "❄️", id: 3 },
        { label: "Radius", value: "3400 km", icon: "🌐", id: 4 },
      ],
      laws: [
        {
          title: "Prism Covenant",
          description:
            "All colors represent a faction, and color theft is illegal.",
        },
        {
          title: "Shard Accord",
          description:
            "Only those who possess a Crystal Key may enter the Core.",
        },
      ],
      visitFrequency: [900, 1500, 2100, 1900, 2300, 1700, 1600],
      startTimer: Date.now() + 100 * 60 * 60 * 1000,
    },
  ];

  // active planet and swipe direction
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setActiveIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + planets.length) % planets.length;
      return [newIndex, newDirection];
    });
  };

  return (
    <PlanetContext.Provider
      value={{ planets, activeIndex, direction, paginate }}
    >
      {children}
    </PlanetContext.Provider>
  );
}
