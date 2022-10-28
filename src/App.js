import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './components/BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBook from './components/SearchBook'
import './App.css'


class App extends Component {
  state = {
    books: [],
    showSearchPage: false,
    resultBooks: []
  }
    componentDidMount() {
    BooksAPI.getAll().then((books) => {
     this.setState({ books })
    })
  }

  changeShelf(book, shelf){
    const index = this.state.books.findIndex((key) => {
      return key.id === book.id;
    });
    let tempList = this.state.books;

    if (index === -1) {
      book.shelf = shelf;
      tempList.push(book);
    } else {
      tempList[index].shelf = shelf;
    }

    BooksAPI.update(book, shelf).then(
      this.setState({ books: tempList })
    );
}

  render() {
    return (
      <div className='app'>
      <Route exact path="/" render={() => (
        <ListBooks
          onChangeShelf={this.changeShelf.bind(this)}
          books={this.state.books}
          shelf={['currentlyReading', 'read', 'wantToRead']}/>

        )}/>
      <Route path="/search" render={() => (
        <SearchBook
            onChangeShelf={this.changeShelf.bind(this)}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default App;
