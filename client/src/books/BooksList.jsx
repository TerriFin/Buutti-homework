import React from 'react';
import PropTypes from 'prop-types';
import { BookBtn, BookFlexContentRight } from './BookStyles';

// I could have made this with mui and make it look better, but i instead decided to follow the illustration to the bitter end.

function Books({ books, setSelectedBook }) {
    return (
        <BookFlexContentRight>
            <h2>Books</h2>
            {books.map((book) => (
                <BookBtn
                    key={book.id}
                    type="button"
                    onClick={() => setSelectedBook(book)}
                >
                    {book.title +
                        (book.author.length > 0 ? ` by ${book.author}` : '')}
                </BookBtn>
            ))}
        </BookFlexContentRight>
    );
}

Books.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    setSelectedBook: PropTypes.func.isRequired,
};

export default Books;
