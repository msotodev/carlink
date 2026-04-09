import './App.css'
import { CarDetails } from './components/CarDetails';
import { CarProfile } from './components/CarProfile';
import Gallery from './components/Gallery';
import { TechnicalSpecifications } from './components/TechnicalSpecifications'
import useVehicle from './services/vehicle.service';

function App() {
   const { vehicle, vehicleMetrics, vehicleSpecs } = useVehicle();

  return (
    <>
      <div className="min-h-screen bg-ink text-white">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-ember/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-brass/10 blur-3xl" />
        </div>

        <main className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <section className="animate-rise overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-glow backdrop-blur">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <CarProfile vehicle={vehicle} />

              <CarDetails vehicle={vehicle} vehicleMetrics={vehicleMetrics} />
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Gallery vehicle={vehicle} />
            <TechnicalSpecifications specs={vehicleSpecs} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
