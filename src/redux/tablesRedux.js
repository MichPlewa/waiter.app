import { API_URL } from '../config';

//selectors
export const selectAllTables = ({ tables }) => tables;
export const selectTableById = ({ tables }, id) =>
  tables.find((item) => item.id === id);
// actions
const createActionName = (actionName) => `app/tables/${actionName}`;

const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');

const updateTables = (payload) => ({ payload, type: UPDATE_TABLES });
const editTable = (payload) => {
  console.log(payload);
  return { payload, type: EDIT_TABLE };
};

export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateTables(data));
      });
  };
};

export const editTableRequest = (editedTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedTable),
    };
    fetch(API_URL + '/tables', options).then(() =>
      dispatch(editTable(editedTable))
    );
  };
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return action.payload;
    case EDIT_TABLE:
      return statePart.map((table) => {
        console.log(table, action.payload);
        return table.id === action.payload.id
          ? { ...table, ...action.payload }
          : table;
      });
    default:
      return statePart;
  }
};
export default tablesReducer;
