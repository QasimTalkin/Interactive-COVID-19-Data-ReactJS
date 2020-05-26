# COVID-Global-Visulaizer
An interactive COVID-19 visualizer (coronavirus) of  countries around the world based on the most recent cases.

React JS (Hooks-Material-UI-Charts-js)
#### [Live link](ttp://qasimtalkin.github.io/COVID19-Global-Visulaizer-React-JS)

**API used** : [Covid19 Mathdro Api](https://covid19.mathdro.id/api)

**Setup:** `run npm i && npm start` 

**Dependencies** `npm install --save axios react-chartjs-2 react-countup classnames`

**PROJECT STRUCTURE** 
## Components
* CARDS (Covid numbers as Cards `npm install --save @material-ui/core`)
    - Cards.jsx
    - Cards.module.css
* CHARTS 
    - Charts.jsx
    - Charts.module.cs
* COUNTRY
    - Country.jsx
    - Country.module.cs
## API 
* index.js
    - axios (fetching covid API) 
    ```js
    import axios from 'axios';

    const url = 'https//covid19.mathdro.id/api';
    ```
    - Main data to user from API
    - CONFIRMED 
    - RECOVERED
    - DEATHS
    - LASTUPDATE



