import { useState } from "react";
import Container from "../Container.jsx";
import Button from "../Button.jsx";
import Icon from "../Icons.jsx";
import Modal from "../Modal.jsx";
import Parallax from "../Parallax.jsx";
import Reveal from "../Reveal.jsx";
import { StaggerGroup, StaggerItem } from "../Stagger.jsx";
import SectionHeading from "../SectionHeading.jsx";
import { portfolio, workProjects } from "../../data/siteContent.js";

const placeholderProjects = workProjects.slice(0, 3);

export default function FeaturedWork() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const showProject = (project) => {
    setSelected(project);
    setOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="absolute inset-0 bg-panel-radial opacity-55" />

        <Container className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Made to connect."
                description="A preview of the editorial work grid that will hold approved case studies once portfolio content is supplied."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Placeholder portfolio
              </span>
            </Reveal>
          </div>

          <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2" amount={0.08}>
            {placeholderProjects.map((project, index) => (
              <StaggerItem
                key={project.id}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <button
                  type="button"
                  onClick={() => showProject(project)}
                  aria-haspopup="dialog"
                  aria-label={`Open preview for ${project.title}, a labeled portfolio placeholder`}
                  data-cursor-label="View"
                  className="group relative block w-full overflow-hidden rounded-5xl border border-white/10 bg-night-900/60 text-left shadow-card transition duration-500 hover:border-accent-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-night-950"
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Parallax className="absolute inset-0" range={12}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        width="1600"
                        height="1200"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-1000 ease-out-expo group-hover:scale-105"
                      />
                    </Parallax>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/10 to-transparent"
                    />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-night-950/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/65 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      Local placeholder
                    </span>
                    <span className="absolute bottom-5 right-5 grid h-12 w-12 translate-y-3 place-items-center rounded-full bg-white text-night-950 opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow-up-right" className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-amber-200/70">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-display text-h3 text-white">{project.title}</h3>
                    </div>
                    <span className="hidden items-center gap-2 font-display text-body-xs text-white/40 sm:inline-flex">
                      Preview
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-3xl text-body-xs leading-relaxed text-white/35">
              {portfolio.note} The images above are placeholders and are not client work.
            </p>
          </Reveal>
        </Container>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={selected?.title}
        description="Labeled portfolio preview. Approved project imagery and case-study details are still required."
        size="lg"
        footer={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-xs text-white/40">Local placeholder image.</p>
            <Button
              to="/contact.php"
              onClick={() => setOpen(false)}
              icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
            >
              Start a project
            </Button>
          </div>
        }
      >
        {selected ? (
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={selected.image}
              alt={selected.alt}
              width="1600"
              height="1000"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        ) : null}
      </Modal>
    </>
  );
}
