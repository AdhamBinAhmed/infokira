import { getWorks } from "../lib/works";
import WorksClient from "./WorksClient";

// Read media from the filesystem at runtime
export const dynamic = "force-dynamic";

export default function Works() {
  return <WorksClient items={getWorks()} />;
}
