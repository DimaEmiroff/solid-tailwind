/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import {Router} from "@gh0st-work/solid-js-router";

render(() => (
    <Router>
        <App />
    </Router>
    ),
    document.getElementById('root')
);
