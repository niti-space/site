import { defineConfig, envField } from "astro/config";

const ORG_NAME = process.env.ORG_NAME;
const SITE_FQDN = process.env.SITE_FQDN || `${ORG_NAME}.github.io`;
const SITE_BASE_PATH = process.env.SITE_BASE_PATH;

export default defineConfig({
  site: `https://${SITE_FQDN}`,
  ...(SITE_BASE_PATH ? { base: SITE_BASE_PATH } : {}),
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
