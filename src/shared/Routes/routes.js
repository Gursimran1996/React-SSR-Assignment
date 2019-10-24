import React from 'react';
import App from '../components/app/App';
import { loadData } from '../components/contentWrapper/ContentWrapper';

export default [
    {
        loadData,
        path: '/',
        component: App,
    }
]