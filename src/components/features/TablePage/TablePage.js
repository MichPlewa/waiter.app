import { Form } from 'react-bootstrap';
import styles from './TablePage.module.scss';
import { selectTableById } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const TablePage = () => {
  const { id } = useParams();
  let table = useSelector((state) => selectTableById(state, parseInt(id)));
  console.log(table);
  const [status, setStatus] = useState(table.status);
  const [people, setPeople] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const allStatus = ['Free', 'Busy', 'Cleaning'];
  return (
    <div>
      <h2 className={styles.head}>Table {table.id}</h2>
      <div className={styles.status}>
        <b className="col-1">Status: </b>
        <Form.Select
          aria-label="Default select example"
          className={styles.form}
          value={status}
        >
          {allStatus.map((item) => {
            <option value={item}>{item}</option>;
          })}
        </Form.Select>
      </div>
      <div className={styles.people}>
        <b className="col-1">People:</b>
        <Form.Group className={styles.number}>
          <Form.Control
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </Form.Group>
        <span>&nbsp;/&nbsp;</span>
        <Form.Group className={styles.number}>
          <Form.Control
            type="number"
            value={maxPeopleAmount}
            onChange={(e) => setMaxPeopleAmount(e.target.value)}
          />
        </Form.Group>
      </div>
      <div className={styles.bill}>
        <b className="col-1">Bill:</b>
        <div>$&nbsp;</div>
        <Form.Group className={styles.number}>
          <Form.Control
            type="number"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </Form.Group>
      </div>
    </div>
  );
};

export default TablePage;
