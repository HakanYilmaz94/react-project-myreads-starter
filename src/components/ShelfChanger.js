import React from 'react'

class ShelfChanger extends React.Component {
    render() {
        const {book} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.onChangeShelf(book, e.target.value)}
                        value={book.shelf}>
                    <option value="move" disabled>Move..</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger;
