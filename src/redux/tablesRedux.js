//selectors

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;

const UPDATE_TABLES = createActionName('UPDATE_TABLES');

const updateTables = (payload) => ({ payload, type: UPDATE_TABLES });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateTables(data));
      });
  };
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return action.payload;
    default:
      return statePart;
  }
};
export default tablesReducer;
