import ServiceDetailTemplate from "../components/ServiceDetailTemplate.jsx";
import { pageContent } from "../data/siteContent.js";

export default function Service({ path }) {
  const page = pageContent[path];

  return <ServiceDetailTemplate page={page} />;
}
