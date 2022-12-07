import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Books({ books, setSelectedBook }) {
    return (
        <div className="BookFlexContentRight">
            <h2>Books</h2>
            {books.map((book) => (
                <button
                    key={book.id}
                    className="BookBtn"
                    type="button"
                    onClick={() => setSelectedBook(book)}
                >
                    {book.title}{' '}
                    {book.author.length > 0 && <>by {book.author}</>}
                </button>
            ))}
        </div>
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
