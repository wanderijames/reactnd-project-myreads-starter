import React from 'react';
import PropTypes from 'prop-types'
import {NONE, READ_OPTIONS} from "./constants";


const BookCategorize = (props) => {

    const {bookCategory, book, updateBookInShelf} = props;

    const updateCategory = (e) => {
        e.persist();
        const shelf = e.target.value;
        updateBookInShelf(book, shelf);
    };


    return (
        <div className="book-shelf-changer">
            <select
                defaultValue={bookCategory? bookCategory: NONE['key']}
                onChange={updateCategory}
            >
                <option value="move" disabled>Move to...</option>
                {READ_OPTIONS.map((opt) => (
                    <option
                        key={opt['key']}
                        value={opt['key']}>
                        {opt['text']}
                    </option>
                ))}
            </select>
        </div>
    );

};

BookCategorize.propTypes = {
    bookCategory: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    updateBookInShelf: PropTypes.func.isRequired,
};

export default BookCategorize;