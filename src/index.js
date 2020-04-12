import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from './testData';
// console.log(data);

import App from './components/App';

ReactDOM.render(
    <App initialData={window.initialData} />,
    document.getElementById('root')
);


setTimeout(() =>{
    ReactDOM.render(
        <h2>Clear!</h2>,
        document.getElementById('root')
    );
}, 4000);



















/***** EX 1 */

// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//     // React.createElement('h2',null, 'Hello React'),
//     // <h2 style={{color: color}}>Hello React with JSX!! -- {Math.random()}</h2>,
//     <h2 style={{color}} className="text-center">Hello React with JSX!! -- {Math.random()}</h2>,
//     document.getElementById('root')
// );