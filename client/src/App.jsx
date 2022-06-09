import { GlabalStyle } from './App.style';
import Contacto from './components/Contacto';
import Nacimiento from './components/Nacimiento';
import Nombre from './components/Nombre';
// import Inicio from './components/Inicio';

export default function App() {
    // const [id] = useState(_uniqueId('prefix-'));

  return (
    <>
      <GlabalStyle />
      {/* <Inicio /> */}
      <Nombre 
        // key={id}
        // name={''}
        // second={''}
        // lastName={''}
        // secondLastName={''}
        // handler={""}
      />
      <Nacimiento
        // key={id}
        // day={''}
        // month={''}
        // year={''}
      />
      <Contacto
        // key={id}
        // email={''}
        // phone={''}
      />
    </>
  )
}
