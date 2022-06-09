
import { PinkBox, Form, Container, BigBox } from './Nombre.style';
import useFormName from '../utils/useFormName';
export default function Nombre() {
  const register = (e) => { //FIXME: hacer funcionar
    e.preventDefault();
    console.log({ values });
  }

  const [values, handleChange, handleSubmit] = useFormName(register);


  return (
    <BigBox>
      <img src="../../imgs/Screenshot from 2022-06-07 19-29-51.png" alt="agent_pic" />
      <Container>
        <h3>Cual es tu nombre?</h3>

        <Form onSubmit={handleSubmit}> {/* FIXME aqui no va a ir boton creo que lo debo pasar por props a otro componente*/}
          <input name={values.name} type="text" placeholder='Nombre' onChange={handleChange} />
          <input name={values.second} type="text" placeholder='Segundo Nombre' onChange={handleChange} />
          <input name={values.lastName} type="text" placeholder='Apellido Paterno' onChange={handleChange} />
          <input name={values.lastName2} type="text" placeholder='Apellido Materno' onChange={handleChange} />
          <input type="submit" value="Iniciar" /> {/* FIXME aqui no va a ir boton creo que lo debo pasar por props a otro componente*/}
        </Form>
        <PinkBox isTrue={false} />
      </Container>
    </BigBox>
  )
}