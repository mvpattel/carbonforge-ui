import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@carbonforge/ui"],
  webpack(config) {
    config.resolve.alias["@carbonforge/ui"] = resolve(__dirname, "../../packages/ui/src/index.ts");
    return config;
  }
};

export default nextConfig;
