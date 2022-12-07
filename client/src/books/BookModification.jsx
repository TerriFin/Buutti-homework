import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function BookModification({
    selectedBook,
    setSelectedBook,
    createBook,
    updateBook,
    deleteBook,
}) {
    return (
        <div className="BookFlexContentLeft">
            <h2>Selected Book</h2>
            <div className="BookModificationContent">
                <p>Title:</p>
                <textarea
                    className="TextareaShort"
                    type="text"
                    value={selectedBook.title}
                    onChange={(event) => {
                        event.preventDefault();
                        setSelectedBook({
                            ...selectedBook,
                            title: event.target.value,
                        });
                    }}
                />
                <p>Author:</p>
                <textarea
                    className="TextareaShort"
                    type="text"
                    value={selectedBook.author}
                    onChange={(event) => {
                        event.preventDefault();
                        setSelectedBook({
                            ...selectedBook,
                            author: event.target.value,
                        });
                    }}
                />
                <p>Description:</p>
                <textarea
                    className="TextareaTall"
                    type="text"
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
                    type="submit"
                    disabled={selectedBook.title.length === 0}
                    onClick={() => createBook()}
                >
                    Save New
                </button>
                <button
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
                    type="submit"
                    disabled={selectedBook.id === -1}
                    onClick={() => deleteBook()}
                >
                    Delete
                </button>
            </div>
        </div>
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
