/** @type {import("drizzle-kit").Config} */

export default{
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABSE_URL,
  }
};