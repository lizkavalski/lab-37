import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import SettingsContext from './context/settings.js';


class Main extends React.Component {
    render() {
      return (
        <SettingsContext>
          <App />
        </SettingsContext>
      );
    }
  }


const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
