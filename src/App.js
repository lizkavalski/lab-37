import React from 'react';
import {Provider} from 'react-redux';
// State Only
import ToDo from './components/todo/todo.js';
import SettingsContext from "./context/settings.js"
import createStore from './store/index.js'

const store = createStore();

function App(){
  return(
    <SettingsContext>
      <Provider store={store}>
        <ToDo/>
      </Provider>
    </SettingsContext>
  );
}

export default App;
