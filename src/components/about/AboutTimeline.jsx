import Container from "../Container.jsx";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";
import Icon from "../Icons.jsx";
import { aboutPage } from "../../data/siteContent.js";

const chapters = [
  {
    number: "01",
    title: "A digital wing of e2e World",
    paragraph: aboutPage.paragraphs[0],
  },
  {
    number: "02",
    title: "A decade of digital shift",
    paragraph: aboutPage.paragraphs[1],
  },
  {
    number: "03",
    title: "The missing link",
    paragraph: aboutPage.paragraphs[2],
  },
];

export default function AboutTimeline() {
  return (
    <section className="light-section relative overflow-hidden py-section">
      <div aria-hidden="true" className="grid-lines-light absolute inset-0" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="The story"
                title="Digital is not a channel. It is the connection."
                description="The e2e Cyber Solutions story is built around one shift: the way brands and consumers meet, communicate and choose."
                light
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mt-8 overflow-hidden rounded-4xl bg-night-950 p-6 text-white shadow-card sm:p-7">
                <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-40" />
                <div className="relative">
                  <p className="font-display text-eyebrow uppercase text-accent-300">
                    Part of the e2e World
                  </p>
                  <p className="mt-4 font-display text-h3 text-balance">
                    An integrated web development, marketing and creative agency.
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="font-display text-h2 text-white">10+</p>
                      <p className="mt-1 text-body-xs text-white/40">years of digital shift</p>
                    </div>
                    <div>
                      <p className="font-display text-h2 text-white">1,000+</p>
                      <p className="mt-1 text-body-xs text-white/40">clients to our credit</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[1.45rem] top-8 w-px bg-gradient-to-b from-accent-600/40 via-iris-500/25 to-transparent sm:left-[1.7rem]"
            />

            <ol className="space-y-4">
              {chapters.map((chapter, index) => (
                <li key={chapter.number} className="group relative">
                  <Reveal delay={index * 0.06}>
                    <div className="grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-ink-950/10 bg-white font-display text-[10px] tabular-nums text-accent-700 shadow-card-light transition duration-500 group-hover:border-accent-600/30 sm:h-14 sm:w-14">
                        {chapter.number}
                      </span>

                      <div className="rounded-4xl border border-ink-950/10 bg-white p-6 shadow-card-light transition duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:border-accent-600/30 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display text-h3 text-balance text-ink-950">
                            {chapter.title}
                          </h3>
                          <Icon
                            name="arrow-down"
                            className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition duration-500 group-hover:translate-y-1 group-hover:text-accent-700"
                          />
                        </div>
                        <p className="mt-4 text-body-sm leading-relaxed text-ink-500">
                          {chapter.paragraph}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
