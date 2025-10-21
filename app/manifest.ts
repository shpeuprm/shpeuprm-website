import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SHPE UPRM - Society of Hispanic Professional Engineers",
    short_name: "SHPE UPRM",
    description:
      "Society of Hispanic Professional Engineers at University of Puerto Rico, Mayagüez Campus",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#003366",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
