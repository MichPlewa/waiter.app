import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Table from './components/pages/Table';

const App = () => {
  return (
    <Container>
      <div>Hallo World</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
      </Routes>
    </Container>
  );
};

export default App;
