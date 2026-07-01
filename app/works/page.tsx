import fs from "fs";
import path from "path";
import WorksClient from "./WorksClient";

// Disable static generation since we read from filesystem at runtime
export const dynamic = "force-dynamic";

export default function Works() {
  const worksDir = path.join(process.cwd(), "public", "works");
  
  let files: string[] = [];
  try {
    if (fs.existsSync(worksDir)) {
      files = fs.readdirSync(worksDir);
    }
  } catch (err) {
    console.error("Failed to read works directory", err);
  }

  // Filter and map to media items
  const mediaItems = files
    .filter(file => /\.(mp4|mov|webm|jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((file, index) => {
      const isVideo = /\.(mp4|mov|webm)$/i.test(file);
      return {
        id: `work-${index}`,
        src: `/works/${file}`,
        type: isVideo ? "video" as const : "image" as const,
        title: file.replace(/\.[^/.]+$/, ""), // remove extension
      };
    });

  return <WorksClient items={mediaItems} />;
}
