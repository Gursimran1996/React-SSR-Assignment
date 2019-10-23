import React from 'react';
import { Route } from 'react-router-dom';
import App from '../components/app/App';

export default () => {
    return (
        <React.Fragment>
            <Route path="/" component={App} />
        </React.Fragment>
    )
}