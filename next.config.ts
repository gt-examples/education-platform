import { withGTConfig } from 'gt-next/config';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default withGTConfig(nextConfig, {
  defaultLocale: "en",
  locales: ["en", "es", "fr", "ja", "zh"],
});
