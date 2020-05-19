import React from 'react';
import {Cards, Country, Chart} from './components';
import styles from './App.module.css';

class App extends React.Component {

    render () {
        return (
            <div className="styles.container">
                <Cards />
                <Country />
                <Chart />
           </div>
        )
    }
}

export default App;
