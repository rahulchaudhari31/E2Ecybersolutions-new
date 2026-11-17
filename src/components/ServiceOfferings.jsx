import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { StaggerGroup, StaggerItem } from "./Stagger.jsx";
import Icon from "./Icons.jsx";
import { cn } from "../lib/cn.js";

const icons = ["compass", "layers", "code", "target", "zap", "sparkles", "globe", "shield"];

export default function ServiceOfferings({
  items,
  eyebrow = "Scope & offerings",
  title = "What this service includes.",
  description = "Capabilities drawn from the published service content, ready to be shaped around your brief.",
  className,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className={cn("relative overflow-hidden py-section", className)}>
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />

      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2" amount={0.08}>
          {items.map((item, index) => (
            <StaggerItem key={`${item}-${index}`}>
              <article className="group flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-accent-300/25 hover:bg-white/[0.055] sm:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-brand-gradient-soft text-accent-200">
                  <Icon name={icons[index % icons.length]} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-body-sm leading-relaxed text-white/75">{item}</p>
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-300/70"
                    />
                  </div>
                  <p className="mt-3 font-display text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Included capability
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-body-xs leading-relaxed text-white/30">
            Scope is indicative and drawn from existing published copy. Final deliverables are agreed
            during project planning.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
