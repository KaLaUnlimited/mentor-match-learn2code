// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import ReactDOM from 'react-dom';
import './index.css';
// import App from "./App";
// import './bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes/routes';

const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);
