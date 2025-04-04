import { Benefits } from "@/features/Benefits/Benefits";
import { Expertise } from "@/features/Expertise/Expertise";
import { Hero } from "@/features/Hero/Hero";
import { Sevrises } from "@/features/Sevrises/Sevrises";

export default function Home() {
  return <main>
    <Hero />
    <Sevrises />
    <Expertise />
    <Benefits />
  </main>;
}
