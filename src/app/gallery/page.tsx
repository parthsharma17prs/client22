import React from "react";

export default function GalleryPage() {
    const images = [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1541334466-9abaf50b064c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1456574808785-c6bfa6b4618a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    ];

    return (
        <main className="min-h-screen bg-[#070707] text-white pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange-400 text-xs tracking-[0.4em] uppercase font-bold block mb-4">Visuals</span>
                    <h1 className="text-5xl font-serif tracking-widest uppercase mb-4">Gallery</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50">
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale opacity-70 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                style={{ backgroundImage: `url(${src})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <span className="uppercase tracking-[0.2em] text-xs font-bold text-orange-200">Archive {String(i + 1).padStart(2, '0')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
