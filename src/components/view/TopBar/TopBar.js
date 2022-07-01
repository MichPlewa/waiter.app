import { Navbar, Container, Button } from 'react-bootstrap';
import styles from './TopBar.module.scss';

const TopBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className={styles.root}>
      <Container>
        <Navbar.Brand href="#home">Waiter.app</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className={styles.button}>Home</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
