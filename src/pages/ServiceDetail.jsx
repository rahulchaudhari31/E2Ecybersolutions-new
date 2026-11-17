import ServiceDetailTemplate from "../components/ServiceDetailTemplate.jsx";
import { pageContent } from "../data/siteContent.js";

const sourcePage = pageContent["/development.php"];

const templatePage = {
  ...sourcePage,
  id: "service-detail-template",
  path: "/service-detail.php",
  template: "Reusable service detail template",
  h1: "Service detail template",
  kicker: "Reusable template",
  subtitle:
    "A complete service-detail layout populated with published Web Development content and ready for approved service copy.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services.php" },
    { label: "Service detail template" },
  ],
  statusNote:
    "TODO: replace the route copy with approved service-specific content before launch.",
};

export default function ServiceDetail() {
  return (
    <ServiceDetailTemplate
      page={templatePage}
      servicePath="/development.php"
      templateNotice="This reusable template is populated with published Web Development content. Replace it with approved service-specific copy before launch."
    />
  );
}
