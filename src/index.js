import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Form1 from './Form1';
import Table from './Table.js'
import Userdata from './Userdata.js'

ReactDOM.render(
  <React.StrictMode>
  
    {/* <Form1 /> */}
    {/* <Table/> */}
    <Userdata/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
