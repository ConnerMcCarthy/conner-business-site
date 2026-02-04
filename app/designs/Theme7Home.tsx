import DarkBenefitsBand from "../components/DarkBenefitsBand";
import FeatureTiles from "../components/FeatureTiles";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SplitSection from "../components/SplitSection";
import { siteContent } from "../lib/Theme7Content";

export default function Theme7Home() {
  return (
    <main className="min-h-screen bg-[#f6f6f8] text-slate-900" id="top">
      <Navbar logo={siteContent.brand.logo} links={siteContent.navbar.links} cta={siteContent.navbar.cta} />

      <Hero
        headlineTop={siteContent.hero.headlineTop}
        headlineAccent={siteContent.hero.headlineAccent}
        subtext={siteContent.hero.subtext}
        cta={siteContent.hero.cta}
        image={siteContent.hero.image}
      />

      <FeatureTiles id="services" items={siteContent.features} />

      <SplitSection
        id="about"
        heading={siteContent.splitSection.heading}
        paragraphs={siteContent.splitSection.paragraphs}
        image={siteContent.splitSection.image}
        overlay={siteContent.splitSection.overlay}
      />

      <div id="contact" aria-hidden="true" className="relative -top-28" />

      <DarkBenefitsBand
        id="pricing"
        heading={siteContent.benefitsBand.heading}
        benefits={siteContent.benefitsBand.benefits}
        cta={siteContent.benefitsBand.cta}
      />

      <Footer id="client-center" logo={siteContent.brand.logo} links={siteContent.footer.links} />
    </main>
  );
}
