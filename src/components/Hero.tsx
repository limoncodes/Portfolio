
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiGithub,
    SiRedux,
    SiVite,
    SiPostgresql,
    SiPrisma,
    SiFigma,
} from 'react-icons/si';
import { FiArrowUpRight, FiGithub, FiMail } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import About from './About';

type Skill = {
    name: string;
    icon: IconType;
    color: string;
};

const skills: Skill[] = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Vite', icon: SiVite, color: '#BD34FE' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const faces = [
    { name: 'Front', transform: 'translateZ(130px)', start: 0 },
    { name: 'Back', transform: 'rotateY(180deg) translateZ(130px)', start: 9 },
    { name: 'Right', transform: 'rotateY(90deg) translateZ(130px)', start: 3 },
    { name: 'Left', transform: 'rotateY(-90deg) translateZ(130px)', start: 6 },
    { name: 'Top', transform: 'rotateX(90deg) translateZ(130px)', start: 12 },
    { name: 'Bottom', transform: 'rotateX(-90deg) translateZ(130px)', start: 15 },
];

const Hero = () => {
    const [rotation, setRotation] = useState({ x: -20, y: -30 });

    const rotateCube = () => {
        setRotation((previous) => ({
            x: previous.x + 90,
            y: previous.y + 90,
        }));
    };

    return (
        <div>
            <section className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 py-24 text-white sm:px-8 lg:px-12">
                <div className="container mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-10">

                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="relative z-10"
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />

                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-400 sm:text-sm">
                                Aspiring Full Stack Developer
                            </p>
                        </div>

                        <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            Hi, I&apos;m
                            <br />
                            <span className="text-lime-400">Limon Islam.</span>
                            <br />
                            <span className="text-gray-400">I build for the web.</span>
                        </h1>

                        <p className="mt-7 max-w-lg text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                            I build modern, responsive web applications with React, Next.js,
                            TypeScript, and Tailwind CSS.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <motion.a
                                href="#projects"
                                whileHover={{
                                    y: -3,
                                    boxShadow: '0 8px 30px #a3e63530',
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-lime-300"
                            >
                                View Projects
                                <FiArrowUpRight size={18} />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ y: -3, borderColor: '#a3e635' }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                            >
                                Contact Me
                                <FiMail size={17} />
                            </motion.a>
                        </div>

                        <div className="mt-8 flex items-center gap-5 text-sm text-gray-400">
                            <a
                                href="https://github.com/limoncodes"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 transition-colors hover:text-lime-400"
                            >
                                <FiGithub size={19} />
                                GitHub
                            </a>

                            <span className="h-4 w-px bg-white/15" />
                            <span>Bangladesh</span>
                        </div>
                    </motion.div>

                    {/* Interactive 3D Skills Cube */}
                    <div className="flex min-w-0 flex-col items-center justify-center py-8">
                        <div
                            className="relative flex h-[310px] w-full items-center justify-center sm:h-[380px] lg:h-[440px]"
                            style={{ perspective: '1100px' }}
                        >
                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative h-[260px] w-[260px] shrink-0 sm:scale-[1.12] lg:scale-[1.2]"
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotateX: rotation.x,
                                        rotateY: rotation.y,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 65,
                                        damping: 16,
                                        mass: 0.8,
                                    }}
                                    whileHover={{ scale: 1.015 }}
                                    onClick={rotateCube}
                                    className="absolute inset-0 cursor-pointer"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center',
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Rotate interactive skills cube"
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            rotateCube();
                                        }
                                    }}
                                >
                                    {faces.map((face) => (
                                        <div
                                            key={face.name}
                                            className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 border border-lime-400/60 bg-[#151922] p-3 shadow-[inset_0_0_22px_#00000030]"
                                            style={{
                                                transform: face.transform,
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility: 'hidden',
                                            }}
                                        >
                                            {Array.from({ length: 9 }, (_, index) => {
                                                const skill =
                                                    skills[(face.start + index) % skills.length];

                                                const Icon = skill.icon;

                                                return (
                                                    <motion.div
                                                        key={`${face.name}-${index}`}
                                                        title={skill.name}
                                                        whileHover={{
                                                            scale: 1.07,
                                                            backgroundColor: '#303744',
                                                            borderColor: '#a3e635',
                                                        }}
                                                        transition={{ duration: 0.18 }}
                                                        className="flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#222833] shadow-sm"
                                                    >
                                                        <Icon
                                                            aria-label={skill.name}
                                                            className="h-7 w-7 max-h-[65%] max-w-[65%] sm:h-8 sm:w-8"
                                                            style={{ color: skill.color }}
                                                        />
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>


                    </div>
                </div>

            </section>
            <About />
        </div>
    );
};

export default Hero;