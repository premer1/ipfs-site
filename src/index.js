import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const countdown = () => {
  const countDate = new Date("March 28, 2024 00:00:00").getTime()
  const now = new Date().getTime();
  const gap = countDate - now;

  // time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  

  //Calculate

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  

  document.querySelector('#days').innerText = textDay;
  document.querySelector('#hours').innerText = textHour;
  document.querySelector('#minutes').innerText = textMinute;
  document.querySelector('#seconds').innerText = textSecond;
  
};



setInterval(countdown, 1000);


