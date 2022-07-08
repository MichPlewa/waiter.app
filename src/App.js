import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import TableEdit from './components/features/TableEdit/TableEdit';
import Footer from './components/view/Footer/Footer';
import TopBar from './components/view/TopBar/TopBar';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TableEdit />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
