import { View, Text } from 'react-native';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './counter';


const store = createStore(counterReducer);

export default function App() {

  return (
    <Provider store={store}>
      <Text>Redux en React Native: Gestión de Estados</Text>
      <Counter />
    </Provider>
  );
}

