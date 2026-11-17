import { serviceCategories, site } from "../data/siteContent.js";

const SITE_URL = site.url.replace(/\/$/, "");
const DEFAULT_OG_IMAGE = "/media/about-us.webp";
const BAD_DESCRIPTION = /^(at vero|lorem ipsum|todo)/i;

export const SITE_ORIGIN = SITE_URL;
export const DEFAULT_SOCIAL_IMAGE = absoluteUrl(DEFAULT_OG_IMAGE);

const serviceLabels = Object.fromEntries(
  serviceCategories.flatMap((category) => [
    [category.path, category.label],
    ...(category.children?.map((child) => [child.path, child.label]) ?? []),
  ]),
);

const serviceTitles = {
  "/development.php": "Web Development Services",
  "/web-design.php": "Web Design Services",
  "/mobile-app-desig-and-development.php": "Mobile App Design & Development",
  "/ecommerce-websites.php": "Ecommerce Website Development",
  "/cms.php": "CMS Website Development",
  "/wordpress-websites.php": "WordPress Website Development",
  "/website-management.php": "Website Management Services",
  "/digital-strategy.php": "Digital Strategy Services",
  "/seo.php": "SEO Services",
  "/analytics-or-growth-marketing.php": "Analytics & Growth Marketing",
  "/ppc-management.php": "PPC Management Services",
  "/social-media.php": "Social Media Marketing",
  "/email-marketing.php": "Email Marketing Services",
  "/branding.php": "Branding Services",
  "/content-writing.php": "Content Writing Services",
  "/graphic-design.php": "Graphic Design Services",
  "/videos.php": "Video Production",
  "/design-and-development.php": "Design & Development Services",
  "/digital-marketing.php": "Digital Marketing Services",
  "/creative.php": "Creative Services",
};

const pageOverrides = {
  "/": {
    title: "Web Design, Development & Digital Marketing",
    description:
      "e2e Cyber Solutions is a Birmingham-based integrated web development, digital marketing and creative agency with digital at its core.",
  },
  "/about.php": {
    title: "About Us",
    description:
      "Learn about e2e Cyber Solutions, a Birmingham digital agency connecting brands with audiences through web development, marketing and creative work.",
  },
  "/services.php": {
    title: "Digital Services",
    description:
      "Explore web development, design, mobile apps, ecommerce, SEO, PPC, social media, email marketing, branding and content services.",
  },
  "/contact.php": {
    title: "Contact Us",
    description:
      "Contact e2e Cyber Solutions in Birmingham. Call 0121 271 0369, email info@e2ecybersolutions.com or send a project enquiry.",
  },
  "/portfolio.php": {
    title: "Our Work",
    description:
      "A dedicated portfolio space for e2e Cyber Solutions projects across web development, digital marketing and creative services.",
    noindex: true,
  },
  "/case-study.php": {
    title: "Case Study Template",
    description:
      "A reusable case-study template prepared for approved e2e Cyber Solutions project narratives and outcomes.",
    noindex: true,
  },
  "/service-detail.php": {
    title: "Service Detail Template",
    description:
      "A reusable service-detail template populated with published Web Development content.",
    noindex: true,
  },
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function usableDescription(value) {
  const text = cleanText(value);
  return text && !BAD_DESCRIPTION.test(text) ? text : "";
}

export function getPageSeo(page, options = {}) {
  const path = page?.path ?? options.path ?? "/";
  const override = pageOverrides[path] ?? {};
  const label = serviceLabels[path];
  const title =
    (override.title ??
      options.title ??
      serviceTitles[path] ??
      label ??
      cleanText(page?.h1)) ||
    site.name;

  const fallbackDescription = label
    ? `${label} from e2e Cyber Solutions, an integrated web development, digital marketing and creative agency in Birmingham.`
    : site.description;

  const description =
    override.description ||
    options.description ||
    usableDescription(page?.seo?.description) ||
    usableDescription(page?.subtitle) ||
    usableDescription(page?.kicker) ||
    fallbackDescription;

  const image = options.image ?? page?.image?.url ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    path,
    canonical: absoluteUrl(path),
    image: absoluteUrl(image),
    imageAlt: page?.image?.alt || `${site.name} digital agency`,
    noindex: Boolean(override.noindex || options.noindex),
    type: options.type ?? "website",
  };
}
