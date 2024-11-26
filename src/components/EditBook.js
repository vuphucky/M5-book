import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/apiConfig";

function EditBook() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/books/${id}`).then((res) => {
            setTitle(res.data.title);
            setQuantity(res.data.quantity);
        });
    }, [id]);

    const handleSave = () => {
        axios.put(`/books/${id}`, { title, quantity: Number(quantity) })
            .then(() => {
                alert("Book updated successfully!");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error updating book:", error);
                alert("Failed to update book.");
            });
    };

    return (
        <div className="container mt-4">
            <h1>Edit</h1>
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
            <button className="btn btn-primary" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default EditBook;