import { Instagram, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerLinks } from "@/lib/data";

const contactIcons: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
  Email: Mail,
};

/**
 * Site footer: brand recap, sitemap links, contact channels, and copyright.
 * Marked as a semantic <footer> landmark for assistive technology.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-surface-soft">
      <div className="section-shell grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-ink/70">
            Helping children become creators of technology through coding, AI, and
            project-based learning.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink/50">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.company.map((link) => (
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
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            {footerLinks.contact.map((link) => {
              const Icon = contactIcons[link.label] ?? Mail;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-ink/75 hover:text-brand-blue-deep"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
        <p className="section-shell text-center text-xs text-ink/50">
          © {year} JuaraKu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
