import TablePage from '../TablePage/TablePage';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectTableById } from '../../../redux/tablesRedux';

const TableEdit = () => {
  const { id } = useParams();
  let table = useSelector((state) => selectTableById(state, id));
  if (table) {
    return (
      <TablePage
        bill={table.bill}
        people={table.peopleAmount}
        maxPeople={table.maxPeopleAmount}
        status={table.status}
        id={table.id}
      />
    );
  }
};

export default TableEdit;
