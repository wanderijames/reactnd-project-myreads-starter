import React from 'react'
import {Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";
import BookAdd from "./BookAdd";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        const myBooks = Object.fromEntries(books.map((book) => ([book.id, book])));
        this.setState(() => ({
            books: myBooks
        }))
    });
  }

  updateBookInShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then((shelves) => (
          this.setState((currentState) => ({
              books: {
                  ...currentState.books,
                  [book['id']]: {
                      ...book,
                      shelf: shelf
                  }
              }

          }))
      ));

  };

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={({ history }) => (
            <BookAdd
                booksInShelf={this.state.books}
                updateBookInShelf={this.updateBookInShelf}
                onCloseSearch={() => (
                    history.push("/")
            )}
            />
        )} />
        <Route exact path='/' render={({ history }) => (
            <BookList
                books={this.state.books}
                updateBookInShelf={this.updateBookInShelf}
                onAddBook={() => (
                    history.push("/search")
                )}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
