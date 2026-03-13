"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Adventure Photographer",
        text: "The capsules offered the most surreal blend of luxury and untamed desert nature. Sleeping under the stars while feeling completely safe and warm was a life-changing experience.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Design Director",
        text: "Incredible attention to detail. Every material feels purposeful, and the way the glass curves to frame the landscape is architectural perfection. We will be back.",
        rating: 5,
    },
    {
        name: "Emily & James",
        role: "Honeymooners",
        text: "We wanted something completely secluded for our honeymoon, and this delivered beyond our wildest expectations. The starry nights from the hot tub are unforgettable.",
        rating: 4.8,
    }
];

export default function Ratings() {
    return (
        <section className="py-32 px-10 md:px-20 bg-[#0A0A0A] text-white relative">
            <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-orange-400 text-xs tracking-[0.3em] uppercase font-bold">Feedback</span>
                            <div className="h-[1px] w-12 bg-orange-500/50" />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-serif tracking-widest uppercase mb-6 leading-tight">Guest <br />Experiences</h2>
                        <p className="text-white/60 font-light tracking-wide max-w-xl text-lg">
                            Read the stories of those who have discovered their oasis in our desert capsules.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-6 bg-zinc-900/50 backdrop-blur-md px-10 py-6 rounded-full border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.05)]"
                    >
                        <div className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">4.9</div>
                        <div className="flex flex-col">
                            <div className="flex text-orange-400 text-lg mb-1 tracking-widest">
                                ★★★★★
                            </div>
                            <span className="text-xs text-orange-200/50 tracking-[0.2em] font-bold uppercase mt-1">From 200+ Reviews</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 flex flex-col justify-between group cursor-default shadow-2xl relative overflow-hidden"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                                scale: { duration: 0.8 },
                                y: { duration: 0.8 }
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex text-orange-500 text-lg mb-10 gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            className={i < Math.floor(testimonial.rating) ? "opacity-100" : "opacity-20"}
                                        >
                                            ★
                                        </motion.span>
                                    ))}
                                </div>
                                <p className="text-white/60 font-medium italic leading-loose mb-12 text-lg group-hover:text-white transition-colors duration-700">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="relative z-10 border-t border-white/5 pt-10 group-hover:border-orange-500/20 transition-colors duration-700">
                                <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-white/90 group-hover:text-white transition-colors">
                                    {testimonial.name}
                                </h4>
                                <p className="text-[10px] text-orange-500/50 tracking-[0.4em] font-bold uppercase mt-4 group-hover:text-orange-400 transition-colors duration-700">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
