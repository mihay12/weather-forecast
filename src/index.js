import React from 'react';
// import React, { Children } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();


// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Misko',
//   lastName: 'Maliy'
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// function getGreeting(user) {
//   return user ? <h1>Hello, {formatName(user)}</h1> : <h1>Hello, Stranger</h1>;
// }

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>Зараз {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Привіт, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Василина" />
      <Welcome name="Михайло" />
      <Welcome name="Вадим" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);