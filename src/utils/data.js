export const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "M+", label: "Tons Extracted" },
  { value: 0, suffix: "", label: "Lost Time Injuries" },
  { value: 18, suffix: "+", label: "Years of Excellence" },
  { value: 42, suffix: "", label: "Certified Engineers" },
  { value: 99, suffix: "%", label: "Client Retention Rate" },
];

export const services = [
  {
    id: 1,
    title: "Rotary Drilling",
    category: "Drilling",
    icon: "Drill",
    description:
      "High-capacity rotary drilling operations for mineral exploration and water well development, reaching depths of up to 3,500 meters with precision navigation systems.",
    details: [
      "DTH Hammer Drilling",
      "Air Flush & Mud Rotary",
      "Core Sample Recovery",
      "Deviation Surveys",
    ],
    accent: "col-span-2 row-span-1",
  },
  {
    id: 2,
    title: "Mining Operations",
    category: "Mining",
    icon: "Mountain",
    description:
      "Full-cycle open-pit and underground mining management, from resource estimation and mine planning through to reclamation and environmental closure.",
    details: [
      "Open-Pit Management",
      "Underground Development",
      "Blast Design & Execution",
      "Ore Grade Control",
    ],
    accent: "col-span-1 row-span-2",
  },
  {
    id: 3,
    title: "Geological Survey",
    category: "Survey",
    icon: "Map",
    description:
      "Comprehensive geological mapping, geophysical surveys, and structural analysis to accurately characterize mineral deposits and subsurface conditions.",
    details: [
      "Airborne Geophysics",
      "Ground Penetrating Radar",
      "Structural Mapping",
      "Resource Estimation",
    ],
    accent: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Equipment Leasing",
    category: "Equipment",
    icon: "Wrench",
    description:
      "Fleet of heavy industrial equipment available for short and long-term lease, fully maintained and operated by certified technicians.",
    details: [
      "Drill Rigs (Surface & Underground)",
      "Excavators & Loaders",
      "Support Vehicles",
      "Compressors & Pumps",
    ],
    accent: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Site Preparation",
    category: "Civil",
    icon: "Construction",
    description:
      "Civil engineering and earthworks for site access roads, drill pads, tailings management facilities, and infrastructure development.",
    details: [
      "Bulk Earthworks",
      "Drainage Engineering",
      "Road Construction",
      "Foundation Works",
    ],
    accent: "col-span-2 row-span-1",
  },
  {
    id: 6,
    title: "Safety & Compliance",
    category: "HSE",
    icon: "Shield",
    description:
      "ISO 45001-certified health, safety, and environmental management consulting, ensuring regulatory compliance across all operational phases.",
    details: [
      "HSE Management Systems",
      "Risk Assessments (JHA/HIRA)",
      "Environmental Impact Studies",
      "Regulatory Reporting",
    ],
    accent: "col-span-1 row-span-1",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bong Range Iron Ore Exploration",
    category: "Mining",
    location: "Bong County, Liberia",
    duration: "14 Months",
    depth: "850m",
    value: "$4.2M",
    status: "Completed",
    year: "2023",
    description:
      "Comprehensive mineral exploration program covering 12,000 hectares with 48 drill holes totaling 18,500 meters of core recovery.",
    tags: ["Iron Ore", "Core Drilling", "Resource Estimation"],
    image: "mining",
    imgUrl: "/images/Home-hero (1).JPG",
  },
  {
    id: 2,
    title: "Nimba Mountain Topographic Survey",
    category: "Survey",
    location: "Nimba County, Liberia",
    duration: "6 Months",
    depth: "N/A",
    value: "$1.8M",
    status: "Completed",
    year: "2023",
    description:
      "High-resolution topographic and geophysical survey using drone LiDAR technology and ground-penetrating radar across a 5,000-hectare concession.",
    tags: ["LiDAR Survey", "Geophysics", "GIS Mapping"],
    image: "survey",
    imgUrl: "/images/nimba_mountain.png",
  },
  {
    id: 3,
    title: "Grand Cape Mount Water Wells",
    category: "Drilling",
    location: "Grand Cape Mount County, Liberia",
    duration: "4 Months",
    depth: "320m",
    value: "$890K",
    status: "Completed",
    year: "2022",
    description:
      "Community water development program delivering 24 productive boreholes across 12 rural communities, providing clean water access to 18,000 residents.",
    tags: ["Water Wells", "Rotary Drilling", "Community Development"],
    image: "drilling",
    imgUrl: "/images/Home-hero (2).JPG",
  },
  {
    id: 4,
    title: "Buchanan Port Access Road",
    category: "Civil",
    location: "Grand Bassa County, Liberia",
    duration: "8 Months",
    depth: "N/A",
    value: "$2.1M",
    status: "Completed",
    year: "2022",
    description:
      "18km heavy-haul road construction and rehabilitation for ore transport corridor, designed to carry 200-ton articulated haulers at full payload.",
    tags: ["Road Construction", "Earthworks", "Civil Engineering"],
    image: "civil",
    imgUrl: "/images/about-preview (1).jpg",
  },
  {
    id: 5,
    title: "Yekepa Gold Prospect Drilling",
    category: "Drilling",
    location: "Nimba County, Liberia",
    duration: "10 Months",
    depth: "1,200m",
    value: "$3.4M",
    status: "Ongoing",
    year: "2024",
    description:
      "Reverse circulation and diamond core drilling program testing gold mineralization along a 4.2km structural corridor identified through geophysical interpretation.",
    tags: ["Gold Exploration", "RC Drilling", "Diamond Core"],
    image: "drilling",
    imgUrl: "/images/Home-hero (3).JPG",
  },
  {
    id: 6,
    title: "ArcelorMittal Mine Infrastructure",
    category: "Mining",
    location: "Yekepa, Liberia",
    duration: "18 Months",
    depth: "N/A",
    value: "$7.6M",
    status: "Completed",
    year: "2023",
    description:
      "Full mine infrastructure support including pit dewatering, haul road maintenance, drill and blast services, and environmental monitoring.",
    tags: ["Mine Support", "Dewatering", "Blasting"],
    image: "mining",
    imgUrl: "/images/about-preview (2).JPG",
  },
  {
    id: 7,
    title: "Heavy Haul Truck Tray Fabrication",
    category: "Fabrication",
    location: "Monrovia, Liberia",
    duration: "3 Months",
    depth: "N/A",
    value: "$1.2M",
    status: "Completed",
    year: "2023",
    description:
      "Custom fabrication and welding of heavy-duty haul truck trays and excavator buckets to support continuous mining operations.",
    tags: ["Welding", "Steel Fabrication", "Equipment Repair"],
    image: "civil",
    imgUrl: "/images/fabrication.png",
  },
];

export const milestones = [
  {
    year: "2006",
    title: "Company Founded",
    description:
      "Fortune Technical Services Inc. established in Monrovia, Liberia, with a fleet of 3 drill rigs and 12 personnel focused on water well development.",
  },
  {
    year: "2009",
    title: "First Major Mining Contract",
    description:
      "Secured first large-scale exploration drilling contract with a multinational mining company in Nimba County, marking entry into mineral exploration services.",
  },
  {
    year: "2012",
    title: "Fleet Expansion & ISO Certification",
    description:
      "Expanded to 22 drill rigs and heavy equipment fleet. Achieved ISO 9001:2008 quality management certification and ISO 14001 environmental certification.",
  },
  {
    year: "2015",
    title: "Geological Division Launch",
    description:
      "Launched dedicated geological services division with in-house geologists and laboratory capabilities for core analysis and resource estimation.",
  },
  {
    year: "2018",
    title: "Pan-African Expansion",
    description:
      "Extended operations to Sierra Leone, Guinea, and Côte d'Ivoire, establishing Fortune as a regional leader in West African mining services.",
  },
  {
    year: "2021",
    title: "Technology Integration",
    description:
      "Deployed drone LiDAR survey capabilities, real-time drill monitoring systems, and digital reporting platforms across all operational units.",
  },
  {
    year: "2024",
    title: "Premier Regional Contractor",
    description:
      "Recognized as Liberia's largest indigenous mining services company with 500+ completed projects, 42 engineers, and a zero LTI record since 2019.",
  },
];

export const values = [
  {
    title: "Safety First",
    description:
      "Zero-harm culture embedded in every operation. Our ISO 45001 certified HSE management system ensures every worker returns home safely.",
  },
  {
    title: "Precision Engineering",
    description:
      "Tight tolerances and rigorous quality controls define our work. We do not compromise on technical standards or reporting accuracy.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Responsible resource development that preserves ecosystems for future generations. Every project includes a comprehensive environmental management plan.",
  },
  {
    title: "Operational Excellence",
    description:
      "Delivering projects on time, within budget, and to specification. Our 99% client retention rate reflects our commitment to performance.",
  },
];

export const team = [
  {
    name: "Julius B. Igbaroola",
    role: "Chief Executive Officer (CEO)",
    credentials: "BSc Civil Engenering, ",
    bio: "33 years leading mining services operations across World.",
    imgUrl: "/images/team_1.png",
  },
  {
    name: "Jenneh Igbaroola",
    role: "Chief Geologist",
    credentials: "PhD Economic Geology, University of Cape Town",
    bio: "Former Senior Geologist with Anglo American. Expert in gold and iron ore deposit models.",
    imgUrl: "/images/team_2.png",
  },
  {
    name: "James Paye Jr.",
    role: "Director of Drilling Operations",
    credentials: "BSc Petroleum Engineering, Certified Driller",
    bio: "Oversees a fleet of 22 rigs with 15 years of rotary and DTH drilling experience.",
    imgUrl: "/images/team_3.png",
  },
  {
    name: "Comfort Dolo",
    role: "HSE Manager",
    credentials: "NEBOSH IGC, IOSH Managing Safely, ISO 45001 Lead Auditor",
    bio: "Maintained Fortune's zero LTI record since joining in 2019.",
    imgUrl: "/images/team_4.png",
  },
];

export const filterCategories = [
  "All",
  "Mining",
  "Drilling",
  "Survey",
  "Civil",
  "Fabrication",
];

export const contactInfo = {
  address: "BY MOTHER & CHILD CLINIC, CALDWELL NEW GEORGIA JUNCTION, MONROVIA. LIBERIA.",
  phones: ["+231 886 519 459", "+231 777 020 770"],
  emails: ["jennehfti@gmail.com", "fortunetechnicalservicesinc@outlook.com"],
  hours: "Mon–Fri: 08:00–18:00 | Emergency: 24/7",
};
