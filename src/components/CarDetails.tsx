import type { Vehicle, VehicleMetrics } from "../types/vehicle.type";

export interface CarDetailsProps {
    vehicle: Vehicle;
    vehicleMetrics: VehicleMetrics[];
}

export function CarDetails(
    { vehicle, vehicleMetrics }: CarDetailsProps
) {
    return (
        <div className="flex flex-col justify-between gap-8 bg-slate-950/75 p-5 sm:p-8">
            <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-mist">
                            Precio publicado
                        </p>
                        <h2 className="mt-2 text-4xl font-semibold text-brass sm:text-4xl">
                            {vehicle.price}
                        </h2>
                        <p className="mt-2 text-sm text-slate-300">{vehicle.monthly}</p>
                    </div>
                    <div className="animate-float rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 text-center">Ubicación</p>
                        <p className="mt-2 text-sm font-medium text-white">{vehicle.location}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {vehicleMetrics.map((item) => (
                        <article
                            key={item.label}
                            className="rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:-translate-y-1 hover:border-ember/40 hover:bg-white/6"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                {item.label}
                            </p>
                            <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
                        </article>
                    ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-mist">Lo que destaca</p>
                    <div className="mt-4 space-y-3">
                        {vehicle.highlights.map((item) => (
                            <div key={item} className="flex gap-3">
                                <span className="mt-2 h-2.5 flex-none rounded-full bg-ember" />
                                <p className="text-sm leading-6 text-slate-200"> ✔ {item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <a href={vehicle.cta.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:scale-[1.02] hover:bg-orange-500">
                    Solicitar información
                </a>
                <a href={vehicle.cta.testDrive} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:border-brass hover:bg-white/10">
                    Agendar visita
                </a>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="mx-auto grid h-28 w-28 grid-cols-5 gap-1 rounded-2xl bg-white p-2 shadow-glow">
                    {Array.from({ length: 25 }).map((_, index) => (
                        <span
                            key={index}
                            className={`rounded-sm ${[0, 1, 3, 5, 7, 10, 11, 14, 15, 17, 18, 20, 22, 24].includes(index)
                                    ? 'bg-slate-950'
                                    : 'bg-white'
                                }`}
                        />
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.28em] text-mist">Experiencia móvil</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                        Comparte esta ficha por link o QR en segundos
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        Ideal para campañas, lotes y publicaciones donde el cliente necesita abrir,
                        ver y decidir rápido desde el teléfono.
                    </p>
                </div>
            </div>
        </div>
    );
}