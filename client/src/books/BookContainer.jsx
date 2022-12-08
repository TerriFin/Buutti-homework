import React from 'react';
import { GetBooksApiCall, BookApiCall } from '../api';
import BookModification from './BookModification';
import Books from './BooksList';
import { BookContainerError, BookFlexContainer } from './BookStyles';

// I went with a container-component design pattern for this project.
// This components only job is to manage data and contain the components which then do the work with the said data.

function BookContainer() {
    const [fetchingError, setFetchingError] = React.useState();
    const [fetchedBooks, setFetchedBooks] = React.useState([]);
    const [selectedBook, setSelectedBook] = React.useState({
        id: -1,
        title: '',
        author: '',
        description: '',
    });

    const FetchBooks = () =>
        GetBooksApiCall()
            .then((data) => {
                setFetchedBooks(data);
                setFetchingError();
            })
            .catch((error) => setFetchingError(error.toString()));

    const AddBook = async () => {
        const newBook = await BookApiCall('POST', selectedBook);
        setSelectedBook(newBook);
        FetchBooks();
    };

    const updateBook = async () => {
        await BookApiCall('PUT', selectedBook);
        FetchBooks();
    };

    const RemoveBook = async () => {
        await BookApiCall('DELETE', selectedBook);
        setSelectedBook({
            id: -1,
            title: '',
            author: '',
            description: '',
        });
        FetchBooks();
    };

    React.useEffect(() => {
        FetchBooks();
    }, []);

    return (
        <BookFlexContainer>
            <BookModification
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
                createBook={AddBook}
                updateBook={updateBook}
                deleteBook={RemoveBook}
            />
            <Books books={fetchedBooks} setSelectedBook={setSelectedBook} />
            {fetchingError && (
                <BookContainerError>
                    There was an error accessing the books {fetchingError}
                </BookContainerError>
            )}
        </BookFlexContainer>
    );
}

export default BookContainer;
