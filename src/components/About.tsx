
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  const journey = [
    {
      title: "Diploma in Engineering",
      date: "Current",
      type: "Education",
      icon: "🎓",
      description:
        "Building a strong foundation in programming, web development, and computer science while continuing my diploma studies.",
    },
    {
      title: "Full Stack Development",
      date: "Ongoing",
      type: "Learning Journey",
      icon: "💻",
      description:
        "Learning modern web technologies and improving my skills in React, Next.js, TypeScript, Tailwind CSS, and backend development.",
    },
    {
      title: "Personal Projects",
      date: "Ongoing",
      type: "Hands-on Experience",
      icon: "🚀",
      description:
        "Building responsive web applications to apply my knowledge, solve real-world problems, and grow as a developer.",
    },
  ];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#09090D] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-lime-400/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-lime-400/[0.05] blur-[140px]" />

      {/* Dotted background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #A3E635 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 sm:mb-14"
        >
          <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-lime-400 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_#A3E635]" />
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About <span className="text-lime-400">Me.</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 h-1 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.3)]"
          />
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 items-start gap-5 md:gap-7 lg:grid-cols-2 lg:gap-8">
          {/* About card */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101014]/90 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-lime-400/30 sm:p-7 md:p-9"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3 py-2 text-[10px] font-semibold text-lime-300 sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
              </span>
              Aspiring Full Stack Developer
            </span>

            <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Turning ideas into
              <span className="text-lime-400"> reality.</span>
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              <p>
                I'm a Diploma student and aspiring Full Stack Developer
                passionate about building modern, responsive, and
                user-friendly web applications.
              </p>

              <p>
                I enjoy turning ideas into real-world projects using
                React, Next.js, TypeScript, and Tailwind CSS.
              </p>

              <p>
                I'm continuously learning new technologies, improving
                my problem-solving skills, and building projects to
                grow as a developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="my-7 grid grid-cols-2 gap-3 sm:my-8 sm:gap-4">
              {[
                { title: "Build", subtitle: "Learn by creating" },
                { title: "Improve", subtitle: "Learn every day" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="rounded-xl border border-white/[0.08] bg-black/25 p-4 transition-colors duration-300 hover:border-lime-400/25 sm:p-5"
                >
                  <h4 className="text-xl font-bold text-lime-400 sm:text-2xl">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-lime-300 sm:w-auto"
            >
              Download CV
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Journey card */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101014]/90 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-lime-400/30 sm:p-7 md:p-9"
          >
            <div className="mb-8 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-lime-400 sm:text-xs">
                  My Background
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                  My Journey
                </h3>
              </div>

              <motion.div
                animate={reduceMotion ? undefined : { rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/[0.08] text-xl text-lime-400"
              >
                ✦
              </motion.div>
            </div>

            {/* Animated timeline */}
            <div className="relative space-y-8 before:absolute before:bottom-3 before:left-[19px] before:top-3 before:w-px before:bg-white/10">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-3 left-[19px] top-3 w-px origin-top bg-gradient-to-b from-lime-400 via-lime-400/50 to-transparent"
              />

              {journey.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 20,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.18,
                    ease: "easeOut",
                  }}
                  className="relative flex gap-4"
                >
                  {/* Timeline icon */}
                  <motion.div
                    whileHover={reduceMotion ? undefined : { scale: 1.1 }}
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-400/20 bg-[#11130C] text-lg shadow-[0_0_18px_rgba(163,230,53,0.07)]"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Timeline content */}
                  <div className="min-w-0 flex-1 pb-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-lime-400/[0.08] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-lime-400 sm:text-[10px]">
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.date}
                      </span>
                    </div>

                    <h4 className="mb-3 text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Goal card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 rounded-xl border border-lime-400/15 bg-lime-400/[0.04] p-4"
            >
              <p className="text-sm leading-6 text-gray-400">
                <span className="font-semibold text-lime-400">
                  My goal:
                </span>{" "}
                To keep learning, build meaningful products, and grow
                into a skilled Full Stack Developer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
