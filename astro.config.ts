import { defineConfig, envField } from "astro/config";

const SITE_URL = process.env.SITE_URL || "https://niti-space.github.io";

export default defineConfig({
  site: SITE_URL,
  base: "site",
  build: {
    assets: "static",
  },
  env: {
    schema: {
      SITE_NAME: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      SITE_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      TG_ADMIN_USERNAME: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      DIKIDI_ID: envField.number({
        context: "client",
        access: "public",
        default: 0,
      }),
      LOCATION: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      LOCATION_GOOGLE_MAP: envField.string({
        context: "client",
        access: "public",
        url: true,
        default: "",
      }),
    },
  },
});
