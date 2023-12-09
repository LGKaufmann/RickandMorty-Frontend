const validation = (inputs) => {
  let errors = {};
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
  const regexPassword = /[0-9]/;

  if (!regexEmail.test(inputs.email)) {
    errors.email = "el email es invalido";
  }

  if (!inputs.email) {
    errors.email = "El email no puede estar vacio";
  }

  if (inputs.email.length > 35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  }

  if (inputs.password.length <= 5 || inputs.password.length >= 11) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password = "La contraseña necesita un número";
  }

  return errors;
};

export default validation;
