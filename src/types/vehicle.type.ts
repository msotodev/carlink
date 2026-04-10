export interface Vehicle {
    category: string;
    title: string;
    subtitle: string;
    tagline: string;
    price: string;
    color: string;
    monthly: string;
    location: string;
    condition: string;
    year: string;
    engine: string;
    startingSystem: string;
    mileage: string;
    transmission: string;
    torcue: string;
    fuel: string;
    fuelCapacity: string;
    autonomy: string;
    performance: string;
    power: string;
    brakes: string;
    suspension: string;
    loadCapacity: string;
    traction: string;
    photos: string[];
    highlights: string[];
    cta: {
        whatsapp: string;
        testDrive: string;
    };
}

export interface VehicleMetrics {
    label: string;
    value: string;
}

export interface VehicleEspects {
    label: string;
    value: string;
}