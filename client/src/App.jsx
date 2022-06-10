import { GlabalStyle } from './App.style';
import Contacto from './components/Contacto';
import Nacimiento from './components/Nacimiento';
import Nombre from './components/Nombre';
import Inicio from './components/Inicio';

export default function App() {
    // const [id] = useState(_uniqueId('prefix-'));

  return (
    <>
      <GlabalStyle />
        <Inicio />
        <Nombre/>
        <Nacimiento/>
        <Contacto/>
    </>
  )
}
