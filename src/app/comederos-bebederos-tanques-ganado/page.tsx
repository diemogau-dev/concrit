import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { LANDINGS } from "@/lib/landings";
import { landingMetadata } from "@/lib/seo";

const landing = LANDINGS.ganado;

export const metadata: Metadata = landingMetadata(landing);

export default function Page() {
  return <LandingPage landing={landing} />;
}
