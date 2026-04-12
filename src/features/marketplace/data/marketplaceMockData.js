const webCarImages = {
  creta: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
  baleno: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200",
  city: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1200",
  nexon: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200",
  thar: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200",
  punchEv: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200",
  xuv400: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1200",
  mgZs: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200",
  cretaEv: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const webBannerImages = {
  trustedMarketplace: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1600",
  buyerBenefits: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600",
  sellerBenefits: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1600",
  coverageAreas: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const marketplaceListings = [
  {
    id: "m1",
    title: "2021 Hyundai Creta SX",
    city: "Delhi",
    fuel: "Petrol",
    transmission: "Automatic",
    kms: 32000,
    price: 1249000,
    ownership: "First Owner",
    inspectionScore: "8.9/10",
    emiPerMonth: 24299,
    highlights: ["Service history available", "Zero major accident record", "New front tyres"],
    image: webCarImages.creta,
    sellerType: "Verified Seller",
  },
  {
    id: "m2",
    title: "2020 Maruti Baleno Alpha",
    city: "Gurugram",
    fuel: "Petrol",
    transmission: "Manual",
    kms: 41000,
    price: 748000,
    ownership: "Second Owner",
    inspectionScore: "8.2/10",
    emiPerMonth: 14699,
    highlights: ["Low maintenance hatchback", "Insurance valid for 9 months", "City driven"],
    image: webCarImages.baleno,
    sellerType: "Verified Seller",
  },
  {
    id: "m3",
    title: "2019 Honda City VX",
    city: "Noida",
    fuel: "Petrol",
    transmission: "Automatic",
    kms: 56000,
    price: 895000,
    ownership: "First Owner",
    inspectionScore: "8.5/10",
    emiPerMonth: 17499,
    highlights: ["Premium sedan comfort", "Automatic transmission", "Detailed inspection report"],
    image: webCarImages.city,
    sellerType: "Verified Seller",
  },
  {
    id: "m4",
    title: "2022 Tata Nexon XZ+",
    city: "Bangalore",
    fuel: "Diesel",
    transmission: "Manual",
    kms: 27000,
    price: 1080000,
    ownership: "First Owner",
    inspectionScore: "9.0/10",
    emiPerMonth: 20999,
    highlights: ["SUV stance with high ground clearance", "Diesel torque performance", "Partner warranty available"],
    image: webCarImages.nexon,
    sellerType: "Partner Seller",
  },
];

export const sellFlowSteps = [
  {
    id: 1,
    title: "Get Instant Quote",
    description:
      "Enter registration number and core details to get a quick estimated price.",
  },
  {
    id: 2,
    title: "Book Free Inspection",
    description:
      "Choose doorstep or hub inspection and select your preferred slot.",
  },
  {
    id: 3,
    title: "Accept Final Offer",
    description:
      "Review market-backed final offer and confirm sale within validity window.",
  },
  {
    id: 4,
    title: "Complete Payment & RC",
    description:
      "Receive same-day payout after verification while RC transfer tracking continues.",
  },
];

export const sellerChecklist = [
  "RC (Original)",
  "Insurance copy",
  "PUC certificate",
  "Aadhaar/PAN and address proof",
  "Bank NOC if financed",
];

export const marketplaceBanners = [
  {
    id: "banner-1",
    image: webBannerImages.trustedMarketplace,
    badge: "Trusted Marketplace",
    title: "Verified listings with transparent details",
    description:
      "Each car listing carries inspection highlights, ownership details, and city-level availability for faster decisions.",
  },
  {
    id: "banner-2",
    image: webBannerImages.buyerBenefits,
    badge: "Buyer Benefits",
    title: "Compare, short-list, and book confidently",
    description:
      "Use filters and compare mode to evaluate multiple cars side-by-side before moving to booking and support checks.",
  },
  {
    id: "banner-3",
    image: webBannerImages.sellerBenefits,
    badge: "Seller Benefits",
    title: "Instant quote to RC transfer in one flow",
    description:
      "Sellers can move from quote to inspection, final offer, and transfer tracking with guided, step-by-step support.",
  },
  {
    id: "banner-4",
    image: webBannerImages.coverageAreas,
    badge: "Coverage Areas",
    title: "Designed for metro and high-demand sectors",
    description:
      "Marketplace operations are prioritized for Delhi NCR, Bengaluru, and expansion sectors with verified partner support.",
  },
];

export const marketplaceHowToUse = [
  {
    id: 1,
    title: "Open Marketplace Hub",
    description:
      "Tap Open Marketplace from My Account to reach the dedicated vehicle trade dashboard.",
  },
  {
    id: 2,
    title: "Choose Buyer or Seller Journey",
    description:
      "Select Buying Page for verified listings or Selling Page for quote and inspection journey.",
  },
  {
    id: 3,
    title: "Fill Required Details",
    description:
      "Enter city, budget, and model preferences for buying, or registration and documents for selling.",
  },
  {
    id: 4,
    title: "Complete Guided Steps",
    description:
      "Follow in-app steps until booking confirmation or payout and RC transfer completion.",
  },
];

export const marketplaceCoverageSectors = [
  {
    id: "sector-1",
    title: "Urban Family Cars",
    description: "Hatchbacks and compact SUVs for daily commute and family usage.",
  },
  {
    id: "sector-2",
    title: "Executive Segment",
    description: "Premium sedans and feature-rich SUVs with inspection-backed listings.",
  },
  {
    id: "sector-3",
    title: "Commercial Ready Segment",
    description: "Fleet-friendly cars and multi-user compatibility checks for business needs.",
  },
];

export const marketplaceFaqs = [
  {
    id: "faq-1",
    question: "Is Marketplace separate from My Account dashboard?",
    answer:
      "Yes. My Account is focused on QR, profile, orders, and notifications. Marketplace has a dedicated dashboard for buy and sell journeys.",
  },
  {
    id: "faq-2",
    question: "How does DigiVahan verify listings?",
    answer:
      "Listings include inspection scores, owner history references, and seller profile checks before they are shown in buyer flow.",
  },
  {
    id: "faq-3",
    question: "What details are required for selling a car?",
    answer:
      "You need registration number, vehicle condition details, RC copy, insurance, and identity proof to proceed smoothly.",
  },
  {
    id: "faq-4",
    question: "Can I switch between buying and selling anytime?",
    answer:
      "Yes. The marketplace hub always provides quick links to both Buying Page and Selling Page.",
  },
];

export const buyingJourneySteps = [
  "Pick city, budget, and preferred model.",
  "Use compare to shortlist up to 3 verified options.",
  "Review inspection score, ownership, and finance estimate.",
  "Submit buyer intent and schedule verification call.",
  "Confirm booking after final discussion and document checks.",
];

export const sellingJourneySteps = [
  "Enter registration number and basic vehicle details.",
  "Get instant estimated quote based on market trend.",
  "Book doorstep or hub inspection slot.",
  "Accept final offer and confirm sale details.",
  "Track payment status and RC transfer milestone.",
];

export const marketplaceMostSearchedCars = [
  {
    id: "ms-1",
    name: "Tata Nexon",
    price: "Rs 8.2 - 15.8 Lakh",
    tag: "SUV",
    image: webCarImages.nexon,
  },
  {
    id: "ms-2",
    name: "Mahindra Thar",
    price: "Rs 11.5 - 17.6 Lakh",
    tag: "SUV",
    image: webCarImages.thar,
  },
  {
    id: "ms-3",
    name: "Hyundai Creta",
    price: "Rs 11.0 - 20.2 Lakh",
    tag: "SUV",
    image: webCarImages.creta,
  },
  {
    id: "ms-4",
    name: "Maruti Baleno",
    price: "Rs 6.6 - 9.8 Lakh",
    tag: "Hatchback",
    image: webCarImages.baleno,
  },
];

export const marketplaceElectricCars = [
  {
    id: "ev-1",
    name: "Tata Punch EV",
    price: "Rs 10.8 - 15.2 Lakh",
    range: "315 km",
    image: webCarImages.punchEv,
  },
  {
    id: "ev-2",
    name: "Mahindra XUV 400",
    price: "Rs 15.5 - 18.4 Lakh",
    range: "375 km",
    image: webCarImages.xuv400,
  },
  {
    id: "ev-3",
    name: "MG ZS EV",
    price: "Rs 18.9 - 24.9 Lakh",
    range: "461 km",
    image: webCarImages.mgZs,
  },
  {
    id: "ev-4",
    name: "Hyundai Creta EV",
    price: "Expected from Rs 18 Lakh",
    range: "Expected",
    image: webCarImages.cretaEv,
  },
];

export const marketplaceUpcomingCars = [
  {
    id: "up-1",
    name: "Toyota Urban Cruiser EV",
    launch: "Expected Jun 2026",
    image: webCarImages.cretaEv,
  },
  {
    id: "up-2",
    name: "Audi A6 2026",
    launch: "Expected Sep 2026",
    image: webCarImages.city,
  },
  {
    id: "up-3",
    name: "MG Majestor",
    launch: "Expected Jul 2026",
    image: webCarImages.mgZs,
  },
  {
    id: "up-4",
    name: "Kia EV5",
    launch: "Expected Oct 2026",
    image: webCarImages.xuv400,
  },
];

export const marketplacePopularBrands = [
  "Maruti Suzuki",
  "Tata",
  "Kia",
  "Toyota",
  "Hyundai",
  "Mahindra",
  "Honda",
  "Skoda",
];

export const marketplaceVisualStories = [
  {
    id: "story-1",
    title: "Hatchback for city users",
    image: webCarImages.baleno,
  },
  {
    id: "story-2",
    title: "Best family SUVs",
    image: webCarImages.nexon,
  },
  {
    id: "story-3",
    title: "Long range EV picks",
    image: webCarImages.punchEv,
  },
  {
    id: "story-4",
    title: "Top 4x4 used cars",
    image: webCarImages.thar,
  },
];

export const marketplaceCompareCards = [
  {
    id: "cmp-1",
    title: "Punch vs Nexon",
    subtitle: "Budget SUV compare",
    image: webCarImages.punchEv,
  },
  {
    id: "cmp-2",
    title: "Brezza vs Fronx",
    subtitle: "Best value for city",
    image: webCarImages.baleno,
  },
  {
    id: "cmp-3",
    title: "Virtus vs Verna",
    subtitle: "Sedan performance pair",
    image: webCarImages.city,
  },
  {
    id: "cmp-4",
    title: "Creta vs Seltos",
    subtitle: "Feature-rich SUV pair",
    image: webCarImages.creta,
  },
];

export const marketplaceCityCoverage = [
  "Ahmedabad",
  "Bengaluru",
  "Chennai",
  "Delhi NCR",
  "Gurugram",
  "Hyderabad",
  "Jaipur",
  "Kolkata",
  "Lucknow",
  "Mumbai",
  "Noida",
  "Pune",
];

export const marketplaceInsights = [
  {
    id: "ins-1",
    title: "How to check ownership before buying",
    summary: "A quick checklist to verify seller ownership and RC status before payment.",
    image: webCarImages.city,
  },
  {
    id: "ins-2",
    title: "Best used SUVs under Rs 12 lakh",
    summary: "Explore practical SUVs with balanced comfort, service support, and resale value.",
    image: webCarImages.nexon,
  },
  {
    id: "ins-3",
    title: "What impacts your final seller quote",
    summary: "Understand how kms, service records, and demand trends affect quote outcomes.",
    image: webCarImages.cretaEv,
  },
];
