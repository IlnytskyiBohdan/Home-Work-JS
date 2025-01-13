import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
      <Footer />
    </Provider>
  );
}

export default App;
