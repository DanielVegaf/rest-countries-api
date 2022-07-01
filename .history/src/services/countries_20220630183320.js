const API_URL = 'https://restcountries.com/v2';

export async function getAllCountries(){
    try {
        const response = await fetch(`${API_URL}/all`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

// https://restcountries.com/v2/region/americas

export async function getCountryByName(name){
    try {
        const response = await fetch(`${API_URL}/name/${name}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCountryByRegion(region){
    try {
        const response = await fetch(`${API_URL}/region/asia`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}