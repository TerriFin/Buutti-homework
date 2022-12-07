import React from 'react';
import BookContainer from '../books/BookContainer';
import AppStyle from './AppStyles';

function App() {
    return (
        <AppStyle className="App">
            <BookContainer />
        </AppStyle>
    );
}

export default App;
