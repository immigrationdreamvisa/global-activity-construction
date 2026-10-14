import { ServiceItem, ProjectItem, CertificateItem, NewsItem, EquipmentItem, PartnerItem, Language } from '../types';

export const COMPANY_CONTACT = {
  name: 'Global Activity Construction',
  legalName: 'Global Activity MMC',
  established: '2008',
  phone1: '+994 50 233 55 45',
  phone2: '+994 12 597 77 77',
  phoneRaw: '+994502335545',
  email: 'office@globalactivity.az',
  addressNarimanov: 'Yusif Vazir Chamanzaminli 23, Narimanov District, Baku, Azerbaijan',
  addressBinegedi: 'M. Ə. Rəsulzadə settlement, station lane 1, Binəqədi District, Baku',
  workingHours: 'Monday – Sunday: 10:00 – 19:00',
  whatsappUrl: 'https://wa.me/994502335545?text=Hello%20Global%20Activity%20Construction%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  coordinates: '40.4093, 49.8671',
};

export const COMPANY_STATS = [
  { value: '1000K+', unit: 'm²', labelEn: 'Built Real Estate', labelAz: 'İnşa edilmiş sahə', labelRu: 'Построенная недвижимость', desc: 'Over 1 million square meters developed across Azerbaijan' },
  { value: '15+', unit: 'Years', labelEn: 'Industry Experience', labelAz: 'Tikinti təcrübəsi', labelRu: 'Лет опыта в строительстве', desc: 'Operating continuously and expanding capabilities since 2008' },
  { value: '50+', unit: 'Projects', labelEn: 'Completed Projects', labelAz: 'Tamamlanmış layihə', labelRu: 'Завершенных проектов', desc: 'Delivered in Baku, Sumgayit, Alat, Siyazan, and across the nation' },
  { value: '95%', unit: 'Rate', labelEn: 'Client Recommendation', labelAz: 'Müştəri tövsiyəsi', labelRu: 'Рекомендация клиентов', desc: 'Trusted by major private holdings and government entities' },
  { value: '98.8%', unit: 'On-Time', labelEn: 'Delivered On Schedule', labelAz: 'Vaxtında təhvil', labelRu: 'Сдано точно в срок', desc: 'Rigorous schedule control and engineering milestone tracking' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'road-infrastructure',
    title: 'Road and Infrastructure Construction',
    category: 'Civil & Transport',
    shortDescription: 'High-load asphalt paving, internal industrial road systems, base layer stabilization, curbing, and storm drainage infrastructure.',
    fullDescription: 'Global Activity Construction provides end-to-end highway, municipal street, and industrial plant road construction. Equipped with modern asphalt spreaders, heavy soil compactors, and laser-guided grading systems, we build roads capable of enduring extreme axial vehicle loads.',
    capabilities: [
      'Industrial plant internal road networks (chemical, metallurgical & grain facilities)',
      'Multi-layer asphalt concrete paving and base stabilization',
      'Curbs, drainage channels, culverts, and stormwater management systems',
      'Road widening, highway overpasses, and heavy-duty logistics access lanes'
    ],
    scope: 'Over 250,000 m² of high-durability roadway completed in Sumgayit, Garadagh, and Alat.',
    badge: 'Core Expertise'
  },
  {
    id: 'earthworks',
    title: 'Earthworks & Site Preparation',
    category: 'Engineering & Site Prep',
    shortDescription: 'Large-scale bulk excavation, deep foundation pits, soil stabilization, leveling, and site grading using GPS-controlled machinery.',
    fullDescription: 'Preparation of challenging terrains for industrial complexes, bridge crossings, and commercial developments. Our heavy equipment fleet delivers fast, accurate soil excavation, compaction, and grading according to European and Azerbaijani building codes.',
    capabilities: [
      'Mass bulk excavation and deep pit retention systems',
      'Laser-guided and 3D GPS leveling and land grading',
      'Soil stabilization, compaction, and geogrid reinforcement',
      'Backfilling and site drainage preparation'
    ],
    scope: 'Handled over 1.8M cubic meters of soil moved and compacted.',
    badge: 'Heavy Machinery'
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design & Greening',
    category: 'Exterior Architecture',
    shortDescription: 'Corporate campus greening, industrial facility surrounding landscaping, automatic irrigation, and decorative paving.',
    fullDescription: 'Comprehensive landscaping that transforms outdoor spaces into harmonious, eco-friendly environments. We combine architectural paving, custom hardscaping, drought-tolerant flora selection, and automated drip and sprinkler systems.',
    capabilities: [
      'Master planning and 3D architectural landscape visualization',
      'Corporate perimeter paving, sidewalks, and decorative stonework',
      'Automated intelligent irrigation and stormwater retention basins',
      'Ecological reclamation and industrial buffer zone greening'
    ],
    scope: '80,000+ m² landscaped public and industrial green zones.',
    badge: 'Aesthetic & Eco'
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    category: 'General Contracting',
    shortDescription: 'Full-cycle construction of office business centers, logistics terminals, manufacturing halls, and retail complexes.',
    fullDescription: 'From architectural concept to commissioning, Global Activity acts as the general contractor for modern commercial buildings. We coordinate structural engineering, MEP systems, facade glazing, and strict health and safety protocols on site.',
    capabilities: [
      'Turnkey multi-story commercial office facilities',
      'Logistics centers and high-capacity warehousing complexes',
      'Retail pavilions, business centers, and showroom premises',
      'Fire suppression, HVAC, electrical, and BMS integration'
    ],
    scope: 'Delivered turnkey commercial spaces for leading national enterprises.',
    badge: 'Turnkey Contract'
  },
  {
    id: 'design-engineering',
    title: 'Design and Engineering Solutions',
    category: 'Architectural & Engineering',
    shortDescription: 'Advanced 3D BIM modelling, structural engineering calculations, MEP design, and state expert examination permitting.',
    fullDescription: 'Our licensed design division uses Building Information Modeling (BIM) to detect clashes, optimize material consumption, and guarantee structural integrity before breaking ground. We prepare full working documentation complying with national norms (AzDTN).',
    capabilities: [
      'Architectural master design and detailed blueprints',
      'Structural calculation and seismic resistance engineering',
      'MEP (Mechanical, Electrical, Plumbing) engineering design',
      'State expert review approvals and construction permitting'
    ],
    scope: 'Over 60 licensed engineering dossiers completed and approved.',
    badge: 'Licensed BIM'
  },
  {
    id: 'private-construction',
    title: 'Private Construction',
    category: 'Residential',
    shortDescription: 'Bespoke residential estates, luxury villas, and private residential communities built with uncompromising craftsmanship.',
    fullDescription: 'Specialized private construction for discerning property owners in Baku, Absheron peninsula (Bilgah, Mardakan, Shuvalan), and regions. We construct custom concrete structures, bespoke stone facades, and integrated home automation infrastructures.',
    capabilities: [
      'Individual architectural design and bespoke villa engineering',
      'Reinforced monolith concrete frameworks and natural stone cladding',
      'Private swimming pools, terraces, and wellness pavilions',
      'Energy-efficient building envelopes and smart security integration'
    ],
    scope: 'Over 30 luxury private residences completed across Absheron.',
    badge: 'Bespoke Luxury'
  },
  {
    id: 'renovation-modernization',
    title: 'Renovation and Modernization',
    category: 'Reconstruction & Fitout',
    shortDescription: 'Capital reconstruction, structural retrofitting, energy-efficient facade modernization, and premium interior fit-out.',
    fullDescription: 'Upgrading existing industrial, administrative, and residential properties to modern technical standards. We perform structural retrofitting, facade thermal insulation, complete MEP renewals, and meticulous finish works.',
    capabilities: [
      'Structural reinforcement and load-bearing wall modifications',
      'Ventilated facade systems and energy modernization',
      'Interior demolition, acoustic partitioning, and luxury finishing',
      'Commercial office repurposing and industrial facility revamp'
    ],
    scope: 'Modernized more than 120,000 m² of administrative and industrial space.',
    badge: 'Modernization'
  },
  {
    id: 'metal-structure-production',
    title: 'Metal Structure Production',
    category: 'Industrial Manufacturing',
    shortDescription: 'Precision fabrication and erection of structural steel beams, trusses, columns, industrial hangars, and crane gantries.',
    fullDescription: 'Operating dedicated manufacturing facilities for high-strength steel frameworks. All weld seams undergo non-destructive ultrasonic testing, and components are protected with anti-corrosion sandblasting and epoxy primer coatings.',
    capabilities: [
      'Heavy structural steel columns, beams, and roof trusses',
      'Industrial hangars, agricultural silos, and warehouse framing',
      'Precision CNC cutting, certified ultrasonic weld testing',
      'Sandblasting, galvanizing, and industrial anti-corrosion coatings'
    ],
    scope: 'Manufactured and erected over 15,000 tons of structural steel.',
    badge: 'Certified Fabrication'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'socar-carbamide',
    title: 'SOCAR Carbamide Plant — Road Infrastructure & Paving',
    category: 'infrastructure',
    categoryLabel: 'Road & Infrastructure',
    location: 'Sumgayit Chemical Industrial Park, Azerbaijan',
    year: '2023–2024',
    client: 'SOCAR Carbamide / General Contractor Partner',
    description: 'Execution of comprehensive asphalt roadway systems, heavy transport access corridors, storm runoff channels, and concrete curbs inside the chemical plant facility.',
    scope: '65,000 m² high-load asphalt paving with polymer bitumen additive for chemical resistance.',
    metrics: '65,000 m² Roadway · 12,000 m Drainage Curbs',
    tags: ['Asphalt Paving', 'Industrial Infrastructure', 'Sumgayit', 'Chemical Plant']
  },
  {
    id: 'holcim-plant-roads',
    title: 'Holcim Azerbaijan — Heavy-Load Industrial Roadway Network',
    category: 'industrial',
    categoryLabel: 'Industrial Plant Infrastructure',
    location: 'Garadagh District, Baku, Azerbaijan',
    year: '2024',
    client: 'Holcim Azerbaijan (LafargeHolcim Group)',
    description: 'Capital construction and renewal of reinforced internal plant roads designed to endure round-the-clock circulation of 60-ton heavy raw material and cement bulk trucks.',
    scope: 'Sub-base soil stabilization, 3-layer high-density asphalt mix, and high-impact concrete curb barriers.',
    metrics: '42,000 m² Industrial Paving · Heavy Axle Load Rated',
    tags: ['Heavy Axle Road', 'Garadagh', 'Industrial Logistics', 'Holcim']
  },
  {
    id: 'baku-steel-sumgait',
    title: 'Baku Steel Company — Sumgait Heavy Foundations & Site Works',
    category: 'industrial',
    categoryLabel: 'Metallurgical Facility',
    location: 'Sumgayit, Azerbaijan',
    year: '2023',
    client: 'Baku Steel Company',
    description: 'Earthworks, deep foundation excavations, heavy reinforced concrete machine beds, and structural steel preparation for the metallurgical plant expansion.',
    scope: 'Deep pit stabilization, 8,500 m³ reinforced concrete foundation pour, and crane gantry support pads.',
    metrics: '8,500 m³ Concrete Pour · Heavy Machine Beds',
    tags: ['Heavy Foundations', 'Sumgayit', 'Metallurgy', 'Baku Steel']
  },
  {
    id: 'araz-river-bridge',
    title: 'Araz River Border Bridge & Pedestrian Crossing (Aghband - Kelaleh)',
    category: 'civil',
    categoryLabel: 'Civil & Border Crossing',
    location: 'Aghband (Azerbaijan) – Kelaleh (Iran) Border',
    year: '2023–2025',
    client: 'State Agency of Azerbaijan Automobile Roads / Border Infrastructure',
    description: 'Major international infrastructure project constructing connecting bridge approaches, pedestrian customs transit corridors, and specialized border inspection facilities.',
    scope: 'Civil engineering, approach embankment earthworks, retaining walls, and customs control terminal site prep.',
    metrics: 'Strategic International Corridor · Bridge Approaches',
    tags: ['Bridge Infrastructure', 'Border Crossing', 'Aghband', 'Civil Works']
  },
  {
    id: 'siyazan-grain-complex',
    title: 'Siyazan Grain Complex — Silo Foundations & Access Infrastructure',
    category: 'industrial',
    categoryLabel: 'Agro-Industrial Hub',
    location: 'Siyazan District, Azerbaijan',
    year: '2023',
    client: 'Siyazan Grain & Processing Plant',
    description: 'Mass earthworks, ring foundation construction for large grain storage silos, asphalt internal circulation roads, and truck weighbridge approach platforms.',
    scope: '14,000 m² concrete apron slab, deep foundation drilling, and 3.2 km internal transport road.',
    metrics: '14,000 m² Heavy Apron · Silo Deep Foundations',
    tags: ['Agro-Industrial', 'Siyazan', 'Silo Foundations', 'Earthworks']
  },
  {
    id: 'alat-free-zone',
    title: 'Alat Free Economic Zone (AFEZ) — Logistics Road & Site Leveling',
    category: 'infrastructure',
    categoryLabel: 'Free Economic Zone',
    location: 'Alat, Baku, Azerbaijan',
    year: '2024',
    client: 'AFEZ Development Authority & Logistics Operators',
    description: 'Site preparation, earthmoving, geogrid soil reinforcement, and heavy asphalt logistics corridors for commercial logistics parks located in the Caspian transit hub.',
    scope: '120,000 m³ bulk earthworks, base compaction, and dual-lane container truck bypass corridor.',
    metrics: '120,000 m³ Earthworks · AFEZ Transit Hub',
    tags: ['Logistics Corridor', 'Alat', 'AFEZ', 'Bulk Earthworks']
  },
  {
    id: 'caspian-waterfront-commercial',
    title: 'Caspian Waterfront Commercial Development & Hardscaping',
    category: 'commercial',
    categoryLabel: 'Commercial & Mixed-Use',
    location: 'White City / Seaside Promenade, Baku',
    year: '2024',
    client: 'Private Commercial Development Group',
    description: 'Structural fitout, architectural concrete plazas, premium natural stone hardscaping, underground utility integration, and illuminated exterior terraces.',
    scope: 'Multi-tiered pedestrian promenade, 18,000 m² granite and basalt paving, and architectural facade finishing.',
    metrics: '18,000 m² Granite Hardscaping · Turnkey Fitout',
    tags: ['Commercial', 'Baku Seaside', 'Hardscaping', 'Fitout']
  },
  {
    id: 'mardakan-luxury-villa',
    title: 'Private Estate & Contemporary Residence Complex',
    category: 'residential',
    categoryLabel: 'Private Residential',
    location: 'Mardakan – Bilgah Peninsula, Baku',
    year: '2023–2024',
    client: 'Private Client',
    description: 'Architectural engineering, reinforced monolith structure, travertine facade masonry, infinity swimming pool, and bespoke luxury interior turnkey finishing.',
    scope: '1,450 m² private residence, guest house, landscaped gardens, and smart home automation infrastructure.',
    metrics: '1,450 m² Turnkey · Bespoke Monolith & Travertine',
    tags: ['Private Luxury', 'Mardakan', 'Turnkey Residence', 'Monolith']
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'cert-license',
    title: 'Construction and installation license from the Ministry of Economy of the Republic of Azerbaijan',
    category: 'license',
    categoryLabel: 'State License',
    issuer: 'Ministry of Economy of the Republic of Azerbaijan',
    code: 'FHN / İN-08/1429-A',
    validity: 'Perpetual State License',
    description: 'Official construction and installation license authorizing Global Activity MMC to perform civil, industrial, high-rise, and road general contracting across the Republic of Azerbaijan.',
    standard: 'AzDTN 2.1-1',
    image: '/assets/images/certs/cert_1_2025_0005.png'
  },
  {
    id: 'cert-hse-ms',
    title: 'HSE-MS certificate from TUV-International',
    category: 'iso',
    categoryLabel: 'International Standards',
    issuer: 'TÜV International Certification',
    code: 'TUV-HSE-MS-2024',
    validity: 'Valid until 2027',
    description: 'Certification confirming Global Activity LLC has established and applies an integrated Health, Safety and Environment Management System (HSE-MS).',
    standard: 'HSE-MS',
    image: '/assets/images/certs/cert_8_ga_0002.png'
  },
  {
    id: 'cert-iso-45001',
    title: 'ISO 45001:2018 certificate from TUV-International',
    category: 'iso',
    categoryLabel: 'International Standards',
    issuer: 'TÜV International Certification',
    code: 'TUV-OHS-45001:2018',
    validity: 'Valid until 2027',
    description: 'International Occupational Health and Safety Management Systems certificate ensuring high site security and zero-compromise accident prevention.',
    standard: 'ISO 45001:2018',
    image: '/assets/images/certs/cert_7_2026_0006.png'
  },
  {
    id: 'cert-iso-14001',
    title: 'ISO 14001:2026 certificate from TUV-International',
    category: 'iso',
    categoryLabel: 'International Standards',
    issuer: 'TÜV International Certification',
    code: 'TUV-EMS-14001:2026',
    validity: 'Valid until 2027',
    description: 'Environmental Management System accreditation confirming strict waste handling, resource efficiency, and minimal environmental footprint during site execution.',
    standard: 'ISO 14001:2026',
    image: '/assets/images/certs/cert_5_2026_0007.png'
  },
  {
    id: 'cert-ims-compliance',
    title: 'Certificate of compliance with management standards from TUV-International',
    category: 'iso',
    categoryLabel: 'International Standards',
    issuer: 'TÜV International Certification',
    code: 'TUV-IMS-MGT-2024',
    validity: 'Valid until 2027',
    description: 'Comprehensive Integrated Management System (IMS) compliance certificate validating operational excellence, risk management, and governance.',
    standard: 'IMS Compliance',
    image: '/assets/images/certs/cert_6_2026_0009.png'
  },
  {
    id: 'cert-iso-9001',
    title: 'ISO 9001:2014 certificate from TUV-International',
    category: 'iso',
    categoryLabel: 'International Standards',
    issuer: 'TÜV International Certification',
    code: 'TUV-QMS-9001:2014',
    validity: 'Valid until 2027',
    description: 'Quality Management Systems accreditation validating high international engineering and construction quality assurance.',
    standard: 'ISO 9001:2014',
    image: '/assets/images/certs/cert_4_ga_0003.png'
  },
  {
    id: 'cert-2024-1085',
    title: 'Certificate No. 2024 1085',
    category: 'license',
    categoryLabel: 'State Certificate',
    issuer: 'Azerbaijan Republic State Authorities',
    code: '№ 2024 1085',
    validity: 'Official State Authorization',
    description: 'Official state certificate of accreditation and conformity issued to Global Activity LLC for general contracting and engineering operations.',
    standard: '№ 2024 1085',
    image: '/assets/images/certs/cert_2_ga_0005.png'
  },
  {
    id: 'cert-official-rep',
    title: 'Official Representative Certificate in the Republic of Azerbaijan',
    category: 'membership',
    categoryLabel: 'Official Representation',
    issuer: 'International Industry Federation / Ministry Partner',
    code: 'REP-AZ-2024-OFFICIAL',
    validity: 'Active Representation',
    description: 'Certificate designating Global Activity as an official authorized representative and contractor for specialized infrastructure and industrial technologies in Azerbaijan.',
    standard: 'Official Representative',
    image: '/assets/images/certs/cert_3_ga_0004.png'
  }
];

export const EQUIPMENT_FLEET: EquipmentItem[] = [
  {
    id: 'cat-336-excavator',
    name: 'Caterpillar CAT 336 Heavy Crawler Excavator',
    category: 'Excavation & Earthmoving',
    model: 'CAT 336D2 L / 36-Ton',
    description: 'Heavy hydraulic crawler excavator engineered for demanding mass earthworks, rock breaking, and deep foundation trenching with high fuel efficiency.',
    specs: [
      { label: 'Operating Weight', value: '37,200 kg' },
      { label: 'Bucket Capacity', value: '2.4 m³' },
      { label: 'Max Digging Depth', value: '7.52 m' },
      { label: 'Engine Power', value: '232 kW / 311 hp' }
    ],
    availability: 'Available with Certified Operator'
  },
  {
    id: 'komatsu-d65-bulldozer',
    name: 'Komatsu D65 Heavy Crawler Bulldozer',
    category: 'Grading & Leveling',
    model: 'D65EX-16 with 3D GPS Grade Control',
    description: 'Precision crawler dozer with Sigmadozer blade and satellite GPS grade guidance for high-output mass leveling, highway subgrade, and embankment shaping.',
    specs: [
      { label: 'Operating Weight', value: '21,500 kg' },
      { label: 'Blade Capacity', value: '5.6 m³' },
      { label: 'Ground Pressure', value: '58 kPa' },
      { label: 'Guidance System', value: 'Topcon 3D-GPS Integrated' }
    ],
    availability: 'Ready for Immediate Deployment'
  },
  {
    id: 'mercedes-actros-tipper',
    name: 'Mercedes-Benz Actros 3340 (6x4) Heavy Tipper Truck',
    category: 'Haulage & Transport',
    model: 'Actros 3340K Tipper 22 m³',
    description: 'Robust tri-axle dump truck equipped with heavy-duty Meiller-Kipper steel body for transport of soil, crushed stone, asphalt mix, and bulk materials.',
    specs: [
      { label: 'Body Volume', value: '22 m³' },
      { label: 'Payload Capacity', value: '26,000 kg' },
      { label: 'Drive Configuration', value: '6x4 All-Traction' },
      { label: 'Engine', value: 'V6 Turbo 394 hp' }
    ],
    availability: 'Fleet of 8 Units Available'
  },
  {
    id: 'hamm-3411-roller',
    name: 'Hamm 3411 Single Drum Soil Compactor',
    category: 'Compaction',
    model: 'Hamm 3411 Smooth & Padfoot Drum',
    description: 'Heavy soil compaction roller with high compaction depth, oscillation system, and compaction meter for subgrade roads, dam embankments, and industrial pads.',
    specs: [
      { label: 'Operating Weight', value: '12,250 kg' },
      { label: 'Drum Width', value: '2,140 mm' },
      { label: 'Centrifugal Force', value: '246 kN' },
      { label: 'Compaction Meter', value: 'Continuous Density Sensor' }
    ],
    availability: 'Available for Short & Long Term'
  },
  {
    id: 'vogele-super-paver',
    name: 'Vögele Super 1800-3 Asphalt Paver',
    category: 'Road Paving',
    model: 'Vögele Super 1800-3 with Electric Screed',
    description: 'State-of-the-art asphalt paver providing crown and slope control for highway, airport runway, and industrial plant roadway paving up to 10m wide.',
    specs: [
      { label: 'Paving Width', value: '2.55 m – 10.0 m' },
      { label: 'Laydown Rate', value: 'Up to 700 tonnes/h' },
      { label: 'Hopper Capacity', value: '13 tonnes' },
      { label: 'Screed Heating', value: 'Electrical High-Compaction' }
    ],
    availability: 'Available with Paving Crew'
  },
  {
    id: 'liebherr-ltm-crane',
    name: 'Liebherr LTM 1050-3.1 All-Terrain Mobile Crane',
    category: 'Lifting & Rigging',
    model: 'Liebherr 50-Ton Mobile Crane',
    description: 'Compact 3-axle mobile crane with telescopic boom for structural steel assembly, precast concrete placement, and industrial machinery positioning.',
    specs: [
      { label: 'Max Lifting Capacity', value: '50 tonnes at 3 m' },
      { label: 'Telescopic Boom', value: '38 m (Extension up to 54 m)' },
      { label: 'Axles', value: '3 (6x6x6 Steering)' },
      { label: 'Safety System', value: 'LICCON 2 Computerized Limiter' }
    ],
    availability: 'Certified Crane Operator Included'
  }
];

export const PARTNERS_DATA: PartnerItem[] = [
  { id: 'socar', name: 'SOCAR', sector: 'Oil & Petrochemicals', description: 'State Oil Company of Azerbaijan Republic — road infrastructure contractor' },
  { id: 'holcim', name: 'Holcim Azerbaijan', sector: 'Building Materials', description: 'LafargeHolcim Group — industrial internal road network contractor' },
  { id: 'baku-steel', name: 'Baku Steel Company', sector: 'Metallurgy', description: 'Sumgait metallurgical plant foundation and structural works' },
  { id: 'afez', name: 'Alat Free Economic Zone (AFEZ)', sector: 'Special Economic Zone', description: 'Logistics corridor and site preparation works in Alat hub' },
  { id: 'siyazan', name: 'Siyazan Grain Complex', sector: 'Agro-Industry', description: 'Industrial silo platforms, access networks, and bulk handling pads' },
  { id: 'transport-ministry', name: 'Ministry of Transport', sector: 'State Infrastructure', description: 'State Agency of Azerbaijan Automobile Roads project partner' },
  { id: 'fifa', name: 'FIFA Infrastructure', sector: 'Sports Administration', description: 'Contracted for regional administrative infrastructure construction' },
  { id: 'azdt', name: 'Azersun Holding', sector: 'Industry & Food Processing', description: 'Commercial infrastructure and logistics park engineering' }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'fifa-agreement',
    title: 'Global Activity Construction Signs International Infrastructure Agreement',
    category: 'Corporate Milestone',
    date: 'July 19, 2026',
    readTime: '4 min read',
    excerpt: 'Global Activity Construction has successfully concluded an international engineering agreement with FIFA for construction works on strategic administrative and sporting facilities.',
    content: [
      'In a landmark demonstration of regional engineering caliber, Global Activity Construction has officially entered into a development agreement with the Federation Internationale de Football Association (FIFA).',
      'The scope encompasses structural engineering, seismic compliance calculations, and turnkey administrative building construction adhering to the highest international FIFA technical facility standards.',
      'Our team is honored by this international mandate, which underscores over 15 years of rigorous engineering standards and our capacity to execute high-profile civil works across international borders.'
    ]
  },
  {
    id: 'holcim-completion',
    title: 'Successful Completion of Heavy-Load Industrial Roadway at Holcim Plant',
    category: 'Project Delivery',
    date: 'May 12, 2026',
    readTime: '3 min read',
    excerpt: 'Our infrastructure division has delivered 42,000 square meters of specialized heavy-axle road network inside the Holcim cement production plant in Garadagh.',
    content: [
      'Industrial plants require roads engineered to withstand continuous 60-ton axle loads without deformation or rutting. Global Activity deployed a multi-stage compaction and polymer-modified asphalt concrete solution for Holcim Azerbaijan.',
      'The project was executed ahead of schedule with zero safety incidents, maintaining 100% operational throughput for plant delivery trucks during construction.',
      'Holcim executives praised the precision, HSE standard compliance, and durable pavement quality achieved by Global Activity’s road crew.'
    ]
  },
  {
    id: 'bakubuild-participation',
    title: 'Global Activity Showcases Advanced BIM & Automated Machinery at BakuBuild',
    category: 'Industry & Technology',
    date: 'March 28, 2026',
    readTime: '5 min read',
    excerpt: 'At the 30th BakuBuild International Construction Exhibition, Global Activity presented its 3D BIM integration and GPS-automated earthwork solutions.',
    content: [
      'BakuBuild is the Caspian region’s premier construction symposium. Global Activity Construction’s booth highlighted digital twin modeling, automated laser-guided grading, and pre-engineered metal structure capabilities.',
      'Over 200 prospective developers, municipal representatives, and industrial operators visited our exhibit to discuss turnkey construction partnerships.',
      'We remain dedicated to bringing the world’s most advanced engineering practices to Azerbaijan’s ongoing national infrastructure expansion.'
    ]
  },
  {
    id: 'araz-bridge-progress',
    title: 'Progress Milestone Reached at Araz River Border Crossing Project',
    category: 'Civil Infrastructure',
    date: 'January 15, 2026',
    readTime: '4 min read',
    excerpt: 'Approach earthworks and customs transit foundation systems for the Aghband–Kelaleh bridge have crossed the 80% completion mark.',
    content: [
      'The Araz River border crossing represents a vital international transit nexus linking Azerbaijan with regional transit corridors. Global Activity Construction continues round-the-clock earth stabilization and approach embankment construction.',
      'Engineering teams have handled over 250,000 cubic meters of riverbed soil stabilization and installed heavy-duty concrete retaining structures to protect against seasonal water level variations.',
      'The project is on track to meet all scheduled commissioning deadlines established by the state authorities.'
    ]
  }
];

export const REPAIR_DIVISION_INFO = {
  heading: 'Global Activity Repair — a home you want to come back to',
  tagline: 'Specialized private construction, architectural design, and bespoke interior renovation division.',
  subsections: [
    {
      id: 'design-arch',
      number: '01',
      title: 'Design and Architecture',
      description: 'Comprehensive 3D visualizations, spatial layout planning, custom lighting scenarios, and curated finishing material specification boards tailored to the client’s lifestyle.'
    },
    {
      id: 'project-doc',
      number: '02',
      title: 'Project Documentation',
      description: 'Rigorous architectural working drawings, electrical wiring schematics, HVAC layouts, plumbing nodes, and precise structural calculations complying with national building codes.'
    },
    {
      id: 'finish-works',
      number: '03',
      title: 'Construction and Finishing Works',
      description: 'Master-level plastering, acoustic soundproofing, bespoke carpentry, premium Italian porcelain tiling, Venetian stucco, and natural stone fireplace installations.'
    },
    {
      id: 'direct-exec',
      number: '04',
      title: 'Direct Project Execution',
      description: 'Full in-house execution under strict daily technical supervision. No subcontracting compromises — every artisan is certified and managed by dedicated project engineers.'
    },
    {
      id: 'warranty-support',
      number: '05',
      title: 'Post-Warranty Support',
      description: 'Complete peace of mind with 36 months of comprehensive warranty coverage, routine maintenance inspections, and rapid-response technical assistance.'
    }
  ]
};

export const WHY_CHOOSE_US_ADVANTAGES = [
  {
    id: 'quality',
    number: '01',
    title: 'Quality and Control',
    description: 'Certified premium materials, rigorous laboratory testing of concrete and asphalt, and independent technical supervision on every site.'
  },
  {
    id: 'delivery',
    number: '02',
    title: 'On-Time Delivery',
    description: 'Over 98.8% of projects delivered precisely within agreed timelines through critical-path scheduling and dedicated resource allocation.'
  },
  {
    id: 'tech',
    number: '03',
    title: 'Innovative Technologies',
    description: '3D BIM architectural modeling, satellite GPS automated machinery guidance, and energy-efficient building envelope systems.'
  },
  {
    id: 'approach',
    number: '04',
    title: 'Tailored Approach',
    description: 'Flexible solutions customized for distinct client scales, budgets, and operational requirements — from private villas to large industrial hubs.'
  },
  {
    id: 'transparency',
    number: '05',
    title: 'Transparency and Accountability',
    description: 'Detailed stage-by-stage transparent cost estimation, weekly drone progress reports, and direct engineer communication throughout execution.'
  },
  {
    id: 'full-cycle',
    number: '06',
    title: 'Full-Cycle Services',
    description: 'Complete single-point accountability from initial geotechnical surveys and architectural design to commissioning and state registry handover.'
  }
];

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navProjects: 'Projects',
    navRepair: 'Global Activity Repair',
    navEquipment: 'Equipment',
    navCertificates: 'Licenses & Certificates',
    navNews: 'News',
    navContact: 'Contact',
    btnContactUs: 'Contact Us',
    btnRequestQuote: 'Request Quote',
    btnExploreProjects: 'Explore Our Projects',
    btnLearnMore: 'Learn More',
    btnInquireRental: 'Inquire About Rental',
    btnSubmitRequest: 'Submit Request',
    btnViewCertificate: 'View Certificate Details',
    heroKicker: 'Leading Engineering & General Contracting in Azerbaijan',
    heroHeadline: 'Building the future by delivering ambitious projects',
    heroSubtext: 'Over the years of operating in Azerbaijan, we have built a team of experienced professionals who confidently take on projects of any complexity and turn ideas into reality.',
    statsTitle: 'Proven Performance in Azerbaijani Construction',
    aboutHeading: 'About Global Activity Construction',
    aboutSub: 'Engineering Excellence & Sustainable Construction Since 2008',
    aboutText1: 'Global Activity Construction (Global Activity MMC) was established in 2008 in Baku. Over more than 15 years of continuous growth, the company has established itself as one of Azerbaijan’s foremost engineering and construction general contractors.',
    aboutText2: 'Our expertise spans high-complexity civil infrastructure, heavy road networks, industrial facilities, commercial business centers, and bespoke residential architecture. Operating under certified ISO 9001, 14001, and 45001 standards, our multi-disciplinary team turns visionary blueprints into enduring national infrastructure.',
    whyChooseHeading: 'Why Choose Global Activity?',
    whyChooseSub: 'Setting uncompromising benchmarks for quality, reliability, and precision across Azerbaijan.',
    servicesHeading: 'Construction Services',
    servicesSub: 'Comprehensive full-cycle engineering, contracting, and specialized construction capabilities.',
    projectsHeading: 'Project Gallery',
    projectsSub: 'Milestone infrastructure, industrial, commercial, and residential projects delivered across Azerbaijan.',
    repairHeading: 'Global Activity Repair — a home you want to come back to',
    repairSub: 'Our specialized private construction, architectural design, and interior renovation division.',
    rentalHeading: 'Construction Equipment Rental',
    rentalSub: 'Heavy hydraulic machinery, asphalt paving equipment, and transport fleet ready for rapid mobilization.',
    certsHeading: 'Licenses & Official Certificates',
    certsSub: 'Certified management systems, state construction licenses, and international compliance credentials.',
    partnersHeading: 'Strategic Partners & Clients',
    partnersSub: 'Trusted by Azerbaijan’s premier state and private enterprise leaders.',
    newsHeading: 'Company News & Updates',
    newsSub: 'Latest developments, contract awards, project milestones, and technological innovations.',
    contactHeading: 'Contact us — we’ll help you find the right solution for your needs',
    contactSub: 'Our senior engineering consultants are ready to discuss your project requirements, prepare detailed estimates, or arrange an on-site technical inspection.',
    fullName: 'Full Name',
    companyName: 'Company Name (Optional)',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    serviceOfInterest: 'Service of Interest',
    projectDescription: 'Project Description & Scope',
    submitInquiry: 'Send Project Inquiry',
    whatsappPrompt: 'Chat with our Project Director on WhatsApp',
    footerRights: 'All rights reserved. Global Activity Construction MMC.',
    cookieNotice: 'This website uses essential cookies to ensure optimal functionality, analytics, and smooth browsing experience.'
  },
  az: {
    navHome: 'Əsas Səhifə',
    navAbout: 'Haqqımızda',
    navServices: 'Xidmətlər',
    navProjects: 'Layihələr',
    navRepair: 'Global Activity Repair',
    navEquipment: 'Texnika İcarəsi',
    navCertificates: 'Lisenziya və Sertifikatlar',
    navNews: 'Xəbərlər',
    navContact: 'Əlaqə',
    btnContactUs: 'Bizimlə Əlaqə',
    btnRequestQuote: 'Qiymət Təklifi Alın',
    btnExploreProjects: 'Layihələrimizlə Tanış Olun',
    btnLearnMore: 'Ətraflı',
    btnInquireRental: 'Texnika İcarəsi Üzrə Müraciət',
    btnSubmitRequest: 'Müraciəti Göndər',
    btnViewCertificate: 'Sertifikata Baxış',
    heroKicker: 'Azərbaycanda Qabaqcıl Mühəndislik və Tikinti Baş Podratçısı',
    heroHeadline: 'İddialı layihələri həyata keçirərək gələcəyi qururuq',
    heroSubtext: 'Azərbaycanda fəaliyyət göstərdiyimiz illər ərzində istənilən mürəkkəblikdə olan layihələri inamla icra edən və ideyaları reallığa çevirən təcrübəli peşəkarlar komandası formalaşdırmışıq.',
    statsTitle: 'Azərbaycan Tikinti Sektorunda Təsdiq Edilmiş Nəticələr',
    aboutHeading: 'Global Activity Tikinti Şirkəti Haqqında',
    aboutSub: '2008-ci ildən bəri Mühəndislik Mükəmməlliyi və Dayanıqlı Tikinti',
    aboutText1: 'Global Activity Construction (Global Activity MMC) 2008-ci ildə Bakı şəhərində təsis edilmişdir. 15 ildən artıq davamlı inkişaf yolu keçən şirkət, ölkənin ən etibarlı mühəndislik və tikinti podratçılarından birinə çevrilmişdir.',
    aboutText2: 'Fəaliyyətimiz mürəkkəb yol və infrastruktur tikintisi, sənaye müəssisələri, kommersiya biznes mərkəzləri və fərdi yaşayış villalarını əhatə edir. ISO 9001, 14001 və 45001 beynəlxalq standartlarına uyğun çalışan peşəkar komandamız layihələri yüksək dəqiqliklə icra edir.',
    whyChooseHeading: 'Niyə Global Activity?',
    whyChooseSub: 'Keyfiyyət, etibarlılıq və mühəndislik dəqiqliyi üzrə yüksək standartlar təqdim edirik.',
    servicesHeading: 'Tikinti Xidmətlərimiz',
    servicesSub: 'Layihələndirmədən istismara verilməyədək tam dövrəli tikinti və mühəndislik həlləri.',
    projectsHeading: 'Layihələr Qalereyası',
    projectsSub: 'Azərbaycan boyunca uğurla təhvil verilmiş strateji infrastruktur, sənaye və yaşayış layihələri.',
    repairHeading: 'Global Activity Repair — qayıtmaq istədiyiniz ev',
    repairSub: 'Fərdi tikinti, memarlıq dizaynı və premium təmir üzrə ixtisaslaşmış bölməmiz.',
    rentalHeading: 'Tikinti Texnikasının İcarəsi',
    rentalSub: 'Müasir hidravlik ekskavatorlar, buldozerlər, asfalt döşəyənlər və yük maşınları parkı.',
    certsHeading: 'Lisenziyalar və Sertifikatlar',
    certsSub: 'Dövlət tikinti lisenziyaları, beynəlxalq ISO sertifikatları və sahəvi təsdiqlər.',
    partnersHeading: 'Tərəfdaşlarımız və Müştərilərimiz',
    partnersSub: 'Azərbaycanın qabaqcıl dövlət və özəl holdinqlərinin etibarlı tərəfdaşı.',
    newsHeading: 'Xəbərlər və Yeniliklər',
    newsSub: 'Şirkətimizin son nailiyyətləri, müqavilələri və texnoloji yenilikləri.',
    contactHeading: 'Bizimlə əlaqə saxlayın — ehtiyaclarınıza uyğun həlli birlikdə tapaq',
    contactSub: 'Mühəndislərimiz layihənizi müzakirə etməyə, xərclər smetasını hazırlamağa və texniki baxış təşkil etməyə hazırdır.',
    fullName: 'Ad və Soyad',
    companyName: 'Şirkət Adı (Könüllü)',
    emailAddress: 'E-poçt Ünvanı',
    phoneNumber: 'Əlaqə Nömrəsi',
    serviceOfInterest: 'Maraqlandığınız Xidmət',
    projectDescription: 'Layihənin Təsviri və Tələblər',
    submitInquiry: 'Müraciəti Göndər',
    whatsappPrompt: 'WhatsApp ilə birbaşa əlaqə saxlayın',
    footerRights: 'Bütün hüquqlar qorunur. Global Activity Construction MMC.',
    cookieNotice: 'Bu sayt təcrübənizi yaxşılaşdırmaq və funksionallığı təmin etmək üçün kukilərdən (cookies) istifadə edir.'
  },
  ru: {
    navHome: 'Главная',
    navAbout: 'О нас',
    navServices: 'Услуги',
    navProjects: 'Проекты',
    navRepair: 'Global Activity Repair',
    navEquipment: 'Аренда техники',
    navCertificates: 'Лицензии и сертификаты',
    navNews: 'Новости',
    navContact: 'Контакты',
    btnContactUs: 'Связаться с нами',
    btnRequestQuote: 'Запросить расчет',
    btnExploreProjects: 'Наши проекты',
    btnLearnMore: 'Подробнее',
    btnInquireRental: 'Запрос на аренду техники',
    btnSubmitRequest: 'Отправить заявку',
    btnViewCertificate: 'Просмотреть сертификат',
    heroKicker: 'Ведущий генеральный подрядчик и инжиниринг в Азербайджане',
    heroHeadline: 'Строим будущее, реализуя масштабные и амбициозные проекты',
    heroSubtext: 'За годы работы в Азербайджане мы сформировали команду опытных профессионалов, которые уверенно берутся за проекты любой сложности и воплощают идеи в реальность.',
    statsTitle: 'Проверенные результаты в строительном секторе',
    aboutHeading: 'О компании Global Activity Construction',
    aboutSub: 'Инженерное совершенство и надежное строительство с 2008 года',
    aboutText1: 'Global Activity Construction (ООО «Global Activity») была основана в 2008 году в Баку. За более чем 15 лет динамичного развития компания зарекомендовала себя как один из ведущих генеральных подрядчиков Азербайджана.',
    aboutText2: 'Мы специализируемся на дорожно-транспортной инфраструктуре, промышленных объектах, коммерческих центрах и элитном жилом строительстве. Работая в соответствии с международными стандартами ISO 9001, 14001 и 45001, мы реализуем проекты высшего уровня надежности.',
    whyChooseHeading: 'Почему Global Activity?',
    whyChooseSub: 'Высочайшие стандарты качества, пунктуальности и прозрачности по всему Азербайджану.',
    servicesHeading: 'Строительные услуги',
    servicesSub: 'Полный комплекс проектных, генподрядных и специализированных строительных работ.',
    projectsHeading: 'Галерея проектов',
    projectsSub: 'Ключевые инфраструктурные, промышленные, коммерческие и жилые проекты в Азербайджане.',
    repairHeading: 'Global Activity Repair — дом, в который хочется возвращаться',
    repairSub: 'Наше специализированное подразделение частного строительства, архитектурного дизайна и ремонта.',
    rentalHeading: 'Аренда строительной техники',
    rentalSub: 'Парк тяжелых гидравлических экскаваторов, бульдозеров, катков и самосвалов.',
    certsHeading: 'Лицензии и сертификаты',
    certsSub: 'Государственные строительные лицензии, международные сертификаты ISO и отраслевые допуски.',
    partnersHeading: 'Партнеры и клиенты',
    partnersSub: 'Нам доверяют лидеры государственного и частного сектора Азербайджана.',
    newsHeading: 'Новости и события',
    newsSub: 'Последние новости компании, подписанные соглашения и технологические достижения.',
    contactHeading: 'Свяжитесь с нами — поможем найти оптимальное решение для вашего проекта',
    contactSub: 'Наши ведущие инженеры готовы обсудить детали проекта, рассчитать смету и организовать выезд на объект.',
    fullName: 'Имя и Фамилия',
    companyName: 'Название компании (необязательно)',
    emailAddress: 'Электронная почта',
    phoneNumber: 'Номер телефона',
    serviceOfInterest: 'Интересующая услуга',
    projectDescription: 'Описание проекта и объемы работ',
    submitInquiry: 'Отправить заявку',
    whatsappPrompt: 'Написать напрямую в WhatsApp',
    footerRights: 'Все права защищены. Global Activity Construction MMC.',
    cookieNotice: 'Мы используем файлы cookie для оптимизации работы сайта и обеспечения лучшего пользовательского опыта.'
  }
};
