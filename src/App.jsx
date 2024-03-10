import { useState } from "react";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameInput = e.target.name.value;
        const ageInput = Number(e.target.age.value);
        let msjError = "";

        if (nameInput.length < 3) {
            msjError = "El nombre tiene que ser mayor a 2 caracteres.";
        }

        if (ageInput < 1) {
            msjError += " La edad tiene que ser mayor a cero";
        }

        setError(msjError);

        setName(nameInput);
        setAge(ageInput);
    };
    return (
        <>
            <div className="center">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Tu nombre es..."
                            required
                        />
                    </div>
                    <div>
                        <input
                            id="age"
                            type="number"
                            placeholder="Tu edad es..."
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            {error ? (
                <div className="error">{error}</div>
            ) : (
                name && age !== null && <Welcome name={name} age={age} />
            )}
        </>
    );
}

export default App;
