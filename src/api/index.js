import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// data for our cards 
export const fetchData = async () => {

    try {
        const {data :{confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error)
    }
}
// Data for charts
export const fetchDailyData  = async () => {

    try {

        const {data} = await axios(`${url}/daily`);

        const modData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modData;
    } catch (error) {
        console.log(error)
    }
}
// Data for country list
export const fetchCountries = async () => {

    try {

        const {data: {countries}} = await axios(`${url}/countries`); 
        return countries.map((country)=> country.name); 
    } catch (error) {
        console.log(error)
    }
}