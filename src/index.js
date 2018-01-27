import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Test = function () {
  return <div>Hi !!!</div>;
}

// const Test = () => {
//   return <div>Hi !!!</div>;
// }

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
