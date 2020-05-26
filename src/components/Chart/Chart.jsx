import React from 'react';
import {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.css';
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData]=useState([]);
//load daily data
    useEffect(()=>{
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    //lineChart Global    
    const lineChart = (
        //if there is data available load line chart or return null (if)?{this}{that}
        dailyData.length 
    ?( <Line
            data = {
                    {labels:dailyData.map(({date})=>date), 
                        datasets:[
                            {
                                data:dailyData.map(({confirmed})=> confirmed),
                                label:'Total Infected',
                                borderColor:'#3333ff',
                                backgroundColor:'rgba(0, 0, 255, 0.2)',
                                fill:true
                            }, 
                            {
                                data:dailyData.map(({deaths})=> deaths),
                                label:'Deaths',
                                borderColor:'red', 
                                backgroundColor:'rgba(255,0,0,0.5)',
                                fill:true,
                            }
                        ],
                    }
                }


        /> ): null
    ) // line chart

    const doughnutChart = (
        confirmed 
        ?(
        <Doughnut 
            data= {{
                labels:['Infected', 'Recovered', 'Death'],
                datasets: [
                    {
                        backgroundColor: ['royalblue','rgb(58, 175, 58)', 'rgba(206, 46, 46, 0.925)'],
                        data: [confirmed.value, recovered.value, deaths.value],
                    }
                ], 
                
            }}

            options = {{
                
                          title:{display:true, text:`Current State in ${country}`},
                

            }}
        /> 
        ) : null

    );  
            console.log(country);
     return (
       <div className={styles.container}>
          
            {country ? doughnutChart:lineChart}
       </div>
    )
} 

export default Chart;