export interface TechnicalSpecificationsProps {
    specs: [string, string][];
}

export function TechnicalSpecifications(
    { specs }: TechnicalSpecificationsProps
) {
    return (
        <article className="animate-rise rounded-4xl border border-white/10 bg-slate-900/80 p-5 [animation-delay:240ms] sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-mist">Ficha técnica</p>
            <h3 className="mt-2 text-2xl font-semibold">Detalles clave para decisión rápida</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Una presentación pensada para compartir por enlace o QR, con la información más importante
                visible de inmediato y una experiencia limpia tanto en móvil como en escritorio.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {specs.map(([label, value]) => (
                    <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/3 px-4 py-4 transition duration-300 hover:border-cyan-300/40 hover:bg-white/6"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                        <p className="mt-2 text-base font-medium text-white">{value}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-linear-to-r from-ember/15 via-transparent to-cyan-300/10 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-brass">Presentación premium</p>
                        <h4 className="mt-2 text-xl font-semibold">Ideal para lotes, agencias o venta directa</h4>
                    </div>
                    <div className="animate-pulseSoft rounded-full border border-ember/40 bg-ember/15 px-5 py-3 text-sm font-medium text-white">
                        Link listo para compartir
                    </div>
                </div>
            </div>
        </article>
    );
}