import {BigBox, Container, Form, PinkBox} from './Nacimiento.style';
import useFormName from '../utils/useFormName'; //FIXME: hacer otro?

export default function Nacimiento() {
  const register = (e) => { //FIXME: eliminar este metodo?
    e.preventDefault();
    console.log({ values });
  }

  const [values, handleChange, handleSubmit] = useFormName(register);

  return (
    <BigBox>
      <img src="../../imgs/Screenshot from 2022-06-07 19-29-51.png" alt="agent_pic" />
      <Container>
        <h3>Cual es tu fecha de Nacimiento?</h3>
        <Form onSubmit={handleSubmit}> {/* FIXME aqui no va a ir boton creo que lo debo pasar per props a otro componente*/}
          <input name={values.day} type='text' placeholder='Dia' onChange={handleChange} />
          <input name={values.month} type='text' placeholder='Mes' onChange={handleChange} />
          <input name={values.year} type='text' placeholder='Año' onChange={handleChange} />
          <input type='submit' placeholder='Iniciar' /> {/* FIXME aqui no va a ir boton creo que lo debo pasar per props a otro componente*/}
        </Form>
        <PinkBox isTrue={false} />
      </Container>
    </BigBox>
  );
}