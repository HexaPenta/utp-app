export default function Validations(data) {
  const regexEmail = RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  );
  const errors = {};

  if (data.name?.length < 5) errors.name = "Debe tener mínimo 5 caracteres";
  if (data.name?.length === 45) errors.name = "Menor a 45 caracteres";

  if (data.surname?.length < 5)
    errors.surname = "Debe tener mínimo 5 caracteres";
  if (data.surname?.length === 45) errors.surname = "Menor a 45 caracteres";

  if (!regexEmail.test(data.email))
    errors.email = "Proporcione un email válido";
  if (data.email?.length === 45) errors.email = "Menor a 45 caracteres";

  if (data.password?.length < 7)
    errors.password = "Debe tener mínimo 7 caracteres";
  if (data.password?.length === 45) errors.password = "Menor a 45 caracteres";

  if (data.headquarter === "none") errors.headquarter = "Elija un campus";

  if (data.cycle === "none") errors.cycle = "Indique su ciclo";

  if (data.carrer?.length < 3) errors.carrer = "Mínimo 3 caracteres";
  if (data.carrer?.length === 25) errors.carrer = "Menor a 25 caracteres";

  return errors;
}

// if ("unoss".length < 5) console.log("minimo 5");
// console.log("sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds".length);
