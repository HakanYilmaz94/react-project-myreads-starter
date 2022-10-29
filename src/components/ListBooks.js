import React from 'react'
import Bookshelf from './BookShelf'
import {Link} from 'react-router-dom'

class ListBooks extends React.Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    {this.props.shelf.map(shelf => (
                        <Bookshelf
                            key={shelf}
                            onChangeShelf={this.props.onChangeShelf}
                            books={this.props.books.filter((book) => book.shelf === shelf)} name={shelf}/>
                    ))}
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks;
