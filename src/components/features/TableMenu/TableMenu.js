import TableView from '../../view/TableView/TableView';
import styles from './TableMenu.module.scss';

const TableMenu = () => {
  return (
    <div>
      <h1 className={styles.title}>All Tables</h1>
      {
        //tu będzie funkcja map wyświetlająca stoły ściągane z serwera, póki co tylko jeden stów będzie wyświetlany.
      }
      <TableView />
    </div>
  );
};

export default TableMenu;
