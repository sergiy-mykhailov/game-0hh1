
import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/containers/Main';
import store from './src/redux/store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
