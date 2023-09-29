import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit,fuel } = filters
    const headers = {
        'X-RapidAPI-Key':'6a71d308d1msh5a5d4054a5b79f3p18774fjsn0e1230f36928',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const milageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + milageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const calculateCarRent = (city_mpg: number, year: number) => {

};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.image.studio/getimage');
}
