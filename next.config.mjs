import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Lock Turbopack to this app folder so a parent `package-lock.json` (e.g. in your user
  // home directory) is not treated as the workspace root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
