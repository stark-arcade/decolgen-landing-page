import About from "@/components/About";
import Header from "@/components/Header";
import OurProject from "@/components/OurProject";
import OurVision from "@/components/OurVision";
import Partners from "@/components/Partners";
import RoadMap from "@/components/Roadmap";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col overflow-hidden bg-body bg-cover bg-center p-4 md:p-0">
      <Header />
      <About />
      <OurVision />
      <OurProject />
      <RoadMap />
      <Partners />
    </main>
  );
}
