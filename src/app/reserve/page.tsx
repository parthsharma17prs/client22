"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const rooms = [
    {
        id: 1,
        title: "The Oasis Capsule",
        capacity: "2 Guests",
        size: "400 sq ft",
        price: "$450 / night",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
        features: ["King Bed", "Outdoor Hot Tub", "Panoramic Desert View", "Fire Pit"],
    },
    {
        id: 2,
        title: "The Horizon Pod",
        capacity: "4 Guests",
        size: "650 sq ft",
        price: "$650 / night",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
        features: ["2 Queen Beds", "Spacious Lounge", "Kitchenette", "Stargazing Deck"],
    },
    {
        id: 3,
        title: "The Solitude Suite",
        capacity: "2 Guests",
        size: "500 sq ft",
        price: "$550 / night",
        image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66f?q=80&w=1000&auto=format&fit=crop",
        features: ["King Bed", "Private Sauna", "Premium Telescope", "Outdoor Shower"],
    }
];

export default function ReservePage() {
    const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black font-sans pt-32">

            <div className="max-w-7xl mx-auto px-10 md:px-20 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-widest mb-6">Select Your <br /> Sanctuary</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Choose the perfect capsule for your desert getaway. Each pod is designed to offer unparalleled privacy and immersion in nature.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {rooms.map((room, idx) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className={`group relative rounded-3xl overflow-hidden border ${selectedRoom === room.id ? 'border-white' : 'border-white/10'} hover:border-white/50 transition-colors bg-white/5`}
                            onClick={() => setSelectedRoom(room.id)}
                            role="button"
                            tabIndex={0}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-xs tracking-widest uppercase border border-white/20">
                                    {room.price}
                                </div>
                            </div>
                            <div className="p-8">
                                <h2 className="text-2xl font-serif uppercase tracking-widest mb-2">{room.title}</h2>
                                <div className="flex gap-4 text-xs tracking-widest uppercase text-white/50 mb-6">
                                    <span>{room.capacity}</span>
                                    <span>&bull;</span>
                                    <span>{room.size}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {room.features.map((feature, i) => (
                                        <li key={i} className="text-sm font-light text-white/70 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded-full uppercase tracking-widest text-sm font-bold transition-colors ${selectedRoom === room.id
                                        ? 'bg-white text-black'
                                        : 'border border-white/20 hover:bg-white/10 text-white'
                                        }`}
                                >
                                    {selectedRoom === room.id ? 'Selected' : 'Select Room'}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {selectedRoom && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-20 p-10 bg-white/5 border border-white/10 rounded-3xl"
                    >
                        <h3 className="text-2xl font-serif uppercase tracking-widest mb-8 text-center">Complete Your Reservation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Check In</label>
                                    <input type="date" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Check Out</label>
                                    <input type="date" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <button className="w-full py-5 bg-white text-black rounded-full uppercase tracking-widest font-bold hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            <Footer />
        </main>
    );
}
