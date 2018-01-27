import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Test = function () {
  return (
    <div>
      <h1>Student : Good moring teacher</h1>
      <h2>Teacher : I'm fine thank you and you ?</h2>
      <h3>Student : I'm fine thank you</h3>
      <h4>Student : Sit down</h4>
    </div>

  );
}

// const Test = () => {
//   return <div>Hi !!!</div>;
// }

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
