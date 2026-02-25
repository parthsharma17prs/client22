"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]); // Adjust based on number of cards

    return (
        <section id="destinations" ref={targetRef} className="relative h-[300vh] bg-[#0A0A0A] text-white">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-20">
                <div className="px-10 md:px-20 mb-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-sans font-light tracking-wide mb-3">The Capsules</h2>
                        <p className="text-white/60 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs">Exquisite isolation.</p>
                    </div>
                </div>

                <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20 pb-20 w-max">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative flex-shrink-0 w-[80vw] md:w-[600px] h-[55vh] md:h-[65vh] rounded-[2rem] overflow-hidden cursor-pointer bg-white/5 border border-white/10"
                        >
                            {/* Background Image using preloader assets as reference images */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.03]"
                                style={{ backgroundImage: `url('/sequence-1/${card.imageIndex}.jpg')` }}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <div className="overflow-hidden">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ margin: "100px" }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="text-[10px] uppercase tracking-[0.3em] mb-3 font-medium text-white/80">
                                            {card.location}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-sans font-light tracking-wide text-white mb-8">
                                            {card.title}
                                        </h3>
                                    </motion.div>
                                </div>

                                <button className="w-fit border border-white/30 rounded-full px-8 py-3 text-[10px] font-medium uppercase tracking-[0.15em] transition-all bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black">
                                    Explore Capsule
                                </button>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
