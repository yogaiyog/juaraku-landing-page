import { Instagram, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { whatsappHref } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

const contactIcons: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
  Email: Mail,
};

/**
 * Site footer: brand recap, sitemap links, contact channels, and copyright.
 * Marked as a semantic <footer> landmark for assistive technology.
 */
export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-surface-soft">
      <div className="section-shell grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink/70">
            {dict.tagline}
          </p>
        </div>

        <nav aria-label={dict.exploreHeading}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink/50">
            {dict.exploreHeading}
          </h3>
          <ul className="flex flex-col gap-3">
            {dict.links.company.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/75 hover:text-brand-blue-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink/50">
            {dict.contactHeading}
          </h3>
          <ul className="flex flex-col gap-3">
            {dict.links.contact.map((link) => {
              const Icon = contactIcons[link.label] ?? Mail;
              const href = link.label === "WhatsApp" ? whatsappHref : link.href;
              return (
                <li key={link.href}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm font-medium text-ink/75 hover:text-brand-blue-deep"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 py-6">
        <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-ink/50">
            © {year} JuaraKu. {dict.rights}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
