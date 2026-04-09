import type { Vehicle, VehicleMetrics } from "../types/vehicle.type";
import sideZoom from "../assets/italika-l25-z-side-zoom.jpeg";
import sideJPEG from "../assets/italika-l25-z-side.jpeg";
import leftSkew from "../assets/italika-l25-z-left-skew.jpeg";
import leftFrontSkew from "../assets/italika-l25-z-left-front-skew.jpeg";
import up from "../assets/italika-l25-z-up.jpeg";
import sideFrontPNG from "../assets/italika-l25-z-side-front.PNG";

const vehicle: Vehicle = {
    category: 'Motocicleta',
    title: 'Italika 125Z - La moto deportiva y confiable para la ciudad',
    tagline:
        'Si buscas una moto confiable, económica y con un diseño deportivo que no pasa desapercibido, esta Italika 125Z es para ti. Perfecta para la ciudad, combina rendimiento, comodidad y estilo en un solo paquete.',
    price: '$30,000 MXN',
    color: 'Negro con detalles en rojo',
    monthly: 'Precio a tratar',
    location: 'Guadalajara, Jalisco',
    condition: 'Nuevo, poco usado',
    year: '2022',
    engine: 'Monocilíndrico 4 tiempos, 124 cc, enfriado por aire',
    startingSystem: 'Eléctrico y de pedal',
    mileage: '5 km',
    transmission: 'Estándar de 5 velocidades (cadena)',
    torcue: '9.5 N-m a 7,500 RPM',
    fuel: 'Gasolina',
    fuelCapacity: '15.5 Litros',
    autonomy: 'Aprox. 527 km',
    performance: 'Aprox. 34 km/l (Rendimiento combinado)',
    power: '10.8 Hp a 8,500 RPM',
    brakes: 'Disco delantero y tambor trasero',
    suspension: 'Horquilla telescópica delantera y doble amortiguador trasero',
    loadCapacity: '150 kg',
    traction: 'Trasera (cadena)',
    photos: [
        sideFrontPNG,
        sideZoom,
        sideJPEG,
        leftSkew,
        leftFrontSkew,
        up
    ],
    highlights: [
        'Incluye puerto USB para cargar dispositivos móviles',
        'Asientos en piel con detalles contrastantes',
        'Suspensión: Horquilla telescópica delantera y doble amortiguador trasero',
        'Capacidad de Carga: 150 kg',
    ],
    cta: {
        whatsapp: 'https://wa.me/3311395289',
        testDrive: 'https://wa.link/glnxz4',
    },
};

const vehicleMetrics: VehicleMetrics[] = [
    { label: 'Modelo', value: vehicle.year },
    { label: 'Kilometraje', value: vehicle.mileage },
    { label: 'Potencia', value: vehicle.power },
    { label: 'Tracción', value: vehicle.traction },
]

const vehicleSpecs: [string, string][] = [
    ['Motor', vehicle.engine],
    ['Torque', vehicle.torcue],
    ['Color', vehicle.color],
    ['Transmisión', vehicle.transmission],
    ['Capacidad de Combustible', vehicle.fuelCapacity],
    ['Autonomía', vehicle.autonomy],
    ['Brakes', vehicle.brakes],
    ['Suspensión', vehicle.suspension],
    ['Carga', vehicle.loadCapacity],
    ['Tracción', vehicle.traction],
    ['Sistema de Arranque', vehicle.startingSystem],
    ['Rendimiento', vehicle.performance],
    ['Sistema de arranque', vehicle.startingSystem],
    ['Millaje', vehicle.mileage],
    ['Combustible', vehicle.fuel],
    ['Poder', vehicle.power],
];

export default function useVehicle() {
    return {
        vehicle,
        vehicleMetrics,
        vehicleSpecs
    };
}