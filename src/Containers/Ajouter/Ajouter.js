import React from "react";
import { useState } from "react";

import Inputs from "../../Components/UI/Input/Input";

function Ajouter() {
  const [inputs, setInputs] = useState({
    titre: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "titre de l'article"
      },
      value: "",
      label: "Titre"
    },
    contenu: {
      elementType: "textarea",
      elementConfig: {},
      value: "",
      label: "Contenu de l'article"
    },
    auteur: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Auteur de l'article"
      },
      value: "",
      label: "Auteur"
    }
  });

  const formElementsArray = [];
  console.log(formElementsArray);

  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key]
    });
  }

  let form = (
    <form>
      {formElementsArray.map((formElement) => (
        <Inputs
          type={formElement.config.elementType}
          key={formElement.id}
          value={formElement.config.value}
          label={formElement.config.label}
        />
      ))}
    </form>
  );

  return (
    <>
      <h1>Ajouter</h1>
      {form}
    </>
  );
}

export default Ajouter;
