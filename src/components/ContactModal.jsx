import Modal from "./Modal.jsx";
import Button from "./Button.jsx";
import Icon from "./Icons.jsx";
import { contactPage, homePage, site } from "../data/siteContent.js";

export default function ContactModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={homePage.cta.secondaryAction.label}
      description={contactPage.kicker}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={site.contact.phone.href}
          className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent-300/40 hover:bg-white/[0.07]"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-200">
            <Icon name="phone" />
          </span>
          <span className="min-w-0">
            <span className="block text-body-xs text-white/45">{site.contact.phone.label}</span>
            <span className="mt-1 block truncate text-body-sm font-medium text-white">
              {site.contact.phone.display}
            </span>
          </span>
        </a>

        <a
          href={site.contact.email.href}
          className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent-300/40 hover:bg-white/[0.07]"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-200">
            <Icon name="mail" />
          </span>
          <span className="min-w-0">
            <span className="block text-body-xs text-white/45">Email</span>
            <span className="mt-1 block truncate text-body-sm font-medium text-white">
              {site.contact.email.display}
            </span>
          </span>
        </a>
      </div>

      <div className="mt-3 flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-200">
          <Icon name="map-pin" />
        </span>
        <div>
          <p className="text-body-xs text-white/45">Visit</p>
          <p className="mt-1 text-body-sm text-white">{site.contact.address.display}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          to="/contact.php"
          fullWidth
          onClick={onClose}
          icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
        >
          Go to contact page
        </Button>
        <Button href={site.contact.email.href} variant="secondary" fullWidth>
          Email us
        </Button>
      </div>
    </Modal>
  );
}
