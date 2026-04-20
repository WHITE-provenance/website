import type { NextConfig } from "next";

const isPagesExport = process.env.PAGES_EXPORT === "true";
const rawPagesBasePath = process.env.PAGES_BASE_PATH?.trim();
const normalizedPagesBasePath =
  rawPagesBasePath && rawPagesBasePath !== "/"
    ? rawPagesBasePath.replace(/\/+$/, "")
    : undefined;

const nextConfig: NextConfig = {
  ...(isPagesExport
    ? {
        output: "export",
        ...(normalizedPagesBasePath ? { basePath: normalizedPagesBasePath } : {}),
        trailingSlash: true,
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
