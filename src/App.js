import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './components/BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBook from './components/SearchBook'
import './App.css'


class App extends Component {
    state = {
        books: []
    }

    bookshelves = ['currentlyReading', 'read', 'wantToRead'];

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    changeShelf = (book, shelf) => {
        book.shelf = shelf;
        this.setState((state) => ({
            books: state.books.filter((tempBook) => tempBook.id !== book.id).concat([book])
        }))
        BooksAPI.update(book, shelf);
    }

    render() {
        const {books} = this.state;
        return (
            <div className='app'>
                <Route exact path="/" render={() => (
                    <ListBooks
                        onChangeShelf={this.changeShelf.bind(this)}
                        books={books}
                        shelf={this.bookshelves}/>
                )}/>
                <Route path="/search" render={() => (
                    <SearchBook
                        onChangeShelf={this.changeShelf.bind(this)}
                        books={books}
                    />
                )}/>
            </div>
        )
    }
}

export default App;
