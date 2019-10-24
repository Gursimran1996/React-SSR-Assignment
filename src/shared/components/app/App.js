import React from 'react';
import './app.css';

// import all the components here
import Header from '../header/Header';
import ContentWrapper from '../contentWrapper/ContentWrapper';

const App = () => {
    return (
        <div>
            <Header />
            <ContentWrapper />
        </div>
    );
};

export default App;
