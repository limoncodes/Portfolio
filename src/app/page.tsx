
import DotGrid from "@/components/DotGrid";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0C0D10] text-white">
      {/* Hero Section */}
      <section className="relative isolate min-h-screen overflow-hidden">
        {/* Animated DotGrid Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <DotGrid
            baseColor="#3a3446"
            activeColor="#ffffff"
            shape="circle"
            dotSize={5}
            gap={18}
            proximity={140}
            strength={1}
            bounce={0.6}
            tension={0.4}
            returnDuration={0.8}
            shockRadius={320}
            shockStrength={5}
            swell={0.8}
            stretch={0.5}
            glow={0.5}
            fade={0}
            intro
            opacity={1}
            mouseInteraction
            clickShock
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 bg-[#0C0D10] px-6 py-24 text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          My Projects
        </h2>

        <p className="mt-4 text-gray-400">
          Here are some projects I have built.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 bg-[#0C0D10] px-6 py-24 text-center"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          Contact Me
        </h2>

        <p className="mt-4 text-gray-400">
          Let&apos;s build something amazing together.
        </p>
      </section>
    </main>
  );
}
