"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const cards = [
    { id: 1, title: "The Atacama", location: "Chile", imageIndex: "00400" },
    { id: 2, title: "The Aurora", location: "Iceland", imageIndex: "00500" },
    { id: 3, title: "The Alpine", location: "Switzerland", imageIndex: "00600" },
    { id: 4, title: "The Dunes", location: "Namibia", imageIndex: "00700" },
    { id: 5, title: "The Azure", location: "Maldives", imageIndex: "00800" },
];

export default function ScrollingCards() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
    const x = useSpring(xRaw, { stiffness: 60, damping: 25, restDelta: 0.001 });

    return (
        <section id="destinations" ref={targetRef} className="relative h-[500vh] bg-[#0A0A0A] text-white">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
                <div className="px-10 md:px-20 mb-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-8xl font-serif font-bold tracking-tight mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                        >
                            The Capsules
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-white/60 font-sans tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold"
                        >
                            Exquisite isolation.
                        </motion.p>
                    </div>
                </div>

                <motion.div style={{ x }} className="flex gap-16 px-10 md:px-20 pb-20 w-max items-center">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.9, x: 100 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative flex-shrink-0 w-[85vw] md:w-[75vw] lg:w-[65vw] h-[60vh] md:h-[75vh] rounded-[4rem] overflow-hidden cursor-pointer bg-white/5 border border-white/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                        >
                            {/* Background Image using preloader assets as reference images */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('/sequence-1/${card.imageIndex}.jpg')` }}
                                whileHover={{ scale: 1.1, filter: "brightness(0.6)" }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-1000" />

                            {/* Content */}
                            <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ margin: "100px" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    >
                                        <div className="text-[10px] uppercase tracking-[0.6em] mb-6 font-bold text-orange-400">
                                            {card.location}
                                        </div>
                                        <h3 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white mb-12 uppercase">
                                            {card.title}
                                        </h3>
                                    </motion.div>
                                </div>

                                <button className="w-fit border border-white/10 rounded-full px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-700 bg-white/5 backdrop-blur-3xl group-hover:bg-orange-500 group-hover:text-black group-hover:border-transparent group-hover:scale-110 shadow-2xl">
                                    Explore Capsule
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
