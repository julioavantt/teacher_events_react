import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { EventoInline } from './components/EventoInline';
import { Handle } from './components/Handle';
import { HandleWithEvent } from './components/HandleWithEvent';
import { EventPropParent } from './components/EventPropParent';
import { Poliformismo } from './components/Poliformismo';
import { Error404 } from './components/Error404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink to="/"><Navbar.Brand>Eventos</Navbar.Brand></NavLink>
          <Nav className="me-auto">
            {/* <Nav.Link href="/handle">Link bootstrap</Nav.Link> */}
            <NavLink to="/">Evento Inline</NavLink>
            <NavLink to="/handle">Controlador de evento</NavLink>
            <NavLink to="/handleWithEvent">Controlador de eventos con interfaz Event</NavLink>
            <NavLink to="/eventPropParent">Pasar controlador como prop</NavLink>
            <NavLink to="/poliformismo">Polimorfismo (cambia forma)</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<EventoInline />} />
        <Route path='/handle' element={<Handle />} />
        <Route path='/handleWithEvent' element={<HandleWithEvent />} />
        <Route path='/eventPropParent' element={<EventPropParent />} />
        <Route path='/poliformismo' element={<Poliformismo />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

