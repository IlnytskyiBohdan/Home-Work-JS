import { Provider } from "react-redux";
import { counter } from "./Redux/Slice/counterSlice";
import { store } from "./Redux/Store";
import Header from "./Components/Header/Header";
import CounterButton from "./Components/CounterButton/CounterButton";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <CounterButton
        actionType={counter.actions.increment}
        label="+"
      />
      <CounterButton
        actionType={counter.actions.decrement}
        label="-"
      />
    </Provider>
  );
}

export default App;
