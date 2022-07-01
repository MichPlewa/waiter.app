import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import TablePage from './components/pages/TablePage';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TablePage />} />
      </Routes>
    </Container>
  );
};

export default App;
