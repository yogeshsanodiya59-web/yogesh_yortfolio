import Image from "next/image";
import Link from "next/link";




export default function HeroSection() {
  return (
    <section className="border-b bg-linear-to-br from-primary/10 via-background to-background">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 px-4 py-12 sm:py-16 md:py-20 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-3xl">
          <div className="relative shrink-0">
            <Image
              src="/profile.jpg"
              alt="Portrait of Yogesh Sanodiya"
              width={128}
              height={128}
              className="rounded-full aspect-square object-top object-cover w-28 h-28 sm:w-32 sm:h-32 ring-4 ring-primary/15 shadow-lg shadow-primary/15 transition-all duration-300 hover:scale-105 hover:ring-primary/25 hover:shadow-primary/20"
              priority
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 128px"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2.5">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Yogesh Sanodiya</h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
              Spring Boot Backend Developer focused on scalable systems, AI-powered applications, microservices architecture, and modern backend engineering.
            </p>
          </div>
        </div>

        <div className="shrink-0 mt-2 sm:mt-0">
          <Link
            href="#contact"
            className="px-4 py-2.5 min-h-11 inline-flex items-center justify-center bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-md hover:bg-primary/20 transition-all duration-200"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
