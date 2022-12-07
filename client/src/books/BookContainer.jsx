import React from 'react';
import { GetBooksApiCall, BookApiCall } from '../api';
import BookModification from './BookModification';
import Books from './BooksList';
import './Book.css';

function BookContainer() {
    const [fetchedBooks, setFetchedBooks] = React.useState([]);
    const [selectedBook, setSelectedBook] = React.useState({
        id: -1,
        title: '',
        author: '',
        description: '',
    });

    const AddBook = async () => {
        const newBook = await BookApiCall('POST', selectedBook);
        setSelectedBook(newBook);
        GetBooksApiCall().then((data) => setFetchedBooks(data));
    };

    const updateBook = async () => {
        await BookApiCall('PUT', selectedBook);
        GetBooksApiCall().then((data) => setFetchedBooks(data));
    };

    const RemoveBook = async () => {
        await BookApiCall('DELETE', selectedBook);
        setSelectedBook({
            id: -1,
            title: '',
            author: '',
            description: '',
        });
        GetBooksApiCall().then((data) => setFetchedBooks(data));
    };

    React.useEffect(() => {
        GetBooksApiCall().then((data) => setFetchedBooks(data));
    }, []);

    return (
        <div className="BookFlexContainer">
            <BookModification
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
                createBook={AddBook}
                updateBook={updateBook}
                deleteBook={RemoveBook}
            />
            <Books books={fetchedBooks} setSelectedBook={setSelectedBook} />
        </div>
    );
}

export default BookContainer;
