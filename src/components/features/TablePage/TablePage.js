import { Button, Form } from 'react-bootstrap';
import styles from './TablePage.module.scss';
import { editTableRequest, selectTableById } from '../../../redux/tablesRedux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TablePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let table = useSelector((state) => selectTableById(state, id));
  const [status, setStatus] = useState('Free');
  const [people, setPeople] = useState(1);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(1);
  const [bill, setBill] = useState(0);
  const allStatus = ['Free', 'Busy', 'Cleaning', 'Reservet'];
  useEffect(() => {
    if (table) {
      setStatus(table.status);
      setPeople(table.peopleAmount);
      setMaxPeopleAmount(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTableRequest({ id, people, maxPeopleAmount, bill, status }));
    navigate('/');
  };

  const changePeople = (number) => {
    if (number <= maxPeopleAmount) {
      setPeople(number);
    } else if (number > maxPeopleAmount) {
      setPeople(maxPeopleAmount);
    }
  };

  const changeMaxPeople = (number) => {
    console.log(number);
    if (number <= 10) {
      setMaxPeopleAmount(number);
    } else {
      setMaxPeopleAmount(10);
    }
  };

  if (!table) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h2 className={styles.head}>Table {table.id}</h2>
        <div className={styles.status}>
          <b className="col-1">Status: </b>
          <Form.Select
            aria-label="Default select example"
            className={styles.form}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {allStatus.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className={styles.people}>
          <b className="col-1">People:</b>
          <Form.Group className={styles.number}>
            <Form.Control
              type="number"
              value={people}
              onChange={(e) => changePeople(e.target.value)}
            />
          </Form.Group>
          <span>&nbsp;/&nbsp;</span>
          <Form.Group className={styles.number}>
            <Form.Control
              type="number"
              value={maxPeopleAmount}
              onChange={(e) => changeMaxPeople(e.target.value)}
            />
          </Form.Group>
        </div>
        {status === 'Busy' ? (
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
        ) : (
          <div></div>
        )}

        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Update
        </Button>
      </div>
    );
  }
};

export default TablePage;
