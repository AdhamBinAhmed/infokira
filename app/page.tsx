import { getWorks } from "./lib/works";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default function Home() {
  const works = getWorks();
  // Prefer images for the featured strip; fall back to whatever exists.
  const images = works.filter((w) => w.type === "image");
  const featured = (images.length >= 5 ? images : works).slice(0, 5);

  return <HomeClient featured={featured} totalCount={works.length} />;
}
