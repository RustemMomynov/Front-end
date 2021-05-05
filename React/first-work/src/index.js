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

let dialogsData = [
  {id: 1, name: "Connor"},
  {id: 2, name: "Markus"},
  {id: 3, name: "Kara"},
  {id: 4, name: "Geralt"},
  {id: 5, name: "Regis"},
  {id: 6, name: "Dettlaff"}
]

let messages = [
  {id: 0, message: "Hello my name is Connor"},
  {id: 1, message: "FREEDOM!!!!!!!!!"},
  {id: 2, message: "Give me your money"},
  {id: 3, message: "Not Geralt, Geralt"},
  {id: 4, message: "HeHeHe"},
  {id: 5, message: "If you believe in gods, start praying now"}
]

let postData = [
  {id: 0, message: "Hello it's me mario", avatar: "https://assets.codepen.io/153642/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512", likesCount: 1},
  {id: 1, message: "Я чо похож на абонента?", avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/19/EP4507-NPEB02124_00-AVVIRTUALB000025/image?_version=00_09_000&platform=chihiro&w=960&h=960&bg_color=000000&opacity=100", likesCount: 134}
]

export dialogsData
export messages
export postData