import { Link } from "react-router-dom";
import { navigation, site } from "../data/siteContent.js";

function NavItem({ item }) {
  if (item.href === "#") {
    return <span>{item.label}</span>;
  }

  return <Link to={item.href}>{item.label}</Link>;
}

export default function SiteHeader() {
  return (
    <header>
      <Link to="/">
        <img src={site.logo.url} alt={site.logo.alt} height="60" />
      </Link>
      <nav aria-label="Primary">
        <ul>
          {navigation.primary.map((item) => (
            <li key={item.label}>
              <NavItem item={item} />
              {item.children ? (
                <ul>
                  {item.children.map((category) => (
                    <li key={category.label}>
                      <Link to={category.href}>{category.label}</Link>
                      {category.children ? (
                        <ul>
                          {category.children.map((child) => (
                            <li key={child.label}>
                              <Link to={child.href}>{child.label}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <a href={site.contact.phone.href}>{navigation.headerPhone}</a>
    </header>
  );
}
