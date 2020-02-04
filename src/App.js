import React from 'react';
import TodoApp from './component/business/TodoApp/TodoApp.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer/reducers.js';
import './App.css';

function App() {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <TodoApp></TodoApp>
    </Provider> 
  );
}

export default App;
