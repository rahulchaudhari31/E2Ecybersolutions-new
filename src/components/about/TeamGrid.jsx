import Container from "../Container.jsx";
import SectionHeading from "../SectionHeading.jsx";
import Reveal from "../Reveal.jsx";
import { StaggerGroup, StaggerItem } from "../Stagger.jsx";
import TiltCard from "../TiltCard.jsx";
import Icon from "../Icons.jsx";
import { team } from "../../data/siteContent.js";

export default function TeamGrid() {
  return (
    <section className="light-section relative overflow-hidden py-section">
      <div aria-hidden="true" className="grid-lines-light absolute inset-0" />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The people"
              title="A connected team across every discipline."
              description="The original site refers to its team and experts, but does not publish individual names, roles or biographies. These portrait cards are ready for approved team content."
              light
            />
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-800">
              Team content pending
            </span>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" amount={0.1}>
          {team.placeholderProfiles.map((member, index) => (
            <StaggerItem key={member.id}>
              <TiltCard max={5}>
                <article
                tabIndex={0}
                aria-label={`${member.name}, ${member.role}. Placeholder profile. ${member.note}`}
                className="group relative overflow-hidden rounded-4xl border border-ink-950/10 bg-white shadow-card-light transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent-600/30 hover:shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-night-950">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(80%_75%_at_50%_20%,rgba(34,211,238,0.16),transparent_58%),radial-gradient(70%_60%_at_80%_100%,rgba(139,92,246,0.18),transparent_62%)]"
                  />
                  <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-[34%] -translate-x-1/2 font-display text-[7rem] leading-none text-white/[0.06]"
                  >
                    0{index + 1}
                  </span>
                  <span className="absolute left-1/2 top-[38%] grid h-20 w-20 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-accent-200 shadow-inset transition duration-500 group-hover:scale-110 group-hover:border-accent-300/30">
                    <Icon name={member.icon} className="h-8 w-8" />
                  </span>

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/10 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night-950/65 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.18em] text-white/65 backdrop-blur">
                    Placeholder
                  </span>
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-night-950/65 text-white/60 backdrop-blur transition duration-500 group-hover:rotate-45 group-hover:text-accent-200">
                    <Icon name="arrow-up-right" className="h-4 w-4" />
                  </span>

                  <div className="absolute inset-x-3 bottom-3 rounded-3xl border border-white/10 bg-night-950/75 p-4 backdrop-blur-xl">
                    <p className="font-display text-eyebrow uppercase text-accent-300">
                      {member.role}
                    </p>
                    <p className="mt-2 font-display text-h4 text-white">{member.name}</p>
                    <p className="max-h-16 overflow-hidden text-body-xs leading-relaxed text-white/45 opacity-100 transition-all duration-500 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-16 sm:group-hover:opacity-100 sm:group-focus-within:max-h-16 sm:group-focus-within:opacity-100">
                      {member.note}
                    </p>
                  </div>
                </div>
              </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-body-xs leading-relaxed text-ink-400">
            These are labelled profile placeholders, not staff portraits. Replace them with
            approved headshots, names, roles and biographies before launch.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
