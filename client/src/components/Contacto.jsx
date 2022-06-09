import {BigBox, Container, Form, PinkBox} from './Contacto.style';
import useFormName from '../utils/useFormName'; //FIXME: hacer otro?

export default function Contacto() {
  const register = (e) => { //FIXME: hacer funcionar
    e.preventDefault();
    console.log({ values });
  }

  const [values, handleChange, handleSubmit] = useFormName(register);

  return (
    <BigBox>
      <img src="../../imgs/Screenshot from 2022-06-07 19-29-51.png" alt="agent_pic" />
      <Container>
        <h3>Datos de Contacto</h3>
        <Form onSubmit={handleSubmit}> {/* FIXME aqui no va a ir boton creo que lo debo pasar per props a otro componente*/}
          <input name={values.email} type='email' placeholder='Correo Electronico' onChange={handleChange} />
          <input name={values.phone} type='number' placeholder='Telefono' onChange={handleChange} />
          <input type='submit' placeholder='Iniciar' /> {/* FIXME aqui no va a ir boton creo que lo debo pasar per props a otro componente*/}
        </Form>
        <PinkBox isTrue={false} />
      </Container>
    </BigBox>
  );
}