import { testimonials } from "../data/siteContent.js";
import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Icon from "./Icons.jsx";

export default function TestimonialsPlaceholder() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative py-section-sm">
      <div aria-hidden="true" className="absolute inset-0 bg-panel-radial" />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Client words"
            title={<span id="testimonials-heading">What people say.</span>}
            className="max-w-2xl"
          />
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200/80">
            Demo content
          </span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.items.map((item) => (
            <figure
              key={item.id}
              className="card-glow flex h-full flex-col rounded-4xl border border-white/10 bg-white/[0.035] p-6"
            >
              <Icon name="quote" className="h-7 w-7 text-accent-300/70" />
              <blockquote className="mt-5 flex-1 text-body-sm leading-relaxed text-white/65">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <img
                  src={item.avatar}
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                  className="h-10 w-10 rounded-full border border-white/15 object-cover grayscale"
                />
                <span className="text-body-sm font-medium text-white">{item.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-body-xs leading-relaxed text-white/30">
          Testimonials are retained from the existing theme and require client approval before
          launch.
        </p>
      </Container>
    </section>
  );
}
