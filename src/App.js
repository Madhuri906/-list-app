import logo from './logo.svg';
import './App.css';
import { Main } from './components/main/main';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
        <Main/>
    </Provider>
  );
}

export default App;
