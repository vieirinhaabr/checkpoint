import * as yup from "yup";

const messageValidation = yup.object({
  message: yup.string().required("Campo necessário").test('len', 'Deve ter ao menos 1 caracter', val => val.length > 1)
});

export default messageValidation;