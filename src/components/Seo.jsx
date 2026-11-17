import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { site } from "../data/siteContent.js";
import { absoluteUrl, getPageSeo, SITE_ORIGIN } from "../lib/seo.js";

export default function Seo({
  page,
  path,
  title,
  description,
  image,
  noindex = false,
  type = "website",
}) {
  const location = useLocation();
  const seo = getPageSeo(page, {
    path: path ?? location.pathname,
    title,
    description,
    image,
    noindex,
    type,
  });
  const fullTitle = seo.title.includes(site.name)
    ? seo.title
    : `${seo.title} | ${site.name}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      <meta
        name="robots"
        content={seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content={seo.type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
    </Helmet>
  );
}

export function StructuredData() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    postalCode: site.contact.address.postcode,
    addressCountry: "GB",
  };
  const logo = absoluteUrl(site.logo.url);
  const image = absoluteUrl("/media/about-us.webp");
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.contact.address.display,
  )}`;
  const organizationId = `${SITE_ORIGIN}/#organization`;
  const localBusinessId = `${SITE_ORIGIN}/#localbusiness`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: `${SITE_ORIGIN}/`,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: logo,
        },
        image,
        email: site.contact.email.display,
        telephone: "+44 121 271 0369",
        address,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+44 121 271 0369",
          email: site.contact.email.display,
          areaServed: "GB",
          availableLanguage: "en-GB",
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": localBusinessId,
        name: site.name,
        url: `${SITE_ORIGIN}/`,
        description: site.description,
        image,
        logo,
        email: site.contact.email.display,
        telephone: "+44 121 271 0369",
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.contact.map.coordinates.latitude,
          longitude: site.contact.map.coordinates.longitude,
        },
        hasMap: mapUrl,
        areaServed: [
          { "@type": "City", name: "Birmingham" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        parentOrganization: { "@id": organizationId },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
