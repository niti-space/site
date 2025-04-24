import { defineConfig, envField } from "astro/config";

const {
  SITE_REPOSITORY_OWNER = "niti-space",
  SITE_FQDN = `${SITE_REPOSITORY_OWNER}.github.io`,
  SITE_BASE_PATH,
} = process.env;

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
      ORG_NAME: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      ORG_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      ORG_ADDRESS_CYR: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      ORG_ADDRESS_LAT: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      ORG_ADDRESS_GMAP_URL: envField.string({
        context: "client",
        access: "public",
        url: true,
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
    },
  },
});
