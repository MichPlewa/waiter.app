import { Form } from 'react-bootstrap';
import styles from './TablePage.module.scss';

const TablePage = () => {
  return (
    <div>
      <h2 className={styles.head}>Table id</h2>
      <div className={styles.status}>
        <b className="col-1">Status:</b>
        <Form.Select
          aria-label="Default select example"
          className={styles.form}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className={styles.people}>
        <b className="col-1">People:</b>
        <Form.Group className={styles.number}>
          <Form.Control />
        </Form.Group>
        <span>&nbsp;/&nbsp;</span>
        <Form.Group className={styles.number}>
          <Form.Control />
        </Form.Group>
      </div>
      <div className={styles.bill}>
        <b className="col-1">Bill:</b>
        <div>$&nbsp;</div>
        <Form.Group className={styles.number}>
          <Form.Control />
        </Form.Group>
      </div>
    </div>
  );
};

export default TablePage;
