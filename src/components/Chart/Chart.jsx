import React from 'react';
import {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line } from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart = () => {
    const [dailyData, setDailyData]=useState([]);
//load daily data
    useEffect(()=>{
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

//lineChart Global    
const lineChart = (
    dailyData.length 
   ?( <Line
        data = {
                {labels:dailyData.map(({date})=>date), 
                datasets:[{
                    data:dailyData.map(({confirmed})=> confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    backgroundColor:'rgba(0, 0, 255, 0.2)',
                    fill:true
                }, {
                    data:dailyData.map(({deaths})=> deaths),
                    label:'Deaths',
                    borderColor:'red', 
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }],
                }
            }


    /> ): null
)




    return (
       <div className={styles.container}>
            {lineChart}
       </div>
    )
} 

export default Chart;