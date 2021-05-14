import React from 'react';
import PropTypes from 'prop-types'
import BookShelf from "./BookShelf";
import {READ, READING, WANT_TO_READ} from "./constants";


const BookList = (props) => {

    const {books, updateBookInShelf, onAddBook} = props;


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf books={Object.values(books).filter((b) => (b.shelf === READING['key']))} bookshelfTitle={READING['text']} updateBookInShelf={updateBookInShelf} />
                    <BookShelf books={Object.values(books).filter((b) => (b.shelf === WANT_TO_READ['key']))} bookshelfTitle={WANT_TO_READ['text']} updateBookInShelf={updateBookInShelf} />
                    <BookShelf books={Object.values(books).filter((b) => (b.shelf === READ['key']))} bookshelfTitle={READ['text']} updateBookInShelf={updateBookInShelf} />
                </div>
            </div>
            <div className="open-search">
                <button onClick={onAddBook}>Add a book</button>
            </div>
        </div>
    );

};

BookList.propTypes = {
    books: PropTypes.object.isRequired,
    updateBookInShelf: PropTypes.func.isRequired,
    onAddBook: PropTypes.func.isRequired
};

export default BookList;