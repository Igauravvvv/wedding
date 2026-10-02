import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { StoryTimeline } from "@/components/StoryTimeline";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WeddingDetails } from "@/components/WeddingDetails";
import { EventCards } from "@/components/EventCards";
import { FamilyIntro } from "@/components/FamilyIntro";
import { RSVPForm } from "@/components/RSVPForm";
import { Footer } from "@/components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <Navbar />
      <Hero />
      <Journey />
      <StoryTimeline />
      <PhotoGallery />
      <WeddingDetails />
      <EventCards />
      <FamilyIntro />
      <RSVPForm />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
