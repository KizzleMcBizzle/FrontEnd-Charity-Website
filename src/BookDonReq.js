import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookDonReq = ({ books }) => {

    const [currBooks, setCurrBooks] = useState(books);

    useEffect(() => {
        setCurrBooks(books);
    }, [books]);

    return (
        <div className="book-req-list">
            {currBooks.map( book => (
                <div className="bg-gray-100 p-6 my-5 border-b border-gray-200 text-left shadow-md hover:shadow-lg rounded-lg transition-all duration-200 ease-in-out" key = {book.id}>
                    <Link to={`/donor/books/${book.id}`} className="no-underline">
                        <h2 className="mt-2 text-center text-2xl leading-9 tracking-tight text-gray-800 font-semibold hover:text-custom-green">{ book.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default BookDonReq;