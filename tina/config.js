import { defineConfig } from "tinacms";

import { homepageFields } from "./templates";
import { pageFields } from "./templates";
import { campaignFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Homepage",
        name: "homepage",
        path: "/",
        match: {
          include: "index",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          ...homepageFields(),
          {
            type: "rich-text",
            name: "body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "/",
        match: {
          include: "*",
          exclude: "index",
        },
        fields: [
          ...pageFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        name: "campaign",
        label: "Campaigns",
        path: "_campaigns",
        fields: [
          ...campaignFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
