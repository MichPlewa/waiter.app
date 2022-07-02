import { Button } from 'react-bootstrap';
import styles from './TableView.module.scss';

const TableView = ({ id, status }) => {
  return (
    <div>
      <div className={`row ${styles.root}`}>
        <h2 className="col-2">Table {id}</h2>
        <div className={`col-8 ${styles.status}`}>
          <span className={styles.statusWeight}>Status:&nbsp;</span>
          {status}
        </div>
        <div className={`col-2 ${styles.button}`}>
          <Button href={'/table/' + id}>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default TableView;
