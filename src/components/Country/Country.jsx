import React from 'react'
import {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './Country.module.css'
import {fetchCountries} from '../../api'

const Country = () => {
   const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {
       const fetchCountriesAPI = async () => {
           setFetchedCountries (await fetchCountries());
       }
       fetchCountriesAPI();
    }, [setFetchedCountries]);

    console.log("Fetched Countries : " + fetchedCountries);

    return (
       <div>
       <FormControl className={styles.container}>
        <NativeSelect>
            <option value = "global"> Global </option>
            {fetchedCountries.map((country, i)=><option value={i}>{country}</option>)}
        </NativeSelect>
       </FormControl>
       
       </div> 
       
    )




}



export default Country; 