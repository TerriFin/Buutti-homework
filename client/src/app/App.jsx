import React from 'react';
import BookContainer from '../books/BookContainer';
import AppStyle from './AppStyles';

// I was debating keeping this file in my head, but since it is the "standard" structure, i decided to keep it.
// So if we need a router and different paths in the future, this would be the place.

function App() {
    return (
        <AppStyle className="App">
            <BookContainer />
        </AppStyle>
    );
}

export default App;
