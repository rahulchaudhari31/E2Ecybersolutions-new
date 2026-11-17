import Container from "../Container.jsx";

const placeholders = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
  "Client 07",
  "Client 08",
];

function LogoMark({ label }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-3.5">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-gradient-soft">
        <span className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-accent-300 to-iris-400" />
      </span>
      <span className="font-display text-body-xs font-medium uppercase tracking-[0.2em] text-white/45">
        {label}
      </span>
    </div>
  );
}

export default function ClientLogoMarquee() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.018] py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-eyebrow uppercase text-white/35">Client logo marquee</p>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-amber-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Placeholder client marks
          </span>
        </div>
      </Container>

      <div className="marquee-mask group mt-8 overflow-hidden">
        <div
          className="flex w-max animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "38s" }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex shrink-0 items-center gap-3 pr-3"
            >
              {placeholders.map((label) => (
                <LogoMark key={`${copy}-${label}`} label={label} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-6 text-body-xs text-white/35">
          Approved client logos were not published on the live site. These neutral marks reserve the
          layout until real assets are supplied.
        </p>
      </Container>
    </section>
  );
}
