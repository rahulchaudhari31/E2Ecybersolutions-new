import { site } from "../data/siteContent.js";

export default function SiteFooter() {
  return (
    <footer>
      <img src={site.logo.url} alt={site.logo.alt} height="60" />
      <ul>
        {site.social.map((network) => (
          <li key={network.label}>
            <a href={network.url} title={network.label} aria-label={network.label}>
              {network.label}
            </a>
          </li>
        ))}
      </ul>
      <p>{site.copyright}</p>
    </footer>
  );
}
