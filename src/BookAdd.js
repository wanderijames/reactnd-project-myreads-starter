import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";


class BookAdd extends Component {

    state = {
        searchQuery: '',
        books: []
    };

    searchBook = (e) => {
        e.persist();
        const value = e.target.value;
        this.setState(() => ({
            searchQuery: value
        }));
        BooksAPI.search(value).then((response) => {
            console.log(response);
            var books = [];
            if (response && !response['error']) {
                books = response.map((book) => {
                    const bookInShelf = this.props.booksInShelf[book.id];
                    const shelf = bookInShelf ? bookInShelf["shelf"] : '';
                    book.shelf = shelf;
                    return book
                })
            };
            this.setState(() => ({
                books: books
            }))

        }, (error) => {})
    };


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.props.onCloseSearch}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            value={this.state.searchQuery}
                            onChange={this.searchBook}
                            placeholder="Search by title or author"
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ul className="books-grid">
                        {this.state.books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} bookCategory={book.shelf} updateBookInShelf={this.props.updateBookInShelf} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
};


BookAdd.propTypes = {
    booksInShelf: PropTypes.object.isRequired,
    updateBookInShelf: PropTypes.func.isRequired,
    onCloseSearch: PropTypes.func.isRequired
};

export default BookAdd;