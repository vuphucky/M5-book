import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/apiConfig";

function AddBook() {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate();

    const handleAdd = () => {
        axios.post("/books", { title, quantity: Number(quantity) }).then(() => {
            alert("Book added successfully!");
            navigate("/");
        });
    };

    return (
        <div className="container mt-4">
            <h1>Add a new Book</h1>
            <div className="mb-3">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Quantity</label>
                <input
                    type="number"
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleAdd}>
                Add
            </button>
        </div>
    );
}

export default AddBook;