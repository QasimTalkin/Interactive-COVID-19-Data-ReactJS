import React from 'react';
import {Cards, Country, Chart} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data : {},
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        //console.log(fetchedData);
        this.setState({data:fetchedData})
    }

    render () {
        const {data} = this.state; // fetched data to be passed as props 
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Country />
                <Chart />
           </div>
        )
    }
}

export default App;
