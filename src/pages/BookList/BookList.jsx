import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const BookList = () => {
    const [books, setBooks] = useState([]);

    const handleRemove = (index) => {
        const updatedBooks = books.filter((book, i) => i !== index);
        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    };

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        setBooks(storedBooks);
    }, []);

    return (
        <div>
            <h1>Lista de Livros</h1>
            {books.length === 0 ? (
                <p>Não há livros cadastrados.</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <strong>{book.title}</strong> - {book.author} - {book.gender} - {book.date}
                            <button
                                onClick={() => handleRemove(index)}
                                style={{
                                    marginLeft: "10px",
                                    color: "red",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    cursor: "pointer"
                                }}
                            >
                                <FaTrash size={20} /> { }
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/add" className="add-book-link">
                <button className="add-book-button">Adicionar Livro</button>
            </Link>
        </div>
    );
};

export default BookList;
