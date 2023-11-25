import About from "@/components/About";
import Header from "@/components/Header";
import OurProject from "@/components/OurProject";
import OurVision from "@/components/OurVision";
import Partners from "@/components/Partners";
import RoadMap from "@/components/Roadmap";

export default function Home() {
  return (
    <main className=" bg-body bg-repeat-y  p-4 md:p-0">
      <Header />
      <div className="flex flex-col gap-6">
        <About />
        <OurVision />
        <OurProject />
        <RoadMap />
        <Partners />
      </div>
    </main>
  );
}
