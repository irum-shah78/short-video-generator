/** @type {import("drizzle-kit").Config} */

export default{
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: "postgresql://neondb_owner:npg_8Btjlq5xHOaE@ep-shiny-fire-a8r9vta2-pooler.eastus2.azure.neon.tech/AI-Short-Video-Generator?sslmode=require",
  }
};
