import {BigBox, Container, Form, PinkBox} from './Contacto.style';
import { useState } from 'react';
import { func } from 'prop-types';
// import useFormName from '../utils/useFormName'; //FIXME: hacer otro?

export default function Contacto() { 
  // const register = (e) => { //FIXME: hacer funcionar
  //   e.preventDefault();
  // }

  // const [values, handleChange, handleSubmit] = useFormName(register);
  const [contact, setContact] = useState({
    email: '',
    number: '',
  })

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <BigBox>
      <img src="../../imgs/Screenshot from 2022-06-07 19-29-51.png" alt="agent_pic" />
      <Container>
        <h3>Datos de Contacto</h3>
        <Form onSubmit='#'> {/* FIXME aqui no va a ir boton creo que lo debo pasar poahsr props a otro componente*/}
          <input
            name='number'
            type='email'
            placeholder='Correo Electronico'
            onChange={handleChange}
            value={contact.email}
          />
          <input 
            name='number'
            type='number'
            placeholder='Telefono'
            onChange={handleChange}
            value={contact.number}
          />
          <input type='submit' value='Continuar' /> {/* FIXME aqui no va a ir boton creo que lo debo pasar per props a otro componente*/}
        </Form>
        <PinkBox isTrue={false} />
      </Container>
    </BigBox>
  );
}