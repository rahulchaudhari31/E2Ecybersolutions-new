const BASE_URL = "https://www.e2ecybersolutions.com";

const asset = (path) => `/media/${path.replace(/^\/+/, "")}`;
const live = (path) => `${BASE_URL}${path}`;

export const CRAWL_META = {
  crawledAt: "2026-11-16",
  source: "Live site crawled with curl",
  baseUrl: BASE_URL,
  canonicalHost: "www.e2ecybersolutions.com",
  pagesCrawled: 28,
  pagesLive: 26,
  pagesBroken: 2,
  robotsTxt: "404 Not Found",
  sitemapXml: "404 Not Found",
  sitemapIndexXml: "404 Not Found",
  favicon: "404 Not Found",
  notes: [
    "No robots.txt or sitemap exists. Crawl was performed by following every internal <a href> from the homepage, recursively.",
    "All 26 live pages return the same <title>: Web Design Agency.",
    "All pages have an empty meta description.",
    "All content images have empty alt attributes.",
    "/seo-optimization.php and /content.php are linked from the homepage service cards but return 404.",
    "/services.php and /service-detail.php are not in the main navigation. They are reachable via breadcrumbs and 'Read more' links.",
    "/services.php and /service-detail.php contain unmodified theme demo copy, Lorem ipsum and demo testimonials. Treat as template placeholders.",
    "Verbatim copy contains typos and inconsistent capitalisation. It has not been corrected here; see copyQa flags on each page.",
  ],
};

export const site = {
  name: "e2e Cyber Solutions",
  url: BASE_URL,
  tagline: "Creative Chaos",
  description:
    "e2e Cyber Solutions is an integrated web development, marketing and creative agency with digital at its core.",
  defaultMetaTitle: "Web Design Agency",
  metaDescription: "",
  logo: {
    url: asset("images/logo.png"),
    alt: "",
    altStatus: "TODO: provide approved alt text. Live site alt is empty.",
    dimensions: "TODO",
  },
  favicon: {
    url: "/favicon.svg",
    status: "Custom favicon added during redesign.",
  },
  contact: {
    phone: {
      label: "New Accounts",
      display: "0121 271 0369",
      headerDisplay: "0121-271-0369",
      rawHeaderDisplay: "0121 -271-0369",
      href: "tel:+441212710369",
      hrefStatus: "Derived from the published number for tel: links.",
    },
    email: {
      display: "info@e2ecybersolutions.com",
      href: "mailto:info@e2ecybersolutions.com",
    },
    address: {
      street: "1204b Stratford Road",
      city: "Birmingham",
      postcode: "B28 8HN",
      country: "United Kingdom",
      display: "1204b Stratford Road, Birmingham, B28 8HN",
    },
    map: {
      provider: "Google Maps",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.4075051450723!2d-1.8462798999999999!3d52.4355325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbdecdbe4bfd%3A0xb78dac109ccf676b!2s1204B%20Stratford%20Rd%2C%20Birmingham%20B28%208HN!5e0!3m2!1sen!2suk!4v1683019534893!5m2!1sen!2suk",
      coordinates: { latitude: 52.4355325, longitude: -1.8462799 },
    },
    openingHours: "TODO: not published on the live site.",
    contactFormEndpoint: "TODO: live form posts to / with method POST and has no visible handler.",
  },
  social: [
    {
      label: "Facebook",
      icon: "facebook",
      url: "http://www.facebook.com/#",
      placeholder: true,
      status: "TODO: live URL is a placeholder ending in #.",
    },
    {
      label: "Twitter",
      icon: "twitter",
      url: "http://www.twitter.com/#",
      placeholder: true,
      status: "TODO: live URL is a placeholder ending in #.",
    },
    {
      label: "Google",
      icon: "google",
      url: "http://www.plus.google.com/#",
      placeholder: true,
      status: "TODO: Google+ is discontinued; confirm replacement or remove.",
    },
    {
      label: "YouTube",
      icon: "youtube-play",
      url: "http://www.youtube.com/#",
      placeholder: true,
      status: "TODO: live URL is a placeholder ending in #.",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      url: "http://www.linkedin.com/#",
      placeholder: true,
      status: "TODO: live URL is a placeholder ending in #.",
    },
  ],
  copyright: "© Copyright 2023 All Rights Reserved",
  legal: {
    companyNumber: "TODO",
    vatNumber: "TODO",
    privacyPolicy: "TODO: no privacy policy page exists.",
    cookiePolicy: "TODO",
    terms: "TODO",
  },
  seo: {
    titleTemplate: "TODO: all live pages use the generic title 'Web Design Agency'.",
    metaDescriptions: "TODO: every live page has an empty meta description.",
    openGraph: "TODO: no Open Graph tags found.",
    twitterCards: "TODO: no Twitter card tags found.",
    structuredData: "TODO: no JSON-LD found.",
    canonicals: "TODO: no canonical tags found.",
  },
};

export const navigation = {
  primary: [
    { label: "Home", href: "/", originalHref: "index.php" },
    { label: "About", href: "/about.php", originalHref: "about.php" },
    {
      label: "Services",
      href: "#",
      originalHref: "#",
      children: [
        {
          label: "Design & Development",
          href: "/design-and-development.php",
          originalHref: "design-and-development.php",
          children: [
            { label: "Web Development", href: "/development.php", originalHref: "development.php" },
            { label: "Web Design", href: "/web-design.php", originalHref: "web-design.php" },
            {
              label: "Mobile App Design and Development",
              href: "/mobile-app-desig-and-development.php",
              originalHref: "mobile-app-desig-and-development.php",
            },
            { label: "Ecommerce", href: "/ecommerce-websites.php", originalHref: "ecommerce-websites.php" },
            { label: "CMS", href: "/cms.php", originalHref: "cms.php" },
            { label: "WordPress", href: "/wordpress-websites.php", originalHref: "wordpress-websites.php" },
            { label: "Website Management", href: "/website-management.php", originalHref: "website-management.php" },
          ],
        },
        {
          label: "Digital Marketing",
          href: "/digital-marketing.php",
          originalHref: "digital-marketing.php",
          children: [
            { label: "Digital Strategy", href: "/digital-strategy.php", originalHref: "digital-strategy.php" },
            { label: "SEO", href: "/seo.php", originalHref: "seo.php" },
            {
              label: "Analytics or Growth Marketing",
              href: "/analytics-or-growth-marketing.php",
              originalHref: "analytics-or-growth-marketing.php",
            },
            { label: "PPC Management", href: "/ppc-management.php", originalHref: "ppc-management.php" },
            { label: "Social Media", href: "/social-media.php", originalHref: "social-media.php" },
            { label: "Email Marketing", href: "/email-marketing.php", originalHref: "email-marketing.php" },
          ],
        },
        {
          label: "Creative",
          href: "/creative.php",
          originalHref: "creative.php",
          children: [
            { label: "Branding", href: "/branding.php", originalHref: "branding.php" },
            { label: "Content Writing", href: "/content-writing.php", originalHref: "content-writing.php" },
            { label: "Graphic Design", href: "/graphic-design.php", originalHref: "graphic-design.php" },
            { label: "Videos", href: "/videos.php", originalHref: "videos.php" },
          ],
        },
      ],
    },
    { label: "Work", href: "/portfolio.php", originalHref: null },
    { label: "Contact Us", href: "/contact.php", originalHref: "contact.php" },
  ],
  headerPhone: site.contact.phone.headerDisplay,
  footerSocial: site.social,
  footerCopyright: site.copyright,
};

export const serviceCategories = [
  {
    id: "design-and-development",
    label: "Design & Development",
    path: "/design-and-development.php",
    children: [
      { id: "development", label: "Web Development", path: "/development.php" },
      { id: "web-design", label: "Web Design", path: "/web-design.php" },
      {
        id: "mobile-app-design-and-development",
        label: "Mobile App Design and Development",
        path: "/mobile-app-desig-and-development.php",
      },
      { id: "ecommerce", label: "Ecommerce", path: "/ecommerce-websites.php" },
      { id: "cms", label: "CMS", path: "/cms.php" },
      { id: "wordpress", label: "WordPress", path: "/wordpress-websites.php" },
      { id: "website-management", label: "Website Management", path: "/website-management.php" },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    path: "/digital-marketing.php",
    children: [
      { id: "digital-strategy", label: "Digital Strategy", path: "/digital-strategy.php" },
      { id: "seo", label: "SEO", path: "/seo.php" },
      {
        id: "analytics-growth-marketing",
        label: "Analytics or Growth Marketing",
        path: "/analytics-or-growth-marketing.php",
      },
      { id: "ppc-management", label: "PPC Management", path: "/ppc-management.php" },
      { id: "social-media", label: "Social Media", path: "/social-media.php" },
      { id: "email-marketing", label: "Email Marketing", path: "/email-marketing.php" },
    ],
  },
  {
    id: "creative",
    label: "Creative",
    path: "/creative.php",
    children: [
      { id: "branding", label: "Branding", path: "/branding.php" },
      { id: "content-writing", label: "Content Writing", path: "/content-writing.php" },
      { id: "graphic-design", label: "Graphic Design", path: "/graphic-design.php" },
      { id: "videos", label: "Videos", path: "/videos.php" },
    ],
  },
];

export const images = {
  logo: site.logo,
  aboutHero: { url: asset("about-us.webp"), alt: "", altStatus: "TODO" },
  homeServiceIcons: [
    { label: "Marketing", url: asset("images/service/service_icon_1-1.png"), alt: "" },
    { label: "Development", url: asset("images/service/service_icon_2-1.png"), alt: "" },
    { label: "Web Design", url: asset("images/service/service_icon_3-1.png"), alt: "" },
    { label: "SEO Optimization", url: asset("images/service/service_icon_4-1.png"), alt: "" },
    { label: "Content", url: asset("images/service/service_icon_5-1.png"), alt: "" },
    { label: "Branding", url: asset("images/service/service_icon_6-1.png"), alt: "" },
  ],
  servicesIndexIcons: [
    { label: "Marketing", url: asset("images/service/service-icon-1.png"), alt: "" },
    { label: "Development", url: asset("images/service/service-icon-2.png"), alt: "" },
    { label: "Web Design", url: asset("images/service/service-icon-3.png"), alt: "" },
    { label: "SEO Optimisation", url: asset("images/service/service-icon-4.png"), alt: "" },
    { label: "Ecommerce", url: asset("images/service/service-icon-5.png"), alt: "" },
    { label: "Branding", url: asset("images/service/service-icon-6.png"), alt: "" },
  ],
  process: [
    { step: "01", label: "Strategy", url: asset("process/strategy.webp"), alt: "" },
    { step: "02", label: "Design", url: asset("process/design.webp"), alt: "" },
    { step: "03", label: "Develop", url: asset("process/development.webp"), alt: "" },
    { step: "04", label: "Marketing", url: asset("process/marketing.webp"), alt: "" },
    { step: "05", label: "Creative", url: asset("process/creative.webp"), alt: "" },
  ],
  contactIcons: {
    call: { url: asset("images/icon1.png"), alt: "" },
    visit: { url: asset("images/icon2.png"), alt: "" },
    email: { url: asset("images/icon3.png"), alt: "" },
  },
  testimonialAvatars: [
    { url: asset("images/face_1.webp"), alt: "" },
    { url: asset("images/face_2.webp"), alt: "" },
    { url: asset("images/face_3.webp"), alt: "" },
    { url: asset("images/face_4.webp"), alt: "" },
  ],
  decorative: {
    verticalLine: { url: asset("img/vertical_line.png"), alt: "" },
    verticalLine2: { url: asset("img/vertical_line2.png"), alt: "" },
    darkLineShort: { url: asset("img/dark_line_short.png"), alt: "" },
    pinkLineBig: { url: asset("img/pink_line_big.png"), alt: "" },
  },
  serviceHeroes: {
    "/design-and-development.php": { url: asset("Web-Development.webp"), alt: "" },
    "/development.php": { url: asset("Web-Development.webp"), alt: "" },
    "/web-design.php": { url: asset("Web-Design.webp"), alt: "" },
    "/mobile-app-desig-and-development.php": {
      url: asset("Mobile-App-Design-and-Development.webp"),
      alt: "",
    },
    "/ecommerce-websites.php": { url: asset("services/ecommerce.webp"), alt: "" },
    "/cms.php": { url: asset("services/cms.webp"), alt: "" },
    "/wordpress-websites.php": { url: asset("services/wordpress.webp"), alt: "" },
    "/website-management.php": { url: asset("services/web-development.webp"), alt: "" },
    "/digital-marketing.php": { url: asset("Digital-Marketing.webp"), alt: "" },
    "/digital-strategy.php": { url: asset("Digital-Strategy.webp"), alt: "" },
    "/seo.php": { url: asset("seo.webp"), alt: "" },
    "/analytics-or-growth-marketing.php": { url: asset("images/service/img_2.webp"), alt: "" },
    "/ppc-management.php": { url: asset("ppc.webp"), alt: "" },
    "/social-media.php": { url: asset("images/service/img_2.webp"), alt: "" },
    "/email-marketing.php": { url: asset("images/service/img_2.webp"), alt: "" },
    "/creative.php": { url: asset("creative.webp"), alt: "" },
    "/branding.php": { url: asset("branding.webp"), alt: "" },
    "/content-writing.php": { url: asset("images/service/img_2.webp"), alt: "" },
    "/graphic-design.php": { url: asset("Graphic-Design.webp"), alt: "" },
    "/videos.php": { url: asset("videos.webp"), alt: "" },
    "/services.php": { url: asset("img/vertical_line.png"), alt: "" },
    "/service-detail.php": { url: asset("images/service/img_2.webp"), alt: "" },
  },
  media: {
    homeBackground: {
      type: "YouTube embed",
      videoId: "UBufeh1yv2c",
      url:
        "https://www.youtube.com/embed/UBufeh1yv2c?feature=oembed&showinfo=0&autoplay=1&controls=0&mute=1&loop=1&playlist=UBufeh1yv2c",
      autoplay: true,
      muted: true,
      loop: true,
      controls: false,
    },
  },
};

export const testimonials = {
  status: "TODO: these are unverified theme demo testimonials. Replace with client-approved quotes or remove the section.",
  note:
    "The live service pages repeat a carousel of four demo names and reviews. The same names and stock headshots appear in the theme demo. No real client attribution was found.",
  items: [
    {
      id: "josephine-b-anderson",
      name: "Josephine B. Anderson",
      quote:
        "This guys are awesome! It is hard to find a web design company who can actually understand what you need.",
      avatar: asset("images/face_1.webp"),
      placeholder: true,
    },
    {
      id: "george-m-baty",
      name: "George M. Baty",
      quote:
        "I needed more leads for my services. PPC, banners of maybe even broschures. They made an analysis of my existing site.",
      avatar: asset("images/face_2.webp"),
      placeholder: true,
    },
    {
      id: "jeffrey-p-mcallister",
      name: "Jeffrey P. McAllister",
      quote:
        "I highly recommend this company for all. I’m very happy with the new redesigned and restructured website.",
      avatar: asset("images/face_3.webp"),
      placeholder: true,
    },
    {
      id: "hilary-stilwell",
      name: "Hilary Stilwell",
      quote:
        "This guys are awesome! It is hard to find a web design company who can actually listen and understand what you need.",
      avatar: asset("images/face_4.webp"),
      placeholder: true,
    },
  ],
  carouselOrder: [
    "josephine-b-anderson",
    "george-m-baty",
    "jeffrey-p-mcallister",
    "hilary-stilwell",
    "josephine-b-anderson",
    "george-m-baty",
    "jeffrey-p-mcallister",
  ],
  usedOn: [
    "/design-and-development.php",
    "/development.php",
    "/web-design.php",
    "/mobile-app-desig-and-development.php",
    "/ecommerce-websites.php",
    "/cms.php",
    "/wordpress-websites.php",
    "/website-management.php",
    "/digital-marketing.php",
    "/digital-strategy.php",
    "/seo.php",
    "/analytics-or-growth-marketing.php",
    "/ppc-management.php",
    "/social-media.php",
    "/email-marketing.php",
    "/branding.php",
    "/content-writing.php",
    "/graphic-design.php",
    "/service-detail.php",
  ],
};

export const portfolio = {
  status: "TODO: no portfolio, case-study or gallery content exists on the live site.",
  items: [],
  note:
    "No portfolio/gallery section, client logo wall, project cards or case studies were found on any crawled page. Required from client before a portfolio section can be designed.",
};

export const team = {
  status: "TODO: no team section, staff names, roles, headshots or bios exist on the live site.",
  members: [],
  placeholderProfiles: [
    {
      id: "team-profile-01",
      name: "Team profile 01",
      role: "Strategy",
      icon: "compass",
      note: "Name, role and biography required from client.",
    },
    {
      id: "team-profile-02",
      name: "Team profile 02",
      role: "Design",
      icon: "pen",
      note: "Name, role and biography required from client.",
    },
    {
      id: "team-profile-03",
      name: "Team profile 03",
      role: "Development",
      icon: "code",
      note: "Name, role and biography required from client.",
    },
    {
      id: "team-profile-04",
      name: "Team profile 04",
      role: "Marketing",
      icon: "target",
      note: "Name, role and biography required from client.",
    },
  ],
  note:
    "Copy refers to 'our team' and 'our experts' but no individual team members are published. Required from client if a team section is planned.",
};

export const workPage = {
  id: "work",
  path: "/portfolio.php",
  template: "Work index",
  h1: "Work",
  kicker: "Selected projects",
  subtitle:
    "A filterable home for approved case studies. The cards below are clearly labelled visual placeholders while portfolio content is supplied.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Work" },
  ],
  status: "TODO: original site has no portfolio route, project cards or case studies.",
};

export const workProjects = [
  {
    id: "placeholder-01",
    title: "Project placeholder 01",
    category: "Design & Development",
    service: "Web Design",
    year: "Year to confirm",
    image: asset("Web-Design.webp"),
    alt: "Placeholder portfolio image showing a design workspace",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
  {
    id: "placeholder-02",
    title: "Project placeholder 02",
    category: "Digital Marketing",
    service: "SEO",
    year: "Year to confirm",
    image: asset("seo.webp"),
    alt: "Placeholder portfolio image showing search and analytics",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
  {
    id: "placeholder-03",
    title: "Project placeholder 03",
    category: "Creative",
    service: "Branding",
    year: "Year to confirm",
    image: asset("Graphic-Design.webp"),
    alt: "Placeholder portfolio image showing a graphic design layout",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
  {
    id: "placeholder-04",
    title: "Project placeholder 04",
    category: "Design & Development",
    service: "Web Development",
    year: "Year to confirm",
    image: asset("Web-Development.webp"),
    alt: "Placeholder portfolio image showing a web development project",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
  {
    id: "placeholder-05",
    title: "Project placeholder 05",
    category: "Digital Marketing",
    service: "Social Media",
    year: "Year to confirm",
    image: asset("Digital-Marketing.webp"),
    alt: "Placeholder portfolio image showing digital marketing",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
  {
    id: "placeholder-06",
    title: "Project placeholder 06",
    category: "Creative",
    service: "Graphic Design",
    year: "Year to confirm",
    image: asset("branding.webp"),
    alt: "Placeholder portfolio image showing a creative branding project",
    summary: "Replace this card with an approved project, outcome and case-study link.",
    placeholder: true,
  },
];

export const caseStudyPage = {
  id: "case-study",
  path: "/case-study.php",
  template: "Case study template",
  h1: "Case study template",
  kicker: "Project story",
  subtitle:
    "A reusable case-study layout for challenge, approach, delivery and measured outcomes once approved project content is available.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/portfolio.php" },
    { label: "Case study template" },
  ],
  image: {
    url: asset("Web-Design.webp"),
    alt: "Placeholder case-study image showing a design workspace",
  },
  status: "TODO: replace all narrative, imagery and metrics with approved client case-study content.",
};

export const homePage = {
  id: "home",
  path: "/",
  liveUrl: live("/"),
  aliases: ["/index.php"],
  status: 200,
  template: "Home",
  seo: { title: "Web Design Agency", description: "" },
  hero: {
    kicker: "Creative Chaos",
    heading: "Disruptive Ideas & Strategic Execution",
    headingSegments: ["Disruptive Ideas &", "Strategic", "Execution"],
    cta: { label: "Get Started", href: "#" },
    background: images.media.homeBackground,
  },
  intro: {
    heading:
      "e2e Cyber Solutions is an integrated web development, marketing and creative agency with digital at its core.",
    paragraphs: [
      "e2e Cyber Solutions is the missing link between your businesses and your audience or consumers. We aim to bridge this gap by creating new digital avenues, creative strategies and marketing solutions for your business. We build and deliver experiential digital products, conversion-based designs coupled with engaging content solutions.",
    ],
    cta: { label: "Get Started", href: null, element: "button" },
  },
  serviceCards: [
    {
      label: "Marketing",
      description: "We use proven strategic marketing tactics",
      href: "/digital-marketing.php",
      icon: asset("images/service/service_icon_1-1.png"),
    },
    {
      label: "Development",
      description:
        "Custom coding, programming and development for the most complex digital functions and products you can imagine.",
      href: "/development.php",
      icon: asset("images/service/service_icon_2-1.png"),
    },
    {
      label: "Web Design",
      description: "Giving your brand a personality and purpose not just a digital makeover!",
      href: "/web-design.php",
      icon: asset("images/service/service_icon_3-1.png"),
    },
    {
      label: "SEO Optimization",
      description: "Optimizing designs and content to give your brand better visibility is our specialty.",
      href: "/seo-optimization.php",
      icon: asset("images/service/service_icon_4-1.png"),
      brokenLink: true,
      intendedTarget: "/seo.php",
      note: "Live href returns 404. Redirect map points this to /seo.php.",
    },
    {
      label: "Content",
      description:
        "We create strategically designed, SEO-optimized and creatively built; scalable content for your brand and all its digital platforms",
      href: "/content.php",
      icon: asset("images/service/service_icon_5-1.png"),
      brokenLink: true,
      intendedTarget: "/content-writing.php",
      note: "Live href returns 404. Redirect map points this to /content-writing.php.",
    },
    {
      label: "Branding",
      description:
        "A solid brand strategy, identity and guidelines to help you get recognized in a crowded market.",
      href: "/branding.php",
      icon: asset("images/service/service_icon_6-1.png"),
    },
  ],
  process: [
    {
      number: "01",
      title: "Strategy",
      description:
        "We define your brand, its competition and target audience. Discover what is working in your industry, then design your brand strategy accordingly.",
      image: asset("process/strategy.webp"),
    },
    {
      number: "02",
      title: "Design",
      description:
        "From colour scheme, logo, layout, sitemap, styleand content—we bring your brand to life with a unique design strategy, built just for you.",
      image: asset("process/design.webp"),
    },
    {
      number: "03",
      title: "Develop",
      description:
        "We turn your ideas into reality. We are quipped to design functional digital products for your brand to maximise visibility, efficiency and performance.",
      image: asset("process/development.webp"),
    },
    {
      number: "04",
      title: "Marketing",
      description:
        "We help your brand generate more web traffic,and get more attention online.Whichin turn culminates into clicks, engagement and eventually allows your target group to build a relationship with your brand.",
      image: asset("process/marketing.webp"),
    },
    {
      number: "05",
      title: "Creative",
      description:
        "Inventive, creative, trending, compelling & quality content—that will help your brand reach, connect and retain your desired audience.",
      image: asset("process/creative.webp"),
    },
  ],
  cta: {
    heading: "let's get you started:",
    paragraphs: [
      "We at e2e Cyber Solutions are here to assist you build a strong digital presence for your brand. Our team of experts is here to help you navigate the digital alleys of marketing and content, depending on your business model.",
      "We are a fully functional digital marketing agency that provides integrated digital marketing, software, strategy and content solutions across platforms and formats.",
    ],
    primaryAction: { label: "Get Started", href: "#" },
    secondaryAction: { label: "let's talk!", href: "#" },
  },
  testimonials: null,
  copyQa: "Verbatim copy includes 'styleand', 'quipped', missing spaces and inconsistent capitalisation. Not corrected.",
};

export const aboutPage = {
  id: "about",
  path: "/about.php",
  liveUrl: live("/about.php"),
  status: 200,
  template: "About",
  seo: { title: "Web Design Agency", description: "" },
  h1: "About Us",
  kicker: "The e2e Cyber Solutions Story",
  subtitle:
    "We are here to help your brand reach, engage, convert and retain customers by employing digital and creative tools",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About" },
  ],
  image: images.aboutHero,
  paragraphs: [
    "As the digital wing of the e2e World—e2e Cyber Solutions is an integrated web development, marketing agency with digital at its core.",
    "Over the last decade, digital marketing, content marketing and consumer engagement have seen a massive shift. With the digital boom, there has been a paradigm shift in digital communications and in content marketing as a whole. This in turn has changed the way businesses and brands approach consumers and vice versa. This is where we step in.",
    "e2e Cyber Solutions is the missing link between your businesses and your audience and consumers. We aim to bridge this gap by creating new digital avenues and marketing solutions for your business. We build and deliver experiential digital products and engaging content solutions; that are both strategic and creative.",
  ],
  values: [
    {
      title: "Creative, Contemporary and Credible.",
      description:
        "With creativity is our middle name; we stay on top of trends, have world-class ideas and speak digital fluently.",
    },
    {
      title: "All in the making",
      description: "Websites, mobile, and ecommerce. All meticulously designed and strategically crafted.",
    },
    {
      title: "Onwards and upwards",
      description: "SEO, PPC, social media. Growth strategy and analytics to drive business and sales.",
    },
    {
      title: "Onboard and convert",
      description: "Prompt sales, lower expenditure, maximum profit.",
    },
  ],
  cta: { label: "Let’s Talk!", href: "#" },
  testimonials: null,
  copyQa: "Copy includes the phrase 'With creativity is our middle name'. Not corrected.",
};

export const contactPage = {
  id: "contact",
  path: "/contact.php",
  liveUrl: live("/contact.php"),
  status: 200,
  template: "Contact",
  seo: { title: "Web Design Agency", description: "" },
  h1: "Contact Us",
  kicker: "Get in touch for a free digital marketing review of your business.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ],
  contactCards: [
    {
      label: "Call Us",
      content: "New Accounts: 0121 271 0369",
      icon: images.contactIcons.call,
    },
    {
      label: "Write Us",
      content: "info@e2ecybersolutions.com",
      icon: images.contactIcons.email,
    },
    {
      label: "Visit Us",
      content: "1204b Stratford Road, Birmingham, B28 8HN",
      icon: images.contactIcons.visit,
    },
  ],
  form: {
    action: "/",
    method: "POST",
    backendStatus: "TODO: the live form posts to / and no handler or success state is visible.",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
      { name: "email", label: "Email address", type: "email", placeholder: "Email Address", required: true },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Phone Number",
        required: true,
        issue: "TODO: label says Subject but placeholder says Phone Number.",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
        note: "The live label has no asterisk, but the textarea has aria-required=true.",
      },
    ],
    submitLabel: "Send Message",
  },
  map: site.contact.map,
  testimonials: null,
};

export const servicesIndexPage = {
  id: "services-index",
  path: "/services.php",
  liveUrl: live("/services.php"),
  status: 200,
  template: "Services index (theme demo)",
  seo: { title: "Web Design Agency", description: "" },
  h1: "Services 2",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Pages" },
    { label: "Services 2" },
  ],
  cards: [
    {
      label: "Marketing",
      description:
        "We use strategic marketing tactics that have been proven to work. Social networks, PPC campaigns. We can do it all for Your company!",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-1.png"),
    },
    {
      label: "Development",
      description:
        "Custom programming for most complex functions you can think. No more headaches! Focus on your business and let it grow fast!",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-2.png"),
    },
    {
      label: "Web Design",
      description:
        "Powerful web design that will out-perform your strongest competitors. Let us help you with that. Get a free Quote. Lorem ipsum dolor sit amet, consetetur.",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-3.png"),
    },
    {
      label: "SEO Optimisation",
      description:
        "Optimizing our web designs to rank on the first page of google is our specialty. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-4.png"),
    },
    {
      label: "Ecommerce",
      description:
        "We build your online store using a flexible, modular platform that allows you to expand and grow your website easily as your business grows.",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-5.png"),
    },
    {
      label: "Branding",
      description:
        "A solid brand strategy, logo and guidelines help you to get You recognized. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      href: "/service-detail.php",
      icon: asset("images/service/service-icon-6.png"),
    },
  ],
  testimonials: null,
  statusNote:
    "TODO: this page contains theme demo copy and links every card to the same demo detail page. It is not linked from the main nav, only from breadcrumbs.",
  copyQa: "Lorem ipsum appears in three cards. Not corrected.",
};

export const serviceDetailPage = {
  id: "service-detail",
  path: "/service-detail.php",
  liveUrl: live("/service-detail.php"),
  status: 200,
  template: "Single service (theme demo)",
  seo: { title: "Web Design Agency", description: "" },
  h1: "Single Service 3",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Pages" },
    { label: "Single Service 3" },
  ],
  subtitle: "At vero eos et accusam et justo duo dolores rebum stet clita kasd gubergren.",
  image: images.serviceHeroes["/service-detail.php"],
  paragraphs: [
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    "Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  ],
  list: ["It can answer common questions", "It can demonstrate how a product or service works", "It can discuss current trends"],
  trailingParagraph:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.",
  testimonials: true,
  statusNote:
    "TODO: entire page is unmodified theme demo content. Replace with a real service detail page or remove/redirect it.",
};

const serviceBreadcrumb = (label) => [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services.php" },
  { label },
];

const serviceSeo = { title: "Web Design Agency", description: "" };

export const servicePages = [
  {
    id: "design-and-development",
    path: "/design-and-development.php",
    liveUrl: live("/design-and-development.php"),
    status: 200,
    template: "Service category",
    seo: serviceSeo,
    h1: "DESIGN & DEVELOPMENT",
    breadcrumb: serviceBreadcrumb("DESIGN & DEVELOPMENT"),
    subtitle: "Disruptive ideas AND Strategic Execution",
    image: images.serviceHeroes["/design-and-development.php"],
    blocks: [
      { type: "heading", level: 2, text: "Web Development & Responsive Web Design" },
      {
        type: "paragraph",
        text:
          "Our web development team not only delivers high quality and functional websites but also ensures your website is robust, reliable and secure with all your data kept safe and secure.",
      },
      {
        type: "paragraph",
        text:
          "We at e2e Cyber Solutions are a professional web design and development agency with over a thousand clients to our credit. Over the last decade, we have created several websites and continue to manage them based on the client’s evolving needs.",
      },
      {
        type: "paragraph",
        text:
          "From start-ups to popular local brands in the Midlands; we have birthed and brought up many passion-projects business websites. Our developers, designers and SEO specialists work together to craft functional websites for your businesses.",
      },
      {
        type: "paragraph",
        text:
          "Our skilled team therefore, is equipped to turn your vision for your brand into reality and make sure your ideas for your business translate into the website.",
      },
      {
        type: "paragraph",
        text:
          "Once we have designed and developed your website, we will continue to support the development of your business digitally.",
      },
    ],
    testimonials: true,
  },
  {
    id: "development",
    path: "/development.php",
    liveUrl: live("/development.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Web Development",
    breadcrumb: serviceBreadcrumb("Web Development"),
    subtitle: "Technically-Sound, SEO-Friendly, Functional & Efficient Digital Products",
    image: images.serviceHeroes["/development.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "We specialise in developing powerful websites, mobile apps and digital products. Adept at creating bespoke, e-commerce and WordPress websites; our team has extensive experience in formulating digital products for brands across sectors and industries.",
      },
      {
        type: "paragraph",
        text:
          "We at team e2e Cyber Solutions have extensively researched, prototyped, and tested digital products and deliveredcustom-designed websites that can take your engagement and reach to new heights.",
      },
      {
        type: "definitionList",
        items: [
          {
            term: "Brochure Website",
            description:
              "Brochure websites are basically the digital equivalent of a print company brochure that contains all relevant information about your business. It is cost effective, impactful and it typically has the standard home page along with details of the services/products, testimonials and contact details.",
          },
          {
            term: "CMS Website",
            description:
              "CMS websites are those that need a backend CMS system allowing contributors or business owners to update, edit and publish content in real time.",
          },
          {
            term: "Static Website",
            description:
              "A static website is a site with content that cannot be altered without the developer editing its codes.",
          },
          {
            term: "Ecommerce Website",
            description:
              "Ecommerce websites are designed specifically to facilitate monetary transactions and allow your target audience to buy products and services directly from your business website. We design and develop ecommerce websites and integrate multiple payment gateways to enhance the user experience of your customers.",
          },
        ],
      },
      {
        type: "list",
        intro: "Payment Gateways",
        items: ["Sage Pay", "Voice Pay", "Paypal", "Google Checkout", "Amazon Pay"],
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'deliveredcustom-designed'. Not corrected.",
  },
  {
    id: "web-design",
    path: "/web-design.php",
    liveUrl: live("/web-design.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Web Design",
    breadcrumb: serviceBreadcrumb("Web Design"),
    subtitle: "Responsive and User-Friendly Web Design that also Reflects your Brand Identity",
    image: images.serviceHeroes["/web-design.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "A good website design has two pillars—branding, and consumers. We at e2e Cyber Solutions work with creative passion and razor-sharp focus on all the digital aspects of your brand and business to ensure you get the best web design possible for your brand. Our team’s extensive design portfolio makes us the best people to design your brand and its communication across all its digital touch-points.",
      },
      {
        type: "paragraph",
        text:
          "Our web design will facilitate the user-journey by creating a design that is functional, easy on the eyes and responsive to all screen sizes.",
      },
    ],
    testimonials: true,
  },
  {
    id: "mobile-app-design-and-development",
    path: "/mobile-app-desig-and-development.php",
    liveUrl: live("/mobile-app-desig-and-development.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Mobile App Design and Development",
    breadcrumb: serviceBreadcrumb("Mobile App Design and Development"),
    subtitle:
      "Adept at Mobile App Designsthat are Functional and Intensively-Tested, for Enhanced User Experience",
    image: images.serviceHeroes["/mobile-app-desig-and-development.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "When it comes to developing the digital personality of your business; we are capable of developing all your digital properties. If you are looking to enter the realm of Apps, we are experts at developing an app exclusively for your business.",
      },
      {
        type: "paragraph",
        text:
          "We take pride in our capacity to harmoniously create and synergise your app to your business website. The web layouts we create are responsive across screens—mobiles and tablets included, to ensure that your conversion rate is optimal across all screen sizes.",
      },
      {
        type: "paragraph",
        text:
          "Even though the app and the website operate differently and create a different experience, we at e2e Cyber Solutions do everything in our capacity to maintain design synchrony and similarity to make sure your audience feels at home.",
      },
      {
        type: "definitionList",
        items: [
          {
            term: "Native mobile apps:",
            description:
              "Designed to be native to one platform, native apps tend to optimize the user experience. As they are developed specifically for the one platform, they operate intuitively and more efficiently.",
          },
          {
            term: "iPhone Apps",
            description: "",
          },
          {
            term: "Android Apps",
            description: "",
          },
          {
            term: "Hybrid mobile apps:",
            description:
              "Hybrid apps run through web browsers and are developed through the HTML5 programming language. Hybrid apps are ideal for businesses that mainly deal in content.",
          },
        ],
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'Designsthat'. Not corrected.",
  },
  {
    id: "ecommerce",
    path: "/ecommerce-websites.php",
    liveUrl: live("/ecommerce-websites.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Ecommerce",
    breadcrumb: serviceBreadcrumb("Ecommerce"),
    subtitle: "Agile, User-Friendly and Customized Ecommerce Websites to Aid Your Business",
    image: images.serviceHeroes["/ecommerce-websites.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "We at e2e Cyber Solutions specialize in both designing and developing eCommerce websites that are not only highly functional, look great but are also able to retain and convert visitors into sales.We offer a plethora of e-commerce services to help you set up your ecommerce store.",
      },
      {
        type: "paragraph",
        text:
          "Our e-commerce platforms are agile, user-friendly and customized to suit your business. Adeptat designing, optimising and promoting online retail websites; we help you make the most of your eCommerce business.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'sales.We' and 'Adeptat'. Not corrected.",
    metaNote: "Page has an unexplained meta description value of 'cccccccc' in the source.",
  },
  {
    id: "cms",
    path: "/cms.php",
    liveUrl: live("/cms.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Content Management Systems",
    breadcrumb: serviceBreadcrumb("Content Management Systems"),
    subtitle:
      "Custom Content Management Systems to Suit Your Website Needs and to Help You Maintain them Smoothly",
    image: images.serviceHeroes["/cms.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "The digital-savvy world we live in, demand that your business has a strong digital face (read, website). It is crucial, if you intend for your business to thrive, that it has an updated and active website.",
      },
      {
        type: "paragraph",
        text:
          "That is precisely why you need a custom designed CMS (Content Management System); that can make all the difference to your business website. A bespoke CMS system ensures that your team is able to update your business’s online presence, within minutes. It allows you to keep your business at the top of all internet trends and will help you create and share content with your clients and users in real time.",
      },
      {
        type: "paragraph",
        text:
          "We at e2e Cyber Solutions understand your business’s digital needs better than anyone. And that is why we offer tailor-made CMS systems for your business over off-the-shelf CMS; which can cater to business website, online store or booking system.",
      },
      {
        type: "list",
        intro: "The bespoke CMS systems we create for your business can...",
        items: [
          "Align with your business’s custom needs",
          "Is simple enough to maintain and adapt",
          "Empowers marketing teams to custom",
          "Give you a multi-site control",
          "Is made to handle SEO and Social",
          "Is unique to cater to the look and feel you want",
          "Is secure.",
        ],
      },
    ],
    testimonials: true,
  },
  {
    id: "wordpress",
    path: "/wordpress-websites.php",
    liveUrl: live("/wordpress-websites.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Wordpress Websites",
    breadcrumb: serviceBreadcrumb("Wordpress Websites"),
    subtitle:
      "Wordpress Websites for Every Type of Business Across Industries and Sectors",
    image: images.serviceHeroes["/wordpress-websites.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "As an established web design and marketing agency of repute, we at e2e Cyber Solutions are adept at designing and developing professional websites for the WordPress platform.We have extensive experience in extending WordPress’ functionality to meet your unique needs.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'platform.We'. Not corrected.",
  },
  {
    id: "website-management",
    path: "/website-management.php",
    liveUrl: live("/website-management.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Website Management",
    breadcrumb: serviceBreadcrumb("Website Management"),
    subtitle:
      "Website Maintenance and Management Services to Help Keep Everything Secure and Working Smoothly",
    image: images.serviceHeroes["/website-management.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "When we say we are a fully-functional web design and digital marketing agency, this is precisely what we are saying. We don’t just design and develop the website for your business but also create digital marketing strategies and content to optimise your websites to its full market potential.",
      },
    ],
    testimonials: true,
  },
  {
    id: "digital-marketing",
    path: "/digital-marketing.php",
    liveUrl: live("/digital-marketing.php"),
    status: 200,
    template: "Service category",
    seo: serviceSeo,
    h1: "Digital Marketing",
    breadcrumb: serviceBreadcrumb("Digital Marketing"),
    subtitle: "comprehensive digital and creative marketing strategies and services",
    image: images.serviceHeroes["/digital-marketing.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "We at e2e Cyber Solutions are an expert media and digital marketing agency offering comprehensive creative marketing strategies and services. All our design, development,creative and strategic services are geared towards helping your business stand out in the crowded digital market.",
      },
      {
        type: "paragraph",
        text:
          "We develop bespoke websites for your brand and create digital marketing strategy to meet your businesses unique needs.",
      },
      {
        type: "paragraph",
        text:
          "You can choose to avail any of our digital marketing services in any combination and at any stage of your business. Simply share your requirement and we are here to offer all or any of the services outlined here…",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'development,creative'. Not corrected.",
  },
  {
    id: "digital-strategy",
    path: "/digital-strategy.php",
    liveUrl: live("/digital-strategy.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Digital Strategy",
    breadcrumb: serviceBreadcrumb("Digital Strategy"),
    subtitle:
      "Strategic Roadmap, Brand Positioning, Brand Guidelines, Brand Objectives and TG-Comprehensive Marketing Solutions that Will give you a strong ROI",
    image: images.serviceHeroes["/digital-strategy.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "At the center of all communications marketing solutions is a comprehensive strategy that engages audiences through personalized, impactful copy and delivers digital experiences for your consumers to remember.",
      },
      {
        type: "paragraph",
        text:
          "At e2e Cyber Solutions, our insights and analysis with regard to a digital communications strategy are not just data-driven, we also make an effort to observe, think and apply behavioural science and intelligence when we create content for your brand.We then make strategic and informed decisions for your brand.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'brand.We'. Not corrected.",
  },
  {
    id: "seo",
    path: "/seo.php",
    liveUrl: live("/seo.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "SEO",
    breadcrumb: serviceBreadcrumb("SEO"),
    subtitle: "Ace SEO Support That Can Resultin Engagement, Growth and Conversion",
    image: images.serviceHeroes["/seo.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "One aspect of having a strong digital presence is being at the top of relevant search results on all search engines. After all, who has the patience for the second page of Google!",
      },
      {
        type: "paragraph",
        text:
          "The times we live in are all about the now—live streams, the visibility and the immediacy. And that is precisely why every business today needs SEO (search engine optamisation) as an integral part of their digital marketing strategy.",
      },
      {
        type: "paragraph",
        text:
          "Once your business is live on digital, it needs all the eyeballs it can grab. So, allow us to track, measure, analyse, experiment and ensure that your digital content is optimised against every penny you invest.",
      },
      {
        type: "list",
        intro: "Our SEO services will allow you to:",
        items: [
          "Improve your brand awareness, as users tend to trust the search results.",
          "Help with your organic reach.",
          "Better your conversions and thus help with your business growth",
        ],
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'Resultin' and 'optamisation'. Not corrected.",
    replacedBrokenPath: "/seo-optimization.php",
  },
  {
    id: "analytics-growth-marketing",
    path: "/analytics-or-growth-marketing.php",
    liveUrl: live("/analytics-or-growth-marketing.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Analytics or Growth Marketing",
    breadcrumb: serviceBreadcrumb("Analytics or Growth Marketing"),
    subtitle:
      "We Employ Behavioral Science, Strategic Thinking, Creative Content and Design to Create Powerful Communication for your Brand",
    image: images.serviceHeroes["/analytics-or-growth-marketing.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Digital analytics allows us to tell you the source of the digital traffic you receive; it could be through organic search, paid or through social media and/ or other channels.",
      },
      {
        type: "paragraph",
        text:
          "Through digital analytics, we can help you access data and thus help you deliver personalized experiences to your audiences. You can also use this data to tweak your digital marketing strategy accordingly and eventually hit your business targets.",
      },
    ],
    testimonials: true,
  },
  {
    id: "ppc-management",
    path: "/ppc-management.php",
    liveUrl: live("/ppc-management.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "PPC Management",
    breadcrumb: serviceBreadcrumb("PPC Management"),
    subtitle: "PPC Services to Monitor Performance and Maximize your Brands Performance",
    image: images.serviceHeroes["/ppc-management.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Creating a website that looks great and has strategically designed content is great but if your website does not garner traffic, it can all prove futile. That is where we bring in PPC (Pay Per Click), a cousin of SEO (Search Engine Optimisation) but more efficient.",
      },
      {
        type: "paragraph",
        text:
          "If you want to garner instant traffic to your website to generate conversion; sales or enquiries, then you must explore PPC and employee us to craft you a suitable PPC campaign.",
      },
      {
        type: "list",
        intro: "The many forms of PPC:",
        items: [
          "Paid Search Marketing",
          "Display Advertising",
          "Social Media Advertising",
          "Retargeting PPC Advertising",
          "Affiliate Marketing",
        ],
      },
      {
        type: "paragraph",
        text:
          "After strategically analysing your business, current business processes and targets we will advise you on how to run a successful campaign to get traction.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'employee us'. Not corrected. A stray backtick is present in the source after the final paragraph.",
  },
  {
    id: "social-media",
    path: "/social-media.php",
    liveUrl: live("/social-media.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Social Media Marketing",
    breadcrumb: serviceBreadcrumb("Social Media Marketing"),
    subtitle:
      "Adept at Handling your Brand's Social Media Through Strategy, Content Creation and Community Management Expertise",
    image: images.serviceHeroes["/social-media.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Social media has immerged as a powerful digital marketing tool over the last decade, with a sudden boom in the popularity of several social media platforms.",
      },
      {
        type: "paragraph",
        text:
          "Different social media platforms have opened up new avenues for different formats of content, which in turn has given businesses more digital space to present their brand and reach out to their target audience. This has made it extremely important for brands and businesses to be actively present in these digital spaces (SM platforms) and to present their brands in a way that is consumable.",
      },
      {
        type: "paragraph",
        text:
          "This is where we come in. We at e2e Cyber Solutions will create well-thought-out social media strategies, campaigns and monthly plans that will help you engage and reach your TG better.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'immerged'. Not corrected.",
  },
  {
    id: "email-marketing",
    path: "/email-marketing.php",
    liveUrl: live("/email-marketing.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Email Marketing",
    breadcrumb: serviceBreadcrumb("Email Marketing"),
    subtitle:
      "Well-Researched, Bespoke Email Marketing Campaigns Packed to the Brim with call-to-actions and Engaging Content",
    image: images.serviceHeroes["/email-marketing.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Email marketing is one of the most effective ways of securing genuine conversions in digital marketing.",
      },
      {
        type: "paragraph",
        text:
          "Email marketing is simply the use of emails to promote your business and its offerings. However, there is a professional etiquette to email marketing that we at e2e Cyber Solutions have mastered.",
      },
      {
        type: "list",
        intro: "What makes email marketing work?",
        items: [
          "Contact management and segmentation",
          "Marketing automation & personalisation",
          "Lead nurturing & conversion optimisation",
          "Email marketing performance",
        ],
      },
    ],
    testimonials: true,
  },
  {
    id: "creative",
    path: "/creative.php",
    liveUrl: live("/creative.php"),
    status: 200,
    template: "Service category",
    seo: serviceSeo,
    h1: "CREATIVE",
    breadcrumb: serviceBreadcrumb("CREATIVE"),
    subtitle:
      "creative ideas strategically executed to ensure your brand reaches, engages and retains your desired audience",
    image: images.serviceHeroes["/creative.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "We start with a creative brand strategy that can turn your brand’s social media presence into a community. As we shape your brands online presence; we make sure the content we create for your brand speaks to the right audience, establishes relatability and aspiration, adds value to your service/product and generates customer loyalty.",
      },
      {
        type: "paragraph",
        text:
          "Our consumer-focused creative content (across all formats and platforms) is designed to turn curious visitors into engaged customers, and random followers into loyal fans. We employ our creativity and strategic thinking to generating (interest, engagement and loyalty), through a combination of organic and paid content.",
      },
      {
        type: "paragraph",
        text:
          "Our content is strategically designed to establish connections, spark conversations, build belonging, grow engagement and eventually to get a solid community behind your brand.",
      },
    ],
    testimonials: false,
  },
  {
    id: "branding",
    path: "/branding.php",
    liveUrl: live("/branding.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Branding and Communication strategy",
    breadcrumb: serviceBreadcrumb("Branding and Communication strategy"),
    subtitle:
      "a creative brand &communications strategy to target and engage your audience for maximum ROI",
    image: images.serviceHeroes["/branding.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Team e2e Cyber Solutions has respectively and together worked on several local and global brands. We each, bring to the table our experience in building brands across very diverse industries.",
      },
      {
        type: "paragraph",
        text:
          "Our unanimous expertise however, lies in defining your brand identity, making your brand accessible to the desired audience and making it impossible for the audience to ignore it. Your brand identity is one of the most influential factors that will drive your audience to choose your product or service over your competition’s.",
      },
      {
        type: "paragraph",
        text:
          "Our job—is to analyse user behaviour/consumer habits, combine data-driven research with sharp communication and impactful creatives; that together reflect your brand’s identity. Whether you are looking to launch a new business or rebrand your existing business in the market; the key to keeping your business relevant is by making your brand reach and resonate with your target audience.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes '&communications'. Not corrected.",
  },
  {
    id: "content-writing",
    path: "/content-writing.php",
    liveUrl: live("/content-writing.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Content Writing",
    breadcrumb: serviceBreadcrumb("Content Writing"),
    subtitle:
      "creative and strategic content for your brand across all formats and digital touchpoints",
    image: images.serviceHeroes["/content-writing.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Strong copy with a defined tone-of-voice, clear and assertive brand messaging and on-point communication are all crucial to any given business, in any given industry, in every part of the world. We at e2e Cyber Solutions excel in creating impactful copy and disruptive, creative content; across all formats for your brand and business.",
      },
      {
        type: "paragraph",
        text:
          "We are adept at creating content-led human experiences and stories for your brand, whilst also making sure we measure, analyse and optimise this content across all formats and platforms, to keep your brand relevant.",
      },
      {
        type: "list",
        items: [
          "Newsletters",
          "Blogs",
          "Videos",
          "Infographics",
          "Link Building",
          "Email Marketing",
          "SMS Marketing",
        ],
      },
    ],
    testimonials: true,
    replacedBrokenPath: "/content.php",
  },
  {
    id: "graphic-design",
    path: "/graphic-design.php",
    liveUrl: live("/graphic-design.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "Graphic Design",
    breadcrumb: serviceBreadcrumb("Graphic Design"),
    subtitle: "stellar graphic designsto communicate your brand’s message clearly to the right audience",
    image: images.serviceHeroes["/graphic-design.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Strong visuals, impactful branding, visual design and on-point creatives are crucial to any given business, in any given industry, in every part of the world. And we at e2e Cyber Solutions excel in designing and producing, functional and robust digital design for your product or service.",
      },
      {
        type: "paragraph",
        text:
          "We are a fully functional digital agency that provides integrated content marketing solutions. We ensure that we design the look-and-feel of your website and SM platforms to create customized process that caters to all your business needs.",
      },
    ],
    testimonials: true,
    copyQa: "Copy includes 'designsto'. Not corrected.",
  },
  {
    id: "videos",
    path: "/videos.php",
    liveUrl: live("/videos.php"),
    status: 200,
    template: "Service detail",
    seo: serviceSeo,
    h1: "VIDEOS",
    breadcrumb: serviceBreadcrumb("VIDEOS"),
    subtitle:
      "we ensure your brand’s video content is at par with world standards and is able to get your audience’s attention for all the right reasons",
    image: images.serviceHeroes["/videos.php"],
    blocks: [
      {
        type: "paragraph",
        text:
          "Whilst video marketing is a low-key focus for many businesses, we at e2e Cyber Solutions, in our capacity as marketers see good value in video marketing.",
      },
      {
        type: "paragraph",
        text:
          "As a creative digital marketing agency, we’re see great value in conceptualizing and creating compelling video content that can make your audience understand and feel your brand’s story. This helps build customer loyalty which then translates into sales.",
      },
    ],
    testimonials: false,
    copyQa: "Copy includes 'we’re see'. Not corrected.",
  },
];

export const pageContent = {
  "/": homePage,
  "/about.php": aboutPage,
  "/contact.php": contactPage,
  "/services.php": servicesIndexPage,
  "/service-detail.php": serviceDetailPage,
  ...Object.fromEntries(servicePages.map((page) => [page.path, page])),
};

export const pageInventory = [
  { url: "/", status: 200, id: "home", note: "Homepage. Also reachable at /index.php." },
  { url: "/index.php", status: 200, id: "home", note: "Duplicate homepage URL used by the logo and Home nav item." },
  { url: "/about.php", status: 200, id: "about", note: "" },
  { url: "/design-and-development.php", status: 200, id: "design-and-development", note: "Design & Development category." },
  { url: "/development.php", status: 200, id: "development", note: "" },
  { url: "/web-design.php", status: 200, id: "web-design", note: "" },
  {
    url: "/mobile-app-desig-and-development.php",
    status: 200,
    id: "mobile-app-design-and-development",
    note: "Slug contains 'desig' and must be preserved.",
  },
  { url: "/ecommerce-websites.php", status: 200, id: "ecommerce", note: "" },
  { url: "/cms.php", status: 200, id: "cms", note: "" },
  { url: "/wordpress-websites.php", status: 200, id: "wordpress", note: "" },
  { url: "/website-management.php", status: 200, id: "website-management", note: "" },
  { url: "/digital-marketing.php", status: 200, id: "digital-marketing", note: "Digital Marketing category." },
  { url: "/digital-strategy.php", status: 200, id: "digital-strategy", note: "" },
  { url: "/seo.php", status: 200, id: "seo", note: "Replacement target for broken /seo-optimization.php." },
  { url: "/analytics-or-growth-marketing.php", status: 200, id: "analytics-growth-marketing", note: "" },
  { url: "/ppc-management.php", status: 200, id: "ppc-management", note: "" },
  { url: "/social-media.php", status: 200, id: "social-media", note: "" },
  { url: "/email-marketing.php", status: 200, id: "email-marketing", note: "" },
  { url: "/creative.php", status: 200, id: "creative", note: "Creative category." },
  { url: "/branding.php", status: 200, id: "branding", note: "" },
  { url: "/content-writing.php", status: 200, id: "content-writing", note: "Replacement target for broken /content.php." },
  { url: "/graphic-design.php", status: 200, id: "graphic-design", note: "" },
  { url: "/videos.php", status: 200, id: "videos", note: "" },
  { url: "/contact.php", status: 200, id: "contact", note: "" },
  {
    url: "/seo-optimization.php",
    status: 404,
    id: null,
    note: "Linked from homepage 'SEO Optimization' card. Redirect to /seo.php.",
  },
  {
    url: "/content.php",
    status: 404,
    id: null,
    note: "Linked from homepage 'Content' card. Redirect to /content-writing.php.",
  },
  {
    url: "/services.php",
    status: 200,
    id: "services-index",
    note: "Theme demo services listing. Linked from service breadcrumbs. Not in main nav.",
  },
  {
    url: "/service-detail.php",
    status: 200,
    id: "service-detail",
    note: "Theme demo detail page with Lorem ipsum. Linked from services.php 'Read more'.",
  },
];

const legacyHtmlRedirects = Object.keys(pageContent)
  .filter((path) => path.endsWith(".php"))
  .map((path) => ({
    from: path.replace(/\.php$/, ".html"),
    to: path,
    status: 301,
    reason: "Legacy .html variant is currently 404. Preserve any old inbound links.",
  }));

export const redirects = [
  {
    from: "/index.php",
    to: "/",
    status: 301,
    reason: "Duplicate homepage. Canonicalise to /; link and route still resolve.",
  },
  {
    from: "/seo-optimization.php",
    to: "/seo.php",
    status: 301,
    reason: "Broken homepage link returns 404. Closest live service is SEO.",
  },
  {
    from: "/content.php",
    to: "/content-writing.php",
    status: 301,
    reason: "Broken homepage link returns 404. Closest live service is Content Writing.",
  },
  {
    from: "https://e2ecybersolutions.com/*",
    to: "https://www.e2ecybersolutions.com/*",
    status: 301,
    reason: "Non-www host currently returns 200. Consolidate on the www canonical host.",
  },
  ...legacyHtmlRedirects,
];

export const noRedirectNeeded = Object.keys(pageContent).filter((path) => path !== "/");

export const routeList = [
  { path: "/", component: "Home" },
  { path: "/index.php", redirectTo: "/" },
  { path: "/about.php", component: "About" },
  { path: "/contact.php", component: "Contact" },
  { path: "/services.php", component: "Services" },
  { path: "/service-detail.php", component: "ServiceDetail" },
  ...servicePages.map((page) => ({ path: page.path, component: "Service" })),
  { path: "/portfolio.php", component: "Portfolio" },
  { path: "/work.php", redirectTo: "/portfolio.php" },
  { path: "/case-study.php", component: "CaseStudy" },
  { path: "/seo-optimization.php", redirectTo: "/seo.php" },
  { path: "/content.php", redirectTo: "/content-writing.php" },
  { path: "*", component: "NotFound" },
];
