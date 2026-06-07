import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  Email,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const emailUser = "yogeshsanodiya59";
const emailDomain = "gmail.com";
const emailAddress = `${emailUser}@${emailDomain}`;

const contactItems = [
  {
    icon: Email,
    label: "Email",
    value: `${emailUser} [at] ${emailDomain}`,
    href: `mailto:${emailAddress}`,
    size: "small",
    gradient: "from-blue-500/5 to-cyan-500/5",
  },
  {
    icon: Github01Icon,
    label: "GitHub",
    value: "yogeshsanodiya59-web",
    href: "https://github.com/yogeshsanodiya59-web",
    size: "small",
    gradient: "from-gray-500/5 to-slate-500/5",
  },
  {
    icon: Linkedin01Icon,
    label: "LinkedIn",
    value: "yogesh-sanodiya-8a2816298",
    href: "https://www.linkedin.com/in/yogesh-sanodiya-8a2816298/",
    size: "small",
    gradient: "from-blue-600/5 to-blue-800/5",
  },
  {
    icon: TwitterIcon,
    label: "Twitter / X",
    value: "Yogesh_MITS",
    href: "https://x.com/Yogesh_MITS",
    size: "small",
    gradient: "from-purple-500/5 to-pink-500/5",
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto h-full max-w-5xl border-x">
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <h2 className="text-2xl md:text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="mb-5 text-base text-muted-foreground">
            Reach out through email or find me on social media
          </p>
        </div>

        <BorderSeparator />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((contact, index) => {
            return (
              <Box
                key={contact.label}
                icon={contact.icon}
                title={contact.label}
                value={contact.value}
                href={contact.href}
                hoverClassName="hover:bg-secondary/10"
                description={
                  contact.label === "Email"
                    ? "Direct: +91 7049792735 · Location: Gwalior, MP · Response time: < 24 hours."
                    : contact.label === "GitHub"
                      ? "See my latest work and contributions."
                      : contact.label === "LinkedIn"
                        ? "Connect with me professionally."
                        : "Follow my updates on Twitter / X."
                }
                className=""
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function BorderSeparator({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative inset-x-0 h-px w-full border-b", className)} />
  );
}

type ContactBox = React.ComponentProps<"div"> & {
  icon: any;
  title: string;
  description: string;
  value: string;
  href: string;
  hoverClassName?: string;
};

function Box({
  title,
  description,
  value,
  href,
  hoverClassName,
  className,
  icon: Icon,
}: ContactBox) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden border-b sm:border-r border-border/60 transition-colors lg:border-b-0 last:sm:border-r-0",
        hoverClassName,
        className
      )}
    
    >
      <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.08]">
        {typeof Icon === "function" ? (
          <Icon className="h-[72px] w-[72px] transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1" />
        ) : (
          <HugeiconsIcon
            icon={Icon}
            size={72}
            className="transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
          />
        )}
      </div>

      <div className="flex items-center gap-x-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
        {typeof Icon === "function" ? (
          <Icon className="h-[18px] w-[18px] text-muted-foreground" />
        ) : (
          <HugeiconsIcon icon={Icon} size={18} className="text-muted-foreground" />
        )}
        <h4 className="font-heading font-medium text-lg tracking-wider">
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">
        <span className="font-medium font-mono text-sm tracking-wide">
          {value}
        </span>
      </div>
      <div className="border-t p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </a>
  );
}
