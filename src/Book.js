import React from 'react';
import PropTypes from 'prop-types'
import BookCategorize from "./BookCategorize";


const Book = (props) => {

    const {book, bookCategory, updateBookInShelf} = props;
    const category = book['shelf'] ? book['shelf']: bookCategory;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book['imageLinks']? book['imageLinks']['thumbnail']: ''})` }}></div>
                <BookCategorize bookCategory={category} book={book} updateBookInShelf={updateBookInShelf} />
            </div>
            <div className="book-title">{book['title']}</div>
            <div className="book-authors">
                {book['authors']? book['authors'].map((author) => (
                    <p key={author}>{author}</p>
                )): ''}
            </div>
        </div>
    );

};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookCategory: PropTypes.string.isRequired,
    updateBookInShelf: PropTypes.func.isRequired,
};

export default Book;