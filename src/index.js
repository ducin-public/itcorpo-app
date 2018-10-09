import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// const communication = {
//   update(value){
//     this.value = value
//   },
//   get(){
//     return this.value
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));

// externalSource.on('change', (e) => {
//   ReactDOM.render(<App data={e.data} />, document.getElementById('root'));
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
