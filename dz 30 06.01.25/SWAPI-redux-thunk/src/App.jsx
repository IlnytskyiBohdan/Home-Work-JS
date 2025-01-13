import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Form />
        <Card />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
