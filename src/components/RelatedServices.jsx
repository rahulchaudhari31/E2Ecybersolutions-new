import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { StaggerGroup, StaggerItem } from "./Stagger.jsx";
import TiltCard from "./TiltCard.jsx";
import Icon from "./Icons.jsx";
import { cn } from "../lib/cn.js";

export default function RelatedServices({ category, currentPath, className }) {
  if (!category?.children?.length) {
    return null;
  }

  const related = category.children.filter((child) => child.path !== currentPath).slice(0, 6);

  if (!related.length) {
    return null;
  }

  return (
    <section className={cn("light-section relative overflow-hidden py-section", className)}>
      <div aria-hidden="true" className="grid-lines-light absolute inset-0" />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Related services"
              title={`More in ${category.label}.`}
              description="Connect a single capability with the wider system, or explore the next discipline in the same service area."
              light
            />
            <Link
              to={category.path}
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink-950/10 bg-white/60 px-4 py-2.5 font-display text-body-xs font-medium text-ink-950 transition hover:border-ink-950/25 hover:bg-white"
            >
              View {category.label}
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
          {related.map((item, index) => (
            <StaggerItem key={item.path}>
              <TiltCard max={5}>
                <Link
                  to={item.path}
                  className="group flex h-full flex-col rounded-3xl border border-ink-950/10 bg-white p-5 shadow-card-light transition duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent-600/30 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-[10px] tabular-nums text-ink-950/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-ink-950/10 text-ink-400 transition duration-300 group-hover:border-accent-600/30 group-hover:text-accent-700">
                      <Icon name="arrow-up-right" className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-10 font-display text-h3 text-ink-950">{item.label}</h3>
                  <p className="mt-2 flex-1 text-body-sm text-ink-500">
                    Explore this capability in {category.label}.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-body-xs font-medium text-accent-700">
                    View service
                    <Icon
                      name="arrow-right"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
