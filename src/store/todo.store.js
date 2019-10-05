import uuid from "uuid/v4";

//reducer
const initialState = { todoList: [], showDetails: null, details: {} };

export default (state=initialState, action)=> {
  switch (action.type) {
    case 'ADD':
      //  return state
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'DELETE':
        return state
    //   return {...state, todoList: state.todoList.filter( item => item._id !== action.payload )};
    case 'TOGGLE':
        return state
    //   return { ...state, todoList: state.todoList.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item ) };
    case 'DETAILS':
        return state
    //   let item = state.todoList.filter( item => item._id === action.payload )[0] || {}
    //   return { ...state, showDetails: !state.showDetails, details: item };
    default:
     return state;
  }
}

//action
// if the are issuses try removing the helper functions
export const addItem = (data) => {
    data._id = uuid();
    data.complete = false;
    return({type: 'ADD', payload:data});
  };

  export const deleteItem = (id) => {
    return({type:'DELETE', payload:id});
  }

  export const toggleComplete = (id) => {
    return({type: 'TOGGLE', payload:id});
  };

  export const toggleDetails = id => {
    return({type: 'DETAILS', payload:id});
  };
