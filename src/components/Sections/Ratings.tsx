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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-10 rounded-3xl bg-zinc-900/40 border border-white/5 flex flex-col justify-between group hover:bg-zinc-800/60 hover:border-orange-500/30 transition-all duration-500 shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div>
                                <div className="flex text-orange-500 text-sm mb-8 gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span key={i} className={i < Math.floor(testimonial.rating) ? "opacity-100" : "opacity-30"}>★</span>
                                    ))}
                                </div>
                                <p className="text-white/70 font-light italic leading-relaxed mb-10 text-base group-hover:text-white/90 transition-colors">
                                    "{testimonial.text}"
                                </p>
                            </div>
                            <div className="border-t border-white/10 pt-6 group-hover:border-orange-500/20 transition-colors duration-500">
                                <h4 className="font-bold uppercase tracking-widest text-sm text-white">{testimonial.name}</h4>
                                <p className="text-xs text-orange-400/70 tracking-[0.2em] font-bold uppercase mt-2">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
