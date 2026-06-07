"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ScheduleMeetingSection() {
  const { resolvedTheme } = useTheme();
  const [url, setUrl] = useState("https://calendly.com/yogeshsanodiya59/30min");

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    const baseUrl = "https://calendly.com/yogeshsanodiya59/30min";

    // Themes matching oklch colors:
    // primary_color is oklch(0.65 0.15 145) => #10B981 (emerald)
    // background_color: dark is #171717, light is #ffffff
    // text_color: dark is #ffffff, light is #171717
    const bgColor = isDark ? "171717" : "ffffff";
    const textColor = isDark ? "ffffff" : "171717";
    const primaryColor = "10B981";

    const embedUrl = `${baseUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=${bgColor}&text_color=${textColor}&primary_color=${primaryColor}`;
    setUrl(embedUrl);
  }, [resolvedTheme]);

  return (
    <section id="schedule-meeting" className="border-b">
      <div className="mx-auto h-full max-w-5xl border-x">
        {/* Section Header */}
        <div className="flex grow flex-col justify-center border-b bg-linear-to-br from-muted/40 via-background to-muted/20 px-4 py-16 md:items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Scheduler</p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Schedule a Meeting
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl md:text-center leading-relaxed">
            Interested in collaborating, discussing opportunities, backend development, AI/ML projects, open-source contributions, or technical ideas? Book a Google Meet session directly from my portfolio.
          </p>
        </div>

        {/* Widget Container */}
        <div className="p-4 bg-background">
          <div className="relative w-full overflow-hidden border border-border/40 rounded-lg bg-card h-[700px]">
            <iframe
              src={url}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Schedule a Meeting with Yogesh Sanodiya"
            />
            {/* Overlay to tint the "Powered by Calendly" ribbon on hover */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Powered by Calendly"
              className="absolute top-0 right-0 w-[90px] h-[90px] group"
              style={{ pointerEvents: "auto" }}
            >
              <div className="absolute top-0 right-0 w-full h-full rounded-bl-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: "linear-gradient(225deg, rgba(37,99,235,0.55) 0%, rgba(37,99,235,0.15) 60%, transparent 100%)",
                  mixBlendMode: "multiply",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
