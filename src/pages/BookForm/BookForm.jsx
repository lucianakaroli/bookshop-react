import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import "./BookForm.css";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate(); // Hook de navegação

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (title === "" || author === "" || gender === "" || date === "") {
            return;
        }

        const newBook = {
            title,
            author,
            gender,
            date,
        };

        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(newBook);

        localStorage.setItem("books", JSON.stringify(books));

        setTitle("");
        setAuthor("");
        setGender("");
        setDate("");
        setSubmitted(false);

        navigate("/book-list");
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Adicionar Livro</h1>
                <InputField
                    id="title"
                    label="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={submitted && title === ""}
                    errorMessage="O campo título é obrigatório"
                />
                <InputField
                    id="author"
                    label="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    error={submitted && author === ""} 
                    errorMessage="O campo autor é obrigatório"
                />
                <InputField
                    id="gender"
                    label="Gênero"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    error={submitted && gender === ""}
                    errorMessage="O campo gênero é obrigatório"
                />
              <InputField
                    id="date"
                    type="date"
                    label="Data"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    error={submitted && date === ""}
                    errorMessage="O campo data é obrigatório"
                />
                <button type="submit" className="form__button">
                    Adicionar
                </button>
            </form>
        </div>
    );
};

export default BookForm;
