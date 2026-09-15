import type { MetadataRoute } from "next";
import { basePath, publicAsset } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tile Mart Peshawar",
    short_name: "Tile Mart",
    description: "Tiles and sanitary ware in Peshawar, Pakistan.",
    start_url: `${basePath || ""}/`,
    display: "standalone",
    background_color: "#f5f2eb",
    theme_color: "#0f6ea8",
    icons: [
      {
        src: publicAsset("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
