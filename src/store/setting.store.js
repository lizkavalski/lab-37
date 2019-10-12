const initialState = {
    showCompleted:true,
    maxVisible: 3,
  };
  
  export default (state=initialState, action) => {
    const {payload, type} = action;
  
    switch(type) {
    default:
      return state;
    }
  };