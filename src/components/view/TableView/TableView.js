import { Button } from 'react-bootstrap';
import styles from './TableView.module.scss';

const TableView = () => {
  return (
    <div>
      <div className={`row ${styles.root}`}>
        <h2 className="col-2">Table 1</h2>
        <div className={`col-8 ${styles.status}`}>
          <span className={styles.statusWeight}>Status:&nbsp;</span>Busy
        </div>
        <div className={`col-2 ${styles.button}`}>
          <Button>Show more</Button>
        </div>
      </div>
    </div>
  );
};

export default TableView;
