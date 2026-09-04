import fs from "fs";
import path from "path";

export type MediaItem = {
  id: string;
  src: string;
  type: "image" | "video";
  title: string;
};

export function getWorks(): MediaItem[] {
  const worksDir = path.join(process.cwd(), "public", "works");

  let files: string[] = [];
  try {
    if (fs.existsSync(worksDir)) {
      files = fs.readdirSync(worksDir);
    }
  } catch (err) {
    console.error("Failed to read works directory", err);
  }

  return files
    .filter((file) => /\.(mp4|mov|webm|jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((file, index) => {
      const isVideo = /\.(mp4|mov|webm)$/i.test(file);
      return {
        id: `work-${index}`,
        src: `/works/${encodeURIComponent(file)}`,
        type: isVideo ? ("video" as const) : ("image" as const),
        title: file.replace(/\.[^/.]+$/, ""),
      };
    });
}
