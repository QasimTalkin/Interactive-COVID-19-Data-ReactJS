import React from 'react'
import {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './Country.module.css'
import {fetchCountries} from '../../api'

const Country = ({handelCountryChange}) => {
   const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect( () => {
       const fetchCountriesAPI = async () => {
           setFetchedCountries (await fetchCountries());
       }
       fetchCountriesAPI();
    }, [setFetchedCountries]);

    return (
       <div>
       <FormControl className={styles.container}>
        <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
            <option value = ""> Global </option>
            {fetchedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
        </NativeSelect>
       </FormControl>
       
       </div> 
       
    )




}



export default Country; 