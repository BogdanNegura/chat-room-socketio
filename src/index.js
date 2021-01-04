import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"

const here = document.getElementById('react-will-render-here')
const app = <App/>

render(app, here);
