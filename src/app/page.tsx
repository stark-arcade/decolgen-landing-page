import About from "@/components/About";
import ButtonBackTop from "@/components/Button/ButtonBackTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurProject from "@/components/OurProject";
import OurVision from "@/components/OurVision";
import Partners from "@/components/Partners";
import RoadMap from "@/components/Roadmap";

export default function Home() {
  return (
    <>
      <main className=" relative bg-body   p-4 md:p-0">
        <Header />
        <div className="flex flex-col gap-6 bg-body_art  bg-center ">
          <About />
          <OurVision />
          <OurProject />
        </div>

        <RoadMap />
        <Partners />
        <Footer />
        <div className=" fixed right-[5%] top-[80%]">
          <ButtonBackTop />
        </div>
      </main>
    </>
  );
}
