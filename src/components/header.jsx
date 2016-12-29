import React from 'react';
import { Link } from 'react-router';
import { routes } from '../constants';

export default () => (
    <header id="app-header">
        Header here
        <ul>
            <li><Link to={routes.HOME}>Home</Link></li>
            <li><Link to={routes.SECOND_PAGE}>Second Page</Link></li>
        </ul>
    </header>
)