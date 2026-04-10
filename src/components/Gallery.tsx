import type { Vehicle } from "../types/vehicle.type";

export interface GalleryProps {
    vehicle: Vehicle;
    onPhotoClick: (photoUrl: string) => void;
}

export default function Gallery(
    { vehicle, onPhotoClick }: GalleryProps
) {
    return (
        <article className="animate-rise rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur [animation-delay:120ms] sm:p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-mist">Galería</p>
                    <h3 className="mt-2 text-2xl font-semibold">Fotos del vehículo</h3>
                </div>
                <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300">
                    Listo para QR
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {vehicle.photos.slice(1).map((photo, index) => (
                    <div
                        key={photo}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 cursor-pointer transition duration-300 hover:scale-[1.02]"
                        onClick={() => onPhotoClick(photo)}
                    >
                        <img
                            src={photo}
                            alt={`${vehicle.title} vista ${index + 2}`}
                            className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
                        <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">
                            Vista {index + 2}
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
}

