import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",  
    firstname: "",
    lastname: "",
    age: "",
    weight: "",
    height: "",
  }
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required("Debes introducir un email"),
    username: Yup.string().required("Debes intruducir un usuario"),
    password: Yup.string().required("Introduce una contraseña"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir') 
      .required('Debes confirmar tu contraseña'),
    firstname: Yup.string().required("Introduce tu nombre"), 
    lastname: Yup.string().required("Introduce tus apellidos"),
    age: Yup.string().required("Introduce tu edad"),
    weight: Yup.string().required("Introduce tu peso"),
    height: Yup.string().required("Introduce tu altura"),
  });

}
