import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';

const BookInfo = () => {
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/books" className="book__link">
                            <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <figure className="book__selected--figure">
                        <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" className="book__selected--img" />
                    </figure>
                    <div className="book__selected--description">
                        <h2 className="book__selected--title">Crack the Coding Interview</h2>
                        <Rating rating ="4.5"/>
                        <div className="book__selected--price">
                        <Price originalPrice={50} salePrice={null}/>
                        </div>
                        <div className="book__summary">
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BookInfo
