import { Benefits } from "@/features/Benefits/Benefits";
import { Expertise } from "@/features/Expertise/Expertise";
import { Hero } from "@/features/Hero/Hero";
import { Partners } from "@/features/Partners/Partners";
import { Sevrises } from "@/features/Sevrises/Sevrises";

export default function Home() {
  return <main>
    <Hero />
    <Sevrises />
    <Expertise />
    <Benefits />
    <Partners />
  </main>;
}
