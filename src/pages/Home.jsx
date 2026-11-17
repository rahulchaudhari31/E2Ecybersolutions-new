import Hero from "../components/home/Hero.jsx";
import ClientLogoMarquee from "../components/home/ClientLogoMarquee.jsx";
import AboutTeaser from "../components/home/AboutTeaser.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import ProcessHorizontal from "../components/home/ProcessHorizontal.jsx";
import StatsCountup from "../components/home/StatsCountup.jsx";
import FeaturedWork from "../components/home/FeaturedWork.jsx";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel.jsx";
import CtaBand from "../components/home/CtaBand.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogoMarquee />
      <AboutTeaser />
      <ServicesGrid />
      <ProcessHorizontal />
      <StatsCountup />
      <FeaturedWork />
      <TestimonialsCarousel />
      <CtaBand />
    </>
  );
}
