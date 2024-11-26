import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/apiConfig";

function Library() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("/books")
            .then((res) => setBooks(res.data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);


    const handleDelete = (id) => {
        axios.delete(`/books/${id}`).then(() => {
            alert("Book deleted successfully!");
            setBooks(books.filter((book) => book.id !== id));
        });
    };

    return (
        <div className="container mt-4">
            <h1>Library</h1>
            <button className="btn btn-primary mb-3" onClick={() => navigate("/add")}>
                Add a new Book
            </button>
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button
                                className="btn btn-warning me-2"
                                onClick={() => navigate(`/edit/${book.id}`)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(book.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Library;