interface City {
    id: number;
    name: string;
    country: string;
    coord: {
        lon: number;
        lat: number;
    }
};

export interface ForecastItem {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level?: number;
        grnd_level?: number;
        humidity: number;
        temp_kf?: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg?: number;
        gust?: number;
    };
    visibility?: number;
    pop?: number;
    sys?: {
        pod?: 'n' | 'd';
    }
}


export interface Weather {
    city: City;
    list: ForecastItem[];
}