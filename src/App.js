import React from 'react';
import {Provider} from 'react-redux';
// State Only
import ToDo from './components/todo/todo.js';

import createStore from './store/index.js'

const store = createStore();

function App(){
  return(
    <Provider store={store}>
      <ToDo/>
    </Provider>
  );
}

export default App;
