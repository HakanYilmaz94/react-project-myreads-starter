import React from 'react'
import ShelfChanger from "../components/ShelfChanger";

class Books extends React.Component {
    render() {
        const { book } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover">
                            {book.imageLinks !== undefined &&
                            <img className="img-style" src={book.imageLinks.thumbnail} alt={book.title}/>
                            }
                        </div>
                        <ShelfChanger book={book} onChangeShelf={this.props.onChangeShelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {(book.authors != null) &&
                    <ul className="book-authors">{book.authors.map((author, index) => (
                        <li key={index}> {author}
                        </li>
                    ))}</ul>
                    }
                </div>
            </li>
        )
    }
}

export default Books;
