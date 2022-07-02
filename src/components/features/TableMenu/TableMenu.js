import { useSelector } from 'react-redux';
import { selectAllTables } from '../../../redux/tablesRedux';
import TableView from '../TableView/TableView';
import styles from './TableMenu.module.scss';

const TableMenu = () => {
  let tables = useSelector((state) => selectAllTables(state));
  return (
    <div>
      <h1 className={styles.title}>All Tables</h1>
      {tables.map((item) => (
        <TableView key={item.id} id={item.id} status={item.status} />
      ))}
    </div>
  );
};

export default TableMenu;
