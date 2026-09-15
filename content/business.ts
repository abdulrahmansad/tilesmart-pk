export const business = {
  name: "Tile Mart",
  displayName: "Tile Mart Peshawar",
  city: "Peshawar",
  region: "Khyber Pakhtunkhwa",
  country: "Pakistan",
  postalCode: "25000",
  phone: "+92 343 5511501",
  whatsapp: "+92 333 9377919",
  address: {
    street: "Shops 24–27, Block B, Jan Plaza, Karkhano Market",
    locality: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    postalCode: "25000",
    country: "Pakistan",
  },
  coordinates: {
    latitude: 33.9987697,
    longitude: 71.4339328,
  },
  directionsUrl: "https://share.google/1l9C81NCHb86DDrYF",
  social: {
    tiktok: "https://www.tiktok.com/@tilesmartpk",
    youtube: "https://www.youtube.com/@tilemartpeshawar9290/featured",
    facebook: "https://www.facebook.com/profile.php?id=100063740152580",
  },
} as const;

export const tileCategories = [
  {
    slug: "floor-tiles",
    name: "Floor Tiles",
    short: "For living areas, bedrooms, kitchens and commercial spaces.",
    description:
      "Explore floor tile options for residential and commercial spaces. Contact Tile Mart for current sizes, finishes, designs and availability.",
  },
  {
    slug: "wall-tiles",
    name: "Wall Tiles",
    short: "Decorative and practical wall finishes for interior spaces.",
    description:
      "Find wall tile ideas for bathrooms, kitchens and feature walls, then ask the Tile Mart team what is currently available in the showroom.",
  },
  {
    slug: "bathroom-tiles",
    name: "Bathroom Tiles",
    short: "Tile combinations for bathroom floors, walls and complete schemes.",
    description:
      "Plan a complete bathroom look with coordinated floor and wall tile options. Availability, sizes and finishes can be confirmed directly with Tile Mart.",
  },
  {
    slug: "kitchen-tiles",
    name: "Kitchen Tiles",
    short: "Practical tile options for kitchen floors, walls and splash areas.",
    description:
      "Browse kitchen tile inspiration and contact Tile Mart for suitable current options for floors, walls and other tiled kitchen surfaces.",
  },
] as const;

export const sanitaryCategories = [
  {
    slug: "wash-basins",
    name: "Wash Basins",
    description: "Ask about current wash basin styles and bathroom combinations available through Tile Mart.",
  },
  {
    slug: "sanitary-ware",
    name: "Sanitary Ware",
    description: "Bathroom sanitary products and coordinated sets for new builds and renovation projects.",
  },
  {
    slug: "bathroom-sets",
    name: "Bathroom Sets",
    description: "Discuss coordinated bathroom product options and current showroom availability with the Tile Mart team.",
  },
] as const;

export const primaryCategories = [
  ...tileCategories.slice(0, 3),
  {
    slug: "sanitary-ware",
    name: "Sanitary Ware",
    short: "Bathroom fixtures, wash basins and coordinated sanitary solutions.",
    description: "Bathroom fixtures and sanitary solutions available through Tile Mart.",
  },
] as const;
