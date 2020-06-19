import React from 'react';
import {Cards, Country, Chart} from './components';
import styles from './App.module.css';
import { fetchData, fetchCountryData } from './api';
import logo from './images/logo.png'
class App extends React.Component {

    state = {
        data : {},
        country : '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(fetchedData);
        this.setState({data:fetchedData})
    }

    handelCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country});
        //const fetchedCountryData = await fetchCountryData(country);
        //this.setState({data:fetchedCountryData, country:country});
        //console.log("From app.js : " + fetchedCountryData);
    }

    render () {
        
        const {data, country} = this.state; // fetched data to be passed as props 
        return (
            <div className={styles.container}>
                <img className={styles.image} src={logo} alt='COVID-19'/>
                <Cards data={data} />
                <Country handelCountryChange={this.handelCountryChange}/>
                <Chart data={data} country={country}/>
           </div>
        )
    }
}
 
export default App;
