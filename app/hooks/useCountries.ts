import countires from "world-countries";
import { create } from 'zustand';

const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}));

const useCountries = () => {
    const getAll = () => formattedCountries;
}