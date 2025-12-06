interface City {
    id: number;
    name: string;

};

export interface ForecastItem {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
    };
    clouds: {
        all: number;
    };
    pop?: number;

}

export interface Weather {
    city: City;
    list: ForecastItem[];
}