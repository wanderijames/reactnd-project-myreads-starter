import React from 'react';
import PropTypes from 'prop-types'
import Book from "./Book";


const BookShelf = (props) => {

    const {books, bookshelfTitle, updateBookInShelf} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} bookCategory={book.shelf} updateBookInShelf={updateBookInShelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );

};

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    bookshelfTitle: PropTypes.string.isRequired,
    updateBookInShelf: PropTypes.func.isRequired,
};

export default BookShelf;