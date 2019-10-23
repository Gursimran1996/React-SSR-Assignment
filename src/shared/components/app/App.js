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
            Watch this Space for more!
        </div>
    );
};

export default App;
