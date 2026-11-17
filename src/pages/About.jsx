import Container from "../components/Container.jsx";
import Seo from "../components/Seo.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Card from "../components/Card.jsx";
import Icon from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import { StaggerGroup, StaggerItem } from "../components/Stagger.jsx";
import Marquee from "../components/Marquee.jsx";
import ContactCta from "../components/ContactCta.jsx";
import AboutTimeline from "../components/about/AboutTimeline.jsx";
import MissionVision from "../components/about/MissionVision.jsx";
import TeamGrid from "../components/about/TeamGrid.jsx";
import { aboutPage, serviceCategories } from "../data/siteContent.js";

const valueIcons = ["sparkles", "layers", "zap", "target"];

export default function About() {
  return (
    <>
      <Seo page={aboutPage} />
      <PageHeader page={aboutPage} />

      <AboutTimeline />

      <MissionVision />

      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="What drives us"
              title="Four beliefs shape every project."
              description="Not a list of platitudes, but the working principles that guide our strategy, design and delivery."
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2" amount={0.12}>
            {aboutPage.values.map((value, index) => (
              <StaggerItem key={value.title}>
                <Card interactive tilt padded={false} className="h-full p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-brand-gradient-soft text-accent-200">
                      <Icon name={valueIcons[index]} />
                    </span>
                    <span className="font-display text-body-xs tabular-nums text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-10 font-display text-h3 text-balance text-white">
                    {value.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-body-sm leading-relaxed text-white/50">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <div className="border-y border-white/10 bg-white/[0.025] py-6">
        <Marquee
          items={serviceCategories.map((category) => category.label)}
          label="Our service areas"
          reverse
          speed="36s"
          itemClassName="text-2xl sm:text-3xl lg:text-4xl text-white/70"
        />
      </div>

      <TeamGrid />

      <ContactCta
        eyebrow="Let's connect"
        title="Your next digital chapter starts with a conversation."
        description="Tell us what is changing in your market and where you want to go next. We will help you find the clearest route."
        primaryLabel={aboutPage.cta.label}
      />
    </>
  );
}
