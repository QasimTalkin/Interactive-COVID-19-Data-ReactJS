import React from 'react'
import {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
const Chart = () => {
    const [dailyData, setDailyData]=useState({});

    useEffect(()=>{
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
    
    return (
        <h1> Charts </h1>
    )
} 

export default Chart;