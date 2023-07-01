import React, { useState } from "react";
import './styles/Form.css'

const initialState = {
  name: "",
  email: ""
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [validation, setValidation] = useState(undefined);

  const { name, email } = formValues;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (name.trim().length < 5 || !/\S+@\S+\.\S+/.test(email) || !email.includes(".")) {
      setValidation(false);
    } else {
      setFormValues(initialState);
      setValidation(true);
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} id="Formulario">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Nombre Completo"
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {validation && (
        <div>
          Gracias {name}, te contactaremos cuanto antes vía mail
        </div>
      )}
      {validation === false && (
        <div>Por favor verifique su información nuevamente</div>
      )}
    </div>
  );
};

export default Form;