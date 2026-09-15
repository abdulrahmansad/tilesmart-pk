export const business = {
  name: "Tile Mart",
  city: "Peshawar",
  region: "Khyber Pakhtunkhwa",
  country: "Pakistan",
  phone: "+92 343 5511501",
  whatsapp: "+92 333 9377919",
  directionsUrl: "https://share.google/1l9C81NCHb86DDrYF",
  social: {
    tiktok: "https://www.tiktok.com/@tilesmartpk",
    youtube: "https://www.youtube.com/@tilemartpeshawar9290/featured",
    facebook: "https://www.facebook.com/profile.php?id=100063740152580",
  },
} as const;

export const primaryCategories = [
  {
    slug: "floor-tiles",
    name: "Floor Tiles",
    description: "Tile options for living spaces, bedrooms, kitchens and commercial interiors.",
  },
  {
    slug: "wall-tiles",
    name: "Wall Tiles",
    description: "Clean, decorative and architectural wall finishes for modern interiors.",
  },
  {
    slug: "bathroom-tiles",
    name: "Bathroom Tiles",
    description: "Wall and floor tile ideas for complete bathroom spaces.",
  },
  {
    slug: "sanitary-ware",
    name: "Sanitary Ware",
    description: "Bathroom fixtures and sanitary solutions available through Tile Mart.",
  },
] as const;
