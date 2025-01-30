import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import Layout from "./components/Layout/Layout";
import NoteFound from "./components/NoteFound/NoteFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoteFound />}></Route>
          <Route path='/' element={<Layout />}>
            {Object.values(routes).map(({ id, path, element }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
