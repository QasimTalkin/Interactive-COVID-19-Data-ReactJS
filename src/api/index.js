import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// data for our cards 
export const fetchData = async (country) => {

    let changedUrl = url;

    //data based on country 
    if (country){
         changedUrl = `${url}/countries/${country}`;
    }

    try {
        const {data :{confirmed, recovered, deaths, lastUpdate }} = await axios.get(changedUrl);
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
            recovered:dailyData.recovered.total,
            date: dailyData.reportDate
        }));
        console.log("Daily data : " + modData);
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

// data for our cards 

export const fetchCountryData = async (country) => {

    let countryUrl = `https://api.covid19api.com/total/country/canada`;

    //data based on country 
    if (country){
         countryUrl = `https://api.covid19api.com/total/country/${country}`;
    }

    try {
        const {data} = await axios.get(countryUrl);


        const modData = data.map((countryData)=>({
            country:countryData.Country,
            confirmed:countryData.Confirmed,
            deaths:countryData.Deaths,
            recovered:countryData.Recovered,
            active:countryData.Active,
            date:countryData.Date,
        }));


        return {modData};
    } catch (error) {
        console.log(error)
    }
}

