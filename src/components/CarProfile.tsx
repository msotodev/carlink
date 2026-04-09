import type { Vehicle } from "../types/vehicle.type"

export interface CarProfileProps {
    vehicle: Vehicle;
}

export function CarProfile(
    { vehicle }: CarProfileProps
) {
    return (
        <>
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[700px]">
                <img
                    src={vehicle.photos[0]}
                    alt={vehicle.title}
                    className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] mx-auto h-full w-full object-cover transition duration-700 hover:scale-105 text"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
                    <span className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.28em] text-mist">
                        CarLink
                    </span>
                    <span className="rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                        {vehicle.condition}
                    </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-brass">
                            {vehicle.category}
                        </p>
                        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                            {vehicle.title}
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                            {vehicle.tagline}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}