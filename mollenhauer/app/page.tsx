import { Benefits } from "@/features/Benefits/Benefits";
import { Clients } from "@/features/Clients/Clients";
import { Expertise } from "@/features/Expertise/Expertise";
import { Hero } from "@/features/Hero/Hero";
import { Partners } from "@/features/Partners/Partners";
import { Sevrises } from "@/features/Sevrises/Sevrises";
import { Support } from "@/features/Support/Support";
import { Team } from "@/features/Team/Team";
import { Contacts } from "@/features/Contacts/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sevrises />
      <Expertise />
      <Benefits />
      <Partners />
      <Clients />
      <Support />
      <Team />
      <Contacts />
    </main>
  );
}
