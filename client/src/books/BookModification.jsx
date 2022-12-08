import React from 'react';
import PropTypes from 'prop-types';
import {
    BookFlexContentLeft,
    BookModificationContent,
    InputTitle,
    TextareaStyled,
} from './BookStyles';

function BookModification({
    selectedBook,
    setSelectedBook,
    createBook,
    updateBook,
    deleteBook,
}) {
    return (
        <BookFlexContentLeft>
            <h2>Selected Book</h2>
            <BookModificationContent>
                <InputTitle>Title:</InputTitle>
                <TextareaStyled
                    type="text"
                    aria-label="Book title input"
                    value={selectedBook.title}
                    onChange={(event) => {
                        event.preventDefault();
                        setSelectedBook({
                            ...selectedBook,
                            title: event.target.value,
                        });
                    }}
                />
                <InputTitle>Author:</InputTitle>
                <TextareaStyled
                    type="text"
                    aria-label="Book author input"
                    value={selectedBook.author}
                    onChange={(event) => {
                        event.preventDefault();
                        setSelectedBook({
                            ...selectedBook,
                            author: event.target.value,
                        });
                    }}
                />
                <InputTitle>Description:</InputTitle>
                <TextareaStyled
                    tall
                    type="text"
                    aria-label="Book description input"
                    value={selectedBook.description}
                    onChange={(event) => {
                        event.preventDefault();
                        setSelectedBook({
                            ...selectedBook,
                            description: event.target.value,
                        });
                    }}
                />
                <button
                    aria-label="Book create button"
                    type="submit"
                    disabled={selectedBook.title.length === 0}
                    onClick={() => createBook()}
                >
                    Save New
                </button>
                <button
                    aria-label="Book update button"
                    type="submit"
                    disabled={
                        selectedBook.title.length === 0 ||
                        selectedBook.id === -1
                    }
                    onClick={() => updateBook()}
                >
                    Save
                </button>
                <button
                    aria-label="Book delete button"
                    type="submit"
                    disabled={selectedBook.id === -1}
                    onClick={() => deleteBook()}
                >
                    Delete
                </button>
            </BookModificationContent>
        </BookFlexContentLeft>
    );
}

BookModification.propTypes = {
    selectedBook: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    setSelectedBook: PropTypes.func.isRequired,
    createBook: PropTypes.func.isRequired,
    updateBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
};

export default BookModification;
